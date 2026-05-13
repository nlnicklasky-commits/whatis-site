# GitHub Organization Profile README

**Where to paste this:** GitHub auto-renders `README.md` at the root of a repo named `.github` (yes, dot-github) inside the organization. So:

1. Create the org: https://github.com/organizations/plan (use the handle `whatisdotsite` — reserve this first)
2. Inside that org, create a repo named `.github`
3. Add a file `profile/README.md` (yes, in a `profile` subdirectory) and paste the markdown below
4. The README will render at https://github.com/whatisdotsite

---

```markdown
# WhatIs.site

Free, open-source tools that pair with explainers on [whatis.site](https://whatis.site) — an independent editorial reference site with 1,600+ articles, statistics roundups, and free tools.

## What's here

- **Free tools** — open-source versions of the calculators and converters published on whatis.site/free-tools. Use them on the site, embed them in your own project, or fork to extend.
- **Reference data** — structured datasets backing some of our statistics roundups (where licensing permits).
- **Schema utilities** — JSON-LD helpers, sitemap generators, and other static-site tooling we use to keep the site itself running.

## Featured

### 📏 Unit Converter
Free unit converter for length, mass, volume, temperature, area, time, speed, energy, pressure, and data storage. Pure client-side. No backend, no tracking.

→ [Use the tool](https://whatis.site/unit-converter)

### 💰 Compound Interest Calculator
Compound interest with monthly contributions, multiple compounding frequencies, and a year-by-year breakdown.

→ [Use the tool](https://whatis.site/compound-interest-calculator)

### 📝 Word Count + Reading Time Calculator
Word count, character count, sentence count, reading time at adjustable WPM, and Flesch-Kincaid grade level.

→ [Use the tool](https://whatis.site/word-count-reading-time-calculator)

## Editorial site

The main reference site lives at **[whatis.site](https://whatis.site)**:

- [Browse explainer categories](https://whatis.site/categories) — 25 categories, 1,600+ articles
- [Statistics roundups](https://whatis.site/statistics) — citation-ready, sourced from primary publications
- [Free tools](https://whatis.site/free-tools) — calculators and converters
- [About + methodology](https://whatis.site/about)

## Editorial standard

We aggregate; we don't survey. Every numeric claim in a statistics roundup links to its primary source — Stanford HAI, WHO, CDC, IPCC, IEA, BLS, OECD, Pew, FRED, and peer-reviewed publications. Statistics pages are refreshed quarterly.

## Contact

- General: hello@whatis.site
- Corrections: include URL + the specific claim
- Issues with code in this org: open a GitHub issue on the relevant repo

## License

Tools and utilities here are released under the MIT License unless otherwise noted. Article content on whatis.site is © WhatIs.site Editorial; standard academic and editorial citation is welcomed without permission.
```

---

## Notes on this template

- The `[whatis.site](https://whatis.site)` link gets crawled by GitHub's link graph and counts as a backlink (GitHub does pass PageRank from `github.com/<org>` to external URLs).
- "Featured" tools section links each tool directly — three more crawlable backlinks.
- The Statistics + categories links surface those hubs prominently.
- This README is the most valuable single piece of off-site content you can deploy today. ~30 minutes of work for a permanent high-trust backlink chain.
