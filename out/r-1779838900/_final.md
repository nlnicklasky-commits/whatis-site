# Hero Alt-Text Rewrite — Audit, Plan & Proven Pipeline

**Run:** r-1779838900 · **Date:** 2026-05-26 · **Brief:** "move on to the alt tags — first audit, then plan, then execute."
**Method:** 3 sequential specialist tasks (audit → plan → build+pilot). 3/3 approved on first review; 0 failed.

---

## Executive summary

The hero alt-text has one remaining defect: **effectively 100% of the 1,620 hero alts restate the article topic** ("Acupuncture is a medical practice…") instead of **describing the image** a sighted user sees. (Length/truncation were already fixed in a prior pass — max is 125 chars, 0 truncations, 0 duplicates.) The fix is to regenerate alts from the actual pixels via a vision model.

We built and **proved a Replicate `moondream2` vision-captioning pipeline** (`scripts/seo/gen-alt-text.mjs`) on a 40-image pilot. It works: when a hero genuinely depicts its topic, the new alts are exactly right ("A young woman in a white tutu performing a ballet pose in a dance studio"). The whole corpus runs for **~$1.94 in ~20–30 minutes**, resumably.

**The pilot surfaced a material finding:** a meaningful share of the original hero images are **generic stock that don't actually depict their topic** — `cartography`'s hero is just a bearded man, `philosophy`'s is a pensive man, `crystallography`'s is a microscope (not crystals). For those, an honest description is accurate but **off-topic**, which is a genuine accessibility-vs-SEO tradeoff. The pipeline never fabricates: it either describes honestly and flags `needsReview`, or — when the model is unsure or just echoes the topic — **falls back to the existing truthful alt** (this fired correctly for `abacus`, `digital-photography`, `cognitive-bias`, `marketing`).

**The audit and pipeline are done. The mass execution (caption all ~1,575 + apply to frontmatter + deploy) needs one policy decision from you** (below), because it rewrites alt text on 1,620 live pages.

---

## 1. Audit (t1)

- **1,620 hero alts**, all ≤125 chars (max 125, mean 91), 0 missing, 0 duplicates, 0 filler prefixes. Length/truncation defects from the prior audit are resolved.
- **~100% are topic-restatement** (1,462 machine-flagged; the residual hand-verified as restatement too). **0 describe the image.**
- **87 articles** have hand-written, already-descriptive in-content figure alts — these live in body markdown, are the model for "good," and are **excluded** from the rewrite.
- **Quality bar:** describes what's visibly in the frame; ≤125 chars; no "image of/photo of" filler; topic keyword only when truthful; **no fabricated specifics**; noun-phrase, not a definition.
- **Load-bearing rule:** the rewrite must be **image-verified, not slug-derived** — a wrong description is worse than a generic one.

## 2. Plan (t2)

- **Model:** `lucataco/moondream2` (instruction-following VLM, ~$0.0012/run) — steerable to describe the frame and include the topic only when truthful. `llava-13b` available as a cross-check.
- **Prompt:** sends the image + topic; instructs "describe only what's visible… reply `LOW_CONFIDENCE` rather than guess." That sentinel is the asymmetric-risk defense.
- **Cleaning:** strip filler prefixes, 125-char clean-boundary cap, sentence case, no trailing period, fabrication guard (`\d{2,}`/quotes/™), banned-words guard; `LOW_CONFIDENCE`/empty/too-short/topic-echo → **fallback to existing alt**.
- **Resumable** bounded-concurrency run; **~$2, ~20–30 min**; incremental writes so a crash never loses work.
- **QA:** 100% automated gates + flag the uncertain ~5–10% (`needsReview`) + human spot-check sample. Data contract: `out/r-1779838900/alt-text.json` = `{slug: alt}`.

## 3. Build + pilot (t3)

- Pipeline shipped at `scripts/seo/gen-alt-text.mjs` (resumable; slug-filter, `--limit`, `--reclean`). Fixed a model-endpoint 404 (pinned moondream2 version hash) and two cleaning leaks (filler prefix, topic-echo) during the pilot.
- **40-image pilot + 5 pre-seeded AI heroes:** 36 vision / 4 fallback / 5 known-ai. All invariants hold (max 124, 0 filler/empty/dupes). Measured 1.9s/image → ~$1.94 for the full 1,615.
- Fallback + `needsReview` flagging behaved exactly as designed.

---

## 4. The decision before mass execution

The pipeline is ready to run on all ~1,575 remaining heroes. But applying the results to 1,620 live pages hinges on how to treat the **off-topic cases** (hero image doesn't depict its topic). Three policies:

1. **Conservative (recommended):** Apply the new image-descriptive alt only where it's genuinely descriptive **and on-topic**; for `needsReview`/`topic-not-present`/fallback cases, **keep the existing topic alt**. → Strict improvement, zero off-topic or weird alts shipped, ~70–80% of heroes upgraded.
2. **Maximal accessibility:** Apply the honest image description **everywhere** (off-topic ones included), since alt should describe the image regardless of SEO. More honest for screen readers; some alts become topically irrelevant.
3. **Fix the images instead:** Where heroes are generic/mismatched stock, the real fix is a better hero image (we have the generation pipeline) — a larger, separate effort.

This is a real SEO-vs-accessibility tradeoff on outward-facing pages, so it's your call. **My recommendation: Policy 1** now (safe, strict win), and consider Policy 3 later for the worst mismatched heroes.

---

## Artifacts
- [`t1-audit.md`](./t1-audit.md) — current-state audit + quality bar
- [`t2-plan.md`](./t2-plan.md) — methodology, prompt, cleaning rules, QA, cost
- [`t3-pipeline.md`](./t3-pipeline.md) — pipeline build + pilot proof + sample results
- [`alt-text.json`](./alt-text.json) / [`alt-text-qa.json`](./alt-text-qa.json) — pilot dataset (45 entries) + QA sidecar
- `scripts/seo/gen-alt-text.mjs` — the reusable pipeline
