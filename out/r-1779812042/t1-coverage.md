# Image Asset Coverage Matrix — WhatIs.site

**Audit date:** 2026-05-26
**Scope:** every article in `src/content/articles/*.md`, cross-referenced against every file in `public/images/articles/`
**Method:** script-driven, real `fs.statSync`/`existsSync` checks — no estimates
**Script:** `scripts/audits/image-coverage-matrix.mjs` (read-only; writes gitignored `.audit-image-coverage.json` scratch)
**Articles audited:** 1,620
**Image files on disk:** 4,861 (4,860 `.webp` + 1 `placeholder.svg`)

## Conventions applied (from `scripts/seo/gen-image-variants.mjs`)

- `heroImage` frontmatter points at `/images/articles/<slug>-hero.webp`.
- Responsive variants are derived by appending `-400` / `-800` to the **full base** (i.e. `<slug>-hero-400.webp`, `<slug>-hero-800.webp`), matching the variant generator's `base = file.replace(/\.webp$/,'')` then `${base}-${w}.webp` logic. The task's "`<base>-400.webp` where heroImage is `<base>.webp`" resolves to this exact filename for every article.
- `placeholder.svg` is the layout fallback and is treated as referenced (never an orphan).

---

## 1. Headline coverage table

Across all **1,620** articles:

| Asset | Present | % | Missing |
|---|---|---|---|
| Hero image (`<slug>-hero.webp`) | 1,620 | 100.0% | 0 |
| 400w variant (`<slug>-hero-400.webp`) | 1,620 | 100.0% | 0 |
| 800w variant (`<slug>-hero-800.webp`) | 1,620 | 100.0% | 0 |
| ≥1 in-content/inline body image | 0 | 0.0% | 1,620 |

Every article has a complete responsive hero set (base + 400w + 800w). No article carries any inline/body markdown image.

**Independent cross-check (filesystem `grep`/`ls`, not the script):**
- `*-hero.webp` files: 1,620 — matches article count exactly.
- `*-hero-400.webp` files: 1,620.
- `*-hero-800.webp` files: 1,620.
- 1,620 × 3 = 4,860 webp + 1 svg = **4,861 total**, the exact on-disk count. No surplus, no shortfall.
- Files not matching the `-hero`/`-hero-400`/`-hero-800` pattern: only `placeholder.svg`.
- `heroImage` frontmatter values not ending in `-hero.webp`: **0** (all 1,620 conform).

---

## 2. Exact gap lists

- **Articles missing a hero image:** **0.** Every `heroImage` path resolves to a real file on disk. No article falls back to `placeholder.svg`.
- **Articles missing a 400w variant:** **0.** Every `<slug>-hero-400.webp` exists.
- **Articles missing an 800w variant:** **0.** Every `<slug>-hero-800.webp` exists.

There are no gaps to enumerate. The full per-article result set (all 1,620 rows, each flagged hero/400/800 present) is written to `.audit-image-coverage.json` under `gaps.missingHero`, `gaps.missing400`, and `gaps.missing800` — all three arrays are empty (length 0). The variant generator's idempotent pass has covered the entire corpus.

---

## 3. In-content image inventory

- **Articles with ≥1 body image:** **0** of 1,620 (0.0%).
- **Articles to list:** none.

Detection used the standard markdown image pattern `![alt](url)` scanned against each article **body only** (frontmatter stripped at the closing `---`). An independent recursive `grep -rE '!\[[^]]*\]\([^)]*\)'` across `src/content/articles/` returned **0** matches, confirming the script. WhatIs.site articles are hero-image-only by construction — all visual assets are the frontmatter hero plus its two responsive variants; no inline figures, diagrams, or embedded images appear in any body.

---

## 4. Orphans & storage

- **Orphan files:** **0.** Every file in `public/images/articles/` is referenced — each `-hero.webp` by an article's `heroImage`, each `-400`/`-800` variant by the derived responsive set, and `placeholder.svg` by the layout fallback. Nothing is unreferenced.
- **Orphan storage:** 0 MB.

**Total image storage:** **168.91 MB** (script total over 4,861 files; `du`-style byte sum of the 4,860 webp = 177,113,862 bytes ≈ 168.91 MiB — the two agree, the difference is MB vs MiB framing).

Storage by variant tier (real byte sums via `find -printf %s`):

| Tier | Files | Storage |
|---|---|---|
| Hero base (`-hero.webp`, ~1344w originals) | 1,620 | 101.54 MB |
| 800w variant (`-hero-800.webp`) | 1,620 | 47.41 MB |
| 400w variant (`-hero-400.webp`) | 1,620 | 19.96 MB |
| `placeholder.svg` | 1 | 0.7 KB |
| **Total** | **4,861** | **~168.9 MB** |

The full-resolution originals account for 60% of image weight; the 400w cards are the lightest tier at ~12 MB worth of savings already realized by serving them instead of the originals.

---

## Bottom line

Image asset coverage is **complete**: 100% hero, 100% 400w, 100% 800w across all 1,620 articles, zero orphans, zero inline images by design. The responsive variant generation is fully built out and the asset directory is exactly `articles × 3 + placeholder` with no drift. Full machine-readable detail (empty gap arrays included) is in `.audit-image-coverage.json`.

WORK_COMPLETE — deliverable: `out/r-1779812042/t1-coverage.md`
