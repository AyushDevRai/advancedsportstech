# AST Design Language, UX Rules & AI Continuation Context

**Project:** Advanced Sports Technologies LLP (AST)  
**Baseline recorded:** 6 October 2026  
**Purpose:** Let another engineer or AI continue this website without changing its established visual identity, interaction behavior, content, or layout unless the user requests that change.

This is a continuation specification for the existing project, not a brief for a redesign. Read it before modifying UI. Inspect the referenced components and styles before editing them. The current homepage and Athletic Tracks page are the visual baseline.

## 1. Instructions for the next AI

1. Preserve the current design by default. Implement the requested change within it.
2. The latest explicit user instruction takes precedence over this document. Do not treat older requests or this snapshot as permission to undo a later user edit.
3. Read `AGENTS.md` and the relevant installed Next.js documentation before writing framework code. This repository uses a newer Next.js version with conventions that may differ from remembered APIs.
4. Inspect the working tree. Keep existing edits, assets, and partially completed work. Do not reset files to a previous commit to obtain a cleaner starting point.
5. Use the current rendered `/` and `/athletic-tracks` pages as references. Older demo pages and components are not the standard for new pages.
6. Reuse existing layout, typography, buttons, content sources, motion utilities, and shared components.
7. Keep changes scoped. A request to change one section does not authorize restyling the homepage, navbar, footer, or other sections.
8. Preserve all existing content sections and working interactions unless specifically asked to remove or replace them.
9. Check both themes, mobile layouts, anchors, image loading, and affected interactions before finishing.
10. Update this document when the user intentionally changes a design rule, so future continuations follow the new baseline.

**Success means the new work looks like it was part of the same website from the beginning.**

## 2. Brand, audience & visual character

AST provides synthetic sports surfaces, sports infrastructure, and sports lighting across India. Its site serves facility owners, institutions, schools, sports organizations, developers, and people planning or improving sports facilities.

The design should communicate engineering capability, sporting performance, scale, and credibility. It combines:

- Large, condensed, uppercase display typography.
- Spacious layouts with deliberate alignment and readable body copy.
- Muted gray-green paper surfaces in light mode.
- Deep green-black surfaces in dark mode and selected feature sections.
- AST red for primary actions, rules, active states, and selected emphasis.
- Real sports photography, technical surface diagrams, and recognizable logos.
- A floating glass navbar with light reflections and substantial backdrop blur.
- Restrained motion tied to navigation, reading, media, and the requested components.
- Different arrangements of text and imagery, rather than repeating one card pattern everywhere.

The site is not a generic software landing page. Keep the sports infrastructure subject visible through photography, content, diagrams, project names, and product systems.

### References and their limits

- **AST:** source of business information, menu options, products, projects, testimonials, and page content.
- **Polytan screenshots:** references for large hover menus and photographic navigation. Their wording, products, green technology categories, contact details, and logos are not AST content.
- **Pacecourt footer screenshot:** reference for column structure, prominent headings, contact information, separators, and a lower contact band. Do not import its lime accent, branding, product list, or contact information.
- **Client carousel screenshot:** reference for two spacious, moving rows of monochrome logos without white logo tiles. Use AST's existing client assets and theme.

## 3. Authoritative files and existing architecture

| Concern | Current source |
| --- | --- |
| Homepage composition | `components/sections/homepage.tsx` |
| Current shared navbar | `components/layout/site-header.tsx` |
| Hover menu layouts | `components/layout/navigation-panel.tsx` |
| Navbar options, imagery, destinations | `content/navigation.ts` |
| Current shared footer | `components/layout/homepage-footer.tsx` |
| Footer cursor | `components/layout/footer-cursor.tsx` |
| Current primary styles | `styles/homepage.css` |
| Base theme tokens and fonts | `styles/tokens.css`, `app/layout.tsx` |
| Stylesheet imports and Aurora keyframes | `app/globals.css` |
| Theme and motion providers | `components/providers.tsx` |
| Hero video and heading | `components/sections/video-hero.tsx` |
| Scroll and section reveal behavior | `components/sections/homepage-effects.tsx` |
| Services interaction | `components/sections/services.tsx` |
| Project gallery and lightbox | `components/sections/project-gallery.tsx` |
| Project wheel implementation | `components/ui/works-wheel.tsx` |
| Testing and certificate lightbox | `components/sections/testing-certification.tsx` |
| Certificate preview data | `content/certifications.ts` |
| AST company information and sports | `content/ast.ts` |
| About, services, projects, testimonials, clients, brochures | `content/homepage.ts` |
| Athletic Tracks composition | `components/sections/athletic-tracks.tsx` |
| Athletic Tracks copy and product data | `content/athletic-tracks.ts` |
| Athletic Tracks styles | `styles/athletic-tracks.css` |
| Athletic Tracks route | `app/[locale]/athletic-tracks/page.tsx` |
| Hockey composition | `components/sections/hockey.tsx` |
| Hockey copy and product data | `content/hockey.ts` |
| Hockey styles | `styles/hockey.css` |
| Hockey route | `app/[locale]/hockey/page.tsx` |
| Contact form | `components/sections/contact-form.tsx` |
| Shared contact validation | `lib/enquiry.ts` |
| Contact server action | `app/actions/enquiry.ts` |
| Locale configuration | `i18n/routing.ts`, `i18n/navigation.ts`, `proxy.ts` |

### Current UI versus older UI

The current homepage imports **`SiteHeader` and `HomepageFooter`**, even if the IDE has `components/layout/glass-header.tsx` open.

`GlassHeader`, `ModernFooter`, `components/sections/modern-homepage.tsx`, existing product pages, and older generic sport pages remain in the project. Some still serve other routes. Their darker, differently styled layouts are not the baseline for new pages. Do not remove or broadly migrate them as an incidental part of a small task.

`/design-system` is an earlier foundation review. It is useful for the component inventory, but the refined homepage and Athletic Tracks page take priority for the current design language.

`README.md`, `docs/phase-01.md`, and `docs/homepage.md` contain historical notes. Some statements predate later changes: testimonials now use portrait placeholders, and Athletic Tracks now has a local page. Follow current code and this document for those details.

## 4. Color system

### Main page tokens

New pages that follow the current design should use the `.ast-homepage` wrapper and its tokens. Do not replace these with unrelated generic Tailwind colors.

| Role | Light mode | Dark mode |
| --- | --- | --- |
| Primary AST red, `--home-red` | `#d32628` | `#d32628` |
| Base page paper, `--home-paper` | `#f5f6f2` | `#161c19` |
| Main ink, `--home-ink` | `#16201b` | `#edf0ea` |
| Permanent dark feature background, `--home-dark` | `#111715` | `#111715` |
| Secondary display text, `.quiet-text` | `#77847a` | `#8d9b90` |
| Red button hover | `#b71c20` | `#b71c20` |
| Client carousel surface | `#e9ede6` | `#101713` |
| Footer base surface | `#e7ebe2` | `#0f1613`, with a subtle red radial tint |
| Footer ink | `#354638` | `#edf0ea` |
| Footer secondary copy | `#5f6f64` | `#bcc7bf` |
| Footer accent | `--home-red` | `#f05250` |

Light mode is grayish and softly green, not an entirely white website. Dark mode is green-black rather than blue-black.

### Athletic Tracks supplementary tokens

| Token | Light mode | Dark mode |
| --- | --- | --- |
| `--track-line` | `#20382a26` | `#dce8df24` |
| `--track-muted` | `#657268` | `#a9b6ad` |
| `--track-panel` | `#e9ede5` | `#202a23` |

Its heritage section uses `--home-dark`; the environmental feature uses `#23382b`; the hero's SMARTER emphasis is `#ff5657`.

### Base component tokens

`styles/tokens.css` also defines a red OKLCH brand scale, background, foreground, card, border, input, ring, and radius variables for the underlying component system. `--brand` resolves to `--brand-600`; `--logo-red` is `#800000`. These do not replace the current page-specific palette.

Keep `.heroui-scope` when using HeroUI components that need its different meanings of `accent` and `muted`. Do not globally redefine those variables to resolve one component's styling.

## 5. Typography

### Fonts

- **Display:** locally hosted Barlow Condensed, weight 600, `public/fonts/barlow-condensed.woff2`.
- **Body/UI:** locally hosted Manrope, variable weights 400–800, `public/fonts/manrope.woff2`.
- Root font variables are `--font-barlow` and `--font-manrope`.
- Theme aliases are `--font-display` and `--font-sans`.

Do not introduce a new display or body font. Avoid remote font requests when the local fonts already cover the design.

### Type hierarchy

| Element | Current baseline |
| --- | --- |
| Page display headings | Barlow Condensed, 600, typically uppercase |
| Shared H1/H2 tracking | `-.025em`, with component-specific overrides |
| Shared H1/H2 line height | `.96` |
| Desktop section H2 | `clamp(3.2rem, 5.5vw, 5.3rem)` |
| Homepage desktop hero H1 | `clamp(5.1rem, 9.3vw, 9.3rem)`, line height `.91`, tracking `-.018em` |
| Homepage hero supporting copy | `clamp(16px, 1.3vw, 20px)`, line height 1.65 |
| Body paragraphs | Manrope; generally 14–18px according to role; line height around 1.7–1.8 |
| Eyebrow | 12px, 700, uppercase, letter spacing `.14em`, line height 1.5 |
| Footer navigation heading | Barlow Condensed, 29px, 600, uppercase |
| Footer navigation link | 15px desktop, 14px mobile, line height 1.55 |
| Footer introduction | 18px desktop, 17px mobile |
| Testimonial quote | 19px, 500, line height 1.55 |
| General button | 13px, weight 650 |

These are starting points from the current styles, not a reason to override existing responsive rules. Keep compact metadata secondary, but do not make essential copy, links, or contact details tiny to fit a layout.

Use deliberate heading line breaks as the current sections do. Use muted second lines to create hierarchy. Do not convert all text to uppercase; paragraphs and normal navigation remain readable mixed case.

## 6. Grid, spacing & shape

### Shared layout

```css
.page-container {
  width: min(1800px, calc(100% - 112px));
  margin-inline: auto;
}
.site-header {
  width: min(1860px, calc(100% - 64px));
}
.section-pad { padding-block: 112px; }
.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 48px;
}
```

| Viewport breakpoint | Container / behavior |
| --- | --- |
| Above 2000px | Shared container max 2000px, 80px minimum side gutters |
| 1440px to 2000px (large monitors/screens) | Shared container max 1800px, 56px minimum side gutters (expands gracefully so sections do not have excessive side gaps) |
| 1200px to 1440px (14-inch laptops) | Container `calc(100% - 112px)`, 56px side gutters |
| At or below 1200px | Container `calc(100% - 80px)` |
| At or below 1000px | Desktop navigation becomes the mobile drawer |
| At or below 900px | Container `calc(100% - 56px)`; section padding 80px; many layouts stack |
| At or below 640px | Container `calc(100% - 40px)`; section padding 66px; shared H2 51px, with component overrides |
| At or below 360px | Container `calc(100% - 32px)`; additional narrow-screen adjustments |

The full-width outline ribbon intentionally uses wider gutters than the shared container. It is not meant to be forced into the normal container maximum.

### Shape and depth

- Standard buttons: 7px radius.
- Most photographic and technical panels: roughly 8–10px radius.
- Testimonial cards: 12px radius.
- Navbar: 18px radius; dropdown panel: 16px radius.
- Circular icons, image avatars, and selected contact pills are purposeful exceptions.
- The base component system has a larger generic `--radius`; do not apply that indiscriminately to the current page design.
- Favor thin dividers and subtle borders over heavy shadows.
- Keep strong depth mainly in the glass navbar, overlays, and lightboxes.

Align CTAs with their associated heading/copy. Preserve the existing shared left edge and spacious rhythm. Avoid arbitrary new max-widths, excessively rounded cards, or section-by-section changes to gutter sizes.

## 7. Buttons, icons & links

Reuse `.ast-button` and its variants:

- `.ast-button-red`: primary action; red background, white label.
- `.ast-button-glass`: secondary hero action; translucent background, white border and text, blur.
- `.ast-button-white`: action on the red facility CTA band.
- `.text-link`: quieter text action, usually with a red arrow.

Standard buttons have a 48px minimum height, `14px 23px` padding, and a 22px label/icon gap, with existing responsive overrides. Use Lucide icons consistently; arrows commonly use `ArrowUpRight` at 16–20px.

Use links for destinations and buttons for state changes. Preserve descriptive labels and accessible names for icon-only controls. Retain hover arrow movement and visible keyboard focus. Do not substitute random icon packs.

## 8. Navbar and hover menus

### Shared header

The floating glass navbar is a defining element. Use `SiteHeader` for new pages in the current theme.

- Positioned 16px below the viewport top; centered.
- Width: `min(1376px, calc(100% - 64px))`, with responsive adjustments.
- Main glass surface height: 76px; compact height: 65px.
- Glass combines translucent tint, gradient reflections, edge highlights, inset lines, and soft shadow.
- Backdrop treatment: `blur(26px) saturate(180%) brightness(1.08)`.
- The navbar adapts its ink, tint, and AST logo treatment to the section beneath it.
- Sections declare `data-nav-theme="light"`, `"dark"`, or `"red"` according to their surface.
- The header reads the section crossing a 96px line near the viewport top.
- Compact mode begins after 80px of scroll; downward scrolling beyond 450px can hide the navbar. Open navigation keeps it visible.
- Preserve logo, Products, Sports, Services, Projects, Downloads, Company, EN, theme toggle, quote CTA, and the mobile menu control as implemented.

**Removed at the user's request:** the extra company name and phone-number strip above the navbar. Do not restore it.

### Hover menu design

Keep the modern mixture of text and photography. The user explicitly rejected dropdowns made solely of identical image-card grids.

- **Products:** category tabs, a feature image, text directories, quieter support entries, descriptions, and brochure links.
- **Sports:** a text directory mixed with a larger photographic feature and selected small thumbnails.
- **Services:** one photographic feature plus numbered text entries and supporting copy.
- **Projects:** one larger project feature plus a compact directory with thumbnails.
- **Downloads:** three grouped brochure collections: Rekortan, Poligras, and SmarTracks, including download/share actions.
- **Company:** descriptive About text, a photographic Career feature, and a distinct contact panel.

Dropdowns use their own light/dark surface tokens, a thin border, backdrop blur, and a controlled shadow. Desktop hover timing uses a 120ms delay and 250ms skip delay. Keep the pointer bridge between trigger and panel, close controls, and shaded page backdrop. Limit height and allow menu scrolling rather than overflowing the viewport.

The mobile version uses a Sheet with expandable groups. It must remain usable without hover and close after following an option.

### Cross-page anchors

`SiteHeader` accepts `homeHref`. On the homepage use its default. On a detail page use:

```tsx
<SiteHeader homeHref="/" />
```

This resolves homepage-only section links to `/#...`. The quote button points to the current page's `#contact`; provide that section. `NavigationPanel` also receives `homeHref` for its Company footer links.

Do not casually change section IDs. The homepage Testing & Certification section intentionally retains the outer `id="products"`, with an inner `id="testing-certification"`, so older Products anchors still resolve.

## 9. AST logo rules

Use **`public/brand/ast-logo1.png`** for the current site logo.

- Display it without a white rectangular background or a separate white logo tile.
- Preserve its proportions; use `object-fit: contain`.
- Header width is approximately 160px on desktop and 120px on mobile; footer width is 190px.
- Use the existing `.ast-brand-logo` classes.
- On dark surfaces, the current CSS makes the logo white with brightness/invert and, where appropriate, a subtle shadow.
- On light surfaces, keep the original logo colors.
- The mobile drawer and footer also adapt their logo treatment in dark mode.
- Do not pick an older AST logo variant simply because it is present in `public/Logo` or `public/image`.

Logo-specific contrast treatment does not authorize filtering all photography or product diagrams.

## 10. Homepage composition and preserved decisions

Current order:

1. Floating SiteHeader and video hero.
2. Full-width static outline company-positioning ribbon.
3. Six-logo animated partner strip.
4. About Us.
5. Red statistics band.
6. Sports Surfaces.
7. Testing & Certification, including certificate previews.
8. Sports Lighting.
9. What We Do: all eight service subsections.
10. Projects gallery with desktop wheel/grid and lightbox.
11. Testimonials marquee.
12. Product Brochures.
13. Our Clients: two logo marquees and an expandable list.
14. Red sports-facility CTA.
15. Contact details and enquiry form.
16. Shared footer.

The floating WhatsApp action remains available. A standalone maintenance banner is commented out; Cleaning & Maintenance still appears in services and navigation. Do not reintroduce that extra banner as an unsolicited layout change.

### 10.1 Hero

Preserve this hierarchy and copy:

```text
Asia’s leading sports infrastructure company

FACILITATING
EXCELLENCE.

Synthetic sports surfaces, built across India.
Exclusive partner of Polytan/SportGroup Germany.

[Build your vision] [Explore our projects]
```

- Main text is left aligned over AST sports footage with a dark gradient for contrast.
- The heading was deliberately made slightly smaller during refinement. Do not enlarge it back to the earlier oversized version.
- `FACILITATING` uses the existing AuroraText component with white/ivory shades.
- `EXCELLENCE.` uses the same component with AST red, coral, and warm highlights.
- White Aurora colors: `#FFFFFF`, `#E8EEE9`, `#FFFFFF`, `#FFF4F0`.
- Red Aurora colors: `#FF6B68`, `#D32628`, `#FFB5A2`, `#FF3B49`.
- Both use `speed={1.25}`; the component's gradient spans `300% 100%` and moves between background positions. The resulting cycle is 8 seconds.
- Keep the actual movement. The user specifically corrected an earlier static gradient.
- Use accessible text once; the animated visual copy is decorative to assistive technology.
- The support copy and two buttons follow the heading on the same left alignment.
- Keep the quiet background grid lines and the film pause/play control.

Do not restore the hero's older “Raise your game with our world-renowned sports surfaces” paragraph, “Scroll to explore” label, or “Sports surfaces · India” label. Similar wording still exists in the Sports Surfaces section; that is a separate context.

### 10.2 Optimized hero media

- Preload `public/video/hero-poster.webp` as the first visible image.
- Video starts loading after approximately 600ms, rather than competing with the first paint.
- Select one video variant: mobile MP4 at widths up to 767px, desktop WebM when supported, otherwise desktop MP4.
- Local video assets: `hero-mobile.mp4`, `hero-desktop.webm`, `hero-desktop.mp4`.
- Keep video muted, looped, inline, and initially `preload="none"`.
- Pause when offscreen, when the document is hidden, or when the visitor manually pauses it.
- Reduced motion, Save-Data, and slow-2g/2g/3g use the poster without video.
- Autoplay or video failure must leave a useful poster, not an empty hero.

### 10.3 Outline ribbon and six-logo strip

The ribbon immediately after the hero says:

**Asia's Leading Sports Infrastructure Company**

It is static hollow/outline text spanning almost the full width. No HyperText animation, scrambling, or cycling. Desktop type is approximately `5.9vw`; stroke is 1.3px in the current ink color. Keep the existing mobile and forced-colors fallback.

The six-logo partner strip beneath it uses the existing `LogoCloud`, `InfiniteSlider`, and edge blur. Preserve these six logos and their order: LigaTurf, Spurtan, SmarTracks, GigaTera, Humotion, Poligras.

This strip is distinct from the former five brand cards farther down. Those cards were repurposed for Testing & Certification. Do not conflate the two sections.

### 10.4 About and statistics

Keep full AST About copy from `content/homepage.ts`, its split layout, supporting image, and existing typography.

The red statistics band has three columns with **numbers above descriptions**, not numbers beside descriptions:

- `100+`: Installation of Hockey, Tracks & Football Projects.
- `1,000K+`: Square Meters Sports Surfaces.
- `20Yr+`: Experience.

Keep the larger, readable descriptions and column dividers. Do not fabricate updated figures or animate arbitrary new counters.

### 10.5 Sports Surfaces

Keep all eight sports/surface options from `content/ast.ts`: Athletics, Hockey, Football, Tennis, Badminton, Basketball, Indoor Flooring, Wooden Flooring. Preserve the mix of photographs and stylized court illustrations already in use.

Athletics now links to `/athletic-tracks`. Other options still use their configured destinations; do not claim all have been migrated locally.

### 10.6 Testing & Certification

This section was explicitly changed from a world-renowned brand-card section into a dedicated Testing & Certification section. Preserve its broad heading, explanatory copy, and five-column preview rhythm, with responsive wrapping.

- Use images instead of the previous brand logos.
- There are three certificate placeholders and two testing/survey previews in `content/certifications.ts`.
- Certificate cards are visually highlighted with their current badge and styling.
- Clicking an image opens a modal preview.
- Preserve previous/next navigation, Escape/close behavior, title, description, and focus restoration.
- Replace preview paths with real certificate scans when provided, without redesigning the section.
- Do not present placeholder scans as genuine certificates.

The user supplied the line-marking-style tagline and survey/planning description for this section. They overlap other service text intentionally in the current content. Do not rewrite them based on an assumption that the repetition is a mistake.

### 10.7 What We Do: services

Keep all eight, in this order:

1. Conceptualization.
2. Survey, Planning & Designing.
3. Construction.
4. Refurbishment.
5. Line Marking.
6. Testing & Certification.
7. Sports Lighting.
8. Cleaning & Maintenance.

Desktop uses a sticky photograph/caption on the left and numbered accordion rows on the right. On smaller screens, the image sits above the rows. The image and caption follow the selected service.

**Interaction rules that must survive refactoring:**

- Rows open while reading/scrolling through the section.
- Scroll changes proceed one subsection at a time, with a minimum interval of about 700ms in normal motion.
- Height transition is `.65s`; opacity is `.5s`. Keep the slower opening requested by the user.
- The reading line is clamped between 160px and 320px, based on 38% of viewport height.
- Stable measured thresholds and reserved minimum list height prevent accordion layout changes from causing further selection or moving the next section.
- Keep `overflow-anchor: none` on the service list.
- A boundary dead zone prevents flicker.
- The selected service must not rewind against the visitor's scroll direction after manual selection.
- Real mouse movement over a row selects that row. Layout changes beneath a stationary pointer must not masquerade as hover.
- A deliberate wheel, touch, or scroll-key input takes control back from hover/click.
- A click or tap selects the row; keyboard buttons work as well.
- Deep links such as `#service-survey-planning-designing` select the right service. Preserve the existing settling/cooldown handling.
- Closed panels stay inaccessible/inert; `aria-expanded` reflects the visible panel.
- Respect reduced motion.

Do not replace this with naive “nearest row on every scroll event” logic. Earlier versions skipped rows or jumped because their own expanding layout changed the measurements.

### 10.8 Projects

Preserve `ProjectGallery` and its six AST projects from `content/homepage.ts`.

- Filters: All, Prominent Projects, Our Creations.
- Desktop above 900px with normal motion: WorksWheel, with a grid alternative.
- Mobile and reduced motion: filtered grid; do not load the wheel unnecessarily.
- Wheel supports the established scroll/drag interaction and keyboard navigation.
- Wheel events must not fight Lenis; preserve its `data-lenis-prevent` boundary.
- Clicking/selecting a project opens its image lightbox.
- Keep close, previous/next, project title/category, and enquiry action.
- Preserve the permanent dark feature background and readable image labels.

Do not put the supplied component's demo artwork or unrelated titles back into the gallery.

### 10.9 Testimonials

- Use the current Magic UI `Marquee` implementation.
- Three published names and quotes are stored in `content/homepage.ts`.
- Use the existing people's portrait placeholder images, not monograms, logos, or sports-facility photos.
- Placeholder portraits are illustrative and must not be represented as verified photos of the named clients.
- Keep circular 56px portraits, quote icon, 19px quote copy, and clear names.
- Cards are translucent: light `#ffffff80`, dark `#1e282180`, with 12px backdrop blur and gentle borders.
- Keep the visible background tint behind the cards.
- Marquee duration: 38 seconds; gap: 20px; current repeat count: 3.
- Pause on hover and keyboard focus. Respect reduced motion and hide repeated copies from assistive technology.

### 10.10 Our Clients

The current section uses **two moving rows of monochrome AST client logos**. It replaced the earlier white tile/card treatment.

- All 30 client assets are retained, split into two rows of 15.
- Rows move in opposite directions, using 64s and 70s durations.
- Desktop spacing: 64px marquee gap, 24px between rows.
- Desktop logo box: 180 × 126px; image: approximately 170 × 120px.
- Mobile logo box: 130 × 96px; image: approximately 120 × 90px.
- Surface is gray-green in light mode and deep green-black in dark mode; do not use a pure-white section background.
- Light logo treatment: grayscale, multiply blend, opacity `.72`.
- Dark treatment: grayscale/invert, screen blend, opacity `.78`.
- Hover restores full opacity. Keep the current blending needed to remove visible white rectangles in animated tracks.
- Keep the Our Projects pill action and “View all 30 client logos” expandable list.
- Hover/focus pauses motion; reduced motion shows readable static content without duplicate rows.

The screenshot's organizations are not a replacement client list. Do not add clients from the reference image without AST-provided evidence.

### 10.11 Brochures, CTA and contact

Keep the existing nine product brochures and original PDF destinations from `content/homepage.ts`. Use the download icon, compact PDF designation, and existing grid rhythm.

The full-width red facility CTA is deliberately bold and simple: large display heading and a white action. Do not turn it into another glass card.

Contact uses real office information, a clear two-column layout on desktop, and a stacked mobile layout. Keep the form's labels, required-field feedback, pending state, and handoff/error/success behavior.

## 11. Footer

Use `HomepageFooter` as the shared footer for the current design.

- **Light mode:** grayish surface, currently `#e7ebe2`.
- **Dark mode:** dark surface, currently `#0f1613` with a quiet radial red tint.
- Do not force a black footer in light mode.
- Left: AST logo, company positioning, address, telephone, email.
- Right: Products, Sports, Services, Company navigation columns.
- Prominent condensed uppercase headings use AST red, not the reference screenshot's lime.
- Links have subtle red underlines and a red hover state.
- Keep the improved type sizes rather than reverting to tiny footer links.
- Lower band includes circular contact actions, a facility invitation, and a red email pill.
- Bottom includes copyright and back-to-top.
- Do not add invented newsletter, social accounts, legal links, business hours, or third-party contact details merely to match the screenshot.

### Footer cursor

Keep the accent cursor ring requested by the user:

- Active only inside the footer on fine-pointer, hover-capable devices.
- Follows the mouse smoothly; position interpolation is `.28`.
- Default diameter: 46px, 1.5px border.
- Over interactive options: 20px, 2px border, a faint accent fill.
- Re-expands smoothly; size transition is `.35s`.
- Hides on exit/window blur and updates appropriately on scroll.
- Decoration only: `aria-hidden`, `pointer-events: none`.
- Does not replace the normal pointer or intercept clicks.
- Disabled on touch/coarse pointers and reduced motion.

On detail pages, use `<HomepageFooter homeHref="/" />` so company/service links reach the homepage. Back-to-top remains a local `#home` link; provide that hero ID.

## 12. Athletic Tracks page

**Canonical local route:** `/athletic-tracks`  
**Content reference:** `https://ast-sports.com/athletic-tracks/`  
**Asset pack:** `public/image/`

The page is complete and uses the current theme, not the old generic sport template. Preserve these sections:

1. Photographic hero: HIGHER. FASTER. / SMARTER., with “Modern Synthetic Surfaces For Athletics,” breadcrumb, systems/contact actions, and subdued partner labels.
2. Local section navigation: The surface, Why Rekortan, Track systems.
3. Surface overview with the runner image and both published Polytan paragraphs.
4. Dark heritage section: trusted for over 50 years, original synthetic track, full history, 1969 / 1972 / 50+ milestones.
5. Why Choose Rekortan: all six reasons, including certification statistics, four Diamond League venues, 88% renewable/recyclable content, supply chain, installation, and R&D.
6. Why Choose Our Tracks: all five published statements and the SmarTracks timing diagram.
7. Products For Athletic Track: Rekortan M99, Rekortan PUR E, Rekortan M; full product descriptions, layer diagrams, brochure links, and enquiry actions.
8. Red Have Any Queries CTA.
9. Contact details and shared enquiry form.
10. Shared footer and WhatsApp action.

### Page-specific visual rules

- Wrapper: `className="ast-homepage athletic-page"`.
- Use the current shared fonts, palette, spacing, buttons, header and footer.
- Hero uses a static local photo, not an unrelated stock video.
- Hero headline is `clamp(4.5rem, 8.8vw, 8.5rem)` before responsive overrides.
- Keep the mix of split layouts, varied proof cards, numbered text lists, and alternating product rows.
- Technical diagram figures can use a light matte backing for readability in both themes. This does not authorize making the entire page white.
- Product PNG diagrams already have transparency: preserve their original colors. Do not invert their colors in dark mode.
- Product rows stack on mobile; alternating desktop ordering must not produce an illogical reading order.
- Local product IDs: `rekortan-m99`, `rekortan-pur-e`, `rekortan-m`.
- Main page IDs include `home`, `track-overview`, `why-rekortan`, `track-products`, `contact`.

### Local imagery

| Asset | Purpose |
| --- | --- |
| `/image/header-1.jpg` | Stadium/track hero |
| `/image/challenge-1.jpg` | Runner in overview |
| `/image/tracktrack-scaled-e1652685240732.jpg` | SmarTracks timing diagram |
| `/image/Rekortan-M99-final.png` | M99 cross section |
| `/image/pur-E-final.png` | PUR E cross section |
| `/image/M-final.png` | M cross section |

Sports menu links, homepage Athletics, footer sports links, and the sports listing point to this page. The current Products menu's Athletic Track option points to `/athletic-tracks#track-products`.

`/sport/athletic-tracks` redirects to `/athletic-tracks`. Keep the redirect. `/products/athletics-track` still exists as a separate older product route; do not assume it was removed or redesigned.

The statistics on this page describe Rekortan/Sport Group, not AST's own installation totals. Do not relabel them as AST achievements.

## 13. Content governance and contact details

AST content is authoritative. Use the supplied/local content data and the specific AST source page the user requests. When fetching new content, verify against that source; do not copy text from inspiration sites.

Do not invent certificates, certifications, venues, client endorsements, installation quantities, product specifications, or partnerships. Preserve product names and the distinctions between manufacturers, partners, technologies, and AST's own work.

### Current office information

```text
Advanced Sports Technologies LLP
E-42, 3rd Floor, Okhla Industrial Area, Phase II
New Delhi – 110020, India
Office: +91 11 430 63 708
Email: info@ast-sports.com
WhatsApp: +91 72900 36622
```

Use `company.contact` rather than retyping values independently. The WhatsApp number is separate from the office landline:

- Phone link: `tel:+911143063708`.
- WhatsApp link: `https://wa.me/917290036622`.

### Known content inconsistencies

- The homepage experience counter says 20 Yr+, while the About copy says over 11 years. These originate in retained AST content. Ask for the approved value when a task requires reconciling them; do not silently update a statistic.
- `company.statistics` includes confirmation markers for the older foundation, while the current homepage explicitly renders published values. They are not interchangeable.
- Testing & Certification repeats a survey description and line-marking-style tagline. Retain the user's supplied copy until they provide a replacement.
- Some historical project image/title associations and placeholder client labels need eventual confirmation. Do not guess a client's identity from a low-quality logo.
- Stock testimonial portraits and certificate mockups await real supplied images.

Keep these issues distinct from design work. Do not alter the UI just to disguise an unresolved content item.

## 14. Assets and media rules

Prefer existing local assets. Preserve exact spelling and case in paths, including spaces in older folders; production hosting may be case-sensitive even when Windows is forgiving.

| Folder | Use |
| --- | --- |
| `public/brand/` | Current AST logo and partner logos |
| `public/fonts/` | Local fonts |
| `public/video/` | Optimized homepage footage and poster |
| `public/image/` | Supplied Athletic Tracks source-page asset pack |
| `public/services/` | Service imagery |
| `public/projects/` | Project photography |
| `public/placeholders/` | Existing replaceable/source-associated photos |
| `public/navigation/` | Navigation photographs and source notes |
| `public/testimonials/` | Temporary portrait photos and provenance notes |
| `public/clients/` | All 30 client logos |
| `public/certifications/` | Certificate preview placeholder |
| `public/Products Images/`, `public/Product Images/` | Additional supplied legacy product/sports assets |

Use `next/image` with correct alt text, proportions, and `sizes`. Preload the main hero image where appropriate; leave below-the-fold content lazy. Full-page QA screenshots need natural scrolling/loading before judging a seemingly blank lazy image.

Use `object-fit: cover` for photographic panels and `contain` for logos/product cross sections. Do not crop an engineering diagram like a background photograph. Do not modify source logos or erase asset backgrounds destructively when existing theme-aware presentation already handles them.

## 15. Motion system

Motion should support the established experience, not introduce a new visual identity.

| Interaction | Current behavior |
| --- | --- |
| Smooth page scroll | Lenis, `autoRaf`, `lerp: 0.1`, anchors and nested scrolling enabled |
| Section heading/layout reveal | 550ms, subtle opacity and 18px upward settling |
| Hero video appearance | `.65s` opacity transition |
| Hero Aurora | Moving background-position gradient, 8s at the current speed |
| Services panel opening | `.65s` height, `.5s` opacity, approximately 700ms sequential switches |
| Partner logo strip | InfiniteSlider, reverse, speed 60; hover speed 20 |
| Testimonials | 38s linear marquee; hover/focus pauses |
| Client rows | 64s and 70s, opposite directions; hover/focus pauses |
| Footer cursor | `.28` position interpolation; `.35s` contraction/expansion |
| Menu image hover | Small image scale, generally around 1.045 |
| Button arrow hover | Small diagonal movement, around 2px |

Keep reduced-motion behavior throughout. `MotionConfig` uses the user's preference; CSS stops page animations/transitions; the video falls back to its poster; marquees provide static readable content; the project wheel falls back to a grid; the cursor decoration is disabled.

Only one page-scroll owner should be active. Reuse `HomepageEffects`; do not instantiate another Lenis for a new section. Dialog/Sheet scroll locks must stop and resume the existing scroll controller. Keep the service-anchor settling logic, including its `ast:anchor-settled` event.

Do not animate the outline company ribbon. Do not replace accessible static text with a constantly changing or scrambling headline.

## 16. Responsive and accessibility requirements

- Check at least 1440 × 1000, 768 × 1024, 390 × 844, and 320 × 740.
- Essential content cannot depend on hover; provide click/tap/keyboard behavior.
- Prevent horizontal page overflow, clipped headings, inaccessible menus, and actions obscured by floating controls.
- Keep semantic sections, useful heading hierarchy, one primary H1, and meaningful `aria-labelledby` relationships.
- Keep the skip-to-content link and visible focus states.
- Maintain sufficient text contrast on video, glass surfaces, gray-green backgrounds, and dark sections.
- Use empty alt text for decorative images; meaningful alt text for informational images.
- Preserve modal focus handling, Escape/close controls, and keyboard previous/next actions where implemented.
- Pause continuous carousels on hover/focus and honor reduced motion.
- Repeated marquee copies must remain `aria-hidden` and inert; do not expose duplicate controls to keyboard users.
- The cursor ring must never be required for understanding or interaction.
- Keep usable touch targets and the current 16px mobile form input text to avoid awkward mobile zoom.
- Fixed-header section offsets are currently 120px via page ID scroll margins. Preserve anchor visibility.

## 17. Contact form behavior and launch context

The contact form uses React Hook Form and shared Zod validation on the client and server. Required fields are name, email, mobile, subject, and message; the hidden `website` field is a honeypot.

Without `RESEND_API_KEY` and `CONTACT_FROM_EMAIL`, it prepares an email draft and WhatsApp message for the visitor to send. With valid delivery configuration, the server action can send through Resend. A failed direct delivery retains the handoff options.

Do not display a sent confirmation when only a draft was prepared. Do not replace the functional form with a decorative button. QA should validate fields and handoff states without sending test messages to the business.

Root metadata currently has `robots: { index: false, follow: false }` for review. Do not silently change indexing, deploy, or alter launch configuration as part of a visual continuation task.

## 18. Technical implementation conventions

- Stack recorded in `package.json`: Next.js 16.3.8, React 19.2.8, TypeScript, Tailwind CSS 4, next-intl, next-themes, shadcn/Radix, HeroUI, Motion, Lenis, Lucide, React Hook Form, Zod.
- Treat installed package documentation and current code as authoritative for APIs.
- English is the only configured locale. Routes use `[locale]` internally and an as-needed prefix, so normal public URLs are `/` and `/athletic-tracks`.
- Locale route `params` are promises; await them and use `setRequestLocale` as existing pages do.
- Keep page composition and static copy in server components where possible. Use client components for the interactions that require them.
- Keep content in the appropriate `content/` module rather than duplicating it in several layouts.
- Use the existing component files. Reinstalling registry components can overwrite the custom motion, accessibility, or styling already added; inspect before running another `shadcn add` command.
- Use `Link` for app navigation when appropriate, anchors for section/external links, and buttons for state changes.
- Scope new page styles to a page class such as `.athletic-page`. Do not redefine global H1/H2/button styles for one page.
- Import page styles in the established stylesheet chain without changing shared import precedence incidentally.
- Preserve `data-nav-theme`, IDs, class names used by effects, and menu links during refactors.

### Suggested skeleton for another detail page

```tsx
<div className="ast-homepage new-detail-page">
  <a href="#main-content" className="skip-link">Skip to content</a>
  <SiteHeader homeHref="/" />
  <HomepageEffects />
  <main id="main-content">
    <section id="home" data-nav-theme="dark" aria-labelledby="page-title">
      {/* Local hero media, display H1, source copy, existing CTA styles. */}
    </section>
    <section className="section-pad" data-nav-theme="light">
      <div className="page-container">
        {/* Existing heading pattern and source-specific content. */}
      </div>
    </section>
    {/* Preserve all content sections required by the requested AST page. */}
    <section id="contact" className="section-pad contact-section" data-nav-theme="light">
      {/* Existing contact layout and ContactForm. */}
    </section>
  </main>
  <HomepageFooter homeHref="/" />
</div>
```

Adapt this to the content rather than copying every Athletic Tracks section onto unrelated pages. Preserve the common design language, not a mechanically identical layout.

## 19. Verification workflow

Before changing code:

1. Read this document, `AGENTS.md`, affected files, and relevant installed framework guidance.
2. Inspect `git status` and preserve unrelated work.
3. Identify the exact user-requested scope and source of the content/assets.
4. Inspect the current page in both themes when the change affects appearance.

After changing code:

1. Review the diff for incidental design changes.
2. Run TypeScript, lint affected code, and run the production build for substantive page changes.
3. Check responsive appearance and horizontal overflow.
4. Check affected interactions, local anchors, cross-page links, dialogs, and image loading.
5. Verify normal and reduced motion when motion is affected.
6. Report what changed and what was actually verified; do not claim deployment or external delivery.

Windows commands:

```powershell
npm.cmd run dev
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
```

Use `npm.cmd` / `npx.cmd` to avoid PowerShell's npm.ps1 restriction. The normal development port is 3000; the working preview during this baseline was on 3001. Discover the actual active preview rather than assuming its port.

For the existing homepage check script:

```powershell
$env:AST_PREVIEW_URL = 'http://localhost:3001'
npm.cmd run verify:home
```

The installed Playwright setup can use headless Microsoft Edge (`channel: "msedge"`) for local verification. Output should go to an ignored location such as `.cache/` or `.next/`.

On this Windows environment, sandboxed SWC loading can reject the user-owned compiler cache. Normal-user build execution resolved it in the previous task. Do not change system execution policies or global cache permissions to work around it.

### Baseline verification status

The Athletic Tracks implementation passed TypeScript, its affected current-component lint checks, and a production build. Browser checks covered desktop/mobile, 320px overflow, light/dark presentation, all six local page images, menu destinations, the legacy redirect, and empty-form validation. No browser exceptions or failed page-asset responses were observed in that run.

Some older routes/components have pre-existing unused-import lint warnings. This document does not claim the entire repository has no warnings or that every historical verification script matches all later UI changes. Review a script's expectations before treating a renamed heading as a functional regression.

## 20. Changes to avoid unless explicitly requested

- Replacing the current design with a newly generated aesthetic.
- Switching fonts, AST red, the gray-green light palette, or the green-black dark palette.
- Using the older dark-only sport/product template as the model for new current-theme pages.
- Putting the AST logo back on a white rectangle.
- Restoring the company/phone strip above the navbar.
- Returning hover menus to repetitive image-only grids.
- Reintroducing HyperText/scrambling animation in the company outline ribbon.
- Making the hero substantially larger or moving its CTAs away from the heading alignment.
- Making the Aurora gradient static.
- Speeding up services, allowing scroll to skip rows, or removing hover/click support.
- Restoring the former brand-logo cards in the dedicated Testing & Certification section.
- Treating certificate or testimonial placeholders as verified originals.
- Changing statistics to guessed current values.
- Returning the client section to white logo tiles or using organizations from the screenshot as AST clients.
- Forcing a dark footer in light mode or importing a lime accent from the footer reference.
- Shrinking body/footer text to fit a new layout.
- Inverting transparent product diagrams in dark mode.
- Adding unprovided pages, menu options, social links, newsletter flows, or business claims just to fill space.
- Removing content sections to simplify implementation.
- Breaking homepage anchors when adding a detail page.
- Replacing the existing working form with a fake submission flow.
- Changing review indexing or publishing while doing an unrelated design edit.

## 21. Copyable continuation prompt

> Continue the AST website in this repository. Read `DESIGN_LANGUAGE.md` and `AGENTS.md` before editing. Use the current homepage and `/athletic-tracks` as the visual references. Preserve the established fonts, AST red accents, gray-green light mode, green-black dark mode, glass navbar, shared footer, section spacing, content, responsive behavior, and working interactions. Reuse current components and local assets. Keep edits limited to my requested task. Do not redesign, restore rejected earlier UI, invent business facts, or overwrite existing work. Verify the affected page in both themes and at desktop/mobile sizes. If I explicitly request a change to a recorded design rule, apply that change and update the handoff document accordingly.

---

**Maintenance note:** This file records the current implementation and the user's design decisions at the date above. Keep it synchronized with intentional changes. Future content additions should extend the established language; they should not become an excuse to replace it.
