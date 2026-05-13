# WhatIs.site — Canonical Brand Profile

Single source of truth for every off-site profile. When you fill out a directory, social bio, or schema field, copy from here so the entity signal stays consistent.

---

## Identity

| Field | Value |
|---|---|
| Brand name | WhatIs.site |
| Alternate names | WhatIs, whatis.site |
| Tagline (under 60 chars) | Clear answers to every "what is" question. |
| Founded | 2024 |
| Owner | Nick Lasky (independent) |
| Primary URL | https://whatis.site |
| Contact email | hello@whatis.site |
| Status | Active, ~1,600 articles published |

## Descriptions (copy verbatim into bio fields)

### One-line (under 150 chars)

> Clear, human-written explanations of concepts across technology, science, finance, philosophy, history, and 20+ more categories.

### Two-sentence (under 300 chars)

> WhatIs.site is an editorial reference site with 1,600+ explainer articles plus citation-ready statistics roundups and free tools. Sourced from primary publications, written for humans.

### Long-form (under 600 chars)

> WhatIs.site is an independent editorial reference site explaining concepts across technology, science, finance, philosophy, history, and 20+ more categories. Over 1,600 articles, plus statistics roundups citing primary publications (Stanford HAI, WHO, CDC, IPCC, IEA, BLS, OECD) and free no-signup tools. Updated continuously, with quarterly statistics refreshes. Editorial standard: aggregate; don't survey. Every numeric claim links to its primary source.

## Visual identity

| Asset | Location | Notes |
|---|---|---|
| Logo SVG | https://whatis.site/logo.svg | Live |
| Favicon | https://whatis.site/favicon.ico | Live |
| OG image | https://whatis.site/og-image.png | Live |
| PNG logo 512×512 | TODO — generate | Needed for several directories |
| PNG logo 1024×1024 | TODO — generate | Needed for higher-res profile pictures |
| Square avatar | TODO — generate | Square crop of logo with safe-area margin |

## Social handles to claim

Reserve these handles, in this order. Each takes 5–10 minutes.

| Platform | Handle | Status | Notes |
|---|---|---|---|
| X / Twitter | `@whatisdotsite` | TODO | Already in Organization schema sameAs |
| Bluesky | `whatis.site` (domain handle) | TODO | Set up DNS TXT verification for bonus signal |
| LinkedIn Company | `whatisdotsite` | TODO | Already in Organization schema sameAs |
| GitHub Org | `whatisdotsite` | TODO | High SEO value |
| Mastodon | `@whatisdotsite@mas.to` or `@whatisdotsite@fosstodon.org` | TODO | Add `rel="me"` to BaseLayout once chosen |
| Reddit user | `whatisdotsite` | TODO | Profile bio only — don't auto-post |
| Hacker News | `whatisdotsite` | TODO | About field can include URL |
| Substack | `whatisdotsite.substack.com` | OPTIONAL | Only if you want a newsletter |
| dev.to | `whatisdotsite` | TODO | Useful if syndicating tech articles |
| Crunchbase | "WhatIs.site" org | TODO | Submit once branding is locked |
| Wikidata | TBD Q-number | DEFER | Wait for independent press mentions first |

## Quick-copy bios

### Twitter / X bio (160 chars)

> Clear, human-written explainers. 1,600+ articles + statistics roundups + free tools. We aggregate; we don't survey. https://whatis.site

### Bluesky bio (256 chars)

> An independent editorial reference site. 1,600+ explainers across tech, science, finance, philosophy, history & 20+ more — plus statistics roundups citing primary sources & free no-signup tools. We aggregate; we don't survey. https://whatis.site

### LinkedIn About (2,000 char limit)

> WhatIs.site is an independent editorial reference site explaining the concepts that shape the modern world. We publish three things:
>
> 1. **Explainer articles** — over 1,600 pieces across 25 categories, structured in three depth tiers from definitive (3,000–5,000 words) to clear overview (1,200–2,000 words).
>
> 2. **Statistics roundups** — citation-ready aggregations of primary-source data on topics like AI, remote work, cryptocurrency, mental health, and climate. Every number links to its primary source. Refreshed quarterly.
>
> 3. **Free tools** — single-purpose calculators and converters that pair with our explainers. No signup, no tracking — math runs in your browser.
>
> Our editorial standard: aggregate; don't survey. We cite government statistics bureaus, independent research institutions, peer-reviewed publications, and disclosed industry research. We do not publish AI-generated content unchecked — every article is reviewed by a human editor.
>
> Read more: https://whatis.site/about

### GitHub Org profile description (140 chars)

> Free, open tools that pair with whatis.site explainers. Calculators, converters, and reference data. All static. No tracking.

### Mastodon bio

> Independent editorial reference site. 1,600+ explainers, statistics roundups citing primary sources, and free no-signup tools. Aggregate; don't survey. 🔗 https://whatis.site

## Schema.org entity

Already deployed in `src/layouts/BaseLayout.astro`. Current `sameAs` array (update once handles are claimed):

```json
"sameAs": [
  "https://twitter.com/whatisdotsite",
  "https://bsky.app/profile/whatis.site",
  "https://www.linkedin.com/company/whatisdotsite"
]
```

Add these once claimed:

- `https://github.com/whatisdotsite`
- `https://mas.to/@whatisdotsite` (or whichever Mastodon instance)
- `https://www.crunchbase.com/organization/whatis-site` (after acceptance)
- Wikidata entity URL (once approved)

## Audience-specific positioning

How to frame WhatIs.site depending on who you're talking to:

| Audience | One-line framing |
|---|---|
| Journalists / bloggers | "Citation-ready statistics roundups across tech, finance, health, climate — sourced from primary publications." |
| AI engineers / researchers | "Clean, structured explainers with FAQ schema. AI-search-friendly." |
| Educators / students | "Free, comprehensive explainers across 25 subject categories." |
| General readers | "Clear answers to every 'what is' question." |
| Potential partners | "Independent editorial site, 1,600+ articles, ~10M page indexable surface." |
