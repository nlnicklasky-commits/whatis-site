# Image Status & Alt-Text SEO Audit — WhatIs.site

**Run:** r-1779812042 · **Date:** 2026-05-26 · **Brief:** audit image status of all articles (which lack hero images, which lack the other desired types), then check SEO alt tags. User scope: hero + responsive variants + in-content images; AI images must avoid artifacts (text/letters/numbers) and follow best practices (prompt-engineering role).
**Method:** 4 specialist workers, all script-driven / real file checks. 4/4 approved on first review; 0 failed.

---

## Executive summary

The headline is reassuring: **hero-image coverage is 100%**. All 1,620 articles have a hero plus both responsive variants (400w + 800w) — 4,860 WebP files, zero orphans, zero gaps. The 5 missing heroes from earlier today are filled and the variant generation covered the whole corpus. There is **nothing missing on the hero/variant front.**

The real findings are elsewhere:

1. **Alt text has a small but real defect tail.** The corpus alt text is unique and the old template is fully gone — but 8 alts are **truncated mid-word** ("…study of U", "…racing 26"), 430 (26.5%) are **too long** (>125 chars), and **none of the 1,620 actually describe the image** (they restate the topic). The truncations are a ship-today P0.
2. **Hero images aren't in the sitemap.** The `image:` namespace is declared but **0 `<image:image>` entries** exist — so 1,620 hero images are invisible to Google Image search. Cheap P1 fix in `astro.config.mjs`.
3. **In-content images: zero, by design.** Every article is hero-only. That's the biggest *opportunity* (comprehension, dwell, image search), but it's a build-out project, not a defect. Strategy is laid out: AI for wordless bases, labels as SVG, ~150 Tier-1 Science/Tech articles first.
4. **The AI-image artifact risk is confirmed and now has guardrails.** Of the 5 heroes I generated last session, **3 PASS, 2 need regeneration**: `interest-rate` (garbled calculator keys + gibberish newspaper) and `large-language-model` (floating glyph artifacts — the original prompt literally asked for "letters and characters"). There's now a prompt playbook + an OCR gate to stop this happening again.

Net: image *coverage* is solid; the work is alt-text cleanup, an image sitemap, regenerating 2 heroes, and (optionally) the in-content image program.

---

## 1. Coverage audit — hero & responsive variants (t1)

| Asset | Present | Missing |
|---|---|---|
| Hero (`<slug>-hero.webp`) | 1,620 (100%) | 0 |
| 400w variant | 1,620 (100%) | 0 |
| 800w variant | 1,620 (100%) | 0 |
| ≥1 in-content body image | 0 (0%) | 1,620 |

Triple-verified (script + `ls` cross-check + independent grep). On disk: exactly 1,620 × 3 WebP + `placeholder.svg` = 4,861 files, **0 orphans**, **168.9 MB** total (originals 101.5 MB / 800w 47.4 MB / 400w 20.0 MB). No drift, nothing to fill. Full detail in `t1-coverage.md`.

## 2. Alt-text & image SEO audit (t2)

**What's clean:** old `"Editorial photograph representing the concept of…"` template 100% gone; 0 missing/empty; 0 duplicates; no keyword-stuffing; 100% WebP; descriptive `{slug}-hero.webp` filenames; explicit width/height (no CLS); correct eager-hero / lazy-card loading + preload; complete 3-step srcset; decorative logo correctly `alt=""`.

**What needs fixing:**

| Priority | Issue | Count | Fix |
|---|---|---|---|
| **P0** | Alt truncated mid-word/number (from the ed9c630 rewrite splitting on `.` inside "U.S.", "26.2", etc.) | 8 | Rewrite the 8 (e.g. `presidential-history`: "…study of U" → "Portrait gallery of past U.S. presidents on a wall") |
| **P1** | Hero images **not in sitemap** (`xmlns:image` declared, 0 `<image:image>` entries) | all 1,620 | Extend `astro.config.mjs` `serialize()` to attach `images:[{url: heroImage}]` per URL |
| **P1** | Alt text >125 chars | 430 | Trim to ~80–125 as part of the rewrite pass |
| **P2** | Alts restate the topic, don't describe the image | 1,620 | Optional: re-derive as image descriptions (scripted or vision-model captioning) |
| **P2** | Heaviest masters >200 KB | ~30 | Re-encode to ~150 KB only if LCP regresses (srcset already shields most users) |

The 8 truncated alts and full rewrites are tabled in `t2-alt-seo.md`.

## 3. AI image artifact QA + prompt playbook (t3)

**QA of the 5 heroes generated last session:**

| Image | Verdict | Issue |
|---|---|---|
| compound-interest | ✅ PASS | — |
| savings | ✅ PASS | minor coin pseudo-engraving, non-blocking |
| generative-ai | ✅ PASS | — |
| interest-rate | ❌ FIX | garbled calculator keys + gibberish newspaper text |
| large-language-model | ❌ FIX | floating glyph/letter artifacts (prompt asked for "letters and characters") |

Both failures trace to **text-prone subject choices**. The playbook's core rule fixes this: **suppress text by composition (don't depict text-bearing objects), reinforce with phrasing, verify with OCR** — all three. It includes a reusable master template, 8 category templates, locked `flux-1.1-pro` params (+ a `seed` recommendation for reproducibility), improved prompts for the 2 FIX images, and a **Tesseract OCR gate** to flag any rendered text before publishing. Full playbook in `t3-prompt-playbook.md`.

## 4. In-content image strategy (t4)

Articles have **zero** in-body visuals today — the largest untapped opportunity. The plan:
- **Use:** labeled illustrations, process/flow diagrams, comparison visuals, conceptual node-edge sketches, timelines. **Avoid:** decorative stock filler, AI-generated text infographics, fabricated charts, screenshots.
- **Production rule (load-bearing):** AI generates only the *wordless base* (the airfoil, the neuron, the wave); anything whose meaning lives in **labels must be authored as SVG/vector** — never let a diffusion model render the labels.
- **Sequence:** ~150 Tier-1 Science + Tech articles first (most diagrammable, best image-search upside), measure dwell/Images impressions, then scale. Per tier: T1 2–3 visuals, T2 1–2, T3 0–1.
- **Astro:** plain markdown `![descriptive alt](/images/articles/<slug>-fig1.webp)`, add a `prose img` aspect-ratio CSS rule now to prevent CLS against the preloaded hero LCP, lazy-load all in-content images; a `Figure.astro` component is a nice-to-have gated on a future MDX migration. Full plan in `t4-incontent-strategy.md`.

---

## Recommended next actions (in order)

1. **P0 — fix the 8 truncated alts** (scripted, ~minutes). Ship today.
2. **Regenerate the 2 flagged heroes** (`interest-rate`, `large-language-model`) using the improved prompts in the playbook, run the OCR gate, redeploy. ~$0.08.
3. **P1 — add the image sitemap extension** in `astro.config.mjs` (surfaces 1,620 heroes to Google Images at zero content cost).
4. **P1 — trim the 430 over-length alts** (combine with a P2 image-description rewrite if you want the accessibility/SEO upgrade).
5. **Adopt the OCR gate** in `gen-hero-images.mjs` so no future image ships with rendered text.
6. **Optional program — in-content visuals**, starting with the Tier-1 Science/Tech pilot.

Items 1–3 and 5 are quick and I can execute them on your go. Item 6 is a larger initiative to schedule.

*Process note: workers t1/t2 wrote reusable audit scripts (`image-coverage-matrix.mjs`, `alt-seo-audit.mjs`) into `scripts/audits/` — outside the run's `out/` sandbox. They match the repo's existing audit-script convention, so I kept them as tooling, but flagged the deviation.*
