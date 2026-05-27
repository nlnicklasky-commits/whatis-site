# Alt-Text & Image SEO Audit — WhatIs.site

**Scope:** 1,620 articles in `src/content/articles/*.md`, 4,861 image assets in `public/images/articles/`, and the built `dist/` sitemap.
**Method:** Custom Node scan (`scripts/audits/alt-seo-audit.mjs`, gitignored scratch; full JSON at `.audit-alt-seo.json`), cross-referenced with the existing `scripts/audits/image-audit.mjs`. Rendering verified against `ArticleLayout.astro` (hero) and `ArticleCard.astro` (card), and sitemap config in `astro.config.mjs`.
**Date:** 2026-05-26

---

## Verdict on the ed9c630 rewrite

The May-12 pass (commit `ed9c630`, "rewrite all 1,615 hero alt texts from templated to unique") **largely held, but introduced a new defect class.**

- **0** articles still carry the old `"Editorial photograph representing the concept of …"` template. The template is fully eradicated.
- **0** missing/empty `heroAlt`. Every article has alt text.
- **0** exact duplicates across the corpus — alts are genuinely unique.
- **But:** the rewrite took the description's first sentence by splitting on the first period (`.`). It split inside abbreviations and decimals, leaving **8 alts truncated mid-word** ("…study of U", "…racing 26"). And because alts were sourced from the *description*, **26.5% (430) exceed the ~125-char alt ceiling** and **none describe the actual image** — they restate the topic definition. Details below.

---

## 1. Alt-Text Coverage & Quality

| Check | Count | % of corpus |
|---|---|---|
| Missing / empty `heroAlt` | **0** | 0% |
| Under ~15 chars | **0** | 0% |
| Over ~125 chars (too long) | **430** | 26.5% |
| Still matching old template | **0** | 0% |
| Exact duplicates (cross-article) | **0** | 0% |
| Keyword-stuffed (slug verbatim / token ≥3×) | **0 true positives** | 0% |
| Truncated mid-abbreviation/number | **8** | 0.5% |

**Length distribution** (chars): min 38, mean 101.9, max 159. Buckets — `<15`: 0 · `15–39`: 2 · `40–79`: 421 · `80–125`: 767 · `>125`: **430**.

**Keyword-stuffing:** No genuine stuffing. The heuristic flagged 11 candidates for repeating a token ≥3× (e.g. `card-games` repeats "card", `board-games` repeats "game"), but each reads as natural prose — the repetition is the topic noun, not stuffing. No alt is just the slug words verbatim. Clean.

### Worst offenders + suggested rewrites

The two worst classes are **truncation** (broken, P0) and **over-length** (P1). Rewrites are written as *image descriptions* — what a sighted user would see — not topic restatements (see §2).

**A. Truncated mid-word (P0 — these are broken fragments):**

| Slug | Current `heroAlt` (broken) | Suggested rewrite |
|---|---|---|
| `presidential-history` | `"Presidential history is the study of U"` | `"Portrait gallery of past U.S. presidents framed on a wall"` |
| `marathon-running` | `"Marathon running is the sport of racing 26"` | `"Runners crossing a city marathon finish line at the 26.2-mile mark"` |
| `chinese-language` | `"Chinese is a family of related languages spoken by over 1"` | `"Hand-painted Chinese logographic characters on rice paper"` |
| `english-language` | `"English is a global language spoken by over 1"` | `"Open English dictionary page with a magnifying glass over text"` |
| `cold-war-history` | `"Cold War history covers the 45-year geopolitical standoff between the U"` | `"Divided Cold War-era city wall with barbed wire and a watchtower"` |
| `state-government` | `"State government is the level of government that manages affairs within a U"` | `"State capitol building with a domed rotunda under a clear sky"` |
| `the-history-of-technology` | `"The history of technology tracks how human tool-making evolved from stone axes to smartphones across 3"` | `"Timeline display of tools from a stone hand-axe to a modern smartphone"` |
| `cuban-history` | `"Cuban history spans from the indigenous Taino people through Spanish colonialism, U"` | `"Colorful colonial-era buildings lining a street in Old Havana"` |

**B. Over-length (P1 — sample of the longest of 430):**

| Slug | Len | Current `heroAlt` (truncated for display) | Suggested rewrite |
|---|---|---|---|
| `african-history` | 154 | `"African history spans millions of years of human development, ancient civilizations, empires, colonialism, and independence movements across the continent"` | `"Ancient stone ruins on the African savanna at golden hour"` |
| `allergies` | 153 | `"Allergies are immune system overreactions to normally harmless substances like pollen, food, or pet dander, causing symptoms from sneezing to anaphylaxis"` | `"Person sneezing into a tissue surrounded by airborne pollen"` |
| `alchemy` | 151 | `"Alchemy was an ancient practice blending proto-chemistry, philosophy, and mysticism aimed at transforming base metals into gold and finding immortality"` | `"Antique alchemist's workbench with glass flasks and aged manuscripts"` |
| `agile-software-development` | 148 | `"Agile software development explained: its origins, core values, frameworks like Scrum and Kanban, and why most tech teams have adopted it since 2001"` | `"Sticky-note kanban board covered in colored task cards"` |
| `acupuncture` | 142 | `"Acupuncture is a traditional Chinese medical practice that inserts thin needles into specific body points to treat pain and various conditions"` | `"Fine acupuncture needles placed along a person's back"` |

Why this matters: WCAG and image-search guidance both favour concise (~80–125 char) descriptions. 430 alts running 126–159 chars get truncated by screen readers and add nothing Google can't read from the title/description already.

---

## 2. Accessibility Check

**Decorative images — correct.** The site logo is treated correctly:
- `src/components/Header.astro:16` → `<img src="/logo.svg" alt="" width="28" height="28" …>` paired with adjacent visible text `{siteName}` in the same link.
- `src/components/Footer.astro:27` → `<img src="/logo.svg" alt="" …>` likewise paired with visible text.

Empty `alt=""` is the correct WCAG treatment for a decorative logo whose meaning is already conveyed by adjacent text. No change needed.

**In-content images — none, as expected.** Body scan of all 1,620 markdown files found **0 markdown (`![]()`) and 0 HTML (`<img>`) images** in article bodies. There are no missing-alt in-content images because there are no in-content images. Confirmed.

**The real accessibility gap: alts describe the *topic*, not the *image*.** Every hero `heroAlt` is the article's definition sentence ("Cybersecurity protects systems, networks, and data from digital attacks"), not a description of the photograph a sighted user sees. A screen-reader user hears a textbook sentence that duplicates the H1/intro they're about to read, and learns nothing about the visual. Effectively **0 of 1,620** alts describe image content. The 12 alts that *contain* visual words ("image", "illustration", e.g. `electron-microscopy`, `illustration`) match only because the topic itself is visual — not because they describe the hero.

This isn't a hard WCAG failure (the images are arguably decorative editorial photos, so generic-but-relevant alt is tolerable), but it is a missed image-SEO and accessibility-quality opportunity. Hero photos are stock-style editorial images; alt should say what's *in the frame*. The rewrites in §1 model this.

**Fallback alt behaviour — acceptable.** Both layouts use `onerror="…this.src='/images/articles/placeholder.svg'"`. The placeholder swap keeps the original `alt`, so a missing hero still announces meaningful text rather than a broken-image label. Fine.

---

## 3. Technical Image SEO

**Filenames — descriptive, no defects.** All 4,860 WebP assets follow `{slug}-hero.webp` / `{slug}-hero-400.webp` / `{slug}-hero-800.webp`. **0** generic names (no `IMG_*`, `DSC*`, `screenshot*`, `untitled*`). Filenames carry the topic keyword — good for image search.

**Dimensions / CLS — solid.** Hero `<img>` (`ArticleLayout.astro:98-99`) sets explicit `width="1200" height="675"`; card (`ArticleCard.astro:33`) sets `width="400" height="225"`. Both add `aspect-video object-cover`. Explicit intrinsic dimensions + aspect ratio means the browser reserves layout space → no CLS from hero/card images.

**Format — WebP everywhere.** Format distribution: **`.webp` ×4,860, `.svg` ×1** (the logo/placeholder). **0** PNG/JPEG. No legacy-format weight to recover.

**File weight.** Total image storage **168.9 MB**. Largest offenders:

| File | Size |
|---|---|
| `formal-languages-hero.webp` | 266.6 KB |
| `snowboarding-hero.webp` | 247.6 KB |
| `the-history-of-technology-hero.webp` | 228.6 KB |
| `classical-mechanics-hero.webp` | 224.6 KB |
| `topography-hero.webp` | 223.3 KB |
| `railroad-history-hero.webp` | 221.5 KB |
| `nutrition-hero.webp` | 215.6 KB |
| `lumberjacking-hero.webp` | 213.8 KB |

These are the full-size 1344px masters. At 215–267 KB they're heavier than ideal for a 1344w WebP (a well-tuned hero of that width should land ~120–180 KB), but the **preload + srcset** machinery means most viewports never fetch the master — phones get the 400/800 variant. Low priority; re-encode the top ~30 only if LCP regresses.

**Loading strategy — correct.** Hero: `loading="eager" fetchpriority="high" decoding="async"` plus a `<link rel="preload" as="image" … fetchpriority="high">` in `<head>` (`ArticleLayout.astro:28-30`). Cards: `loading="lazy" decoding="async"`. Eager+preload for the LCP hero, lazy for below-fold cards — textbook.

**srcset — present and complete.** Added last session and verified intact. Both layouts emit a 3-step srcset (`-400.webp 400w, -800.webp 800w, {master} 1344w`) with matched `sizes`. The preload uses `imagesrcset`/`imagesizes`. Asset check: **0 missing `-400`/`-800` variants** — every one of the 1,620 heroes has all three sizes on disk. srcset is fully wired.

**Image sitemap — MISSING (the one real technical gap).** `astro.config.mjs` configures `@astrojs/sitemap` with `entryLimit: 250` and a `serialize()` that only rewrites trailing slashes and injects `lastmod`. I built/inspected `dist/`: 7 URL sitemaps (`sitemap-0..6.xml`) of 250 URLs each plus `sitemap-index.xml`. The `xmlns:image` namespace **is declared** in each file (boilerplate), but there are **0 actual `<image:image>` entries anywhere** (`grep -o '<image:image>' dist/*.xml` → 0). So hero images are **not** submitted to Google Image search via the sitemap. Fix is in `serialize()`: attach an `images:[{ url: <absolute heroImage> }]` array per article URL by extending the `dateMap` build to also capture `heroImage`. This would expose 1,620 images to image search at zero content cost.

---

## Prioritized Fix List

**P0 — broken alt (ship today, ~8 edits)**
1. Repair the **8 truncated `heroAlt`** fragments (`presidential-history`, `marathon-running`, `chinese-language`, `english-language`, `cold-war-history`, `state-government`, `the-history-of-technology`, `cuban-history`). These are mid-word fragments ("…study of U") that read as errors to crawlers and screen readers. Use the §1A rewrites.

**P1 — image discoverability & alt length**
2. **Add the image sitemap extension** in `astro.config.mjs` `serialize()` — emit `<image:image>` per article URL (extend `dateMap` to carry `heroImage`, then set `item.images`). Surfaces 1,620 heroes to Google Images. (Verify post-build with `grep -o '<image:image>' dist/*.xml`.)
3. **Trim the 430 over-length alts** to ~80–125 chars. Best done as the same pass as #4 — re-derive alt as an *image description* rather than truncating the definition.

**P2 — quality polish (optional, high-effort)**
4. **Rewrite alts to describe image content, not the topic.** Currently 0/1,620 describe the photo. A scripted pass over the hero set (or vision-model captioning) would lift accessibility and image-SEO relevance. Model the §1 rewrites. Batch-edit only; never touch article bodies.
5. **Re-encode the ~30 heaviest masters** (>200 KB) to ~150 KB target *only if* LCP shows regression. srcset already shields most users, so this is the lowest-value item.

No action needed: template eradication (done), duplicates (none), missing/short alt (none), in-content alt (no body images), filenames (descriptive), WebP format (100%), width/height (set), loading strategy (correct), srcset (complete), decorative logo `alt=""` (correct).

---

**Evidence trail:** `scripts/audits/alt-seo-audit.mjs` (scan) → `.audit-alt-seo.json` (data); `git show ed9c630`; `ArticleLayout.astro:94-106` & :28-30; `ArticleCard.astro:28-39`; `Header.astro:16`, `Footer.astro:27`; `astro.config.mjs:31-48`; `dist/sitemap-{0..6}.xml`.

WORK_COMPLETE
