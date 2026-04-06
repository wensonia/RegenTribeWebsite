# Regen Tribe Website — Project Instructions

## What this project is
The marketing website for **Regen Tribe**, a Regenerative Neighborhood Accelerator.
Live at: **regentribe.co** — hosted on Cloudflare Pages, built with Next.js 15 static export.

## What Regen Tribe does
Regen Tribe helps people create, develop, and join intentional communities built around regenerative systems — circular economies, sustainable resources, and shared living. There are three arms:

1. **Tribes Platform** — a digital network app (tribesplatform.app) connecting people, regenerative neighborhoods, and service providers globally
2. **RT Agency** — hands-on consulting for groups developing regenerative neighborhoods
3. **Education** — training programs, guides (the 11-step Alchemy Guide), and the Agent Program vocational track

## Who the website is for
- Landowners and developers who want to build regenerative neighborhoods
- People seeking intentional community / alternative living
- Service providers (builders, designers, systems experts) serving the regenerative neighborhood space
- The broader global Regenerative Neighborhood Movement

## Website goal
The website is the **marketing hub** — introduce the mission, explain the ecosystem, and drive visitors to join the Tribes Platform, engage the agency, or enroll in education. It is NOT the platform itself (that lives at tribesplatform.app).

## Language rules
- NEVER abbreviate "Regenerative Neighborhoods" as "RN" — always write it in full
- The accelerator is called "Regen Tribe" (not "Regenerative Tribe")
- The platform is "Tribes Platform" (not "Tribe Platform")

## Tech stack
- Next.js 15.5.2 with `output: 'export'` (pure static HTML → `out/`)
- Tailwind CSS v4
- TypeScript
- Deployed to Cloudflare Pages via `npm run build`
- Build output directory: `out`
- Supabase for backend (env vars: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)

## Design system
- **Background:** `#ededed`
- **Text & headings:** `#363636`
- **Accent pink:** `#f16ab0`
- **Accent green:** `#6fc6a2`
- **Accent blue/purple:** `#808aeb`
- **Accent yellow:** `#ffe682`
- **Heading font:** Lora (serif, weight 400–600) via Google Fonts
- **Body font:** Open Sans via Google Fonts
- **Style:** editorial, PSV-inspired — dashed borders, pill buttons, colored dots on nav links, ○△□ shapes as decorative elements

## Logo rules
- ALWAYS use the real PNG logo files from `public/images/logos/`
  - `logo-black-text.png` — mark + wordmark, for light backgrounds
  - `logo-white-text.png` — mark + wordmark, for dark backgrounds
  - `logo-black-mark.png` — mark only, light backgrounds
  - `logo-white-mark.png` — mark only, dark backgrounds
- NEVER invent or recreate the logo as an SVG or any other format
- The ○△□ shapes used decoratively throughout the page are NOT the logo — they are design elements only
