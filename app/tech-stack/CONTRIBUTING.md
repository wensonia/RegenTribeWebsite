# Contributing to the Regen Tech Stack page

Welcome! This page lives at `regentribe.co/tech-stack` and is the public-facing dashboard for all open source tools built by and for the Regen Tribe community.

## Scope

**Everything you need to edit is inside `app/tech-stack/`** — you do not need to touch anything else in the repository.

```
app/tech-stack/
├── page.tsx        ← the entire page (data + layout + styles)
└── CONTRIBUTING.md ← you are here
```

## Common tasks

### Update a tool's status
In `page.tsx`, find the `tools` array near the top of the file. Each tool has a `status` field:

```ts
status: 'Active' | 'In Development' | 'Planned' | 'Building'
```

### Add a builder or contributor name
In the same `tools` array, fill in the `builders` or `contributors` field:

```ts
builders:     'Name · Name',
contributors: 'Name',
```

### Add a new tool card
Copy an existing entry in the `tools` array and update all fields. The card renders automatically.

### Update a MYCONET module status
Find the `modules` array and update the `status` field for the relevant module.

## Design rules

This page inherits the Regen Tribe design system — please keep these consistent:

- **Fonts** — `var(--font-lora)` for headings, `var(--font-open-sans)` for body (set in root layout)
- **Accent colors** — `var(--green)` · `var(--pink)` · `var(--yellow)` · `var(--blue)` only
- **Animations** — use the existing `fadeUp` / `stagger` variants; do not invent new motion effects
- **Icons** — `lucide-react` only, `ArrowRight` at 14px for links/buttons

## Running locally

```bash
# from the repo root
npm install
npm run dev
# → open http://localhost:3000/tech-stack
```

## Submitting changes

1. Fork the repo
2. Create a branch: `git checkout -b update/tool-name-status`
3. Make your changes in `app/tech-stack/`
4. Open a pull request — tag `@regentribe` for review
