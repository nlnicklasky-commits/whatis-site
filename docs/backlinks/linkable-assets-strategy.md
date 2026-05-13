# Linkable Assets Strategy — WhatIs.site

**Last updated:** 2026-05-12
**Based on:** [linkable-assets-map.md](linkable-assets-map.md)
**Decision:** 5 stats pages + 4 deep guides + 3 tools, sequenced over 12 weeks.

---

## Sequencing principle

Ship in this order, because earlier assets feed later ones:

1. **Stats pages first** — quickest to produce, highest journalist-link probability, immediately citable by AI search.
2. **Tools second** — once the stats pages drive any traffic, tools convert that audience into return visits.
3. **Deep guides last** — these benefit from internal links from the stats pages we just shipped.

---

## A. Statistics pages (5)

### A1. Artificial Intelligence Statistics 2026
- **URL:** `/artificial-intelligence-statistics-2026/`
- **Target keyword cluster:** "ai statistics 2026", "artificial intelligence statistics", "ai adoption statistics", "generative ai statistics"
- **Audience & why they link:** Tech journalists, B2B SaaS marketers, AI consultancies citing adoption numbers in pitch decks and blog posts. They need one URL that aggregates Stanford AI Index, McKinsey State of AI, Gartner, IDC, and PwC into a 2026 snapshot.
- **Outline (H1–H3):**
  - H1: Artificial Intelligence Statistics 2026
  - H2: Key AI statistics at a glance (TL;DR with 8–10 numerics)
  - H2: AI adoption by industry
    - H3: Enterprise adoption (McKinsey, Gartner)
    - H3: SMB adoption (Salesforce SMB report)
    - H3: Geographic adoption (Stanford AI Index)
  - H2: Generative AI specific statistics
    - H3: ChatGPT, Claude, Gemini usage
    - H3: Enterprise GenAI deployment
  - H2: AI investment and funding
  - H2: AI workforce impact
  - H2: AI safety and governance
  - H2: Methodology and sources
- **Data sources:** Stanford AI Index 2026, McKinsey State of AI 2025, Gartner 2026 forecasts, IDC, PwC AI Predictions, OECD AI Observatory, US Census Bureau AI use surveys.
- **Required schema:** Article + FAQPage (4–6 Qs) + ItemList (top stats).

### A2. Remote Work Statistics 2026
- **URL:** `/remote-work-statistics-2026/`
- **Target keywords:** "remote work statistics 2026", "work from home statistics", "hybrid work statistics"
- **Audience:** HR/recruiting bloggers, productivity tool marketers, journalists covering RTO mandates.
- **Outline:** TL;DR → adoption rates (BLS data) → industry breakdown → productivity/satisfaction → RTO mandate tracker → economic impact → 2026 outlook → sources.
- **Data sources:** US BLS, Pew Research, WFH Research (Bloom et al.), Gallup State of Workplace 2025/2026, OECD.

### A3. Cryptocurrency Statistics 2026
- **URL:** `/cryptocurrency-statistics-2026/`
- **Target keywords:** "cryptocurrency statistics 2026", "crypto adoption statistics", "bitcoin statistics"
- **Audience:** Crypto news outlets, fintech bloggers, regulators citing adoption data.
- **Outline:** market cap → adoption by region → BTC vs ETH vs stablecoin → institutional adoption (ETFs) → regulatory tracker → fraud/loss stats → sources.
- **Data sources:** Chainalysis Geography of Crypto 2025, CoinGecko, Triple-A, Pew Research, FBI IC3.
- **Risk note:** Crypto stats decay fast. Set a calendar reminder to refresh quarterly.

### A4. Mental Health Statistics 2026
- **URL:** `/mental-health-statistics-2026/`
- **Target keywords:** "mental health statistics 2026", "anxiety statistics", "depression statistics"
- **Audience:** Healthcare bloggers, therapy/coaching startups, journalists writing about youth mental health.
- **Outline:** prevalence by condition → demographics → access to care → suicide statistics (handle with care — follow WHO/AFSP guidelines, include crisis hotline link) → treatment outcomes → economic cost → sources.
- **Data sources:** WHO, CDC, NIMH, SAMHSA, Mental Health America State of Mental Health.
- **Compliance note:** Follow WHO suicide reporting guidelines. Include crisis resources at top.

### A5. Climate Change Statistics 2026
- **URL:** `/climate-change-statistics-2026/`
- **Target keywords:** "climate change statistics 2026", "global warming statistics", "carbon emissions statistics"
- **Audience:** Sustainability bloggers, educators, journalists, ESG analysts.
- **Outline:** temperature anomalies → emissions by sector → emissions by country → renewable energy adoption → climate finance → impacts (sea level, extreme weather) → IPCC milestones → sources.
- **Data sources:** IPCC AR6, NASA GISS, NOAA, IEA World Energy Outlook 2025, Our World in Data, EPA.

---

## B. Deep guides / canonical explainers (4)

These are **upgrades to existing articles** in `src/content/articles/`, not new files. Each gets a substantial expansion plus FAQ schema enhancement to become a canonical resource.

### B1. What Is Machine Learning? (already published — upgrade)
- **Slug:** `machine-learning`
- **Current state:** Tier 1, published 2026-03-06.
- **Upgrade scope:** Expand to 5,000+ words. Add: an interactive-feeling decision tree (static HTML/CSS), a "ML vs DL vs AI" comparison table, a "common pitfalls" section (cited from MLOps community), 2026 application examples. Strong FAQ block (8–10 Qs).
- **Link target:** dev bloggers and educators looking for one canonical "what is ML" link.

### B2. What Is Blockchain? (upgrade)
- **Slug:** `blockchain`
- **Upgrade scope:** Same approach. Expand. Add a comparison table (PoW vs PoS vs DAG), a "is X actually a blockchain" decision tree, current 2026 examples.

### B3. What Is Compound Interest? (likely exists — verify or create)
- Pair this guide with the calculator from C1. Mutual internal linking.

### B4. What Is Stoicism? (upgrade — already published Tier 1)
- **Slug:** `stoicism`
- **Upgrade scope:** This is unusually high link-magnet for a philosophy term (Daily Stoic, Ryan Holiday ecosystem). Expand to include modern Stoic practitioner quotes, a daily-practice section, philosophy/psych research citations. FAQ schema.

**Selection logic:** B1, B2, B4 are Tier-1 already-published, high search volume terms where we have existing equity. B3 pairs with our planned calculator. We are not building net-new long-form pieces — we are turning existing articles into definitive references.

---

## C. Tools and calculators (3)

Per our constraint of "zero JavaScript by default" in CLAUDE.md, each tool ships as a **single Astro page with one isolated `client:load` island** — the rest of the site stays static. Add the tool slug to a small allowlist rather than relaxing the global rule.

### C1. Compound Interest Calculator
- **URL:** `/compound-interest-calculator/`
- **Inputs:** Principal, monthly contribution, annual rate %, years, compounding frequency.
- **Outputs:** Final balance, total contributions, total interest, year-by-year table.
- **Why it earns links:** Personal finance bloggers link to free, clean, no-signup calculators. NerdWallet/Bankrate own this category but lots of mid-tier sites still link to lesser-known tools when they have a cleaner UX.
- **Tech:** Single React/Preact island. Pure client-side math, no API. Includes a printable/sharable result.
- **Companion content:** Below-the-tool 800-word explainer with FAQ schema. Internal link to/from B3 "What is compound interest".

### C2. Reading Time + Word Count Tool
- **URL:** `/word-count-reading-time-calculator/`
- **Inputs:** Paste text.
- **Outputs:** Word count, character count, sentence count, reading time (configurable WPM), grade level estimate (Flesch-Kincaid).
- **Why it earns links:** Writers, students, editors, content marketers. Niche but persistent link magnet — many blogs link to tools they've personally used.
- **Tech:** Single island, all client-side. No data leaves the browser (privacy angle for marketing).

### C3. Unit Converter
- **URL:** `/unit-converter/`
- **Inputs:** Value + from-unit + to-unit, with category tabs (length, mass, volume, temperature, area, time, speed, energy, pressure, data storage).
- **Outputs:** Live conversion.
- **Why it earns links:** Education sites, science/engineering blogs, recipe sites. Broad utility.
- **Tech:** Single island. All conversion factors as a static JSON table.

**Why these three:** All map to existing categories on the site (finance, language/writing, science/math). All are evergreen, all are easy to ship, all have proven link magnetism. None require any backend, API key, or recurring data refresh.

---

## D. Asset → category coverage matrix

Confirms we're not over-indexing on one vertical:

| Category | Stats page | Guide | Tool |
|---|---|---|---|
| Technology | A1 | B1 (ML), B2 (blockchain) | — |
| Business / Marketing | A2 (remote work) | — | — |
| Finance | A3 (crypto) | B3 (compound interest) | C1 |
| Health / Biology | A4 | — | — |
| Science / Environment | A5 | — | — |
| Philosophy | — | B4 (Stoicism) | — |
| Education / Language | — | — | C2, C3 |

Eight of 25 categories touched in this first wave. Wave 2 (next quarter) should cover History, Law, Psychology, Sports, Music.

---

## E. Production timeline (12-week plan)

| Week | Deliverable |
|---|---|
| 1 | A1 (AI Stats 2026) draft → publish |
| 2 | A2 (Remote Work Stats) draft → publish |
| 3 | C1 (Compound Interest Calculator) spec → build → publish |
| 4 | A3 (Crypto Stats) draft → publish |
| 5 | C2 (Reading Time Tool) build → publish |
| 6 | A4 (Mental Health Stats) draft → publish (medical review pass before publishing) |
| 7 | C3 (Unit Converter) build → publish |
| 8 | A5 (Climate Stats) draft → publish |
| 9 | B1 (ML guide upgrade) |
| 10 | B2 (Blockchain guide upgrade) |
| 11 | B3 (Compound Interest guide) |
| 12 | B4 (Stoicism guide upgrade) + monitoring report kickoff |

Each week ends with a build → git push → Vercel deploy + sitemap regen.

---

## F. Success criteria (90-day post-launch)

These are realistic baselines for a site starting from zero backlinks. Adjust after the first monthly report.

| Metric | 30 days | 60 days | 90 days |
|---|---|---|---|
| Referring domains (whole site) | +3 | +12 | +30 |
| Stats-pages indexed in GSC | 5/5 | 5/5 | 5/5 |
| Stats-pages ranking top-50 for primary KW | 2/5 | 4/5 | 5/5 |
| AI Overview / Perplexity citations (manual spot-check, weekly) | 0–1 | 2–4 | 4–8 |
| Tools driving >100 visits/mo | 0 | 1 | 2 |

If we hit "Referring domains +30 in 90 days" with zero outreach, the playbook is working as designed. If we hit zero new RDs in 60 days, the stats-pages aren't being discovered — diagnose with §4 of `linkable-assets-map.md` and add internal-link/sitemap remediation.

---

## G. What we are explicitly NOT doing in wave 1

- No primary research / surveys (no audience to survey from yet).
- No video content.
- No cold email or outreach (per playbook constraint).
- No new articles outside the 5 stats pages, 4 guide upgrades, 3 tools.
- No paid placements, no PBNs, no link exchanges.
- No JavaScript except inside the three calculator islands.

---

## H. Next action

Pending Nick's approval of the asset list, Phase 3 produces:
- The first draft of A1 (AI Statistics 2026) — see [phase-3-first-assets.md](phase-3-first-assets.md).
- The full technical spec for C1 (Compound Interest Calculator) — same file.
