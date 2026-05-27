# Content & GEO Quality Assessment — WhatIs.site

**Scope:** 1,620 article files (1,612 tracked as `published`), schema in `src/content/config.ts`, humanization rules in `CLAUDE.md`. Audit scripts (`banned-words-scan.mjs`, `link-graph-audit.mjs`) re-run for this report; `data/audit-report.json` (timestamped 2026-03-07) cross-referenced. Eight articles read in full or in part across tiers/categories: `machine-learning` (T1, technology), `acupuncture` (T2, health), `abacus` (T3, everyday-concepts), `speech-writing` (T3, arts), plus `abstract-algebra`, `aerodynamics`, `animal-behavior`, `african-history`.

## 1. Humanization & Editorial Compliance

**Verdict: the corpus passes the banned-word rules cleanly.** The fresh scan returned **0 violations across all 1,620 articles** — zero banned words, zero banned phrases, zero uses of "comprehensive" in body or title. That is genuinely unusual for a 1,600-article AI-generated corpus and means the generation pipeline already enforces the `CLAUDE.md` list. Voice quality also reads human: `machine-learning` opens "We're drowning in data" and lands "The weird part is that these systems often improve themselves"; `abacus` uses "here's the kicker." These are the opinion/aside patterns the voice rules ask for.

Two soft humanization signals are worth fixing, not because they break rules but because they correlate with flat prose:

- **47 articles have zero contractions** in the body — likely the stiffest-reading pieces.
- **67 articles have a first paragraph longer than 4 sentences** (more on this under GEO — it's a citation problem, not just a tone one).

Because there are no banned-word hits, the requested "offending text → rewrite" examples target the real editorial defects instead:

1. **`machine-learning.md`** — `[Classification](/neoclassicism)` and `[Dimensionality reduction](/sedimentology)`. The anchor text is correct but the link targets are nonsense (classification points to an art-history article; dimensionality reduction to a geology one). **Fix:** repoint to `/statistics` / `/data-science` or unlink.
2. **`speech-writing.md`** — the H1 itself contains a link: `# What Is Speech [Writing](/writing)?`. Links inside an H1 are an editorial smell and weaken the heading as a ranking/answer target. **Fix:** plain H1 `# What Is Speech Writing?`, move the `/writing` link into body prose.
3. **`abacus.md` description** ends mid-sentence: `"...why it still matters. Discover the..."`. **Fix:** rewrite to a complete 150–160-char sentence.
4. **`speech-writing.md`** body contains a literal typo: `"the implementation of the the one mentioned above policy"` — a doubled "the" plus garbled phrasing. **Fix:** `"Implementing the policy described above will improve operational outcomes."`

## 2. GEO / AI-Citation Readiness

**Strong foundation, one consistent leak.** First paragraphs are mostly clean, quotable definitions: `acupuncture` opens with a single 1-sentence definition then a stat ("Over 10 million acupuncture treatments are administered annually in the United States"); `abacus` and `machine-learning` both lead with a one-sentence "X is a…" definition. This is exactly the citation-worthy lede GEO rewards, and statistics usage is present in the better articles (the 71% generative-AI-adoption stat in `machine-learning`, the 10M-treatments figure in `acupuncture`).

**The leak:** **67 articles** have a first paragraph over 4 sentences — over the GEO rule of "clean definition under 3 sentences." Worst offenders run to 6 sentences (`speech-writing`, `the-history-of-philosophy`, `the-history-of-space-exploration`). An answer engine extracting the lede gets a paragraph, not a definition. **Fix pattern:** split the first sentence (the definition) into its own paragraph; push context to sentence-2-onward.

**FAQ quality is excellent and is the corpus's single biggest GEO asset.** The schema enforces `min(3)` FAQ items, and sampled answers are self-contained and quotable without surrounding context — e.g., `speech-writing` Q "How long should a speech be?" answers with concrete numbers ("A TED talk: 18 minutes maximum… Lincoln's Gettysburg Address was 272 words"). `acupuncture`'s "Is acupuncture just a placebo?" gives a nuanced, citable answer. These are the passages most likely to be lifted into AI answers and featured snippets.

**Schema is complete and correct.** All three required types render on every article: `Article` and `FAQPage` JSON-LD live in `ArticleLayout.astro`; `BreadcrumbList` is supplied by the `Breadcrumbs.astro` component (it carries `"@type":"BreadcrumbList"` + `itemListElement`), which `ArticleLayout.astro` renders at line 69. OG/Twitter cards and canonical tags are in `BaseLayout.astro`. No schema gap found.

## 3. On-Page SEO Quality

- **Internal links — healthy density, broken targeting.** Average **12.4 internal links/article** (median 11), well above the 5–10 target; only **68 articles (4%)** fall under 5 links. So volume is not the problem.
- **Targeting is the problem.** A strict anchor↔target token match flags **~646 internal links pointing at topically wrong destinations.** Clear examples: `abstract-algebra` links `[cryptography] → /blockchain`; `aerodynamics` links `[computational fluid dynamics] → /machine-learning`; `air-conditioning` links `[air quality] → /acoustics`; `algorithms` links `[programming] → /agile-software-development`; `animal-behavior` links `[information] → /acoustics`. These pass the "is the target a real article" check (0 dead edges in the link-graph audit) but pollute the relevance graph and confuse both Google and AI crawlers about what each page is about.
- **Link-graph structure is thin in places.** The audit reports **388 orphans (0 incoming links)** and **805 underlinked articles (<3 incoming)** out of 1,615 in the graph. Reciprocal coverage is only **9.58%** (1,830 / 19,104 pairs). Orphans are the highest-risk SEO subset — pages with no internal authority flowing in.
- **189 articles embed a link inside the H1.** Minor, but H1s should be clean text for both ranking and accessibility.
- **Meta descriptions:** schema caps at 160 chars (good), but **11 flagged as too short** (<150), including high-value `stoicism` (127), `cognitive-bias` (133), `silk-road` (135).
- **10 genuinely broken internal links** (malformed markdown, anchor with no closing target) in `dyeing`, `gourmet-cooking`, `japanese-language`, `recycling`, `social-contract-theory`, `voting-theory`, `warhammer`, `water-law`, `whale-watching`, `whittling`.
- **Word count below tier — the single largest defect class: 815 articles.** Mostly Tier 3 (787), but **19 Tier-1 and 9 Tier-2** miss their floor too. Worst gaps: `industrial-engineering` (458/1200), `tinsmithing` (533/1200), `space-law` (535/1200), and Tier-1s `wealth-management` (2,335/3,000), `volcanology` (2,336), `visual-basic` (2,361), `virology` (2,387).

## 4. Topical Authority & Content Gaps

The published corpus skews heavily to a few buckets: **everyday-concepts (411), science (246), arts-amp-culture (244), technology (195), history (149)**. Tier split is 539 / 270 / 803 (T1/T2/T3). `data/remaining-topics.json` lists **806 unpublished topics** — almost all Tier 3 (805) and concentrated in **everyday-concepts (427)** and **arts-amp-culture (245)**, with a **sports (85)** cluster and small but complete-able clusters in **politics (13), language (9), religion (7)**.

**Highest-value clusters to act on:**

1. **Finish the small, near-complete clusters first** — politics, language, religion, agriculture, education. Completing a 7–13 topic cluster creates genuine topical authority cheaply and gives the orphan articles in those categories internal-link neighbors.
2. **Sports (85 remaining)** is a coherent, monetizable cluster with clear search demand (`american-football`, `aikido`, `angling` already drafted as patterns). Worth a dedicated batch.
3. **Don't bulk-add to everyday-concepts/arts (672 of the 806 remaining)** until link-graph health improves — adding more Tier-3 stubs to already-crowded buckets will deepen the orphan/underlink problem, not authority.

## Prioritized Improvement List (fix order, expected impact)

1. **Fix the ~646 mismatched internal-link targets + 10 broken links.** *Impact: high.* Cleans the relevance graph that both Google and AI engines read; immediate trust signal. Start with hub articles (`machine-learning`, `abstract-algebra`, `aerodynamics`).
2. **Eliminate the 388 orphans and seed links into the 805 underlinked pages.** *Impact: high.* Add 2–3 contextual incoming links each from related, correctly-targeted articles. Lifts indexation and citation odds.
3. **Trim the 67 long first paragraphs to a ≤3-sentence definition.** *Impact: high for GEO, low effort.* Directly raises featured-snippet and AI-answer capture; FAQs are already strong, so the lede is the weak link.
4. **Backfill the 28 Tier-1/Tier-2 word-count misses** (e.g., `wealth-management`, `virology`, `acupuncture` at 1,844/2,000). *Impact: medium-high.* These are flagship pages; depth matters most here. Tier-3 shortfalls can wait.
5. **Lengthen the 11 short meta descriptions and clean the 189 in-H1 links.** *Impact: medium.* Quick wins on CTR and heading clarity.
6. **Complete the small clusters (politics/language/religion/sports), then batch sports.** *Impact: medium, compounding.* Builds authority where the corpus is closest to "owning" a topic.

**Bottom line:** humanization and schema are already solved; FAQs are a GEO strength. The value is locked behind two fixable issues — wrong-target internal links and a starved link graph — plus a low-effort GEO win in shortening first paragraphs.
