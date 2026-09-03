/// <reference lib="deno.ns" />
// Sends signup emails via Resend.
//
// Invoked by a Postgres trigger (see the signup_email_notifications migration)
// after a row lands in newsletter_signups or resource_holder_signups.
//
// Runs server-side only: the Resend API key is a Supabase function secret and
// never reaches the browser. Set the required secrets with:
//   supabase secrets set RESEND_API_KEY=... SIGNUP_WEBHOOK_SECRET=...

const RESEND_ENDPOINT = 'https://api.resend.com/emails'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const WEBHOOK_SECRET = Deno.env.get('SIGNUP_WEBHOOK_SECRET')
const FROM_ADDRESS = Deno.env.get('RESEND_FROM') ?? 'Regen Tribe <hello@send.regentribe.co>'
const TEAM_ADDRESS = Deno.env.get('RESEND_TEAM_EMAIL') ?? 'grow@regentribe.co'

type SignupRecord = {
  id?: string
  email?: string
  name?: string | null
  interests?: string[] | null
  created_at?: string
}

type TriggerPayload = {
  table?: string
  record?: SignupRecord
}

const SOURCE_LABELS: Record<string, string> = {
  newsletter_signups: 'Newsletter',
  resource_holder_signups: 'Resource holder / Agent Program',
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Deliberately permissive — this only decides whether we attempt a send.
// Resend does the authoritative validation.
function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

async function sendEmail(payload: Record<string, unknown>): Promise<void> {
  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`Resend returned ${response.status}: ${await response.text()}`)
  }
}

function welcomeEmail(record: SignupRecord) {
  const greeting = record.name ? `Hi ${escapeHtml(record.name)},` : 'Hi,'

  return {
    from: FROM_ADDRESS,
    to: record.email,
    subject: 'Welcome to Regen Tribe',
    reply_to: TEAM_ADDRESS,
    text:
      `${record.name ? `Hi ${record.name},` : 'Hi,'}\n\n` +
      `Thanks for joining the Regen Tribe mailing list. We are building a global ` +
      `movement of regenerative neighborhoods, and we are glad you are here.\n\n` +
      `We will be in touch with what we are learning and building.\n\n` +
      `— The Regen Tribe team\nhttps://regentribe.co`,
    html:
      `<p>${greeting}</p>` +
      `<p>Thanks for joining the Regen Tribe mailing list. We are building a global ` +
      `movement of regenerative neighborhoods, and we are glad you are here.</p>` +
      `<p>We will be in touch with what we are learning and building.</p>` +
      `<p>— The Regen Tribe team<br>` +
      `<a href="https://regentribe.co">regentribe.co</a></p>`,
  }
}

function teamNotification(record: SignupRecord, table: string) {
  const source = SOURCE_LABELS[table] ?? table
  const interests = record.interests?.length ? record.interests.join(', ') : '—'

  return {
    from: FROM_ADDRESS,
    to: TEAM_ADDRESS,
    subject: `New signup: ${record.email} (${source})`,
    reply_to: record.email,
    text:
      `New signup via ${source}\n\n` +
      `Email:     ${record.email}\n` +
      `Name:      ${record.name ?? '—'}\n` +
      `Interests: ${interests}\n` +
      `Time:      ${record.created_at ?? new Date().toISOString()}`,
    html:
      `<p><strong>New signup via ${escapeHtml(source)}</strong></p>` +
      `<ul>` +
      `<li>Email: ${escapeHtml(record.email ?? '')}</li>` +
      `<li>Name: ${escapeHtml(record.name ?? '—')}</li>` +
      `<li>Interests: ${escapeHtml(interests)}</li>` +
      `<li>Time: ${escapeHtml(record.created_at ?? new Date().toISOString())}</li>` +
      `</ul>`,
  }
}

Deno.serve(async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  if (!RESEND_API_KEY || !WEBHOOK_SECRET) {
    console.error('Missing RESEND_API_KEY or SIGNUP_WEBHOOK_SECRET')
    return new Response('Function is not configured', { status: 500 })
  }

  // The endpoint is public, so the shared secret is what keeps it from being
  // used as an open relay.
  if (req.headers.get('x-signup-webhook-secret') !== WEBHOOK_SECRET) {
    return new Response('Unauthorized', { status: 401 })
  }

  let payload: TriggerPayload
  try {
    payload = await req.json()
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  const record = payload.record
  const table = payload.table ?? 'unknown'

  if (!record?.email || !looksLikeEmail(record.email)) {
    console.error('Payload had no usable email address', { table })
    return new Response('No valid email in payload', { status: 400 })
  }

  // Settled independently: a failed welcome must not suppress the team
  // notification, and vice versa.
  const results = await Promise.allSettled([
    sendEmail(welcomeEmail(record)),
    sendEmail(teamNotification(record, table)),
  ])

  const failures = results.filter((r) => r.status === 'rejected')
  for (const failure of failures) {
    console.error('Send failed:', (failure as PromiseRejectedResult).reason)
  }

  if (failures.length === results.length) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  return new Response(
    JSON.stringify({ ok: true, partial: failures.length > 0 }),
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  )
})
