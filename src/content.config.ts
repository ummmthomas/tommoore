import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    description: z.string(),
    period: z.string(),
    contribution: z.array(z.string()),
    outcomes: z.array(z.string()),
    readTime: z.string().optional(),
  }),
});

export const collections = { work };
