# Homepage handoff

The homepage includes AST’s hero and six published partner logos, counters, full About copy, all eight services, facility CTA, all six gallery projects, all three testimonials, all 30 client logos, office contacts, enquiry form, and footer. The additional sports, product, lighting, maintenance, and brochure sections use AST’s published information. Empty news and newsletter features are omitted.

## Content source

Primary source: https://ast-sports.com/, reviewed 6 October 2026. Full About and service descriptions are kept with light spelling and capitalisation corrections. Testimonials retain their published names and wording; monograms replace the generic stock portraits on the original site. WordPress scripts and unrelated footer links are not imported.

The current site has inconsistencies retained for content parity:

- The experience counter says **20 Yr+**, while About says **over 11 years**. Confirm the intended figure before launch.
- Testing & Certification repeats the survey description and line-marking tagline. AST can provide an approved replacement.
- The SAI Centre Aurangabad image filename refers to M.P. Sports College Dehradun. Its original title/image association is retained.

All eight sport-page links and nine PDF links returned HTTP 200. Existing live AST pages remain linked; this task completes the homepage.

AST’s Joinchat widget publishes WhatsApp **+91 72900 36622**. The office landline is separately **+91 11 430 63 708**.

## Optimized video

AST source: https://ast-sports.com/wp-content/uploads/2026/07/WhatsApp-Video-2026-04-27-at-12.09.11-PM.mp4

The 12-second silent loop crops the monitor frame to show the source’s court footage. MP4 files use fast-start encoding, with a matching WebP poster.

| Asset | Dimensions | Bytes |
| --- | --- | --- |
| Desktop WebM | 1280 × 720 | 944,848 |
| Desktop MP4 fallback | 1280 × 720 | 1,547,305 |
| Mobile MP4 | 854 × 480 | 698,218 |
| Poster | 1600 × 900 | 64,478 |

The poster is preloaded. Video loads after first paint and selects one variant. Reduced motion, Save-Data, and slow connections make zero video requests. Playback pauses offscreen and when the tab is hidden. A keyboard-accessible pause/play control is present.

## Projects

The supplied WorksWheel retains its ring-to-drum geometry, scroll, drag, and index navigation. Its demo art is replaced with AST’s six projects. It uses optimized images, supports Up/Down, Home/End, and Enter, and opens the gallery lightbox. The dialog supports Escape and previous/next navigation.

Animation frames stop when settled, hidden, or offscreen. Mobile and reduced-motion visitors receive the filtered grid and do not load the wheel component. Desktop also has a grid toggle.

## Contact and launch configuration

The form uses shared client/server Zod validation, a honeypot, pending/error/success feedback, and optional Resend delivery. Without credentials, it prepares email and WhatsApp messages for visitors to send. It confirms delivery only when the email API succeeds. QA did not send external messages.

Set `RESEND_API_KEY` and a verified `CONTACT_FROM_EMAIL` from `.env.example` for direct email. Keep the review `noindex` setting until launch. No production deployment was performed.

## Checks

TypeScript and production build pass. ESLint has no errors in the homepage; existing extraction scripts can emit unused-variable warnings.

Edge interaction checks pass at 1440 × 1000, 768 × 1024, 390 × 844, and 320 × 740. They cover video playback, pause/resume, offscreen pause, correct mobile source, menus, all service descriptions, keyboard project selection, filters, lightboxes, contact validation and handoff, all client-logo loads, local anchors, themes, and horizontal overflow. Browser exceptions in the completed run: zero.

Reduced-motion, Save-Data, and slow-connection contexts make zero video requests.

Run `npm.cmd run verify:home` with the preview running. Screenshots and JSON results are in `.cache/homepage-qa`. Override the origin with `AST_PREVIEW_URL`.
