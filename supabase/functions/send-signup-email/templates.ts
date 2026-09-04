/// <reference lib="deno.ns" />
// Welcome email content, one variant per signup path.
//
// Facts here are checked against the live site (Sep 2026): the JOIN page
// archetypes and their steps, the newsletter interest options, and the
// Agent Program. The FluentCRM copy this replaces was a year old and
// predates most of the current offering.
//
// House language rules: always "Regenerative Neighborhoods" and "Regen Tribe"
// in full, never "RN" or "RT". The platform is "Tribes Platform".

export type SignupRecord = {
  email?: string
  name?: string | null
  interests?: string[] | null
  source?: string | null
  archetype?: string | null
}

const SITE = 'https://regentribe.co'
const PLATFORM = 'https://tribesplatform.app'
const SUBSTACK = 'https://regentribe.substack.com'
const INSTAGRAM = 'https://www.instagram.com/regen.tribe'

const TEXT = '#363636'
const BG = '#ededed'
const PINK = '#f16ab0'
const GREEN = '#6fc6a2'
const BLUE = '#808aeb'

function esc(v: string): string {
  return v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

/** Email clients need inline styles and tables; no external CSS survives. */
function layout(opts: { heading: string; body: string; accent: string }): string {
  return `<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:${BG};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BG};padding:32px 16px;">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:14px;padding:40px 36px;font-family:'Open Sans',Helvetica,Arial,sans-serif;color:${TEXT};">
  <tr><td>
    <div style="height:4px;width:56px;background:${opts.accent};border-radius:2px;margin-bottom:28px;"></div>
    <h1 style="margin:0 0 20px;font-family:Lora,Georgia,serif;font-weight:400;font-size:28px;line-height:1.25;color:${TEXT};">${opts.heading}</h1>
    ${opts.body}
    <div style="margin-top:36px;padding-top:24px;border-top:1px dashed #d4d4d4;font-size:13px;line-height:1.7;color:#6d6d6d;">
      <p style="margin:0 0 10px;">
        <a href="${SITE}" style="color:${TEXT};">regentribe.co</a> &nbsp;·&nbsp;
        <a href="${PLATFORM}" style="color:${TEXT};">Tribes Platform</a> &nbsp;·&nbsp;
        <a href="${SUBSTACK}" style="color:${TEXT};">Substack</a> &nbsp;·&nbsp;
        <a href="${INSTAGRAM}" style="color:${TEXT};">Instagram</a>
      </p>
      <p style="margin:0;">You are receiving this because you signed up at regentribe.co.
      Reply with &ldquo;unsubscribe&rdquo; and we will remove you.</p>
    </div>
  </td></tr>
</table>
</td></tr></table>
</body></html>`
}

function p(text: string): string {
  return `<p style="margin:0 0 16px;font-size:15px;line-height:1.65;color:${TEXT};">${text}</p>`
}

function steps(items: string[]): string {
  return `<ul style="margin:0 0 18px;padding-left:20px;font-size:15px;line-height:1.7;color:${TEXT};">` +
    items.map((i) => `<li style="margin-bottom:7px;">${i}</li>`).join('') + `</ul>`
}

function button(href: string, label: string, color: string): string {
  return `<p style="margin:26px 0 6px;"><a href="${href}" style="display:inline-block;background:${color};color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:13px 26px;border-radius:9999px;">${label}</a></p>`
}

type Variant = { subject: string; heading: string; accent: string; body: string; text: string }

function greeting(record: SignupRecord): string {
  return record.name ? `Hi ${esc(record.name)},` : 'Hi,'
}

function variantFor(record: SignupRecord, table: string): Variant {
  const arch = record.archetype ?? ''
  const source = record.source ?? ''

  if (table === 'agent_program_signups' || source === 'agent-program-form') {
    return {
      subject: 'Your journey to becoming a Regenerative Neighborhood Agent',
      heading: 'Welcome to the Agent Program',
      accent: BLUE,
      body: p('Thanks for your interest in becoming a Regenerative Neighborhood Agent.') +
        p('The Agent Program is our vocational track for people who want to do this work properly — not just understand Regenerative Neighborhoods, but help create them.') +
        p('We will be in touch with the next cohort details. In the meantime:') +
        steps([
          `Browse live projects on the <a href="${PLATFORM}" style="color:${TEXT};">Tribes Platform</a>`,
          `Read the field notes on <a href="${SUBSTACK}" style="color:${TEXT};">our Substack</a>`,
        ]) +
        button(`${SITE}/agentprogram`, 'Revisit the program', BLUE),
      text: 'Thanks for your interest in becoming a Regenerative Neighborhood Agent.\n\n' +
        'The Agent Program is our vocational track for people who want to help create Regenerative Neighborhoods, not just understand them. We will be in touch with next cohort details.\n\n' +
        `Projects: ${PLATFORM}\nField notes: ${SUBSTACK}`,
    }
  }

  if (arch === 'Vision Holder') {
    return {
      subject: 'Your Regenerative Neighborhood starts here',
      heading: 'Welcome, Vision Holder',
      accent: GREEN,
      body: p(`You have land or a project you want to develop into a Regenerative Neighborhood. That is exactly the work we exist for.`) +
        p('Here is how it usually goes:') +
        steps([
          '<strong>Share your vision</strong> — your land, your goals, your community',
          '<strong>Get a consultation</strong> — our agency team helps you build a regenerative development plan',
          '<strong>Access tools &amp; network</strong> — the Alchemy Guide, service providers, and the Tribes Platform',
          '<strong>Grow your neighborhood</strong> — from empowered, to activated, to fully regenerative',
        ]) +
        p('Someone from the agency team will reach out. If you want to move faster, just reply to this email with a few lines about your land.') +
        button(`${SITE}/agency`, 'See how the agency works', GREEN),
      text: 'You have land or a project you want to develop into a Regenerative Neighborhood. That is exactly the work we exist for.\n\n' +
        '1. Share your vision\n2. Get a consultation\n3. Access tools and network\n4. Grow your neighborhood\n\n' +
        'Someone from the agency team will reach out. Reply to this email with a few lines about your land to move faster.',
    }
  }

  if (arch === 'Community Member') {
    return {
      subject: 'Finding your Regenerative Neighborhood',
      heading: 'Welcome to the collective',
      accent: PINK,
      body: p('You are looking for a Regenerative Neighborhood to join. There are more than 60 of them mapped on the Tribes Platform, all over the world.') +
        steps([
          '<strong>Explore</strong> — browse neighborhoods and see who is building what',
          '<strong>Connect</strong> — join community calls and visit Community Labs',
          '<strong>Apply &amp; move in</strong> — each neighborhood has its own process, and we help you navigate it',
        ]) +
        button(PLATFORM, 'Browse neighborhoods', PINK),
      text: 'You are looking for a Regenerative Neighborhood to join. More than 60 are mapped on the Tribes Platform.\n\n' +
        `Explore, connect, apply: ${PLATFORM}`,
    }
  }

  if (arch === 'Service Provider') {
    return {
      subject: 'Get matched with Regenerative Neighborhood projects',
      heading: 'Welcome, Service Provider',
      accent: BLUE,
      body: p('You offer services relevant to regenerative development — and projects worldwide are looking for exactly that.') +
        steps([
          '<strong>List your services</strong> — create a profile on the Tribes Platform and get discovered',
          '<strong>Get matched</strong> — we connect you with Vision Holders who need your expertise',
          '<strong>Become a Regen Alchemist</strong> — level up through our training to become a certified consultant',
        ]) +
        button(PLATFORM, 'Create your profile', BLUE),
      text: 'You offer services relevant to regenerative development, and projects worldwide are looking for that.\n\n' +
        `List your services, get matched, become a Regen Alchemist: ${PLATFORM}`,
    }
  }

  if (arch === 'Resource Holder') {
    return {
      subject: 'Regenerative land development opportunities',
      heading: 'Welcome, Resource Holder',
      accent: GREEN,
      body: p('You are interested in putting resources behind regenerative land development. Here is how that works with us:') +
        steps([
          '<strong>Discover opportunities</strong> — our portfolio of active and upcoming projects',
          '<strong>Choose your model</strong> — equity, revenue sharing, or direct land partnerships',
          '<strong>Partner with us</strong> — work alongside our team and Vision Holders',
        ]) +
        p('We will follow up with current opportunities. Reply any time to tell us what you are looking for.'),
      text: 'You are interested in putting resources behind regenerative land development.\n\n' +
        'Discover opportunities, choose your model (equity, revenue sharing, or direct land partnership), partner with us.\n\n' +
        'We will follow up with current opportunities.',
    }
  }

  if (source === 'regenhoodzero-form') {
    return {
      subject: 'Thanks for your interest in RegenHood Zero',
      heading: 'You are on the RegenHood Zero list',
      accent: GREEN,
      body: p('RegenHood Zero is our first fully realised Regenerative Neighborhood — the prototype everything else learns from.') +
        p('We will keep you posted as it develops, including how to get involved as it opens up.') +
        button(`${SITE}/regenhoodzero`, 'Revisit the project', GREEN),
      text: 'RegenHood Zero is our first fully realised Regenerative Neighborhood — the prototype everything else learns from.\n\n' +
        `We will keep you posted as it develops: ${SITE}/regenhoodzero`,
    }
  }

  // Default: the site-wide newsletter form.
  const chosen = record.interests?.length
    ? p('You asked for updates on: <strong>' + esc(record.interests.join(', ')) + '</strong>.')
    : ''
  return {
    subject: 'Welcome to Regen Tribe',
    heading: 'Welcome to the collective',
    accent: PINK,
    body: p('Thanks for joining. Regen Tribe is a Regenerative Neighborhood Accelerator — we help people create, develop and join intentional communities built around regenerative systems.') +
      chosen +
      p('Three places worth knowing about:') +
      steps([
        `<a href="${PLATFORM}" style="color:${TEXT};">Tribes Platform</a> — 60+ Regenerative Neighborhoods, service providers, and people, mapped worldwide`,
        `<a href="${SITE}/agency" style="color:${TEXT};">The Agency</a> — hands-on help if you are developing a project`,
        `<a href="${SUBSTACK}" style="color:${TEXT};">Substack</a> — what we are learning, as we learn it`,
      ]) +
      button(`${SITE}/join`, 'Find your place', PINK),
    text: 'Thanks for joining. Regen Tribe is a Regenerative Neighborhood Accelerator — we help people create, develop and join intentional communities built around regenerative systems.\n\n' +
      `Tribes Platform: ${PLATFORM}\nThe Agency: ${SITE}/agency\nSubstack: ${SUBSTACK}`,
  }
}

export function welcomeEmailFor(record: SignupRecord, table: string) {
  const v = variantFor(record, table)
  const g = record.name ? `Hi ${record.name},` : 'Hi,'
  return {
    subject: v.subject,
    html: layout({ heading: v.heading, accent: v.accent, body: p(greeting(record)) + v.body }),
    text: `${g}\n\n${v.text}\n\n— The Regen Tribe Collective\n${SITE}`,
  }
}
