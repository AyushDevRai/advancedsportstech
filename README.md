# AST Sports

The Next.js foundation for Advanced Sports Technologies LLP. AST's content and branding are the source of truth; Polytan is a design-pattern reference only.

**Current deliverable:** the complete AST homepage at `/`, with the original component foundation retained at `/design-system`. The homepage uses AST's published copy, images, video, projects, testimonials, clients, and contact details.

## Run locally

```powershell
npm.cmd ci
npm.cmd run dev
```

Open `http://localhost:3000`. The current review session may already be running at `http://localhost:3001`.

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
npm.cmd run start -- --hostname localhost
```

On this Windows environment, sandboxed native compiler loading rejects the user-owned SWC cache. Build and dev commands work in the normal user shell; changing system execution policies or global cache permissions is unnecessary. `npm.cmd` avoids PowerShell's restriction on npm.ps1.

## Preview verification

With a preview running and Microsoft Edge installed:

```powershell
$env:AST_PREVIEW_URL='http://localhost:3001'
npm.cmd run verify:home
```

The homepage script checks four viewport sizes, video playback, menus, all eight services, the project wheel and filters, lightboxes, form validation and message handoff, all 30 client logos, anchors, themes, overflow, reduced motion, data saving, and slow connections. It writes screenshots and results to `.cache/homepage-qa`. `verify:preview` checks the foundation at `/design-system`.

## Structure

- `app/`: App Router and English-first locale segment.
- `components/ui/`: official shadcn/Radix component sources.
- `components/magic/`: official Magic UI registry components.
- `components/layout/`: glass navigation, mobile drawer, and theme toggle.
- `components/sections/`: complete homepage and retained foundation review.
- `content/`: typed AST content, confirmation markers, source and media provenance.
- `i18n/`, `messages/`: next-intl routing and translation foundation.
- `lib/`: utilities, motion presets, and shared enquiry validation.
- `styles/`: tokens, glass utilities and Magic UI animation definitions.
- `public/brand/`, `public/placeholders/`, `public/fonts/`: local AST assets, replaceable photos and licensed fonts.

The contact form prepares email and WhatsApp messages. For direct email delivery, copy `.env.example` to `.env.local` and supply `RESEND_API_KEY` and a verified `CONTACT_FROM_EMAIL`. Recipient details stay on the server; failed delivery retains the handoff alternatives.

Read [the homepage handoff](docs/homepage.md) for source notes, video sizes, verification, and launch configuration. Existing AST sport pages and PDFs are linked directly; this task completes the homepage. The [Phase 1 handoff](docs/phase-01.md) retains the component inventory and tooling notes.
