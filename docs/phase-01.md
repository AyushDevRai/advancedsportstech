# Phase 1 — project and design foundation

Built on 6 October 2026. This is the review stop requested in the supplied brief.

## Built

- Next.js 16 App Router, React 19, strict TypeScript, Tailwind CSS 4, npm lockfile.
- AST's original local logo. Dominant red sampled from the full-resolution logo: **#800000**. UI accent: `oklch(0.58 0.22 27)`, with a 50–950 scale.
- Locally hosted Barlow Condensed and Manrope using `next/font/local`.
- Shared light/dark colours, type, focus and radius tokens; persisted theme selection using `next-themes`.
- Glass utilities with prefixed blur, solid fallbacks, noise and reduced mobile/data-saving blur.
- Working review pages at `/` and `/design-system`, using AST content and replaceable AST media.
- Typed company, contact, sports, brands, services, products and projects in `content/`, with source URLs and confirmation markers.
- English-first `next-intl` routing and messages. Add Hindi after approved translations are available.
- Review metadata uses `noindex` until the launch phase.

## Libraries and locations

| Library | Implementation |
| --- | --- |
| shadcn/ui + Radix | Registry sources in `components/ui`: NavigationMenu, Sheet, Dialog, Tabs, Accordion, Carousel, Form, Input, Select, Textarea, Sonner, Command, Breadcrumb, Table, Badge, Tooltip, Skeleton, Separator, Drawer and Button. Buttons, Dialog, Accordion and Sonner are demonstrated. |
| HeroUI 3 | Card, Chip and Tabs with animated selection indicator. Version 3 uses `@heroui/styles` with Tailwind 4; no legacy HeroUIProvider or Tailwind plugin. Optional I18nProvider is wired in `components/providers.tsx`. |
| Magic UI | All 20 requested components were available and copied via the official shadcn registry into `components/magic`. BorderBeam and BlurFade are demonstrated. Remaining components are prepared for later phases. CSS animations are in `styles/magic.css`. |
| Motion | Reduced-motion configuration and presets in `lib/motion.ts`. |
| Lenis / GSAP | Installed for later smooth scrolling and pinned sections, not activated on the review page. |
| Forms | Zod, React Hook Form and resolver installed; the enquiry flow belongs to Phase 5. |

HeroUI's accent/muted aliases are scoped to `.heroui-scope` because shadcn uses those names differently. Soft chip colours explicitly map to AST's scale in both themes.

## Content and assumptions

- Content: [AST Sports](https://ast-sports.com/). Design patterns: [Polytan](https://www.polytan.com/en). No reference-site code, copy, logos, photos or videos are imported.
- AST's injected footer links are excluded.
- Sports, services, brand names, partnerships, projects and contact details come from AST and the supplied brief.
- Numeric claims, completion dates, certifications and testimonials await confirmation. No invented client list, testimonials or news.
- AST publishes a landline; no WhatsApp number is assumed.
- Photos in `public/placeholders` are downloaded copies of AST's existing media. Provenance and alt text are in `content/media.ts`.
- Phase 2 requires a licensed silent hero video and matching poster; this phase does not claim a working video hero.
- Imported registry sources have narrow exceptions for new React compiler lint rules. New AST components keep the full lint rules. The video dialog thumbnail uses `next/image`.

## Validation and limits

Production build, lint and strict TypeScript are checked before handoff. `scripts/verify-preview.mjs` checks 1440px desktop, 768px tablet and 390px mobile: no overflow, dialog/Escape, tab arrow keys, accordion, theme persistence, client errors and reduced motion. Screenshots/results are in `.cache/qa`.

The connected Browser was unavailable, so UI checks use temporary headless Edge sessions. Lighthouse and a complete accessibility/performance audit remain Phase 6 work.

The npm audit reports **9 high advisory entries** rooted in the `braces` stack-exhaustion issue GHSA-vfj7-8cjw-p6xm, through registry and Next lint tooling. The latest braces version at setup is 3.0.3; npm's automatic fixes would downgrade requested libraries to incompatible older majors. Recheck patched dependencies before launch; do not run `npm audit fix --force`.

## Next

Phase 2: video hero, fixed glass navbar, Radix mega menus, mobile Sheet, navigation theme switching and rebuilt AST footer. Await review as instructed.
