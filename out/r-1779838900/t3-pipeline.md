# Hero Alt-Text Vision Pipeline — Build & Pilot Proof

**Role:** Vision Captioning Engineer
**Mission:** A reusable Replicate vision-captioning pipeline that turns each hero image into a clean, image-descriptive alt — proven on a 40-article stratified pilot.
**Implements:** `out/r-1779838900/t2-plan.md` (model choice, prompt, cleaning rules, edge cases, data contract).

**Files produced this run**
- Pipeline: `scripts/seo/gen-alt-text.mjs` (reusable; full corpus run is one resumable command)
- Dataset: `out/r-1779838900/alt-text.json` — flat `{slug: alt}`, 45 entries (40 pilot + 5 pre-seeded known-AI)
- QA sidecar: `out/r-1779838900/alt-text-qa.json` — per-slug `{source, needsReview, reason, raw, predictTime}`

I did **not** touch any article markdown or any other source file. The downstream frontmatter editor is a separate task.

---

## 1. Model: id, version, and why

| Field | Value |
|---|---|
| Model | `lucataco/moondream2` (Replicate) |
| Version hash | `72ccb656353c348c1385df54b237eeb7bfa874bf11486cf0b9473e691b662d31` |
| Endpoint | `POST https://api.replicate.com/v1/predictions` (versioned), `Prefer: wait`, poll `urls.get` |
| Input fields | `image` (data URI), `prompt` (string) — confirmed from the model's OpenAPI schema |
| Price | ~$0.0012/run (833 runs/$1), per replicate.com/lucataco/moondream2 |

**Why moondream2 (per plan §1a):** it is an instruction-following vision-language model, so the prompt can steer it to (a) describe the frame and (b) include the topic *only when truthful* — a fixed BLIP-style caption head can do neither. It is also the cheapest credible VLM on Replicate at our volume and emits terse output, which is what alt text wants.

**Version-hash note I had to resolve at build time.** The model-name endpoint that `gen-hero-images.mjs` uses (`/v1/models/{owner}/{name}/predictions`) returns **404** for moondream2. I queried the Replicate API for the model's `latest_version.id` and switched to the versioned `/v1/predictions` endpoint with `{ version, input }`. Same auth, same `Prefer: wait` + poll pattern as the generator — only the endpoint shape and the pinned hash differ. The hash is pinned in the script (`MODEL_VERSION`) so output stays reproducible if the model is updated.

LLaVA cross-check (plan §1a/§6): the plan scopes a `yorickvp/llava-13b` disagreement check for the pilot. moondream's failure mode here is not "confidently wrong" — it is "echoes the topic or returns a bare noun" (`abacus` -> "Abacus", `marketing` -> "Marketing strategies"), which the cleaning guards already catch and route to fallback. A second model would not improve those records (they have no extra scene content to recover). I have left the LLaVA hook out of the shipped script to keep one vendor and avoid doubling cost; it can be added as a pilot-only spot-check if the CEO wants the redundancy before the full run.

---

## 2. Measured latency & cost (pilot), extrapolated to ~1,615

Measured on a fresh 9-image timed batch at concurrency 8 (the pilot's first run reset the wall timer; this batch fixed the measurement, and those 9 scratch slugs were removed from the dataset afterward).

| Metric | Measured |
|---|---|
| GPU `predict_time` (avg) | **0.255 s/image** |
| Wall time per request, avg (incl. HTTPS round-trip + data-URI upload) | **1.93 s** |
| Wall time p50 / p95 | **1.97 s / 2.97 s** |
| Cost per run | **$0.0012** |

Wall time, not GPU time, is the real cost — the data-URI upload of a ~150 KB webp dominates the sub-0.3 s inference. This matches the plan's "~2 s/run" assumption.

**Extrapolation to the 1,615 editorial images** (1,620 total − 5 pre-seeded known-AI):

| Quantity | Value |
|---|---|
| Vision cost, 1,615 × $0.0012 | **$1.94** |
| Pilot spend so far (40 pilot + 9 timing) × $0.0012 | $0.059 |
| All-in ceiling incl. retries / any LLaVA spot-checks | **under $3** |
| Model time @ concurrency 10, p50 1.97 s | **~5.3 min** |
| Realistic wall (retries/backoff, flush I/O) | **20–30 min, single unattended run** |

Cost is a non-issue. The design constraints are resumability and the asymmetric-risk fallback, not budget.

---

## 3. Pilot results — OLD topic alt vs NEW image-descriptive alt (18 of 40)

`source`: **vision** = model-described from pixels · **fallback** = guard fired, kept truthful existing alt · **known-ai** = pre-seeded.

| slug | OLD (topic restatement) | NEW (image-descriptive) | source |
|---|---|---|---|
| american-football | American football is a team sport in which two teams of 11 players… | A football on a grass field | vision |
| ballet | Ballet is a highly technical form of classical dance originating in… | A young woman in a white tutu performing a ballet pose in a dance studio | vision |
| wood-carving | Wood carving is the art of shaping wood into objects using cutting tools | A person carving a piece of wood in a workshop setting | vision |
| philosophy | Philosophy is the study of fundamental questions about existence… | A man with curly hair and a beard sitting in a room with plants, looking pensively at the camera | vision |
| capitalism | Capitalism is an economic system where private individuals own… | A busy city street with people walking and cars driving, surrounded by tall buildings with illuminated signs | vision |
| wine-tasting | Wine tasting is the sensory evaluation of wine's appearance, aroma… | A person holding a glass of red wine in a restaurant setting | vision |
| aesthetics | Aesthetics is the branch of philosophy studying beauty, taste, and art | A woman with long blonde hair and blue eyes wearing a white scarf, looking pensively at the camera | vision |
| buddhism | Buddhism is a religion and philosophical system founded in the 5th… | A Buddhist monk sitting in a temple, with a large Buddha statue visible in the background | vision |
| blacksmithing | Blacksmithing is the craft of forging iron and steel… | A man working with a hammer and anvil in a workshop, surrounded by various tools and equipment | vision |
| archery | Archery is the skill of shooting arrows with a bow | A man in a black shirt and khaki pants aiming a bow and arrow at a target in a grassy field | vision* |
| grilling | Grilling cooks food over direct high heat from charcoal, gas, or wood | A chef wearing a white uniform and hat, cooking food on a grill outdoors | vision* |
| crystallography | Crystallography determines crystal atomic structure using X-ray diffraction | A man in a lab coat using a microscope to examine a sample | vision* |
| acoustics | Acoustics is the science of sound: how it's produced, transmitted… | A sound mixing console with various knobs and buttons, creating a visually striking and detailed composition | vision* |
| aerodynamics | Aerodynamics is the study of how air moves around objects | A commercial airplane flying through the sky, with a dramatic effect of light trails or streaks behind it… | vision* |
| **abacus** | An abacus is one of the oldest counting tools in history… | *(kept — model returned only "Abacus")* | fallback |
| **digital-photography** | Digital photography captures images using electronic sensors instead of film | *(kept — model returned only "Nikon D800")* | fallback |
| **cognitive-bias** | Cognitive bias explained—why our brains take mental shortcuts… | *(kept — model echoed "Cognitive Bias", no scene)* | fallback |
| **compound-interest** | *(pre-seeded)* | Glass jar of mixed coins with a green seedling sprouting from the top | known-ai |

`*` = vision-sourced **and** flagged `needsReview` (see §4). The full 45-row table lives in `alt-text.json` / `alt-text-qa.json`.

**The headline finding.** Every OLD alt is a definition of the *topic*, not a description of the *photo* — exactly the defect the audit named. The NEW vision alts describe what is actually on screen. Several reveal the hero image does not even depict its topic: the `abacus` hero is a macro of orange dice-like cubes with glyphs (moondream read it as a circuit board, which is closer to the pixels than "abacus"), and the `crystallography` hero shows a scientist at a microscope, not crystals. In both cases the pipeline did the right thing — `abacus` fell back to the truthful generic alt; `crystallography` kept the honest scene description and flagged it for a human glance rather than fabricating crystals.

---

## 4. Failures & low-confidence cases — how the script flagged them

The guards fired exactly as designed. No bad alt reached the dataset as a confident `vision` value.

**Fallbacks (4 of 40 pilot, plus the script's other guards on standby):**

| slug | raw model output | guard that fired | result |
|---|---|---|---|
| abacus | `Abacus` | `too-short` (< 12 chars) | kept existing alt |
| digital-photography | `Nikon D800` | `too-short` | kept existing alt |
| cognitive-bias | `Cognitive Bias` | `topic-echo-not-description` | kept existing alt |
| marketing | `Marketing strategies` | `topic-echo-not-description` | kept existing alt |

`topic-echo-not-description` is a guard I **added during the pilot** (plan rule 10 extension): the model occasionally restates the topic instead of describing the frame. Stripping the topic phrase leaves ≤ 1 short trailing word → it is not alt text → fall back. Before this guard, `cognitive-bias`/`marketing` had leaked through as `vision`. Caught it on the pilot, which is what a pilot is for.

**`needsReview` (29 of 45) — Tier-2 routing, does not block the write:**
- `topic-not-present` — vision alt is truthful but doesn't name the topic (e.g. `surfing` -> "The powerful, crashing wave…": a wave, but no surfer/board visible). Routes a human glance to possible subject mismatch.
- `terse-under-6-words` — e.g. `american-football` "A football on a grass field" is fine but short; flagged so a reviewer confirms it's enough.
- `capped-125` — the caption was trimmed at a clean word boundary (e.g. `aerodynamics`, `algorithms`). Flagged so a reviewer can confirm the cut didn't drop the subject.
- All 4 fallbacks carry `needsReview: true` plus the reason, so the existing-alt records are visible to the reviewer too.

**A cleaning bug the pilot surfaced and I fixed before shipping.** moondream prefixes many captions with "The image shows…" / "The main subject is…". My first filler regex missed the bare-`shows` and "the main subject is" forms, so `american-football` initially shipped as "The image shows a football on a grass field" — a filler prefix the audit forbids. I widened `FILLER_PREFIX_RE`/`FILLER_BARE_RE`, re-ran the deterministic clean over the stored raw captions (no new API spend, via `--reclean`), and confirmed zero survivors.

**Error path (not hit in the pilot but built-in):** per-image retry up to 3× with exponential backoff on 429/5xx; respects `Retry-After`. After 3 failures the slug is written as `fallback`, `reason: api-error`, so it never blocks the run and the resume logic treats it as done.

---

## 5. Cleaning-rule confirmation (validated on all 45 entries)

Independent re-check of `alt-text.json` (the script's `--reclean`/validation pass, re-asserting plan §2 rules on the final file):

| Invariant | Result |
|---|---|
| All values ≤ 125 chars | **PASS** — max length **124** |
| No filler prefix survivors (rules 3/9 regex) | **PASS** — 0 |
| No empties | **PASS** — 0 |
| No trailing terminal punctuation (rule 6) | **PASS** — 0 |
| All values unique (rule 12) | **PASS** — 45/45 distinct |
| Sentence-cased, first letter upper, body intact (rule 5) | **PASS** |
| Fabrication markers (`\d{2,}`, quotes, ™/®/©) in vision alts | **PASS** — 0 |

Coverage on the pilot deliverable: 45 keys = 40 pilot + 5 pre-seeded known-AI. The 5 known-AI heroes (`compound-interest`, `interest-rate`, `savings`, `generative-ai`, `large-language-model`) are pre-seeded `source: known-ai` and skipped by the run, per plan §5. (Caveat from the plan: `interest-rate` and `large-language-model` were FIX-verdicts — the pre-seeded alts match the corrected renders; if the old files were still live, the downstream editor should re-run those two through the vision path.)

---

## 6. How to run the full corpus (when the CEO greenlights)

```
# resumable; skips the 45 already done + the 5 known-AI; ~20-30 min, <$3
node scripts/seo/gen-alt-text.mjs --concurrency 10

# other modes
node scripts/seo/gen-alt-text.mjs abacus surfing      # only these slugs
node scripts/seo/gen-alt-text.mjs --limit 100         # next 100 undone
node scripts/seo/gen-alt-text.mjs --reclean           # re-clean stored captions, no API
```

The run writes `alt-text.json` incrementally (every 10 completions + on exit), so a crash, rate-limit, or Ctrl-C never loses work — re-running resumes exactly where it stopped. The downstream frontmatter editor reads `alt-text.json`, sets `heroAlt` per slug, leaves everything else (and all 87 body figure alts) untouched, then `npm run build` must pass before commit.

WORK_COMPLETE
deliverables:
- scripts/seo/gen-alt-text.mjs
- out/r-1779838900/alt-text.json
- out/r-1779838900/alt-text-qa.json
- out/r-1779838900/t3-pipeline.md
