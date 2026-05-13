# Social Bios — Paste-Ready Copy

All bios fit the platform's character limit. Each ends with the URL so the link is visible without expansion.

---

## X / Twitter

**Handle:** `@whatisdotsite`
**Display name:** WhatIs.site
**Bio (160 chars):**

```
Clear, human-written explainers. 1,600+ articles + statistics roundups + free tools. We aggregate; we don't survey. https://whatis.site
```

**Header image:** TODO — generate a 1500×500 with logo + tagline "Clear answers to every 'what is' question."

**Pinned tweet (suggestion):**

```
We just shipped 5 statistics roundups for 2026:

🤖 AI: whatis.site/artificial-intelligence-statistics-2026
🏠 Remote work: whatis.site/remote-work-statistics-2026
💰 Crypto: whatis.site/cryptocurrency-statistics-2026
🧠 Mental health: whatis.site/mental-health-statistics-2026
🌍 Climate: whatis.site/climate-change-statistics-2026

Every number sourced. Free to cite.
```

---

## Bluesky

**Handle:** `whatis.site` (using DNS verification)
**Display name:** WhatIs.site
**Bio (256 chars):**

```
An independent editorial reference site. 1,600+ explainers across tech, science, finance, philosophy, history & 20+ more — plus statistics roundups citing primary sources & free no-signup tools. We aggregate; we don't survey. https://whatis.site
```

**DNS verification:**
Once you decide on Bluesky, you'll get a string like `did=did:plc:abc123...`. Add this as a TXT record on whatis.site:

```
Type:  TXT
Name:  _atproto.whatis.site
Value: did=did:plc:abc123...
```

This makes your Bluesky handle literally `whatis.site` (no `.bsky.social` suffix) — a strong entity signal.

---

## LinkedIn Company Page

**URL slug:** `whatisdotsite` → `linkedin.com/company/whatisdotsite`
**Tagline (120 chars):**

```
Clear, human-written explainers for the concepts shaping the modern world. 1,600+ articles + statistics + free tools.
```

**About (2,000 char limit):**

```
WhatIs.site is an independent editorial reference site explaining the concepts that shape the modern world. We publish three things:

1. Explainer articles — over 1,600 pieces across 25 categories, structured in three depth tiers from definitive (3,000–5,000 words) to clear overview (1,200–2,000 words). Every article opens with a clean definition, includes specific facts and named sources, and ends with frequently asked questions.

2. Statistics roundups — citation-ready aggregations of primary-source data on topics like AI, remote work, cryptocurrency, mental health, and climate. Every number links to its primary source: Stanford HAI, WHO, CDC, IPCC, IEA, BLS, OECD, Pew Research, and peer-reviewed publications. Refreshed quarterly.

3. Free tools — single-purpose calculators and converters that pair with our explainers. No signup, no tracking — math runs in your browser.

Our editorial standard: aggregate; don't survey. We do not publish AI-generated content unchecked — every article is reviewed by a human editor.

Read more at https://whatis.site/about
```

**Industry:** Online Media
**Company size:** 1-10
**Specialties:** Online publishing, Educational content, Reference, SEO, Generative AI, Editorial content, Free tools, Statistics

---

## GitHub Org

**Handle:** `whatisdotsite`
**Display name:** WhatIs.site
**Description (140 chars):**

```
Free, open tools that pair with whatis.site explainers. Calculators, converters, and reference data. All static. No tracking.
```

**Email:** hello@whatis.site
**Website:** https://whatis.site

(For the public org README, see `github-org-readme.md` in this folder.)

---

## Mastodon

**Suggested instance:** `mas.to` (general purpose, well-moderated) or `fosstodon.org` (tech-focused, good fit if you'll mostly post about tools)

**Handle:** `@whatisdotsite`
**Display name:** WhatIs.site
**Bio:**

```
Independent editorial reference site. 1,600+ explainers, statistics roundups citing primary sources, and free no-signup tools. Aggregate; don't survey. 🔗 https://whatis.site
```

**Profile metadata fields** (use these for the verified-link checkmark):

| Label | Content |
|---|---|
| Website | https://whatis.site |
| Statistics | https://whatis.site/statistics |
| Free tools | https://whatis.site/free-tools |

To get the green verified checkmark on Mastodon for the Website link, add `rel="me"` from whatis.site to your Mastodon profile. Easiest way: add this to `BaseLayout.astro` once you know the exact Mastodon URL:

```html
<link rel="me" href="https://mas.to/@whatisdotsite" />
```

---

## Reddit user profile

**Handle:** `whatisdotsite`
**Display name:** WhatIs.site
**Bio (200 chars):**

```
Editorial reference site. 1,600+ explainers, statistics roundups, free tools. Aggregate; don't survey. https://whatis.site
```

**Important:** do NOT auto-post links. Reddit will shadowban for self-promotion. Use this account for genuine participation; the bio link is the value.

---

## Hacker News profile

**Handle:** `whatisdotsite`
**About field (250 chars approx):**

```
Editor at WhatIs.site — independent editorial reference site with 1,600+ explainers, statistics roundups, and free tools. https://whatis.site
```

---

## dev.to

**Handle:** `whatisdotsite`
**Name:** WhatIs.site
**Bio (200 chars):**

```
Editorial reference site with explainers, statistics roundups, and free tools across tech, science, finance, and more. https://whatis.site
```

**Website:** https://whatis.site

When syndicating articles to dev.to, always set `canonical_url` in frontmatter to the whatis.site URL — otherwise dev.to becomes the canonical version in Google's eyes.

---

## Crunchbase

**Org name:** WhatIs.site
**URL slug:** `whatis-site`
**Categories:** Information Technology, Internet, Publishing, Education
**Headquarters:** [your city/state — required field]
**Founded:** 2024
**Description (1,000 chars):**

```
WhatIs.site is an independent editorial reference site explaining the concepts that shape the modern world. Over 1,600 explainer articles across 25 categories, plus citation-ready statistics roundups sourced from primary publications (Stanford HAI, WHO, CDC, IPCC, IEA, BLS, OECD) and free no-signup tools (calculators, converters). Editorial standard: aggregate, don't survey. Every numeric claim links to its primary source. We do not publish AI-generated content unchecked — every article is reviewed by a human editor.
```

**Website:** https://whatis.site
**Email:** hello@whatis.site

---

## AlternativeTo

Submit each tool as an alternative to a popular paid/heavy competitor:

| Our tool | List as alternative to |
|---|---|
| Compound Interest Calculator | Bankrate Compound Interest Calculator, NerdWallet Compound Interest Calculator |
| Word Count + Reading Time | WordCounter.net, Hemingway Editor (word-count features only) |
| Unit Converter | UnitConverters.net, Google's built-in converter |

Description for each: copy from the live page.

---

## Order of operations

Recommended sequence — claim handles in this order so cross-references are consistent:

1. GitHub org (high-trust + creates the README artifact)
2. X / Twitter (fast)
3. Bluesky with DNS handle (~10 min for DNS propagation)
4. LinkedIn Company page
5. Mastodon (then update `BaseLayout.astro` with the `<link rel="me">`)
6. Reddit, Hacker News, dev.to (profile bios only — no posting yet)
7. Crunchbase submission (~3–7 day review)
8. AlternativeTo (one entry per tool, queued submission)
