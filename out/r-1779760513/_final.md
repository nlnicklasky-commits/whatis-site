# WhatIs.site — Improvement Roadmap

**Run:** r-1779760513 · **Date:** 2026-05-25 · **Brief:** "lets improve this site" (scoped to all four focus areas; output = diagnostic roadmap, no shipping)
**Method:** 5 specialist audits, each grounded in repo reads + a local `npm run build` and re-run audit scripts. All findings carry file:line or measured evidence.

---

## Executive summary

WhatIs.site is in better shape than its traffic suggests. The corpus (1,620 articles) is **well-built**: humanization rules are fully enforced (0 banned-word hits across all articles), schema is complete and correct (Article + FAQPage + BreadcrumbList), FAQs are a genuine GEO asset, the site ships **zero client JS**, and the trailing-slash canonical bug that caused the original indexation crisis is **verified fixed end-to-end** in built output. The March design-audit "criticals" are all already resolved.

So the problem isn't quality — it's **discovery**. Google knows ~2% of the site, and the binding constraints are now: **(1) zero domain authority** (no one links to the site, so Google won't spend crawl budget on it), and **(2) a starved internal link graph** (388 articles have no inbound editorial links, found independently by three of the five audits). A newly self-inflicted issue compounds it: **1,615 of 1,620 articles share an identical `dateModified`**, which neuters the sitemap's freshness signal and breaks the IndexNow auto-submitter you just shipped.

Everything else — performance polish, content depth, monetization — is real but **sequenced behind indexation**. There is no revenue and no ranking until pages get found. The plan below reflects that: fix discovery first, earn the first authority signals in parallel, clean the content/link graph to convert crawls into rankings, and keep ads OFF until traffic actually arrives.

**Nothing was shipped.** Every fix below is copy-ready for a follow-up implementation run. Full detail per domain is in the five linked deliverables.

**No tasks failed; all 5 deliverables approved on first review.**

---

## The unified priority order

Pulled across all five audits and sequenced by impact-per-effort. This is the recommended order of operations, not five parallel tracks.

### P0 — Unblock discovery (do first; highest leverage)

| # | Action | Why it's P0 | Effort | Source |
|---|--------|-------------|--------|--------|
| 1 | **Give articles real, varied `dateModified`** (back-fill from each file's git history; only bump on real edits going forward) | Uniform `2026-05-12` makes sitemap `lastmod` useless for crawl prioritization AND makes IndexNow `--auto` fire once then never. Single highest-impact technical fix. | ~1–2 hrs scripted | t1 |
| 2 | **Wire up the Google Indexing API** to force-crawl the priority set (~30 hub/stats/tool pages + top ~170 articles; 200/day budget — do *not* bulk-submit all 1,620) | Nothing currently nudges Google directly; IndexNow only reaches Bing/Yandex. Biggest lever on Google indexation *speed* for a no-history domain. | ~2 hrs | t1 |
| 3 | **Fix the ~646 wrong-target internal links + 10 broken links** (e.g. `[cryptography] → /blockchain`, `[computational fluid dynamics] → /machine-learning`) | Pollutes the relevance graph Google and AI engines read; cheap trust signal. Start with hub articles. | M (1 day, scripted + review) | t3 |
| 4 | **Eliminate the 388 zero-inbound orphans**; seed 2–3 correct contextual links into each from related articles | 24% of articles are reachable only via deep category pagination (click-depth 3). This is the structural half of "90% unknown to Google." | M (1–2 days) | t1, t3, t4 |

### P1 — Convert crawls into rankings + earn first authority (next sprint, in parallel)

| # | Action | Why | Effort | Source |
|---|--------|-----|--------|--------|
| 5 | **Seed IndexNow once** (`--all`) after fixing dates; confirm `INDEXNOW_KEY` is set in Vercel | Restores the Bing/Yandex drip the auto-submitter was meant to provide. | 15 min | t1 |
| 6 | **Trim the 67 over-long first paragraphs** to a ≤3-sentence citable definition | Low-effort, high-GEO: directly raises featured-snippet / AI-answer capture. FAQs are already strong; the lede is the weak link. | S | t3 |
| 7 | **Ship one embeddable chart + "embed this" snippet per top stats page** (AI, cybersecurity, remote-work first) | The stats roundups are the crown-jewel link assets but are all-text — journalists link to embeddable charts, not walls of numbers. Prerequisite for the whole outreach plan. | M (engineering) | t2 |
| 8 | **Start active link outreach** — HARO/Featured/Qwoted daily, data-journalism pitches off the roundups, resource-page outreach for the free tools, unlinked-mention reclamation | The first 20–30 legitimate links are what raise the crawl-priority ceiling for the whole site. Authority is the root gate. | ~30 min/day, ongoing | t2 |
| 9 | **Collapse the duplicate render-blocking CSS** (two ~42KB stylesheets → one) + **preload the hero image** + **guard `scroll-behavior: smooth`** behind `prefers-reduced-motion` | Quick config/CSS wins; bundle into one PR. | S each | t4 |
| 10 | **Make the mobile menu keyboard/AT-accessible** (convert to JS-free `<details>`/`<summary>`) | WCAG 4.1.2 + 2.1.1 violation; also removes JS dependency, fitting the zero-JS ethos. | S | t4 |
| 11 | **Segment the sitemap** (`entryLimit: 250`) so GSC reports indexation per chunk | Turns the Sitemaps report into per-section telemetry so you can see what Google accepts. | S | t1 |

### P2 — Depth, polish, measurement (after discovery recovers)

| # | Action | Source |
|---|--------|--------|
| 12 | Backfill the **28 Tier-1/Tier-2 articles under their word-count floor** (flagships first: `wealth-management`, `virology`, `volcanology`). Tier-3 shortfalls can wait. | t3 |
| 13 | **Generate 400w/800w image variants + emit real `srcset`** (cuts ~1.7MB category pages to ~300–400KB). `sizes` is currently inert without `srcset`; `astro:assets` is configured but idle. | t4 |
| 14 | Complete the **small near-finished clusters** (politics 13, language 9, religion 7), then batch **sports (85)**. Do *not* bulk-add to everyday-concepts/arts until the link graph heals. | t3 |
| 15 | Fix contrast (`text-gray-400` → `gray-500`), lengthen 11 short meta descriptions, clean 189 in-H1 links, add A–Z category index pages, fix the `amp` slug artifact (`arts-amp-culture` → `arts-culture`, with 301s). | t3, t4, t1 |
| 16 | **Re-baseline** ~2–3 weeks after P0 via `indexation-audit.mjs` + `weekly-progress.mjs`. Target: >40% indexed at 30 days, >75% at 60. | t1 |

### Deferred — Monetization (gated on traffic, not dates)

Keep `PUBLIC_AD_NETWORK=none` for now. The ad-slot system is half-built (slots placed, but no loader script, no unit IDs, **no reserved `min-height`**, no `ads.txt`, no consent layer). Turning it on today renders empty boxes and risks CLS for ~$0 return. Prepare paperwork (privacy policy, consent notice, draft `ads.txt`) in the background; flip AdSense on at first real traffic with reserved heights; treat the **50k-session Mediavine threshold** as the goal that actually moves revenue. Full sequencing in t5.

---

## The cross-cutting theme: the internal link graph

Three independent audits (t1, t3, t4) converged on the same structural weakness, which is worth calling out because fixing it serves indexation, rankings, *and* engagement at once:

- **388 articles (24%) have zero inbound editorial links**; 805 are underlinked (<3 incoming); reciprocal coverage is only 9.58%.
- **~646 of the existing ~20,000 internal links point at topically wrong targets** — so even the links that exist partly mislead crawlers.
- Orphans are buried at **click-depth 3** behind 30-per-page category pagination (`everyday-concepts` = 14 pages).

Fixing link targeting (P0 #3) and orphan inbound links (P0 #4) is the single most repeatable, scriptable lever in this whole roadmap.

---

## Per-domain detail (full deliverables)

1. **Indexation & technical SEO** — [`t1-indexation.md`](./t1-indexation.md): slash-fix verification, ranked blockers, the `dateModified`/IndexNow finding, Google Indexing API plan, sitemap segmentation.
2. **Off-site authority & links** — [`t2-authority.md`](./t2-authority.md): why authority gates indexation, verdict on the stats roundups / free tools / hubs, 90-day outreach plan, 3 ready-to-send templates.
3. **Content & GEO quality** — [`t3-content-geo.md`](./t3-content-geo.md): humanization/schema confirmed clean, ~646 wrong-target links, 388 orphans, 67 long ledes, 815 under-tier articles, content-gap/cluster plan.
4. **Performance, UX & accessibility** — [`t4-performance-ux.md`](./t4-performance-ux.md): measured CWV posture, P0 image/`srcset`, duplicate CSS, hero preload, accessible mobile menu, contrast — with copy-ready snippets.
5. **Monetization** — [`t5-monetization.md`](./t5-monetization.md): ad-system readiness gaps, network tiers/thresholds/RPMs, revenue model, traffic-gated activation timeline with CWV guardrails.

---

## What to do this week

If you act on nothing else: **(1)** back-fill real `dateModified` dates, **(2)** stand up the Google Indexing API and submit your ~200 best pages, **(3)** script the internal-link target fix + orphan-link seeding. Those three are pure technical work, fully in your control, and they attack the exact reason Google can't see the site. Authority outreach (P1 #8) runs in the background starting now, because its payoff is slow and compounding.
