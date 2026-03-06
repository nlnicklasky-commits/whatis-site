# WhatIs.site — Claude Code Operating Instructions

## Project Overview

WhatIs.site is an educational content platform with 1,600+ "What Is..." articles. Built with Astro 5, deployed on Vercel, optimized for SEO, AI engine citation (GEO), and ad monetization.

## Tech Stack

- **Framework:** Astro 5 (static output)
- **Styling:** Tailwind CSS 3 + @tailwindcss/typography
- **Deployment:** Vercel (auto-deploy on git push)
- **Content:** Markdown files with Zod-validated frontmatter in `src/content/articles/`
- **Images:** WebP, stored in `public/images/articles/`

## Architecture Rules

1. **Zero JavaScript by default.** Never add client-side JS unless absolutely required for interactivity.
2. **Content lives in git.** Articles are markdown files. No CMS, no database.
3. **Build-time computation.** TOC, reading time, related articles, link graph — all computed at build.
4. **Flat URL structure.** Articles at `site.com/[slug]`, categories at `site.com/category/[slug]`.

## Content Collection Schema

All articles must validate against the Zod schema in `src/content/config.ts`. Required fields:
- title, slug, description (max 160 chars), category, tags (2-8), heroImage, heroAlt
- datePublished, dateModified, readingTime, wordCount, tier (1/2/3)
- faq (min 3 items), externalSources, relatedArticles

## Content Tiers

| Tier | Word Count | Depth |
|------|-----------|-------|
| 1 | 3,000-5,000 | Definitive, comprehensive |
| 2 | 2,000-3,000 | Thorough coverage |
| 3 | 1,200-2,000 | Clear overview |

## Humanization Rules (CRITICAL)

### Banned Words — NEVER use these:
delve, tapestry, multifaceted, comprehensive, realm, landscape, paradigm, innovative, cutting-edge, leverage, utilize, harness, robust, pivotal, testament, cornerstone, underpinning, embark, navigate, foster, cultivate, synergy, holistic, dynamic, transformative, groundbreaking, spearhead, revolutionize, advent, plethora

### Banned Phrases — NEVER use these:
"it's important to note", "it's worth noting", "in today's world", "at its core", "in the realm of", "serves as a", "plays a crucial role", "it is important to understand", "one cannot overstate", "the power of", "when it comes to", "at the end of the day", "has become increasingly", "in an era of"

### Voice Rules:
- Write like a smart friend explaining something, not a textbook
- Use "you" and "your" — address the reader directly
- Include opinions: "frankly," "the weird part is," "here's what most people miss"
- Vary sentence length dramatically — fragments are fine
- Use em dashes, parenthetical asides, and conversational transitions
- Include specific numbers, dates, and facts (not vague claims)
- Every H2 should be varied in phrasing — never follow a formula

## SEO Rules

- Title tag: `{title} | WhatIs.site` (under 60 chars)
- Meta description: 150-160 chars from frontmatter `description`
- One H1 per page, H2 for sections, H3 for subsections, never skip levels
- 5-10 internal links per article, embedded naturally in text
- 2-5 external links to authoritative sources (.gov, .edu, Wikipedia)
- Canonical tag on every page
- Article, FAQPage, and BreadcrumbList schema on every article

## GEO Rules

- First paragraph must be citation-worthy (clean definition, under 3 sentences)
- Include statistics (improves AI citation by ~41%)
- FAQ answers should be self-contained and quotable
- Don't block any AI crawlers in robots.txt
- Keep llms.txt updated with top articles

## Ad Slots

Controlled by `PUBLIC_AD_NETWORK` env var. Currently set to `none`. Positions:
- header-leaderboard, in-content, sidebar-sticky, end-of-article, mobile-anchor

## File Locations

- Articles: `src/content/articles/*.md`
- Categories: `src/data/categories.json`
- Link graph: `src/data/link-graph.json`
- Topics master list: `data/topics-master.json`
- Article status tracking: `data/article-status.json`
- Audit reports: `data/audit-report.json`
- Edit log: `data/edit-log.json`
- Hero images: `public/images/articles/`

## Commands

When working on this project, the following operations are common:

- **Generate article:** Research topic → write markdown → save to `src/content/articles/{slug}.md`
- **Build link graph:** Read all articles → compute similarity → output `src/data/link-graph.json`
- **Audit:** Check all articles against quality/SEO/humanization rules → output report
- **Edit:** Make surgical, targeted edits based on audit or feedback — never rewrite whole articles
- **Build:** `npm run build` — must complete without errors before deploying

## Environment Variables (Vercel)

```
PUBLIC_SITE_URL=https://whatis.site
PUBLIC_SITE_NAME=WhatIs.site
PUBLIC_AD_NETWORK=none
```
