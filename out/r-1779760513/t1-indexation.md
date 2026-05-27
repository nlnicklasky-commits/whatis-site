# Indexation Diagnostic — WhatIs.site

**Run:** 2026-05-25 · **Method:** repo read + local `npm run build` (1,711 pages, sitemap inspected in `dist/`) · **Scope:** Astro 5 static, 1,620 articles, Vercel.

The headline problem (`data/indexation-audit.md`: 0/200 indexed, 90.5% "unknown to Google") came from a sitemap-vs-canonical slash mismatch. **That defect is now fixed end-to-end.** But "fixed the bug" isn't "fixed indexation." What remains are discovery-velocity problems plus one new self-inflicted issue (uniform `lastmod`) that neuters both the sitemap freshness signal and the IndexNow auto-submit you just shipped.

---

## 1. Current-state verdict — slash/canonical issue

**Verdict: RESOLVED. Verified in built output, all four surfaces agree on the no-slash form.**

I built the site locally and inspected `dist/`. For the smoking-gun URL from the original audit (`/blockchain`):

| Surface | Built value | Source |
|---|---|---|
| Sitemap `<loc>` | `https://whatis.site/blockchain` (no slash) | `dist/sitemap-0.xml` |
| `<link rel="canonical">` | `https://whatis.site/blockchain` | `dist/blockchain/index.html` |
| `<meta property="og:url">` | `https://whatis.site/blockchain` | same |
| JSON-LD `@id` / `mainEntityOfPage.@id` | `https://whatis.site/blockchain` | same |

Corroborating:
- **0** trailing-slash article `<loc>` entries in the sitemap (1,710 `<loc>` total; only `https://whatis.site/` keeps its slash). Verified via `grep -oE '<loc>https://whatis\.site/[a-z0-9-]+/</loc>'` excluding root → 0.
- Fix lives at `astro.config.mjs:38` (`item.url.replace(/\/$/, '')`), committed in `6978b3c`. Canonical built no-slash at `ArticleLayout.astro:13`, emitted at `BaseLayout.astro:27,32`.
- Belt-and-suspenders: `vercel.json:4-9` now 301s `/:path+/` → `/:path+` (`trailingSlash:false`), so an old `/blockchain/` URL 301s to canonical instead of serving a duplicate 200 — retiring the original "Alternate page with proper canonical tag" failure.
- No `<meta name="robots">` on articles → default `index,follow`; `dist/robots.txt` wide open. No accidental noindex.

**Confirm in production (not verifiable from repo):** curl `https://whatis.site/blockchain/` and check it returns `301 → /blockchain`. The original audit found both forms served `200 OK` live; that must now be a 301.

The duplicate-canonical anti-signal is gone. What's left is a discovery problem on a young domain — which the slash fix alone does not solve.

---

## 2. Remaining indexation blockers, ranked by impact

**B1 — Uniform `lastmod` defeats freshness + breaks IndexNow auto-submit (HIGHEST).**
1,615 of 1,620 articles carry an identical `dateModified: "2026-05-12"` (the cleanup batch in `12a4b90`); the other 5 are `2026-05-13`. Evidence: `grep -hoE '^dateModified:' src/content/articles/*.md | sort | uniq -c` → 1615×`2026-05-12`. The sitemap reflects this (`astro.config.mjs:39-42`), so every article advertises the same change date. Two consequences:
- **Sitemap `lastmod` is noise.** Google uses per-URL `lastmod` deltas to prioritize crawl; a wall of identical dates says nothing about which pages to crawl first, so it falls back to its own (near-zero) priors.
- **IndexNow auto-submit misfires.** `indexnow-submit.mjs --auto` submits URLs with `lastmod` within 3 days (`:128`, `parseSitemapUrls(3)`), run on every deploy via the postbuild hook (`3bb1c12`). Result: the next deploy after 2026-05-12/13 submits **all ~1,620** once, then every subsequent deploy submits **0** — one blast then silence, the opposite of the steady drip IndexNow rewards. (IndexNow feeds Bing/Yandex, not Google — see B5.)

**B2 — New-domain crawl budget + thin external discovery (HIGH).**
`data/progress-log.json` (2026-05-13): sitemap submitted & downloaded by Google, `0` indexed of `1690` submitted; 7-day impressions 7, 28-day 150. A domain with no crawl history and (per `seo-audit-findings.md` Root Cause #3) near-zero backlinks crawls a trickle and indexes a fraction of that. The slash fix unblocks discovery but doesn't make it fast — expect slow, linear uptake unless you concentrate signals (B3) and feed Google directly (P0-c). Structural, not a bug.

**B3 — 24% of articles have zero editorial inbound links; deep pagination buries the rest (HIGH).**
From `src/data/link-graph.json` (built via `scripts/build-link-graph.mjs`): avg incoming 11.83, but **388 articles (24.0%) have 0 incoming body links** and **237 (14.7%) have exactly 1**. Those 388 are reachable *only* via category pages.
- Header nav links all 25 category hubs (verified in `dist/blockchain/index.html`) → every category is depth-1. Good.
- But category pages paginate at 30 (`src/pages/category/[category]/[...page].astro:23`): `everyday-concepts` **411 articles = 14 pages**, `science` 247 = 9, `arts-amp-culture` 244 = 9, `technology` 199 = 7. An orphan on page 8 of `everyday-concepts` is **click-depth 3** and shares equity with ~410 siblings — exactly what a budget-constrained crawler skips. Verified orphan `basket-weaving` appears only on `dist/category/arts-amp-culture/index.html` with 0 body inbounds.

**B4 — Single flat sitemap, no segmentation (MEDIUM).**
`dist/sitemap-index.xml` → one `sitemap-0.xml`, all 1,710 URLs. Within spec (<50k), but a flat file gives no per-section indexation telemetry in GSC. Combined with B1's uniform `lastmod`, the Sitemaps report can only show aggregate "1,710 submitted, N indexed" — you can't tell whether the 30 hub/stats pages indexed while the long tail didn't.

**B5 — IndexNow ≠ Google; coverage is real but mistargeted (MEDIUM).**
`indexnow-submit.mjs:8` correctly notes Google doesn't consume IndexNow, so the postbuild auto-submit helps Bing/Yandex only — nothing for the actual problem (Google indexation). The Google-side equivalent isn't wired up: `indexation-audit.mjs` does read-only URL Inspection, but there's no use of the GSC **Indexing API** to request crawls and no programmatic sitemap ping. `seo-audit-findings.md` fix #3 recommended this; it hasn't shipped.

**B6 — Thin/duplicate signals: low risk, two minor flags (LOW).**
- Slug artifact: `arts-amp-culture`, `health-amp-wellness`, `food-amp-drink`, `biology-amp-medicine` carry a literal `amp` (HTML-entity bleed). URLs resolve consistently, so not a blocker, but an ugly canonical that weakens the URL as a relevance signal.
- Page-2+ category pages self-canonicalize to `/category/x/2` (verified `dist/category/technology/2/index.html`) with `rel=prev/next` — correct, not a blocker.
- No evidence of thin content blocking indexation; the single "Crawled - currently not indexed" in the original audit is noise for a new site.

---

## 3. Prioritized fix list

### P0 — do these now (unblock velocity)

**P0-a · Give articles real, varied `dateModified` (fixes B1).**
- *Problem:* uniform `2026-05-12` kills sitemap freshness and makes IndexNow `--auto` fire once then never.
- *Evidence:* `grep -hoE '^dateModified:' src/content/articles/*.md | sort | uniq -c` → 1615× `2026-05-12`; consumed at `astro.config.mjs:39`, `indexnow-submit.mjs:128`.
- *Change:* set `dateModified` to the real last-meaningful-edit date per article. If unknown, back-fill from git history of each file rather than one batch date:
  ```bash
  # per article, last commit date that touched it:
  git log -1 --format=%cs -- src/content/articles/<slug>.md
  ```
  Apply as a one-time frontmatter rewrite (do NOT touch content). Going forward, only bump `dateModified` when content actually changes.
- *Impact:* restores per-URL crawl prioritization; turns the IndexNow drip back on (real edits → recent `lastmod` → submitted).
- *Effort:* ~1–2 hrs scripted.

**P0-b · Seed IndexNow once, keep `--auto` (supports B5 for Bing).**
- *Problem/evidence:* one-time mass submit then silence; `indexnow-submit.mjs:145-148` (`--all`), postbuild `--auto` (`3bb1c12`).
- *Change:* after P0-a, run `INDEXNOW_KEY=… node scripts/seo/indexnow-submit.mjs --all` once to seed Bing/Yandex, then let postbuild `--auto` handle deltas. Confirm `INDEXNOW_KEY` is set in Vercel (it is *not* set locally — postbuild logged `INDEXNOW_KEY not set, skipping`) and that `public/2979ab5f2da74b60ab6107c684856a9e.txt` matches it.
- *Impact:* Bing/Yandex coverage. *Effort:* 15 min + Vercel env check.

**P0-c · Wire up Google Indexing API to fast-track the priority set (fixes the Google half of B5).**
- *Problem/evidence:* nothing nudges Google directly; only read-only `indexation-audit.mjs` exists. `seo-audit-findings.md:97-99` recommended this; unshipped.
- *Change:* add a sibling script (scope `.../auth/indexing`, reusing the service-account JSON from `indexation-audit.mjs:29`) that POSTs `URL_UPDATED` to `https://indexing.googleapis.com/v3/urlNotifications:publish`. Officially for JobPosting/BroadcastEvent, but it reliably triggers a crawl. Budget 200/day; start with the ~30 hub/stats/tool pages + top ~170 articles. Do **not** bulk-submit all 1,620.
- *Impact:* the biggest lever on Google indexation speed for a new site — converts "unknown/Discovered" into "Crawled" within days for the submitted set. *Effort:* ~2 hrs (script + scope grant).

### P1 — within the next sprint (concentrate link equity)

**P1-a · Add editorial inbound links to the 388 zero-inbound articles (fixes B3).**
- *Problem/evidence:* 24% depend on deep pagination for discovery; `link-graph.json` → 388 zero-incoming, 237 one-incoming.
- *Change:* programmatic pass inserting 1–2 contextual body links into each orphan from topically-related articles (candidate pool = `relatedArticles` frontmatter + category). Ensure every orphan is *listed as related by* ≥2 other articles, since `RelatedArticles` renders `frontmatter.relatedArticles`. Target: 0 articles with <2 editorial inbounds; re-run `scripts/build-link-graph.mjs` to verify.
- *Impact:* pulls the long tail to click-depth 2 with real equity flow — directly addresses the 90% "unknown to Google."
- *Effort:* medium (1–2 days, scripted + review).

**P1-b · Shrink category click-depth (supports B3).**
- *Problem/evidence:* `everyday-concepts` = 14 pages (`[...page].astro:23` `pageSize: 30`); orphans at depth 3.
- *Change:* add a flat A–Z index page per large category linking every article on one crawlable page (depth-2, all siblings) — higher ROI than just raising `pageSize`. Longer term, split the 411-article `everyday-concepts` catch-all into real sub-categories.
- *Impact:* max click-depth 3→2 for the long tail. *Effort:* medium.

**P1-c · Segment the sitemap (fixes B4).**
- *Problem/evidence:* `dist/sitemap-index.xml` → single `sitemap-0.xml` (1,710 URLs); no per-section telemetry.
- *Change:* `@astrojs/sitemap` already emits an index; add `entryLimit: 250` to the `sitemap()` config in `astro.config.mjs`, then submit each child sitemap in GSC.
  ```js
  sitemap({ entryLimit: 250, serialize(item) { /* unchanged */ } })
  ```
- *Impact:* GSC reports indexation per chunk so you can see which content type Google accepts and target P1-a there. *Effort:* low.

### P2 — cleanup / measurement

**P2-a · Fix `amp` slug artifact (B6).** Rename `arts-amp-culture`→`arts-culture` etc. in `src/data/categories.json` + frontmatter, with `vercel.json` 301s old→new. Low-medium effort; do *after* P0/P1 to avoid churning URLs mid-recovery.

**P2-b · Re-baseline.** ~2–3 weeks after P0, run `SAMPLE=500 node scripts/seo/indexation-audit.mjs` and append a row via `weekly-progress.mjs` to `data/progress-log.json`. Watch coverage shift "unknown" → "Discovered" → "Submitted and indexed." Target: >40% indexed at 30 days, >75% at 60 (more conservative than `seo-audit-findings.md`'s 50/80, given the new-domain ceiling).

---

### Bottom line
The slash/canonical bug is genuinely fixed and verified in built output — necessary but not sufficient. Fastest path to indexation now: (1) real `dateModified` dates so freshness + IndexNow work, (2) the Google Indexing API to force crawls on a no-history domain, (3) kill the 388 link orphans so equity reaches the long tail. Everything else is telemetry and polish.
