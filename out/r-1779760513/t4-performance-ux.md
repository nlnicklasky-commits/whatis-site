# Performance, UX & Accessibility Audit — WhatIs.site

**Run:** r-1779760513 / t4 · **Scope:** Core Web Vitals, design/UX, WCAG · **Method:** repo read + `npm run build` (83.7s, succeeded) + `dist/` inspection. All page-weight and asset claims below are measured from the built output, not estimated from source.

**Headline:** A genuinely fast site. Zero client JS ships (`find dist -name "*.js"` → **0 files**), the hero LCP element is correctly sized and prioritized, fonts are self-hosted with `font-display: swap`, and ad slots reserve space. Remaining wins are narrow but real: duplicate render-blocking CSS, no responsive `srcset` (so `sizes` is dead), heavy category pages (~1.7MB of oversized images), no hero `preload`, unguarded `scroll-behavior: smooth`. The March `data/design-audit.md` is stale — favicons, OG fallback, skip link, logo, and self-hosted fonts are all already shipped.

---

## 1. Performance — Core Web Vitals posture

### LCP — good, two cheap wins left
The article hero is the LCP element and is handled well (`ArticleLayout.astro:89-100`): explicit `width="1200" height="675"`, `loading="eager"`, `fetchpriority="high"`, `decoding="async"`. Confirmed in built HTML (`dist/abacus/index.html`). Fonts are self-hosted WebP-era woff2 (`public/fonts/inter-{400,700}.woff2`, 23-24KB each) with `<link rel="preload" as="font">` and `font-display: swap` (`global.css:5-33`) — no Google Fonts round-trip, no FOIT-induced LCP delay.

Two gaps:
- **No `<link rel="preload" as="image">` for the hero.** The browser only discovers it after parsing `<body>`. Preloading it in `<head>` shaves the request off the critical path. (P1)
- **Render-blocking CSS is duplicated.** Every page links **two** near-identical stylesheets — `/_astro/_slug_.CLZ3rYEY.css` (41KB) **and** `/_astro/_slug_.fu8aNN65.css` (42KB). Both begin with the full Tailwind preflight and both contain `prose` rules (measured: `grep -c prose` = 1 in each). That's ~85KB raw / ~14KB gzip across **two blocking requests** where one would do — confirmed identical link set on `dist/index.html`, `dist/abacus/index.html`, and `dist/category/technology/index.html`. (P1)

### CLS — strong
- Hero and cards carry `width`/`height` + `aspect-video` → reserved boxes, no reflow (`ArticleCard.astro:28-38`, `ArticleLayout.astro:89-100`).
- Ad slots reserve `min-height` per position before load (`global.css:81-96`) — good CLS hygiene even though `PUBLIC_AD_NETWORK=none` today.
- `[id] { scroll-margin-top: 80px }` (`global.css:65-67`) keeps anchor jumps clean under the sticky header.
- Residual risk: `font-display: swap` can cause a small layout shift between Georgia fallback and Inter on headings. Low severity; acceptable.

### INP — near-perfect, one fix
Zero hydration, zero framework JS. The only client JS is two inline handlers: the mobile-menu `onclick` (`Header.astro:40`) and image `onerror` (`ArticleCard.astro:37`, `ArticleLayout.astro:99`). Interaction latency is effectively a non-issue.

One concern: `html { scroll-behavior: smooth }` is global and **not** wrapped in `prefers-reduced-motion` (measured: `grep -c prefers-reduced-motion` across all `dist/_astro/*.css` = **0**). On long articles, TOC clicks animate a multi-thousand-pixel scroll that can feel laggy and is a vestibular-accessibility problem. (P1, also a11y)

### Image weight — the biggest lever
- Heroes are single-resolution **1344×768 WebP, avg 64KB** across a 50-file sample (1,615 hero files total). Article pages display at ~720px and cards at ~400px, but **the same 1344px file is served to every viewport.**
- **No `srcset` is emitted anywhere** — measured `grep -c srcset` = 0 on article, category, and home pages. The `sizes="(max-width: 640px) 100vw, … 720px"` attributes on both `<img>` tags are therefore **inert**: `sizes` does nothing without `srcset`. Misleading and wasteful.
- **Category pages are heavy.** `dist/category/technology/index.html` references **30 distinct hero WebPs totaling ~1.7MB** (measured), every one a 1344px file rendered into a 400px card. `loading="lazy"` defers below-fold ones, but the first row (LCP-adjacent) still pulls full-size art. (P0 for category LCP/data)
- `astro:assets` is **not** used anywhere (`grep -rl astro:assets src` → none), and `astro.config.mjs:27` sets `imageService: true` on the Vercel adapter but nothing consumes it. The optimization pipeline is configured and idle.

### Concrete fixes — ranked by impact

**(P0) Generate a card-size variant + emit real `srcset`.** Biggest data + LCP win, especially on category pages. Pre-generate 400w and 800w WebP variants offline (one-time Sharp script), then:
```astro
<!-- ArticleCard.astro -->
<img
  src={data.heroImage}
  srcset={`${data.heroImage.replace('.webp','-400.webp')} 400w, ${data.heroImage.replace('.webp','-800.webp')} 800w, ${data.heroImage} 1344w`}
  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
  width="400" height="225" loading="lazy" decoding="async"
  class="w-full aspect-video object-cover bg-gray-100"
  onerror="this.onerror=null;this.removeAttribute('srcset');this.src='/images/articles/placeholder.svg'" />
```
Cuts the ~1.7MB technology page to roughly 300-400KB of card art. Note the `onerror` must also clear `srcset`, or the browser re-picks a variant and the placeholder never shows.

**(P1) Preload the article hero.** In `ArticleLayout.astro`, add to the `head` slot:
```astro
<link slot="head" rel="preload" as="image" href={frontmatter.heroImage}
      imagesrcset={`${frontmatter.heroImage.replace('.webp','-800.webp')} 800w, ${frontmatter.heroImage} 1344w`}
      imagesizes="(max-width:1024px) 90vw, 720px" />
```

**(P1) Collapse the duplicate stylesheet.** Two blocking CSS files for one design system is an Astro CSS-splitting artifact. Set in `astro.config.mjs`:
```js
export default defineConfig({
  // …
  build: { inlineStylesheets: 'auto' },
  vite: { build: { cssCodeSplit: false } },
});
```
`cssCodeSplit: false` merges to one file; `inlineStylesheets: 'auto'` inlines it when small (these gzip to ~7KB), removing the blocking request entirely. Verify with `grep -c '<style' dist/abacus/index.html` afterward.

**(P1) Guard motion:**
```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { transition-duration: .01ms !important; }
}
```

---

## 2. UX / Design

**What works.** Readability is the strong suit: Georgia body at `line-height: 1.75` (`global.css:53-58`), Inter headings, `max-w-5xl` column, `prose prose-lg` rhythm. Navigation is sensible — sticky header (6 categories + Stats/Tools/More) and a 5-column footer surfacing ~25 categories (good link discoverability for humans *and* crawlers). The TOC is dual-mode: sticky desktop sidebar (`TableOfContents.astro`) and a `<details>` mobile accordion (`ArticleLayout.astro:115-128`), both pure CSS. Related Articles (up to 5) and the `<details>`-based FAQ round out the page. Category pagination at 30/page (`category/[category]/[...page].astro:23`) fixes the "195 articles at once" problem the old audit flagged.

**Weak spots:**
- **Internal-link discoverability inside body copy is invisible to this audit but is the single biggest engagement lever.** CLAUDE.md mandates 5-10 in-text internal links per article; nav/footer/related give crawl paths but the in-prose links are what keep humans clicking. Worth a content-side spot-check (out of scope here, flagging for t-content).
- **No "back to top" on 2-5K-word articles.** A pure-CSS option exists — a fixed anchor link to `#main-content` shown only on small screens — no JS needed. (P2)
- **Related Articles cards are text-only** while latest/category cards show art. Intentional for weight, but the visual drop-off at article end reduces click-through. Consider thumbnails using the new 400w variant. (P2)
- **`Header.astro:31` "More →" link has near-invisible `text-gray-400`** and an arrow-only mobile-menu affordance. Minor polish. (P2)
- **Mobile menu depends on JS** (`onclick`, `Header.astro:40`). With JS disabled the menu can't open — acceptable given the zero-JS ethos, but a `<details>`/`<summary>` rewrite would make it work JS-free and fix the a11y issue below. (P1, see §3)

---

## 3. Accessibility — concrete WCAG issues

**Already solid:** semantic landmarks (`<header>`/`<main id="main-content">`/`<footer>`/`<nav>`), a working skip link (`BaseLayout.astro:94-96`, verified in `dist`), `aria-label` on the TOC nav and breadcrumbs, decorative logo correctly `alt=""` (`Header.astro:16`), hero `alt` from `heroAlt` frontmatter, `aria-current="page"` on pagination, heading order H1→H2→H3 with no skips.

**Issues to fix:**

- **(P1) Mobile menu button is not keyboard/AT-accessible — WCAG 4.1.2 (Name, Role, Value) + 2.1.1 (Keyboard).** `Header.astro:37-45` is a `<button>` whose only behavior is an inline `onclick` toggling a `hidden` class. It has no `aria-expanded`, no `aria-controls`, and the label never changes from "Open menu" when open. Screen-reader users get no open/closed state. **Fix:** convert to a JS-free disclosure:
  ```astro
  <details class="md:hidden">
    <summary class="p-2 text-gray-600 list-none cursor-pointer" aria-label="Menu">
      <svg class="w-6 h-6" …>…</svg>
    </summary>
    <nav class="border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-3 text-sm">…</nav>
  </details>
  ```
  Native `<details>` exposes expanded state to AT for free and works without JS.

- **(P2) `text-gray-400` on small text fails AA — WCAG 1.4.3.** Used for the "(Updated …)" note (`ArticleLayout.astro:81`), footer copyright, article-count line (`CategoryLayout.astro:75`), and "More →" link (`Header.astro:31`). Gray-400 `#9ca3af` on white ≈ **2.8:1**, below the 4.5:1 threshold for sub-18px text. Move to `text-gray-500` (≈ 4.8:1) or darker.

- **(P2) Category-badge contrast is thin — WCAG 1.4.3.** `.category-badge` is `bg-blue-50 text-blue-700` (`global.css:77-79`). Blue-700 on blue-50 ≈ **4.8:1** — passes AA but with no margin on small text. Bump to `text-blue-800` for headroom.

- **(P2/borderline) FAQ disclosures, JS-dependent `onerror`, and the unguarded smooth-scroll** — native `<details>` (`FAQ.astro:13`) exposes state to modern AT so the FAQ is borderline; the `onerror` fallback (`ArticleCard.astro:37`, `ArticleLayout.astro:99`) only fails on the rare missing-image + no-JS combo; smooth-scroll is WCAG 2.3.3 and is fixed by the §1 motion guard.

---

## 4. Priority summary

| # | Issue | Priority | Effort | File(s) |
|---|-------|----------|--------|---------|
| 1 | Oversized images on cards; no `srcset` (sizes inert; ~1.7MB/category page) | **P0** | M (Sharp variant script + 2 component edits) | `ArticleCard.astro:28-38`, `ArticleLayout.astro:89-100` |
| 2 | Duplicate render-blocking CSS (~85KB / 2 requests) | **P1** | S (config) | `astro.config.mjs` |
| 3 | No hero `preload as=image` | **P1** | S | `ArticleLayout.astro` head slot |
| 4 | Mobile menu not keyboard/AT accessible | **P1** | S (→ `<details>`) | `Header.astro:37-59` |
| 5 | `scroll-behavior: smooth` unguarded (a11y + INP) | **P1** | S | `global.css` |
| 6 | `text-gray-400` small text fails AA contrast | **P2** | S | `ArticleLayout.astro:81`, `CategoryLayout.astro:75`, `Header.astro:31`, `Footer` |
| 7 | Category-badge contrast thin | **P2** | S | `global.css:77-79` |
| 8 | Related-articles text-only / no back-to-top | **P2** | S-M | `RelatedArticles.astro`, `ArticleLayout.astro` |
| 9 | JS-dependent `onerror` fallback | **P2** | S | card + article `<img>` |

**Effort:** S = under 1h, M = half-day. Items 2-5 are quick wins worth bundling into one PR. Item 1 is the only meaningful build-pipeline change and carries the largest user-facing payoff (category-page data + LCP). The `data/design-audit.md` "criticals" (favicon, OG, skip link, logo, fonts) are all **already resolved** in the current code and should be struck from any open tracker.
