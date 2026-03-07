# WhatIs.site — Web Design Audit Report

**Date:** March 7, 2026
**Auditor:** Claude
**Scope:** Color scheme, typography, favicon/branding, layout, components, mobile responsiveness, accessibility, performance indicators

---

## Executive Summary

The site has a clean, readable foundation — Georgia body text, Inter headings, a restrained blue color palette, and solid responsive layout. But it's missing several "table stakes" items that any polished content site needs: **no favicon**, **no OG image fallback**, **no logo/brand mark**, and a few visual inconsistencies across pages. The typography pairing is good but the color palette is generic and the header/branding could be much stronger.

**Critical issues:** 4
**Major issues:** 6
**Minor issues:** 8

---

## 1. Favicon & Branding Assets

### CRITICAL: No favicon exists

- `BaseLayout.astro` references `/favicon.ico` but **no favicon file exists** in `public/`
- The browser tab shows a generic blank page icon — looks unprofessional
- Missing: `favicon.ico`, `favicon-32x32.png`, `favicon-16x16.png`, `apple-touch-icon.png`, `site.webmanifest`

**Fix:** Generate a favicon set from a "W?" or "WI" monogram mark using the brand blue `#3498db`. Need at minimum: `favicon.ico` (multi-size), `apple-touch-icon.png` (180x180), and a `site.webmanifest`.

### CRITICAL: No default OG image

- `BaseLayout.astro` only outputs `og:image` if `ogImage` prop is passed
- Homepage has **no OG image at all** — social shares will show nothing
- Category pages also have no OG image

**Fix:** Create a default `og-image.png` (1200x630) with the WhatIs.site branding. Use it as fallback in BaseLayout when no `ogImage` prop is provided.

### MAJOR: Text-only logo

- The header just shows "WhatIs.site" as styled text — no icon, no brand mark
- Looks indistinguishable from any generic blog
- No SVG logo file exists anywhere in the project

**Fix:** Design a simple SVG logo mark (question mark + book, or "W?" icon) and pair it with the text in the header.

---

## 2. Color Scheme

### Current Palette

| Token | Hex | Usage |
|-------|-----|-------|
| primary | `#3498db` | Links, CTA, brand |
| accent | `#667eea` | Link hover, secondary |
| text | `#1a1a2e` | Body text |
| text-light | `#4a5568` | Secondary text |
| border | `#e2e8f0` | Borders |
| bg | `#ffffff` | Page background |
| bg-secondary | `#f8fafc` | Section backgrounds |

### Assessment

- **Contrast ratios are good.** `#1a1a2e` on white = 16.2:1 (AAA). `#4a5568` on white = 7.0:1 (AA).
- **Primary blue is "default Bootstrap."** `#3498db` is literally the old Bootstrap blue — it signals "template site" to designers and savvy users.
- **Accent is disconnected.** `#667eea` (indigo) as a hover state for `#3498db` (sky blue) creates a hue shift that feels accidental.
- **No warm accent.** The entire palette is cool blues and grays — there's no warmth, no personality.
- **Category badges are all the same blue.** Every category shows `bg-blue-50 text-blue-700` — missed opportunity for category identity.

### Recommendations

- Shift primary to a more distinctive blue, like `#2563eb` (Tailwind blue-600) or pick a non-blue accent altogether
- Add a warm accent color (amber, coral, or orange) for CTAs, highlights, and visual interest
- Consider category-specific colors for badges — Technology (blue), Science (green), Finance (amber), etc.
- The `bg-secondary: #f8fafc` is nearly invisible vs `#ffffff` — increase to `#f1f5f9` for more definition

---

## 3. Typography

### Current Setup

- **Headings:** Inter (Google Fonts, loaded via CDN)
- **Body:** Georgia (system serif)
- **Mono:** JetBrains Mono (declared but not loaded)

### Assessment

- **Good pairing.** Inter + Georgia is a classic sans/serif combo with excellent readability.
- **Line height is generous.** `line-height: 1.75` on body is comfortable for long-form reading.
- **Inter is only loaded in wght 400-700.** The `css2?family=Inter:wght@400;500;600;700` is correct for the weight range used.
- **JetBrains Mono is never loaded.** Declared in Tailwind config but no Google Fonts link for it. If code blocks show up in articles, they'll fall back to system monospace.

### MINOR issues

- **No `font-display: swap` specified.** The Google Fonts URL doesn't include `&display=swap`, so there may be FOIT (Flash of Invisible Text) on slow connections. Google Fonts defaults to swap nowadays, but being explicit is better.
- **H1 size inconsistency.** Homepage H1 is `text-4xl md:text-5xl` but article H1s are unstyled (prose defaults). The visual weight differs.
- **Category page title is lowercase "technology".** The `capitalize` CSS class works but the category name comes from frontmatter as lowercase — the title tag shows "technology Articles | WhatIs.site" which is bad for SEO.

### Recommendations

- Add `&display=swap` to the Google Fonts URL
- Either load JetBrains Mono from Google Fonts or remove it from the config
- Standardize H1 sizing across homepage, article, and category pages
- Fix category page title to properly capitalize: "Technology Articles" not "technology Articles"

---

## 4. Layout & Spacing

### Assessment

- **Max-width is appropriate.** `max-w-5xl` (64rem / 1024px) for content area is good for readability.
- **Article layout is solid.** Desktop has a sidebar TOC + main content. Mobile collapses TOC into a details/summary accordion. Well done.
- **Homepage card grid works.** 3-column on desktop, stacks nicely on mobile.
- **Footer is well-organized.** 4-column grid with category groups, collapses to 1 column on mobile.

### MAJOR: Category page hero images not loading

- On the category page, most article cards show empty gray boxes instead of hero images
- The `onerror` fallback to `placeholder.svg` doesn't seem to fire correctly on some cards
- This makes category pages look broken

**Fix:** Investigate whether the hero image paths are correct for all articles on category pages. May be a path issue with the `-hero` suffix fix not covering all cases.

### MINOR issues

- **No "back to top" button.** Articles are 2000-5000 words — readers need a way back up.
- **Sticky header has no shadow on scroll.** The header blends into content — adding a subtle shadow on scroll would help.
- **Category page has no pagination.** Technology has 195 articles — they all load at once, which is heavy.
- **Homepage hero section has excessive padding.** `py-16` creates a lot of white space before useful content.

---

## 5. Components

### ArticleCard

- Clean design, good hover state with shadow elevation
- Image aspect ratio is enforced (`aspect-video object-cover`)
- `line-clamp-2` on title and description prevents overflow
- **MINOR:** No loading skeleton or placeholder animation while images load

### FAQ Accordion

- Properly uses `<details>/<summary>` (no JS needed) — great
- Smooth rotation on the chevron icon
- **MINOR:** No `aria-expanded` tracking — screen readers may not announce open/closed state

### Table of Contents

- Desktop sidebar sticky is well-positioned
- Mobile details/summary fallback is good
- **MINOR:** No active-state highlighting for current section while scrolling (would require JS, so acceptable given the no-JS rule)

### Related Articles

- Clean card design with hover border effect
- No hero images shown — intentional (lighter weight), but visually less engaging than the ArticleCards

### Breadcrumbs

- Properly structured with Schema.org BreadcrumbList
- Good truncation on long titles

---

## 6. Accessibility

### Good

- Semantic HTML throughout — `<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`
- ARIA labels on breadcrumbs and TOC navigation
- Color contrast ratios pass WCAG AA
- Images have alt text from frontmatter `heroAlt`
- Skip-to-content not present but header is compact

### MAJOR: Missing skip-to-content link

- No "Skip to main content" link for keyboard users
- First focusable element is the logo, then 6+ nav links before reaching content

**Fix:** Add a visually-hidden skip link as the first element in `<body>`.

### MINOR issues

- Mobile menu hamburger uses `onclick` inline JS — keyboard users can't activate it reliably on some browsers
- FAQ `<details>` elements lack explicit `aria-expanded` (though native details/summary handles this in modern browsers)
- `onerror` on images uses inline JS — if JS is disabled, broken images stay broken (the placeholder SVG fallback won't work)

---

## 7. Performance Indicators

### Good

- Zero client-side JavaScript (except the mobile menu toggle and image onerror — both minimal)
- Hero images use `loading="lazy"` on cards, `loading="eager"` on article hero — correct
- `decoding="async"` on card images
- Google Fonts loaded with `preconnect` hints
- Static site generation means fast TTFB from Vercel CDN

### MAJOR: No image optimization pipeline

- Hero images are raw WebP files with no size variants
- Same full-size image served to mobile and desktop
- No `<picture>` element or `srcset` for responsive images
- 1,607 images at full resolution on category pages with 195 articles = very heavy page

**Fix:** Consider adding `srcset` with thumbnail sizes for cards (400w) and full-size for article pages (720w).

### MINOR

- No `<link rel="preload">` for the hero image on article pages (it's the LCP element)
- Google Fonts CSS is render-blocking (could be loaded with `media="print" onload="this.media='all'"` pattern, but this adds JS)

---

## 8. Summary of Fixes by Priority

### Critical (must fix)

1. **Create favicon set** — favicon.ico, apple-touch-icon.png, site.webmanifest
2. **Create default OG image** — 1200x630 branded social sharing image
3. **Fix category page hero images** — investigate why images aren't loading on category pages
4. **Fix category page title casing** — "Technology Articles" not "technology Articles"

### Major (should fix)

5. **Design a logo mark** — SVG icon + text for the header
6. **Add skip-to-content link** — accessibility requirement
7. **Refresh primary color** — move away from Bootstrap default blue
8. **Add warm accent color** — for CTAs, highlights, visual interest
9. **Investigate category page image loading** — either missing images or path issues
10. **Add responsive image sizes** — srcset for card thumbnails vs full article heroes

### Minor (nice to have)

11. Add `&display=swap` to Google Fonts URL
12. Load or remove JetBrains Mono from config
13. Add back-to-top button on long articles
14. Add subtle shadow on header scroll
15. Add category-specific badge colors
16. Increase `bg-secondary` contrast (`#f1f5f9` instead of `#f8fafc`)
17. Add preload hint for article hero image (LCP)
18. Reduce homepage hero padding
