# Phase 3 — First Assets (Approval-Ready)

**Last updated:** 2026-05-12
**Status:** Awaiting Nick's approval on outlines and spec before drafting full markdown/code.
**Prerequisite:** Approval of [linkable-assets-strategy.md](linkable-assets-strategy.md).

This document contains:
- A — Detailed outline + section-by-section data plan for asset **A1: AI Statistics 2026**.
- B — Full technical spec for tool **C1: Compound Interest Calculator**.

Both are designed to ship without any cold outreach and without new JavaScript dependencies beyond what's listed.

---

## A. AI Statistics 2026 — production-ready outline

### A.1 Page metadata

| Field | Value |
|---|---|
| URL | `https://whatis.site/artificial-intelligence-statistics-2026/` |
| Title tag | `AI Statistics 2026: 60+ Key Numbers Cited from Stanford, McKinsey, Gartner \| WhatIs.site` |
| Meta description (155 chars) | `60+ AI statistics for 2026 — adoption, enterprise use, generative AI, jobs, and investment — every number sourced from Stanford, McKinsey, Gartner & OECD.` |
| H1 | `Artificial Intelligence Statistics 2026` |
| Hero image | `/images/articles/ai-statistics-2026.webp` (commission or generate; alt = "Chart of global AI adoption 2020–2026") |
| Canonical | self |
| Schema | Article + FAQPage + ItemList (top 10 stats) |
| Category | technology |
| Tier | (override — this is a stats page, not a tier 1–3 article; document in schema as `type: stats-page` or add a `tier: stats` enum value) |

### A.2 Content collection schema impact

Current `src/content/config.ts` schema requires `tier` ∈ {1,2,3}. Stats pages don't fit. Two options:

1. Add `"stats"` as an allowed tier value (minimal change, recommended).
2. Create a separate `stats-pages` content collection.

**Recommendation:** Option 1 — add `stats` to the tier enum. Skip the wordCount range check for `tier: stats`.

### A.3 Section-by-section outline

Each section lists: section heading, target word count, key claims, primary sources to cite. Every numeric claim needs a citation footnote → external link.

#### Lede (citation-worthy first 100 words)

Open with a single-paragraph definition + three top numbers, suitable for AI Overview citation. Example structure:

> Artificial intelligence statistics in 2026 show enterprise adoption above 80%, generative AI usage in roughly two-thirds of organizations, and global AI investment exceeding $X billion. The figures on this page are sourced from the Stanford AI Index, McKinsey State of AI, Gartner, IDC, and the OECD AI Observatory. Last updated [DATE].

Word count: 80–100.

#### Section 1 — Key AI statistics at a glance (TL;DR)

- 10 bullet points, each a single sentence with one stat and one citation.
- Renders as an `<ul>` with semantic markup so AI Overviews can quote any one bullet.
- Word count: 250.

#### Section 2 — AI adoption by industry

- H3: Enterprise adoption — McKinsey State of AI 2025, Gartner 2026 forecast. ~300 words.
- H3: SMB adoption — Salesforce SMB Trends Report. ~200 words.
- H3: Geographic adoption — Stanford AI Index 2026, OECD AI Observatory. ~250 words. Include a country-comparison table.
- Total: ~750 words.

#### Section 3 — Generative AI specific statistics

- H3: Consumer tool usage (ChatGPT, Claude, Gemini, Copilot). Pew Research, Statista (free side), publicly disclosed user counts from the vendors' own announcements. ~250 words.
- H3: Enterprise generative AI deployment. McKinsey, BCG GenAI Radar 2025. ~300 words.
- Total: ~550 words.

#### Section 4 — AI investment and funding

- VC funding into AI (Crunchbase / PitchBook public reports).
- Big Tech R&D spend (10-K filings).
- Government AI funding (US, EU AI Act funding, China estimates).
- Table: Top 10 most-funded AI companies 2025.
- Word count: ~600.

#### Section 5 — AI workforce impact

- Jobs created vs displaced — McKinsey, World Economic Forum Future of Jobs 2025.
- Productivity studies — MIT/BCG randomized controlled trials.
- AI skills demand — LinkedIn Workforce Reports.
- Word count: ~500.

#### Section 6 — AI safety and governance

- AI incident database tally.
- EU AI Act status, US AI executive orders, state-level bills.
- Public trust polling — Pew, Edelman Trust Barometer.
- Word count: ~400.

#### Section 7 — Frequently asked questions

5 FAQ items, each Q + 2–3-sentence A. Each suitable for FAQPage schema and AI Overview extraction. Suggested Qs:

1. What percentage of companies use AI in 2026?
2. How big is the AI market in 2026?
3. Which industries adopt AI the fastest?
4. How many people use ChatGPT or Claude in 2026?
5. How much is invested in AI globally each year?

Word count: ~400.

#### Section 8 — Methodology and sources

- Plain-English methodology paragraph (we aggregate, we don't survey).
- Numbered source list with full citations and access dates.
- Last-updated date stamp (also surfaced in frontmatter `dateModified`).
- Word count: ~300.

#### Estimated totals

- Body words: ~3,800
- Citations: ~40–60 footnoted external links
- Internal links: 8–12 (to existing WhatIs.site articles on AI, ML, deep learning, neural networks, etc.)
- Charts/tables: 4 (geographic adoption table, top-funded companies table, jobs displaced vs created chart, AI safety incidents chart). Use static HTML/SVG; no chart library.

### A.4 Internal-link plan

This stats page is a hub. It should link out to and be linked from these existing articles (verify slugs exist):

Outbound (from stats page):
- `/artificial-intelligence/`
- `/machine-learning/`
- `/deep-learning/` (if exists)
- `/neural-network/` (if exists)
- `/generative-ai/` (if exists)
- `/large-language-model/` (if exists)

Inbound (insert a one-sentence "see our 2026 AI statistics" link near the lede of):
- The 6 articles listed above.
- `/category/technology/` index page.

Internal-link audit pre-flight: before publish, grep `src/content/articles/` for each target slug to confirm it exists; if not, drop that link.

### A.5 Risks and mitigations

| Risk | Mitigation |
|---|---|
| Stats become stale within 6 months | Calendar reminder for quarterly refresh; `dateModified` is the AI-Overview signal |
| Citation rot (linked source moves/dies) | At publish, capture archive.org snapshot URL of every citation as a fallback in footnote |
| Looks AI-generated → fails humanization rule | Conversational voice in section intros (per CLAUDE.md banned-words list); use em dashes, short sentences, opinion phrases |
| Medical-adjacent (mental-health AI) claims | A1 doesn't touch this — A4 does |

### A.6 Pre-publish checklist

- [ ] Tier-schema update applied (`stats` added to enum)
- [ ] All 40+ citations have hyperlinks AND archive.org fallback noted
- [ ] FAQPage schema validates in Google Rich Results Test
- [ ] Internal links audited (no 404s)
- [ ] Humanization scan passes (no banned words from CLAUDE.md)
- [ ] First 100 words includes 3 quotable stats
- [ ] `dateModified` in frontmatter matches publish date
- [ ] Sitemap regenerated, llms.txt updated to include this URL
- [ ] `npm run build` passes
- [ ] Hero image present at `/public/images/articles/ai-statistics-2026.webp`

---

## B. Compound Interest Calculator — technical spec

### B.1 Page metadata

| Field | Value |
|---|---|
| URL | `https://whatis.site/compound-interest-calculator/` |
| Title tag | `Free Compound Interest Calculator (Monthly Contributions Supported) \| WhatIs.site` |
| Meta description | `Calculate compound interest with monthly contributions. Free, no signup, with year-by-year breakdown and printable results. Built by WhatIs.site.` |
| H1 | `Compound Interest Calculator` |
| Schema | WebApplication + FAQPage |
| Canonical | self |

### B.2 Inputs

| Input | Type | Validation | Default |
|---|---|---|---|
| Principal (initial deposit) | Number ($) | ≥ 0, ≤ 100,000,000 | 10000 |
| Monthly contribution | Number ($) | ≥ 0, ≤ 1,000,000 | 500 |
| Annual interest rate | Number (%) | ≥ 0, ≤ 100, 2 decimals | 7 |
| Years | Integer | 1–60 | 20 |
| Compounding frequency | Select | annual / semi-annual / quarterly / monthly / daily | monthly |
| Contribution timing | Select | start / end of period | end |

### B.3 Math

Standard future-value-with-contributions formula:

```
n = compounding periods per year
t = years
r = annual rate (decimal)
P = principal
PMT = contribution per compounding period (convert monthly → period)

FV = P * (1 + r/n)^(n*t) + PMT * (((1 + r/n)^(n*t) - 1) / (r/n)) * timingMultiplier
```

`timingMultiplier` = `(1 + r/n)` if `start`, else `1`.

When monthly contribution is provided but compounding is not monthly, convert: `PMT_per_period = monthlyContribution * 12 / n`.

Edge case: `r == 0` — use linear formula `FV = P + PMT_per_period * n * t`.

### B.4 Outputs

- Final balance (large number, formatted with thousands separators and currency symbol).
- Total contributed (principal + sum of contributions).
- Total interest earned.
- **Year-by-year table** showing start balance, contributions in year, interest in year, end balance. Sortable not required; printable is.
- A "Copy result" button → puts a one-line summary on clipboard.
- A simple inline SVG bar chart showing contributions-vs-interest split at the final year.

### B.5 UX wireframe (top to bottom)

```
[H1: Compound Interest Calculator]
[One-sentence sub-headline: "See how your savings grow over time. Free, no signup."]

[Form grid: 2 cols on desktop, 1 col on mobile]
  Principal              Monthly contribution
  Annual rate %          Years
  Compounding freq       Contribution timing

[Calculate button (or live-update on input change — debounced 200ms)]

[Result card]
  $XXX,XXX.XX  (Final balance)
  Subtext: "from $YYY,YYY contributed + $ZZZ,ZZZ interest"
  [Copy result] [Print]

[SVG bar chart: contributions vs interest at final year]

[Year-by-year table (collapsible)]

[H2: How compound interest works] — 800-word explainer below the tool
  - Plain-English definition
  - Worked example with $1,000 @ 7% for 30 years
  - Annual vs monthly compounding difference
  - The "Rule of 72" sidebar
  - FAQ block (4–6 Qs)
  - Internal links to /compound-interest/, /interest-rate/, /savings/ (verify slugs)
```

### B.6 Tech & files

- File: `src/pages/compound-interest-calculator.astro`
- Island: `src/components/tools/CompoundInterestCalculator.tsx` (Preact via `@astrojs/preact`, NOT React, to keep the bundle small).
- Hydration: `client:visible` so it only loads when scrolled into view, preserving above-the-fold zero-JS.
- Style: Tailwind v3 utility classes only — no new CSS file.
- Dependencies: **none new**. No charting library — hand-roll the SVG bar chart in ~30 LOC.
- Bundle target: under 8 KB gzipped for the calculator island. Verify with `astro build --verbose` after first build.

### B.7 Astro 5 gotcha compliance

Per CLAUDE.md "Astro 5 Gotchas":
- This is a *page*, not an article — does NOT live in `src/content/articles/`, so the glob loader rule does not apply.
- Tailwind v3 only — confirmed.
- No `article.render()` issue — not relevant for a page route.

### B.8 SEO / schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Compound Interest Calculator",
  "url": "https://whatis.site/compound-interest-calculator/",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Free compound interest calculator with monthly contributions and a year-by-year breakdown."
}
```

Plus FAQPage schema for the below-the-tool FAQ block.

### B.9 Internal-link plan

- Inbound from `/compound-interest/` article (sentence: "Try the free [Compound Interest Calculator](/compound-interest-calculator/).")
- Inbound from `/interest-rate/` article.
- Inbound from category page `/category/finance/`.
- Inbound from footer "Free Tools" link (new footer section — see [phase-4-distribution.md](phase-4-distribution.md)).

### B.10 Pre-publish checklist

- [ ] Preact integration confirmed in `astro.config.mjs` (add `@astrojs/preact` if not present)
- [ ] Math unit-tested for: zero rate, monthly compounding, start-of-period timing, $0 contribution edge case
- [ ] Bundle size verified < 8 KB gzipped
- [ ] No-JS fallback: form renders with "Calculate" submit button → server-side route? **No** — calculator requires JS. Render a static message "Enable JavaScript to use this calculator" inside `<noscript>`.
- [ ] WebApplication + FAQPage schema validates
- [ ] Lighthouse Performance ≥ 90 on the calculator page
- [ ] Internal links from `/compound-interest/`, `/interest-rate/` inserted
- [ ] Footer "Free Tools" section added with link
- [ ] Sitemap regenerated
- [ ] `npm run build` passes

---

## C. Approval gate

Before drafting the full ~3,800-word AI Stats markdown and writing the Preact calculator code, confirm:

1. **Tier schema** — OK to add `stats` to the tier enum in `src/content/config.ts`?
2. **Preact dependency** — OK to add `@astrojs/preact` (only used for tool islands)? Alternative: a 2 KB vanilla-JS web-component, slightly more verbose to maintain.
3. **Hero image** — generate AI hero for the stats page (consistent with the rest of the site), or skip and use a clean placeholder gradient?
4. **Publish order** — Week 1 = AI Stats, Week 3 = Calculator (per [linkable-assets-strategy.md §E](linkable-assets-strategy.md)) — confirm or reorder?

Reply with "approved, ship A1 first" (or any reorder) and I'll proceed to draft. The remaining four stats pages (A2–A5) will follow the exact section structure documented here, swapping the topic.
