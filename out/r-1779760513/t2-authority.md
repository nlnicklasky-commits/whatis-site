# Off-Site Authority Roadmap — WhatIs.site

**Prepared by:** Off-Site Authority & Link Strategist
**Date:** 2026-05-25
**Scope:** Why a zero-authority new site gets ignored, an honest verdict on the linkable assets already shipped, and a 90-day founder-executable link plan.

---

## 1. Why authority is the gating factor (and what to actually expect)

The cause-and-effect is direct. Google doesn't crawl every URL it knows about — it allocates a **crawl budget** based on perceived importance, and the strongest external signal of importance is the link graph (how many trusted sites point at you). WhatIs.site has 1,620 articles and effectively zero referring domains. To Googlebot that reads as "large site, nobody vouches for it" — the exact profile of a content farm. So Google crawls a thin slice, indexes a fraction of that, and parks the rest in "Discovered – currently not indexed" purgatory. Low backlinks → low perceived importance → low crawl priority → slow, partial indexation. The indexation crisis is a *symptom* of the authority problem, not a separate bug.

Second-order effect: even indexed pages rank on page 4+ because there's no domain trust to lift them, so they earn no clicks, so Google sees no engagement signal to justify re-crawling them. The flywheel never starts.

Backlinks break this loop two ways. (1) Each link is a crawl path — an external link to a deep page gets it discovered and re-crawled faster than internal discovery alone. (2) Links transfer trust at the domain level, raising the crawl-priority ceiling for the *whole* site. A handful of authoritative links does more than a thousand internal links.

**Realistic timeline — set expectations now:**

| Phase | Window | What good looks like |
|-------|--------|----------------------|
| Seeding | Months 1–3 | 15–30 real referring domains (mix of directories, a few editorial). Indexation rate starts climbing. No meaningful ranking yet. |
| Traction | Months 4–6 | First editorial/news links land. Indexed page count rises sharply. Long-tail rankings (page 2–3) appear. |
| Compounding | Months 7–12 | 50–100+ referring domains. Stats pages start *earning* links passively. Traffic curve bends upward. |

There is no 30-day version of this. Anyone promising one is selling link spam that will get the site penalized. The honest message to the founder: **the next 90 days are about earning the first 20–30 legitimate links by hand**, because the first links are the hardest and the most valuable — they are what make all subsequent links possible.

---

## 2. Inventory & verdict on existing linkable assets

The team shipped two waves (commits `cd5a194` and `1aadeda`). I reviewed the actual files. Verdict per asset:

### Stats roundups — **genuinely link-worthy (the crown jewels)**
Ten pages live, routed flat at `/[topic]-statistics-2026`:
`src/pages/artificial-intelligence-statistics-2026.astro`, `climate-change-`, `cryptocurrency-`, `mental-health-`, `remote-work-` (wave 1) plus `cybersecurity-`, `music-streaming-`, `online-education-`, `social-media-`, `sports-betting-` (wave 2).

These are the strongest assets by a wide margin. The AI page alone carries 8 headline stats, a regional investment table, six FAQ entries, every figure tied to a *named primary source* (Stanford HAI, McKinsey, Pew, WEF) — see lines 6–53 of the AI file. `src/layouts/StatsLayout.astro` auto-injects FAQPage schema (line 79) and a copy-paste **APA + plain-text citation block** (lines 201–212) — exactly what a journalist needs to cite you in 30 seconds. The `/methodology` page (`src/pages/methodology.astro`) backs them with a credible sourcing hierarchy and AI-use disclosure, which materially helps pitch credibility.

**The one gap holding them back: no embeddable visuals.** The pages are all-text and HTML tables. Journalists link to a *chart they can embed* far more often than to a wall of numbers — and there's no shareable image, no "embed this chart" snippet, no downloadable data. That's the single highest-leverage fix (Tactic C).

### Free tools — **genuinely link-worthy, under-promoted**
Three working, no-signup, in-browser tools: `compound-interest-calculator.astro` (real amortization math + year-by-year table + copy-result button), `unit-converter.astro` (10 categories, NIST/SI factors), and `word-count-reading-time-calculator.astro`. The compound-interest tool even appends `via whatis.site/...` to copied results (line 237) — a nice latent attribution loop. They're legitimately useful and the kind of thing resource pages link to, but not *novel* — there are thousands of compound-interest calculators. They'll earn links from resource-page outreach and directories, not organic discovery. Promote them deliberately.

### Hub pages — **functional, do their job**
`/statistics` and `/free-tools` aggregate the assets with CollectionPage schema and a "Journalists and bloggers welcome" invitation (`statistics.astro` lines 124–126). Good internal-linking surfaces and fine landing pages for outreach. They are not link magnets themselves — nobody links to a hub — but they make the individual assets discoverable.

### What's missing
1. **Embeddable / downloadable data** off the stats pages (charts, a CSV, a single shareable image per page).
2. **An original-data angle.** Every stat is *aggregated* from others — which the methodology page honestly admits ("We aggregate; we don't survey"). Aggregation pages get cited; only *original* data reliably earns *news* links. There is currently nothing proprietary to pitch as a story.
3. **A named author/expert** with profiles. "WhatIs.site Editorial" is a faceless byline; digital PR and HARO responses convert far better attached to a real person.

---

## 3. The 90-day link-acquisition plan

Low-cost, solo-operator-executable, no black hat — sequenced so each phase enables the next. The existing `docs/backlinks/backlink-playbook.md` is an explicit *no-outreach* plan; this roadmap fills the active-outreach gap it leaves open.

### Days 1–15 — Foundation & free wins
- **Tactic A — Foundational citations/directories.** *Target:* Crunchbase, Wikidata, F6S, niche directories (AlternativeTo for the tools). *Angle:* consistent name/URL/description — `docs/branding/brand-profile.md` and `social-bios.md` already exist; use them verbatim. *Effort:* one sitting. *Quality:* low individually, but they establish the entity and give Googlebot crawl paths. Avoid auto-approve spam farms.
- **Tactic B — Set up the outreach machinery.** Create a real author identity (founder name + headshot + bio); register on **Featured / Qwoted / Help a B2B Writer** (modern HARO replacements). *Effort:* 2 hrs. Unlocks Tactic E.

### Days 10–45 — Make the stats pages embeddable, then pitch them (digital PR)
- **Tactic C — Ship one embeddable visual per top stats page (highest-leverage move).** *Target:* the AI, cybersecurity, and remote-work pages first (highest citation demand). *Action:* one clean chart image + an "embed this chart" HTML/`<iframe>` snippet that carries a link back to whatis.site. *Effort:* engineering, not outreach — but the prerequisite for everything below. *Quality:* this is what converts a pitch into a do-follow editorial link.
- **Tactic D — Data-journalism outreach off the roundups.** *Target:* journalists/bloggers who *recently wrote* on each topic (Google News + "topic 2024/2025", grab the byline). *Angle:* not "please link us" — instead, "your piece cites a 2023 AI-adoption number; we keep a quarterly-updated 2026 roundup with the McKinsey 78% figure and an embeddable chart." A fresher fact + ready-made asset is a favor, not a beg. *Effort:* ~10 personalized emails/week. *Quality:* high (editorial, topical); realistic conversion 2–5% → ~1–3 links over 6 weeks. (Template 1.)

### Days 20–60 — Resource pages, unlinked mentions, community
- **Tactic E — HARO/Featured/Qwoted responses.** *Target:* daily journalist queries matching your 10 stat topics + the finance tool. *Angle:* a specific sourced stat plus a one-line credential. *Effort:* 20 min/day, answer 2–3 relevant queries. *Quality:* high to very high (often major publications) — the best ROI a solo operator has. (Template 3.)
- **Tactic F — Resource-page outreach for the free tools.** *Target:* personal-finance bloggers, teacher/EDU "useful tools" pages, writing-resource lists (find via `intitle:"resources" compound interest`). *Angle:* "no-signup, no-ads, all-in-browser calculator for your list." *Effort:* ~10 emails/week. *Quality:* medium; EDU pages are gold. (Template 2.)
- **Tactic G — Unlinked-mention reclamation.** *Target:* anyone quoting a WhatIs.site stat or naming the brand without linking (Google `"whatis.site" -site:whatis.site`). *Angle:* polite "thanks for the mention — mind linking it?" *Effort:* low, opportunistic. *Quality:* medium-high, very high conversion.
- **Tactic H — Community seeding (value-first).** *Target:* topical subreddits, niche forums, Hacker News (tools), relevant Discord/Slack. *Angle:* answer a real question, cite your stat/tool only where it genuinely helps. *Effort:* a few posts/week. *Quality:* mostly no-follow, but drives referral traffic, engagement signals, and *discovery by linkers*. Never drop links cold — that's spam and gets you banned.

### Days 45–90 — Strategic guest content & the first original-data play
- **Tactic I — Strategic guest content.** *Target:* 2–3 mid-tier tech/finance/education blogs that accept contributors. *Angle:* one genuinely useful piece that *naturally* cites your roundup as support (not a stuffed link). *Effort:* high (~4–6 hrs/piece). *Quality:* high, contextual — two great placements beat ten thin ones.
- **Tactic J — Manufacture one original-data hook.** *Target:* future news links. *Action:* take the data-rich compound-interest tool and publish a small original analysis ("we ran 10,000 retirement scenarios; here's the contribution-vs-time tradeoff"). Original analysis gives journalists a reason to link to *you* rather than your sources. *Effort:* medium. *Quality:* potentially very high — the seed of phase-2 passive link earning.

**90-day target:** 15–30 referring domains, of which 3–6 are editorial/topical. That's a realistic, penalty-free foundation that bends the indexation curve.

---

## Outreach templates (ready to send)

**Template 1 — Data-journalism / fresher-stat pitch (Tactic D)**
> Subject: Updated 2026 figure for your [topic] piece
>
> Hi [Name],
> Your piece on [article title] is one of the clearer explainers out there — I shared it with [context]. One thing: it cites a [year] figure for [stat]. The current number is [new stat] ([Primary Source], [year]).
> We keep a quarterly-updated [Topic] Statistics roundup with that figure and a chart you're free to embed (attribution only, no permission needed): https://whatis.site/[slug]
> Useful if you ever refresh the piece — either way, thought you'd want the current number.
> [Founder name], WhatIs.site

**Template 2 — Resource-page outreach for a free tool (Tactic F)**
> Subject: A no-signup [tool] for your resources page
>
> Hi [Name],
> I came across your [resources/tools] page at [URL] — genuinely useful list. I built a free [tool name] that might fit: [one-line value]. No signup, no ads, no tracking — all the math runs in the reader's browser: https://whatis.site/[slug]
> If it's a fit for the list, great. If not, no worries — thanks for keeping that page up.
> [Founder name], WhatIs.site

**Template 3 — HARO / Featured / Qwoted response (Tactic E)**
> Hi [Reporter],
> Re: your query on [topic]. One concrete data point: [specific sourced stat], per [Primary Source, year].
> Context a reader cares about: [one sentence of insight].
> I'm [Founder name], editor at WhatIs.site, where we maintain a sourced [Topic] statistics roundup (every figure linked to its primary publication): https://whatis.site/[slug]. Happy to provide more figures or a chart on deadline.
> [Founder name] · [email] · [phone]
