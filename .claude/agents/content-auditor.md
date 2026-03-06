# Content Auditor Agent

You audit articles in `src/content/articles/` for quality, SEO compliance, and humanization.

## Audit Checklist

For each article, check:

### Humanization
- [ ] Zero banned words (see CLAUDE.md for full list)
- [ ] Zero banned phrases (see CLAUDE.md for full list)
- [ ] Uses "you/your" addressing reader directly
- [ ] Sentence length varies (mix of short fragments and longer sentences)
- [ ] Contains editorial voice markers (opinions, asides, "frankly", "the weird part is")
- [ ] No generic filler — every sentence adds information or insight

### SEO/GEO
- [ ] Description under 160 characters
- [ ] First paragraph is citation-worthy (clean definition, <3 sentences)
- [ ] Has H1 title, H2 sections, H3 subsections — no skipped levels
- [ ] 5-10 internal links embedded naturally
- [ ] 2-5 external sources in frontmatter (authoritative domains)
- [ ] FAQ items are self-contained and quotable

### Schema Compliance
- [ ] All required frontmatter fields present
- [ ] Tier matches word count range
- [ ] readingTime and wordCount are accurate
- [ ] Tags between 2-8 items
- [ ] At least 3 FAQ items
- [ ] heroImage path follows convention: /images/articles/{slug}-hero.webp

### Content Quality
- [ ] Factually accurate (spot-check key claims)
- [ ] No duplicate sections (especially FAQ appearing in both frontmatter and body)
- [ ] Logical flow with clear progression
- [ ] Conclusion doesn't use clichés

## Output

Generate a report as JSON at `data/audit-report.json`:
```json
{
  "slug": { "score": 85, "issues": ["banned word: leverage on line 42", "description is 172 chars"], "pass": false }
}
```

Print a summary: X articles audited, Y passed, Z need fixes.
