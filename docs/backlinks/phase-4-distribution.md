# Phase 4 — Distribution Without Outreach

**Last updated:** 2026-05-12
**Goal:** Maximize discoverability of new linkable assets without cold outreach.

Two pillars: **internal linking & site architecture** (on-site) and **entity presence** (off-site, no-outreach).

---

## A. Internal linking & site architecture

### A.1 Per-asset internal-link map

Every new asset gets an *inbound* and *outbound* link plan before publishing. This is mandatory — the audit script should fail-fast if the map is missing.

Standard template (one per asset):

```yaml
asset: /artificial-intelligence-statistics-2026/
inbound_links:
  - from: /artificial-intelligence/
    anchor: "see our 2026 AI statistics roundup"
    placement: end of lede paragraph
  - from: /machine-learning/
    anchor: "current AI adoption statistics"
    placement: in "Why machine learning matters" section
  - from: /category/technology/
    anchor: "AI Statistics 2026"
    placement: "Featured" callout at top of category index
outbound_links:
  - to: /artificial-intelligence/
    anchor: "artificial intelligence"
    placement: first body paragraph
  - to: /machine-learning/
    anchor: "machine learning"
    placement: section 2 (adoption by industry)
  # ...
```

Store these maps as YAML in `data/internal-link-maps/<asset-slug>.yml`. A build-time script (`scripts/seo/verify-internal-links.mjs`) reads the maps, confirms anchor text exists in each source file, and fails the build if a planned inbound link is missing.

### A.2 Site architecture additions

These are the architectural changes needed to surface the new assets:

| Change | Where | Why |
|---|---|---|
| Footer "Free Tools" section | `src/layouts/BaseLayout.astro` footer | Sitewide discovery of C1/C2/C3 |
| Header nav: "Stats" dropdown | `src/components/Header.astro` (if exists) | Sitewide discovery of A1–A5 |
| Hub page `/statistics/` | `src/pages/statistics.astro` | Lists all stats pages; gives them a hub destination |
| Hub page `/free-tools/` | `src/pages/free-tools.astro` | Lists all tools |
| Category index "Featured" slot | category page template | First-row callout to the relevant new asset |
| Homepage "What's new" section | `src/pages/index.astro` | Top-of-funnel surface for fresh assets |
| Sitemap regen | automatic at build | New URLs indexed faster |
| llms.txt update | `public/llms.txt` | AI crawler visibility for top assets |

### A.3 The /statistics/ hub page

Pattern (mirrors what HubSpot, Pew, and Statista do):

```
H1: WhatIs.site Statistics
Intro (3 sentences): what these pages are, how often they update, methodology.

H2: 2026 statistics roundups
Card grid (5 cards):
  - AI Statistics 2026  | "60+ figures on enterprise adoption..."
  - Remote Work Stats 2026 | ...
  - Cryptocurrency Stats 2026 | ...
  - Mental Health Stats 2026 | ...
  - Climate Change Stats 2026 | ...

H2: How we source these
Plain-English methodology + link to a /methodology/ page.

H2: Cite these statistics
A one-block copy-paste citation snippet (APA + plain). Citing journalists love this.
```

Adding a copy-paste citation block is a documented citation-multiplier — bloggers will copy the snippet and the link rides along.

### A.4 The /free-tools/ hub page

Same pattern. Cards for C1/C2/C3 with one-line value props and direct CTAs.

### A.5 In-article internal-link enforcement

Today the project targets 5–10 internal links per article (CLAUDE.md). For the 5 stats pages + 4 deep guides, increase to **10–15 internal links** since they will be the hub assets.

Modify `content-auditor.md` (the subagent) to require a min of 10 internal links for any article tagged `tier: stats` or `featured: true`.

### A.6 llms.txt update

`public/llms.txt` should list, in this order:

1. The 5 stats-page URLs (highest AI-citation priority).
2. The 3 tool URLs.
3. The 4 upgraded deep guides.
4. The /statistics/ and /free-tools/ hubs.
5. The top 20 highest-impression existing articles (from GSC).

Format per llms.txt spec — a markdown index with one-line descriptions per link.

---

## B. Entity presence (no-outreach off-site work)

### B.1 Canonical brand profile

Single source of truth for every off-site profile. Store as `docs/branding/brand-profile.md` (separate file, not in this doc).

| Field | Value (fill in) |
|---|---|
| Brand name | WhatIs.site |
| Tagline (≤ 60 chars) | TBD — e.g., "Clear answers to every 'what is' question." |
| One-line description (≤ 150 chars) | TBD |
| Long description (300–500 chars) | TBD |
| Primary URL | https://whatis.site |
| Logo (light + dark, SVG + PNG 512×512, 1024×1024) | TBD |
| Favicon (verified) | already deployed |
| OG image (1200×630) | TBD |
| Founded | TBD |
| Founder/author bio (Nick Lasky?) | TBD |
| Contact email | nl.nicklasky@gmail.com OR new contact@whatis.site |
| Social handles | TBD — X, LinkedIn, Mastodon, Bluesky |

Locking this profile is a one-time investment that pays off across every directory below.

### B.2 Entity / schema homework on whatis.site itself

These signals are read by Google's Knowledge Graph and increasingly by AI search engines for entity-disambiguation. Add them to `BaseLayout.astro`:

- Organization schema in the root layout (Organization, with `name`, `url`, `logo`, `sameAs` linking to social profiles).
- Person schema for any named author (linked from articles via `author` field — currently absent, may want to add).
- `<link rel="me">` tags for verified social profiles (helps with Mastodon/IndieWeb verification).

### B.3 Directory and profile targets

Tiered list of directories and platforms where a profile is welcome and benign, ranked by signal quality. Skip anything with no editorial control or that auto-approves any submission.

**Tier 1 — Authority entity signals (high signal, no follow-link junk):**

| Platform | What to do | Approx. effort |
|---|---|---|
| Wikidata | Create an entity for "WhatIs.site" with website, logo, social links | 15 min |
| GitHub org | Create `@whatisdotsite` org with a public profile README pointing to the site (lots of legitimate use cases for educational content repos) | 15 min |
| LinkedIn Company page | Create + complete the profile, link logo + website | 20 min |
| X / Twitter | Create account, complete profile, pin a tweet linking the /statistics/ hub | 10 min |
| Bluesky | Same as above | 10 min |
| Mastodon (fosstodon or mas.to) | Same as above | 10 min |
| Crunchbase | Submit organization profile | 20 min |

**Tier 2 — Educational and content platforms (legit content syndication):**

| Platform | What to do | Notes |
|---|---|---|
| Medium publication | Create publication, syndicate the 5 stats pages with `rel="canonical"` pointing back to whatis.site | Set canonicals correctly — failure to do this *hurts* SEO |
| dev.to (for tech articles) | Same — syndicate canonicalized | dev.to honors canonicals well |
| Substack (free tier) | Optional — newsletter mirroring new stats releases | Only if Nick wants to build an email list |
| Reddit user profile | Create a personal account with profile linking the site | Don't auto-spam — link only where genuinely relevant |
| Hacker News profile | Create profile with `about` linking the site | Don't submit our own articles unless natural fit |

**Tier 3 — Generic SaaS/site directories (low signal, low cost; submit once):**

| Platform | What to do |
|---|---|
| Product Hunt | List the launch of `/free-tools/` (legit Product Hunt category) once tools are live |
| AlternativeTo | Add each tool (C1/C2/C3) as alternatives to relevant tools (e.g., Bankrate calculator) |
| BetaList | Skip — not a beta product |
| StartupStash | Submit once |

**Tier 4 — Avoid:**

- Any directory that auto-approves and lists thousands of unrelated sites.
- Any "do-follow link directory" that explicitly markets itself as an SEO link source.
- PBN-adjacent platforms.

### B.4 Author / E-E-A-T presence

AI Overviews and traditional SEO both reward identifiable, credible authors. For the stats pages especially:

- Add an `author` field to the frontmatter schema (currently absent).
- Author bio page at `/about/nick-lasky/` (or whichever author name is appropriate) with credentials + photo + sameAs links.
- Link the author bio from each stats page byline.
- Wire up Person schema on the bio page.

This is the highest-leverage E-E-A-T win for a site that today is anonymous to AI engines.

---

## C. Discovery automation (passive, no outreach)

These run in the background:

1. **Submit sitemap to Google Search Console** + **Bing Webmaster Tools** + **IndexNow** (free, pushes to Bing/Yandex/etc. on new URL publish). Wire IndexNow into the Vercel deploy hook.
2. **Ping Common Crawl** indirectly by ensuring our robots.txt is permissive for `CCBot` and `Common-Crawl` (AI training corpora downstream → potential mentions).
3. **JSON feed / RSS** of new stats pages → submit to Google News (if site qualifies), Feedly, etc.
4. **Activity log** — `data/progress-log.json` tracks build/publish events. Repurpose to also emit a "new asset published" entry that scripts can post to social accounts (when those exist).

---

## D. What this gets us

After all of §A and §B are done:

- Every new stats page or tool is reachable in ≤ 2 clicks from the homepage AND from any category page.
- Search engines and AI crawlers see consistent entity signals (Organization schema, sameAs, Wikidata, llms.txt).
- Any blogger who looks up "free compound interest calculator" or "AI stats 2026" sees us in their hub-page research, then in the SERP, then on their own social feed.
- We have a citation snippet ready for journalists who quote our stats.

None of this is outreach. All of it is "show up in the right places consistently."

---

## E. Implementation order

Match this to the 12-week build calendar in [linkable-assets-strategy.md §E](linkable-assets-strategy.md):

| Week | Distribution task |
|---|---|
| 0 (pre-launch) | Brand profile locked, Wikidata + LinkedIn + X + Bluesky created, Organization schema added to BaseLayout |
| 1 | /statistics/ hub built, footer/nav updated, llms.txt updated, IndexNow wired |
| 2 | Author bio + Person schema (if author concept agreed) |
| 3 | /free-tools/ hub built |
| 4 | Medium publication created, A1 syndicated with canonical |
| 6 | Reddit, HN, dev.to profiles completed |
| 8 | Product Hunt prep for tools launch |
| 9 | Product Hunt launch of /free-tools/ |
| 12 | First monthly backlink report (see [phase-5-monitoring.md](phase-5-monitoring.md)) |
