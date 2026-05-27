# Hero Alt-Text Rewrite — Methodology & Quality Rubric

**Role:** Alt-Text Rewrite Strategist
**Mission:** Rewrite 1,620 hero `heroAlt` values from topic-restatement into accurate, accessible, image-descriptive alt text — at scale, image-verified, not slug-derived.
**Inputs read:** `out/r-1779838900/t1-audit.md` (defect + quality bar), `out/r-1779812042/t3-prompt-playbook.md` (Replicate request pattern, the 5 known AI heroes), `scripts/seo/gen-hero-images.mjs` (auth/request shape), `CLAUDE.md` (humanization + frontmatter rules).

**The load-bearing constraint (from the audit, §3):** *a wrong description is worse than a generic one.* Every rewrite must come from the actual pixels of `{slug}-hero.webp`, or it falls back to the existing truthful topic alt. We never invent a scene from the slug.

**Confirmed facts (verified this pass):**
- 1,620 articles; 1,620 matching `{slug}-hero.webp` files in `public/images/articles/`.
- `heroImage` is `/images/articles/{slug}-hero.webp`; `heroAlt` is the only field we touch.
- Zero missing alts, zero duplicates, max 125 chars today — we preserve all three properties.
- The 87 in-content figure alts live in article bodies (markdown `![]()`), not frontmatter — out of scope.

---

## 1. Approach — vision model, why, and the exact prompt

### 1a. Model class and choice

Use a **small multimodal vision-language model (VLM) prompted as a captioner**, not a pure BLIP-style caption head. We need to (a) describe the frame and (b) be steerable to weave in the article topic *only when truthful* — that steering requires an instruction-following VLM, which a fixed BLIP caption model cannot do.

**Primary: `lucataco/moondream2` on Replicate (~$0.0012/run, L40S, ~2 s/run).** It is purpose-built for instruction-conditioned visual Q&A, returns terse output (alt text wants terse), and is the cheapest credible VLM on Replicate at our volume. Source: https://replicate.com/lucataco/moondream2 — "~$0.0012 per run (~833 runs per dollar)… predictions typically complete within 2 seconds."

**Fallback / disagreement model: `yorickvp/llava-13b` (~$0.0020/run, L40S, ~3 s/run).** Source: https://replicate.com/yorickvp/llava-13b — "approximately $0.0020 to run… 500 runs per $1." Used only on the pilot to spot-check moondream agreement, and on any image moondream flags low-confidence. We do not run both on all 1,615; that doubles cost for no corpus-wide gain.

Why not a captioning-only model (BLIP-2 / CoCa): they emit a single ungrounded caption with no ability to take the topic as context, so they can neither be told "include the topic only if you actually see it" nor "answer in a noun phrase." moondream/LLaVA take the topic in the prompt and obey the format constraints.

Why not GPT-4V-class hosted models: the token says Replicate, the playbook and generator already wire Replicate auth, and a 13B-class open VLM is plenty for "name the obvious subject in an editorial photo." Keep one vendor.

### 1b. Replicate request pattern (matches the generator)

Reuse the exact auth + poll loop from `scripts/seo/gen-hero-images.mjs`: `Authorization: Bearer ${REPLICATE_API_TOKEN}`, `Prefer: wait`, POST to `https://api.replicate.com/v1/models/lucataco/moondream2/predictions`, poll `pred.urls.get` until `succeeded`. The image goes in as a **data URI** (read `{slug}-hero.webp`, base64-encode, `data:image/webp;base64,…`) so we never depend on a public URL.

```
input: {
  image:  "data:image/webp;base64,<...>",   // the real hero file, the only source of truth
  prompt: "<template below, with {TOPIC} filled in>"
}
```

### 1c. Exact prompt template (sent per image)

`{TOPIC}` = the article's plain subject derived from `title` ("What Is Abacus?" → `abacus`). `{TOPIC}` is **context, never an instruction to assert it**.

```
You are writing alt text for the hero photo of an encyclopedia article about "{TOPIC}".

Describe ONLY what is actually visible in this image: the main subject, the
setting, and one notable visual detail. Write a single concrete noun phrase a
sighted person would say when glancing at the photo.

Rules:
- 6 to 16 words. No sentence; no "is/are" definition of the topic.
- Do NOT begin with "an image of", "a photo of", "this shows", or similar.
- Mention "{TOPIC}" ONLY if that exact thing is clearly visible in the frame.
  If the photo is abstract, generic, or unrelated, describe what you actually
  see and do not force the topic in.
- Do NOT invent text, brand names, numbers, dates, or any detail you are not
  sure is in the image. If you cannot identify the subject with confidence,
  reply with exactly: LOW_CONFIDENCE

Alt text:
```

The `LOW_CONFIDENCE` sentinel is the cheapest possible confidence signal — it lets the model itself trigger the fallback path (§2, §4) instead of guessing, which is precisely the asymmetric-risk defense the audit demands.

---

## 2. Caption → alt cleaning rules

Run every raw caption through this deterministic pipeline (pure string ops, no model) before it can enter the dataset. Order matters.

1. **Trim + collapse whitespace.** Strip surrounding quotes the model sometimes adds.
2. **Sentinel check.** If the cleaned string is `LOW_CONFIDENCE`, empty, or `< 12` chars → **fallback** (rule 11).
3. **Strip leading filler prefixes** (case-insensitive, regex, repeat until none match):
   `^(an? |the )?(image|photo|picture|photograph|illustration|close[- ]?up|shot|view|rendering|render|graphic) (of|showing|depicting|that shows|with)\b[:,]?\s*`
   also strip bare `this (image|photo) shows`, `here (is|we see)`, `it (is|shows)`, `depicting`, `featuring` when leading.
4. **Strip trailing meta** — `, used in the article`, `for the article about …`, ` — alt text`, etc.
5. **Sentence case.** Uppercase first letter; do **not** lowercase the rest (proper nouns the model legitimately read off the scene survive). Leave acronyms intact.
6. **No trailing period** (or other terminal punctuation). Keep internal commas.
7. **Hard cap 125 chars at a clean boundary.** If over, cut to the last word boundary ≤ 125 (never mid-word — the audit specifically resolved 8 mid-word truncations; we do not reintroduce them). If trimming would orphan a trailing connector (`and`, `with`, `on`, `of`, `a`, `the`), drop it too.
8. **Fabrication guard.** Reject + fallback if the caption contains a digit run of 2+ (`\d{2,}`) **or** a quoted string **or** a `™/®/©` mark — these signal invented numbers/brands/text the audit forbids. (Single digits like "four forces" are fine; the regex targets `\d{2,}` to allow legitimate small counts written as words but block fake denominations/dates/SKUs.)
9. **Banned-filler / humanization guard.** Reject + fallback if it still contains any prefix from rule 3, or any banned word from `CLAUDE.md` (e.g. *vibrant* is fine, but *dynamic*, *robust*, *cutting-edge* etc. are not). Reuse the list in `scripts/audits/banned-words-scan.mjs`.
10. **Not-identical guard.** If cleaned alt == current `heroAlt` (case-insensitive) → it added nothing → **fallback** (the old one is already known-clean, so this is harmless but we flag it for review since it's unexpected).
11. **Fallback rule.** When any check above sends us to fallback: keep the **existing** `heroAlt` exactly as-is, and tag the record `source:"fallback"` + a reason. A truthful generic restatement beats a wrong description — by design.
12. **Uniqueness pass (post-batch).** After all captions are cleaned, detect collisions. On a collision between two *generated* alts, append the most distinguishing scene word or fall back the lower-confidence one. Existing alts are already unique; fallbacks reuse them, so they cannot collide with each other.

Output of this stage per slug: `{ alt, source: "vision"|"fallback", confidence, reason? }`.

---

## 3. Cost & throughput

**Per-image cost (moondream2):** $0.0012. **1,615 editorial images** (1,620 minus the 5 known AI heroes handled offline, §5): `1,615 × $0.0012 ≈ $1.94`.

Add pilot LLaVA agreement runs (~40 × $0.0020 = $0.08) and re-runs on the expected ~5–10% low-confidence set on LLaVA (~120 × $0.0020 = $0.24). **All-in budget ceiling: under $3.** Cost is a non-issue; throughput and resumability are the real design constraints.

**Throughput:** moondream ~2 s/run wall-clock, but we gate on Replicate concurrency, not latency. Run **8–12 concurrent predictions** (a bounded worker pool, not `Promise.all` over 1,615). At 10-wide and ~2.5 s effective per image including encode/cleaning: `1,615 / 10 × 2.5 s ≈ 7 min` of model time. Budget 20–30 min real-world with retries/backoff. This is a single unattended run.

**Concurrency + resumability design:**
- A fixed-size async worker pool (concurrency `N=10`, env-overridable). Each worker pulls the next undone slug, runs the request → clean pipeline, **writes its result to the JSON map immediately** (incremental, not batched-at-end), then pulls the next.
- **Skip-already-done:** on startup, load `out/r-1779838900/alt-text.json`; the work queue = `allSlugs − keys(existing map)`. Re-running the script resumes exactly where it stopped — a crash, rate-limit, or Ctrl-C never loses completed work.
- **Write strategy:** keep the map in memory, and `writeFileSync` the whole map after every Kth completion (K=20) plus on exit — small file, atomic-enough, and cheap. (1,620 short strings is well under 1 MB.)
- **Retry:** per-image, up to 3 attempts with exponential backoff on Replicate 429/5xx. After 3 failures, write the record as `source:"fallback", reason:"api-error"` so the slug is marked done and never blocks the run.
- **Rate-limit safety:** respect Replicate 429 `Retry-After`; the bounded pool already caps in-flight requests.

---

## 4. QA plan — validating 1,615 without eyeballing them all

Three tiers: automated gates on 100%, model cross-check on the uncertain slice, human spot-check on a statistical sample.

**Tier 1 — automated checks on every record (100%, zero human time):**
- **Length:** `1 ≤ chars ≤ 125`. (Already enforced in cleaning; QA re-asserts it on the final file.)
- **No filler prefix:** the rule-3 regex must not match.
- **Banned filler/humanization:** none of the `CLAUDE.md` banned words/phrases; reuse `scripts/audits/banned-words-scan.mjs`.
- **Not-identical-to-old:** flag any `vision`-sourced alt equal to the prior `heroAlt` (expected only for `fallback`).
- **Language = English:** quick heuristic — ASCII-letter ratio + a stopword presence check; flag anything that fails (catches a model emitting another language or pure punctuation).
- **No fabrication markers:** `\d{2,}`, quotes, ™/®/© must be absent in `vision`-sourced alts.
- **Uniqueness:** zero duplicate values across the whole map.
- **Coverage:** map has exactly 1,620 keys, one per article slug; every key is a real slug.

Any Tier-1 failure → the record is forced to `fallback` and counted in a QA summary. A clean run should show ~0 forced fallbacks here because cleaning already applied these — Tier 1 is the independent re-check.

**Tier 2 — low-confidence detection & flagging (the asymmetric-risk control):**
A record is flagged `needsReview: true` if **any** of:
- the model returned `LOW_CONFIDENCE` (or any sentinel/empty), → already fallback;
- `source == "fallback"` for any reason;
- caption length after cleaning < 6 words (terse-but-vague risk, e.g. "blue abstract background");
- the generated alt does **not** contain the topic word **and** the topic is a concrete photographable noun (e.g. `abacus`, `surfer`) — possible subject mismatch worth a human glance;
- moondream vs LLaVA disagree on the pilot (Tier 3).

`needsReview` is a sortable column in the dataset's sidecar QA report — it does not block the field write, it just routes a human's limited attention to the riskiest ~5–10%.

**Tier 3 — human spot-check (bounded eyeball budget):**
- **Pilot:** human reviews **all ~40** pilot images side-by-side with their generated alt (§6).
- **Full run:** review a **random sample of 100** of the 1,615 (≈6%; at a true defect rate of 5% this gives ~99% chance of catching at least one bad alt, and a tight enough CI to estimate corpus quality). Reviewer opens `{slug}-hero.webp` + the new alt, marks pass/fail in 15–20 s each — ~30 min total.
- **Plus review 100% of the `needsReview` set** (expected ~80–160 images). This is the high-yield review — it concentrates human time where the model was unsure.
- **Acceptance gate:** if random-sample defect rate > 5%, do not ship the full set — investigate the prompt/cleaning, re-run, re-sample.

---

## 5. Edge cases

- **placeholder.svg (currently 0):** guard anyway. Before sending to the model, resolve the hero file from `heroImage`. If it resolves to `placeholder.svg`, or the `{slug}-hero.webp` is missing on disk, or the file is 0 bytes → **do not call the API**; write `source:"fallback", reason:"no-image"`, keep the existing alt. We never caption a placeholder as if it were the real hero.
- **The 5 known AI heroes** (`compound-interest`, `interest-rate`, `savings`, `generative-ai`, `large-language-model`): we *know* their content from the playbook's Part B QA, so we **bypass the vision call** and hand-author from the verified descriptions. Pre-seed these into `alt-text.json` as `source:"known-ai"`:
  - `compound-interest` → `Glass jar of mixed coins with a green seedling sprouting from the top`
  - `interest-rate` → `Rising stacks of gold coins beside a smooth golden upward arrow` *(matches the FIXED prompt, not the garbled-calculator original — confirm the regenerated file is live before locking)*
  - `savings` → `Ceramic piggy bank beside stacked coins and a closed book on a wooden desk`
  - `generative-ai` → `Flowing blue and violet light particles on a deep navy background`
  - `large-language-model` → `Glowing lattice of connected nodes and light threads in blue and amber` *(matches the FIXED render)*
  These are pre-seeded so the resumable run skips them automatically. **Caveat:** `interest-rate` and `large-language-model` were FIX-verdicts in the playbook; only lock these alts if the corrected images have actually been regenerated and shipped. If the old files are still live, run them through the normal vision path instead so the alt matches reality (asymmetric-risk rule again).
- **The 87 in-content figure alts:** **do not touch.** They are markdown `![]()` in article bodies, already hand-written and descriptive (the audit's model for "good"). Our pipeline reads only the `heroAlt` frontmatter field and writes only `alt-text.json` keyed by slug — it never opens article bodies. Call it out explicitly so no executor reaches into body markdown.
- **Decorative logo `alt=""`** (Header/Footer): not a hero, not in scope, never enters this pipeline.
- **Topic the model can't see (legitimately abstract heroes):** the prompt forbids forcing the topic; the cleaner accepts a truthful generic scene ("Flowing blue light on a dark background") — that is correct, not a defect. It will trip the `needsReview` "topic-not-present" flag for a human glance, which is the intended behavior.

---

## 6. Rollout & data contract

**Pilot (~40 slugs), then full.** Pick a 40-slug pilot stratified across categories and across image types: a few obviously-photographable concrete nouns (`abacus`, `surfing`, `grilling`), a few abstractions (`philosophy`, `inflation`), the 5 known AI heroes' siblings, and a few the audit hand-checked (`crystallography`, `digital-photography`). On the pilot: run moondream **and** LLaVA, diff the cleaned outputs, and human-review all 40 against the actual images. Tune the prompt/cleaning if defect rate > 5% or the models disagree often. Only then run the remaining ~1,575 with moondream.

**Full run:** single resumable command (§3). Produces the dataset below + a sidecar QA report (`out/r-1779838900/alt-text-qa.json`: per-slug `source`, `confidence`, `needsReview`, flags, and run-level totals). The **executor of the actual frontmatter edit is a separate downstream task** — this run only produces the proposed alts; it does **not** edit `src/content/articles/*.md`.

**Exact data contract — `out/r-1779838900/alt-text.json`:**

```json
{
  "abacus": "Wooden abacus with colored beads strung on parallel rods",
  "accounting": "Hands tallying figures in a ledger beside a calculator",
  "compound-interest": "Glass jar of mixed coins with a green seedling sprouting from the top"
}
```

- **Shape:** a flat JSON object, `{ "<slug>": "<newAlt>" }`. Exactly the contract the task specifies — nothing nested in the deliverable file the executor consumes.
- **Keys:** every one of the 1,620 article slugs is present (full coverage; fallback slugs map to their existing alt so the executor can write uniformly).
- **Values:** the cleaned, ≤125-char, unique, filler-free, period-free image description (or the preserved existing alt for fallbacks).
- **Provenance lives in the sidecar** `alt-text-qa.json`, keyed by the same slugs, so `alt-text.json` itself stays the clean `{slug: alt}` map the executor edits frontmatter from. The downstream editor reads `alt-text.json`, sets `heroAlt: "<value>"` per slug, leaves all other frontmatter and all 87 body figure alts untouched, then `npm run build` must pass before commit.

**Ship criteria:** Tier-1 = 0 failures on the final file; random-sample defect rate ≤ 5%; 100% of `needsReview` cleared by a human; coverage = 1,620; uniqueness = 1,620 distinct values.

WORK_COMPLETE
deliverable: out/r-1779838900/t2-plan.md
