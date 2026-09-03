# Onboarding — editing the Regen Tribe website

Everything a new collaborator needs to work on this repo from their own
Claude Code.

## 1. Accounts you need

| Account | Why | Who grants it |
|---|---|---|
| **GitHub** — `wensonia/RegenTribeWebsite` | Only git remote; clone + push | Sonia adds you as a collaborator with Write access |
| **Bitwarden** | Holds the `.env.local` values | Sonia shares the Regen Tribe collection |
| **Cloudflare Pages** — project `regentribewebsite` | Deploys the site | Only needed if deploys are *not* automatic on push to `main` — check first |
| **Supabase** | Newsletter + resource-holder signup tables | Only if you are changing the schema or reading submissions |
| **Google AI Studio** | `GEMINI_API_KEY` for the illustration generator | Generate **your own** key; do not share Sonia's |
| **Resend** | Sends the signup notification emails | Only needed to change email behaviour — see section 5 |

Claude Code itself runs on your own Anthropic account.

## 2. Machine prerequisites

- **Node 22.12 or newer** — `rnf-site` (the Astro sub-site) enforces this.
- `git`, and `gh` if you want the GitHub CLI.

## 3. Get set up

```bash
git clone https://github.com/wensonia/RegenTribeWebsite.git
cd RegenTribeWebsite
npm install
```

Create `.env.local` in the repo root. Values are in Bitwarden under
**"Regen Tribe Website — .env.local"**:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
GEMINI_API_KEY=...
```

- The two `NEXT_PUBLIC_SUPABASE_*` values are public by design — they ship in
  the browser bundle. They are required for the signup forms to work.
- `GEMINI_API_KEY` is a real secret and is **only** used by
  `scripts/optimize-images.mjs` / `scripts/generate-image.mjs`. Leave it blank
  unless you are generating illustrations, and use your own key when you do.

Then:

```bash
npm run dev        # http://localhost:3000
./start-dev.sh     # same thing, with Node version + env checks
```

The site builds without `.env.local`, but the signup forms will throw a clear
"Supabase is not configured" error until you add it.

## 4. Obsidian sync — required

Every page has a matching write-up in the Obsidian vault, and **the write-up
must be updated whenever a page changes**. See the sync rule in `CLAUDE.md`.

The `.claude/hooks/obsidian-sync.sh` hook reminds Claude automatically. It
looks for the vault at:

```
~/Library/Mobile Documents/iCloud~md~obsidian/Documents/obsid-mycolive/Regen Tribe/RT website/
```

If your vault is somewhere else, set the override in your shell profile:

```bash
export REGENTRIBE_OBSIDIAN_DIR="/path/to/your/RT website"
```

If no vault is found the hook stays silent rather than sending Claude to a
dead path — which also means **the reminder silently stops**. Confirm the hook
fires before relying on it:

```bash
CLAUDE_PROJECT_DIR="$PWD" ./.claude/hooks/obsidian-sync.sh
```

Output = working. No output = your vault path is wrong.

## 5. Email notifications (Resend)

Signup emails are sent server-side. Nothing about Resend touches the browser
bundle, and the website itself sends no email directly.

**How it flows:**

1. A visitor submits a form → the browser inserts a row into Supabase.
2. An `after insert` trigger (`supabase/migrations/*_signup_email_notifications.sql`)
   calls the `send-signup-email` Edge Function via `pg_net`.
3. The function (`supabase/functions/send-signup-email/index.ts`) calls Resend
   and sends two emails: a welcome to the subscriber, and a notification to
   the team address.

The trigger swallows its own errors, so **a failed email never loses a
signup** — the row is always written.

**Accounts needed:** the `regen.tribe` Resend workspace (sending domain
`send.regentribe.co`, verified via Cloudflare Domain Connect), plus Supabase
access to set function secrets. A collaborator
only needs these if they are changing how email works; editing pages does not
require them.

**One-time setup** (already done for the live project — only repeat this for a
new environment):

```bash
# 1. Function secrets. Generate the webhook secret with: openssl rand -hex 32
supabase secrets set \
  RESEND_API_KEY=re_xxx \
  SIGNUP_WEBHOOK_SECRET=<random-hex> \
  RESEND_FROM='Regen Tribe <hello@send.regentribe.co>' \
  RESEND_TEAM_EMAIL=grow@regentribe.co

# 2. Deploy the function
supabase functions deploy send-signup-email

# 3. Apply the trigger migration
supabase db push
```

Then, in the Supabase SQL editor, store the URL and the *same* webhook secret
in Vault so the trigger can authenticate:

```sql
select vault.create_secret(
  'https://<project-ref>.supabase.co/functions/v1/send-signup-email',
  'signup_email_function_url', 'Edge Function endpoint for signup emails');
select vault.create_secret(
  '<same value as SIGNUP_WEBHOOK_SECRET>',
  'signup_email_webhook_secret', 'Shared secret for the signup email hook');
```

Until both Vault secrets exist the trigger is a no-op — signups are still
recorded, they just do not generate email.

**Changing the copy** of either email means editing the Edge Function and
re-running `supabase functions deploy send-signup-email`.

## 6. Build and deploy

```bash
npm run build   # builds rnf-site (Astro), then Next.js static export -> out/
```

Output directory is `out/`, published by Cloudflare Pages (`wrangler.toml`).
Confirm with Sonia whether pushing to `main` deploys automatically before you
push anything you are not ready to ship.

## 7. House rules that will trip you up

From `CLAUDE.md` — worth reading in full, but the ones people miss:

- Never abbreviate **"Regenerative Neighborhoods"** as "RN".
- Never abbreviate **"Regen Tribe"** as "RT".
- It is **"Tribes Platform"**, not "Tribe Platform".
- Always use the real PNG logos in `public/images/logos/` — never recreate the
  logo as SVG. The ○△□ shapes are decorative only, not the logo.
- Animation uses the standard Framer Motion `fadeUp` / `stagger` variants
  defined in `CLAUDE.md`. Do not invent new ones.

## 8. Known issues

- `next@15.5.2` has a published security advisory (CVE-2025-66478). Upgrading
  is not yet done — coordinate with Sonia before bumping it.
- `.vercel/` exists but is vestigial; the live host is Cloudflare Pages.
