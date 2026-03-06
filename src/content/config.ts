import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().max(160),
    category: z.string(),
    tags: z.array(z.string()).min(2).max(8),
    heroImage: z.string(),
    heroAlt: z.string(),
    author: z.string().default('WhatIs Editorial'),
    datePublished: z.string(),
    dateModified: z.string(),
    readingTime: z.number(),
    wordCount: z.number(),
    tier: z.enum(['1', '2', '3']).default('3'),
    relatedArticles: z.array(z.string()).default([]),
    externalSources: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
    })).default([]),
    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).min(3).default([]),
  }),
});

export const collections = { articles };
