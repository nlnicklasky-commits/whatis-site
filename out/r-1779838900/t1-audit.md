# Hero Alt-Text Quality Audit — WhatIs.site

**Scope:** 1,620 articles in `src/content/articles/*.md`. Each article's hero image alt comes from the `heroAlt` frontmatter field, rendered in `ArticleLayout.astro:97` (`alt={frontmatter.heroAlt}`) and `ArticleCard.astro:31` (`alt={data.heroAlt}`).
**Method:** Reproducible Node scan — `scripts/audits/hero-alt-quality-audit.mjs` (gitignored scratch; full data in `.audit-hero-alt-quality.json`). Cross-referenced against `scripts/audits/image-audit.mjs` and the prior pass `out/r-1779812042/t2-alt-seo.md`.
**Date:** 2026-05-26

---

## What changed since the last audit

The prior audit (`out/r-1779812042/t2-alt-seo.md`) flagged two structural defects that have since been **fixed**: the 8 mid-word truncations ("…study of U") and the 430 over-length alts (126–159 chars). This scan confirms both are gone — **max length is now 125, mean 91.2, and 0 alts exceed 125 chars.** What remains is the open P2 issue: alts restate the *topic definition* instead of describing the *image*. This audit quantifies that defect and sets the target bar.

---

## 1. Current-state metrics

All figures from `scripts/audits/hero-alt-quality-audit.mjs` over 1,620 article files.

| Metric | Count | % of corpus |
|---|---|---|
| Articles scanned | 1,620 | 100% |
| Missing / empty `heroAlt` | **0** | 0% |
| Exact duplicate `heroAlt` (cross-article) | **0** | 0% |
| Over 125 chars (now fixed) | **0** | 0% |
| **Topic-restatement (classifier floor)** | **1,462** | **90.2%** |
| Hero alts that genuinely describe image content | **0** | 0% |
| Filler ("image of / photo of / picture of") | 0 | 0% |
| Articles with in-content figure alts (EXCLUDE) | **87** | 5.4% |

**Length distribution (chars):** min **39**, mean **91.2**, max **125**.

| Bucket | Count |
|---|---|
| 0 (missing) | 0 |
| 1–14 | 0 |
| 15–39 | 1 |
| 40–79 | 469 |
| 80–125 | 1,150 |
| 126+ | **0** |

**On the 90.2% figure — read it as a floor, not a ceiling.** The classifier flags an alt as topic-restatement when it opens with the article's subject followed by a definitional verb (`is/are/was`, plus encyclopedic verbs like `studies/applies/spans/explains/transforms/enables`). The 158 alts it did *not* flag are almost entirely restatements too — they just use verbs the enumeration doesn't list. Hand-review of that residual set confirms it: `business-law` ("…is the body of legal rules…"), `contract-law` ("Contract law **governs**…"), `data-mining` ("Data mining **extracts**…"), `digital-photography` ("Digital photography **captures** images using electronic sensors…"), `food-preservation` ("Food preservation **extends** the shelf life…"), `grilling` ("Grilling **cooks** food over direct high heat…"). None of these describes a photo. **The honest read: ~100% of the 1,620 hero alts are topic-restatement; 90.2% is the conservative machine-counted floor and 0 are genuinely image-descriptive.**

**Duplicates and missing: clean.** Zero empty, zero exact cross-article duplicates — every hero alt is a unique string. The problem is not coverage or uniqueness; it is *what the strings describe.*

**In-content figure alts — 87 articles, hand-written and descriptive (must be excluded).** The prior audit found 0 body images; that has changed. 87 articles now carry exactly one in-content image each (markdown `![alt](src)`), and their alts are already correct image descriptions — they describe the figure, not the topic. Samples pulled by the scan:

- `aerodynamics` → "Diagram of the four forces of flight on an airfoil: lift up, weight down, thrust forward, drag backward"
- `aerospace-engineering` → "A white rocket ascending into a clear blue sky on a bright exhaust plume"
- `agriculture` → "Rows of green crops stretching to the horizon at sunset"
- `algebra` → "A polished brass balance scale resting in perfect equilibrium"
- `acoustics` → "A metal tuning fork above concentric rings of sound waves"

These are the model for what hero alts *should* read like. They are out of scope for any rewrite — leave all 87 untouched.

---

## 2. The core defect — topic-restatement vs image description

Every hero alt answers "what is this article about?" instead of "what is in this photograph?" A screen-reader user already gets the topic from the H1 and intro paragraph; the alt repeats it and tells them nothing about the visual. Google Images gets the topic from the title, filename, and surrounding text; the alt adds no new signal.

Below: 10 real hero alts (slug + current `heroAlt` from the scan) paired with a model image-description rewrite. **The rewrites are illustrative** — I did not view the hero files; each describes a *plausible* editorial scene inferred from the topic and from the style of the existing 87 figure alts. The real rewrite pass must verify each against the actual image (no fabricated specifics).

| # | Slug | Current `heroAlt` (topic-restatement) | Model rewrite (illustrative image description) |
|---|---|---|---|
| 1 | `abacus` | "An abacus is one of the oldest counting tools in history, used for arithmetic across many cultures" | "Wooden abacus with colored beads strung on parallel rods" |
| 2 | `accounting` | "Accounting is the system for recording, summarizing, and reporting financial transactions" | "Hands tallying figures on a ledger beside a calculator" |
| 3 | `acupuncture` | "Acupuncture is a medical practice originating in ancient China that involves inserting thin" | "Fine acupuncture needles placed along a person's back" |
| 4 | `aikido` | "Aikido is a Japanese martial art focused on redirecting an attacker's energy rather than meeting force with force" | "Two aikido practitioners in white gi mid-throw on a training mat" |
| 5 | `alchemy` | "Alchemy was an ancient practice blending proto-chemistry, philosophy" | "Antique workbench with glass flasks and an aged manuscript" |
| 6 | `agriculture` | "Agriculture is the practice of cultivating crops and raising livestock for food, fiber, and fuel" | "Tractor working a green field under a wide open sky" |
| 7 | `digital-photography` | "Digital photography captures images using electronic sensors instead of film" | "DSLR camera held up to frame a scene, rear screen glowing" |
| 8 | `grilling` | "Grilling cooks food over direct high heat from charcoal, gas, or wood" | "Skewers and vegetables searing over glowing charcoal grates" |
| 9 | `surfing` | "Surfing is the sport of riding ocean waves on a board" | "Surfer carving across the face of a breaking blue wave" |
| 10 | `crystallography` | "Crystallography determines crystal atomic structure using X-ray diffraction" | "Faceted purple crystal cluster lit against a dark background" |

The pattern is identical every time: the current alt is a dictionary sentence; the rewrite is something a sighted person would *see*.

---

## 3. Why image-descriptive alts matter (and the risk of getting it wrong)

**Screen readers (accessibility).** Alt text is announced in place of the image. When the alt restates the topic, a blind user hears the same definition twice — once as the image, once as the intro paragraph they're about to read — and learns nothing about the visual content the page chose to show. A description ("Surfer carving across a breaking wave") conveys the actual content. WCAG 1.1.1 (Non-text Content) wants the alt to serve the *equivalent purpose* of the image; for an editorial hero, that purpose is the scene, not the dictionary entry.

**Google Images (image SEO).** Google's own image-SEO guidance is explicit: write alt text that *describes the image*, and avoid stuffing keywords or repeating the page topic. The topic keyword already appears in the title tag, the descriptive filename (`{slug}-hero.webp`, confirmed in the prior audit), and the surrounding body text. A descriptive alt adds a *new* relevance signal — visual concepts the crawler can't otherwise extract — which is exactly what helps a hero rank in image search and appear as a thumbnail in AI Overviews.

**The asymmetric risk: a wrong description is worse than a generic one.** This is the load-bearing constraint for the rewrite. If an alt claims "Surfer riding a wave" but the hero is actually an abstract blue gradient, a screen-reader user is *misinformed* and Google is fed a false signal — both worse outcomes than a bland-but-true topic restatement. So the rewrite cannot be done blind from the slug alone. Each new alt must be verified against the real image (visual inspection or a vision-model caption that a human checks). When the image content is genuinely ambiguous or unknown, fall back to a truthful generic description rather than inventing specifics.

---

## 4. Quality bar — what a GOOD hero alt looks like for this site

A hero alt passes if **all** of these hold:

- **Describes what is visibly in the frame** — the subject, setting, and notable visual detail a sighted person would name, not the topic's definition.
- **≤ 125 characters** (matches the ceiling already enforced corpus-wide; ~80–110 is the sweet spot for screen readers).
- **No filler prefixes** — never "image of", "photo of", "picture of", "an illustration showing"; the element is already known to be an image.
- **Contains the topic keyword only where truthful** — e.g. "abacus", "surfer" — woven in naturally because it genuinely appears in the frame, never forced or repeated for SEO.
- **No fabricated specifics** — no invented numbers, names, brands, dates, or details that may not be in the actual image. If unsure, describe generically and truthfully.
- **Not a restatement of the title or intro** — it must add information the page text doesn't already carry.
- **Reads as a noun phrase / scene, not a sentence definition** — "Wooden abacus with colored beads on parallel rods," not "An abacus is a counting tool."
- **Unique** — preserve the existing zero-duplicate property; no two heroes share an alt.

Modeled directly on the 87 existing in-content figure alts (§1), which already meet this bar.

---

## 5. Scope recommendation

**Rewrite: all 1,620 hero `heroAlt` values.**

Rationale: 0 of 1,620 hero alts currently describe their image; the machine-counted restatement floor is 1,462 (90.2%) and hand-review of the unflagged residual shows it is also restatement. There is no descriptive subset of heroes to preserve — the apparent "descriptive" candidates (`portrait-photography`, `table-tennis`, `surfing`, etc.) only *contain* scene words while still defining the topic, so they are in scope too.

**Exclude (do not touch):**

- **The 87 in-content figure alts** (markdown `![]()` in article bodies). These are hand-written, already image-descriptive, and are the model for the rewrite. They live in body text, not the `heroAlt` field, so a frontmatter-only pass naturally avoids them — but call it out so no script reaches into bodies.
- **The decorative logo `alt=""`** in `Header.astro` / `Footer.astro` (correct WCAG treatment, confirmed in the prior audit). Not a hero, not in scope.
- **No article bodies, no images on disk, no other frontmatter fields.** Edit `heroAlt` only.

**Exact counts:**

| Action | Count |
|---|---|
| Hero `heroAlt` to rewrite (every article) | **1,620** |
| In-content figure alts to leave untouched | **87** |
| Hero alts already meeting the §4 bar (none) | **0** |

**Execution guardrail (from §3):** the rewrite must be image-verified, not slug-derived. Generate candidates from the actual hero image (vision-model caption or human inspection), check each against the §4 bar, and keep the existing constraints intact — ≤125 chars, unique, zero filler. Batch-edit the `heroAlt` frontmatter field only; never modify article bodies, image files, or the 87 figure alts.

---

**Evidence trail:** `scripts/audits/hero-alt-quality-audit.mjs` (scan) → `.audit-hero-alt-quality.json` (data); `ArticleLayout.astro:97`; `ArticleCard.astro:31`; `scripts/audits/image-audit.mjs`; prior audit `out/r-1779812042/t2-alt-seo.md` (§1 length/truncation now resolved, §2 P2 restatement defect quantified here); spot-checked source: `src/content/articles/abacus.md` (heroAlt + body).

WORK_COMPLETE
deliverable: out/r-1779838900/t1-audit.md
