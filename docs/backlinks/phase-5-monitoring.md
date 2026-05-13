# Phase 5 — Monitoring & Iteration

**Last updated:** 2026-05-12

This phase runs continuously after the first asset ships. Output is a monthly report at `docs/backlinks/reports/backlink-growth-report-YYYY-MM.md` plus inline iteration suggestions.

---

## A. Data inputs (monthly cadence)

Drop into `data/seo-exports/YYYY-MM/`:

1. `ahrefs-backlinks.csv` — full referring-domains export for whatis.site.
2. `ahrefs-organic-pages.csv` — top pages by organic traffic.
3. `gsc-queries.csv` — Google Search Console queries last 28 days.
4. `gsc-pages.csv` — GSC pages last 28 days.
5. `ai-overview-spot-checks.json` — manual spot-checks (see §C below).

If any of these are missing, the script generates a "data missing" report; the report should never silently skip a section.

---

## B. Monthly report template

File: `docs/backlinks/reports/backlink-growth-report-YYYY-MM.md`

```markdown
# Backlink Growth Report — [YYYY-MM]

**Generated:** [DATE]
**Period:** [START] → [END]
**Site:** whatis.site
**Total assets shipped this period:** [N]
**Total assets shipped to date:** [M]

## 1. Headline numbers

| Metric | This month | Prev month | Change | Target (90d) |
|---|---|---|---|---|
| Referring domains (total) | | | | |
| Referring domains (new this month) | | | | |
| Backlinks (total) | | | | |
| Organic traffic (estimated) | | | | |
| AI Overview citations (spot-checks) | | | | |

## 2. New referring domains this month

For each new RD, classify:

| Domain | DR (Ahrefs) | Linking page | Anchor | Target asset | Type | Quality | Action |
|---|---|---|---|---|---|---|---|
| | | | | (editorial / citation / directory / tool / forum / other) | (high / medium / low / spam) | (none / disavow / outreach-candidate) |

Quality rubric:
- **High** — editorial mention from a reputable news site, gov, .edu, or established blog (DR ≥ 40).
- **Medium** — niche blog (DR 20–40), useful directory.
- **Low** — auto-listing directory (DR < 20), spammy-but-not-toxic.
- **Spam** — link farm, hacked site, PBN. Add to disavow queue.

## 3. Per-asset performance

| Asset | URL | RDs (cumulative) | New RDs | Organic clicks (28d) | Impressions (28d) | Top KW | Position | Notes |
|---|---|---|---|---|---|---|---|---|
| A1 — AI Stats 2026 | /artificial-intelligence-statistics-2026/ | | | | | | | |
| A2 — Remote Work | … | | | | | | | |
| (etc.) | | | | | | | | |

## 4. AI Overview / Perplexity citations (manual)

Spot-check methodology: every Friday, run the 10 target queries below in Google AI Overviews and Perplexity. Log whether whatis.site is cited.

Target queries this month:
1. "ai statistics 2026"
2. "remote work statistics 2026"
3. "compound interest formula"
4. "how to calculate compound interest"
5. "what is machine learning"
6. "what is blockchain"
7. "cryptocurrency adoption statistics"
8. "mental health statistics 2026"
9. "climate change statistics 2026"
10. (rotate one extra topical query)

| Query | Google AI Overview cite? | Perplexity cite? | ChatGPT search cite? | Notes |
|---|---|---|---|---|

## 5. Assets that underperformed

For any shipped asset showing zero new RDs after 30+ days from publish AND under 50 GSC impressions:

| Asset | Likely issue | Proposed fix |
|---|---|---|

Likely-issue rubric (pick one or more):
- Indexation: GSC says not indexed → fix sitemap, submit URL, check robots
- Discovery: indexed but zero impressions → internal-link audit, add to hub pages
- Ranking: impressions but no clicks at position 30+ → SERP-intent mismatch, rewrite intro
- Stale data: published > 60 days ago without refresh → schedule update
- Format mismatch: stats page that isn't actually stat-heavy → restructure

## 6. New opportunity signals

What competitors gained links to this month that we don't have an analog for. Source: Ahrefs "lost vs gained" reports filtered to competitor domains in [linkable-assets-map.md §2](../linkable-assets-map.md).

| Competitor URL | Topic | Their RD gain | Our analog? | Should we build one? |
|---|---|---|---|---|

## 7. Iteration plan

Concrete tasks for next month, ordered by leverage:

- [ ] Refresh A1 with [X] new 2026 figures
- [ ] Add [Y] new internal links pointing to underperforming asset Z
- [ ] Spin up [new asset] based on competitor gap from §6
- [ ] Disavow [N] domains from §2 quality rubric "spam" row

## 8. Sanity checks

- [ ] No assets dropped from the index this month (GSC coverage check)
- [ ] No new banned-word violations (from the humanization rules)
- [ ] All canonicals still self-referential (no accidental cross-domain canonicals from Medium syndication)
- [ ] Sitemap still includes every published asset
- [ ] llms.txt still up to date
- [ ] Schema validates on each new stats page
```

---

## C. Automation hooks

These should run automatically; not manual labor.

### C.1 Weekly AI Overview spot-checker

Script: `scripts/seo/ai-overview-spotcheck.mjs`

Runs every Friday (via Vercel Cron or GitHub Actions). For each query in the target list, hits a serpapi.com or similar API to capture AI Overview HTML, parses for `whatis.site` mentions, appends a row to `data/ai-overview-log.json`.

Cost: minor — ~$0.10 per check × 10 queries × 4 weeks = $4/month with serpapi free tier likely covering it.

### C.2 Build-time internal-link verifier

Script: `scripts/seo/verify-internal-links.mjs`

Reads `data/internal-link-maps/*.yml`, parses every source article, confirms each planned inbound link's anchor text exists. Fails the build with a clear error if any is missing. Already mentioned in [phase-4-distribution.md §A.1](phase-4-distribution.md).

### C.3 Monthly report generator

Script: `scripts/seo/generate-monthly-report.mjs`

Reads `data/seo-exports/[current-month]/`, fills the template in §B, writes to `docs/backlinks/reports/backlink-growth-report-YYYY-MM.md`. Runs first Monday of each month, manually triggered (`npm run report:monthly`) or via cron.

Behavior: if a required CSV is missing, write the report with "[DATA MISSING — drop $file]" placeholders. Never fail silently.

### C.4 Disavow file builder

Script: `scripts/seo/build-disavow.mjs`

Reads every monthly report, extracts all rows where `Action == disavow`, deduplicates, outputs `data/seo/disavow.txt` in Google's required format. Submit manually to GSC quarterly (Google guidance: only disavow if you have a confirmed manual penalty or a high-volume of clearly spammy links — for a site building from zero, this stays empty for the first 6 months).

---

## D. KPI tracking dashboard (optional, low priority)

If/when Vercel Analytics or a similar lightweight stat tool is enabled, expose a private `/admin/backlinks/` page (gated behind a secret token in the URL — zero JS, fully static, regenerated nightly) showing:

- Sparkline of RD growth (last 6 months).
- Top 10 assets by RD.
- Top 10 assets by GSC impressions.
- Recent AI Overview citations.

Build only after 90 days of data is available — otherwise the dashboard is empty and misleading.

---

## E. Review cadence

| Cadence | Who | What |
|---|---|---|
| Daily (automated) | scripts | IndexNow ping on new publishes; AI Overview spot-check log |
| Weekly | Claude | Friday AI Overview spot-check pass, append to log |
| Monthly | Claude | Generate report, propose iteration plan |
| Quarterly | Nick | Review report trends, approve/reject iteration plan, hand-off any outreach (still optional/none required) |

---

## F. When to revisit strategy

Trigger a strategy refresh in [linkable-assets-strategy.md](linkable-assets-strategy.md) if any of these happen:

- 60 days post-launch with zero new RDs → diagnose with §5 of monthly report, then revise asset mix
- A single asset acquires > 20% of total RDs → double down on that format
- A category we're not covering acquires links accidentally → add it to wave 2
- AI Overview citation rate exceeds organic ranking gains → bias even harder toward FAQ-heavy stats pages
- Vertical competitor (e.g., Investopedia) publishes a free tool we planned → adjust differentiation or pivot tool concept
