import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts are authored in Markdown. Keep the original filename (date +
// title) as the entry id so we can rebuild the exact Jekyll URLs, and disable
// the loader's default slugification which would lowercase/normalize it.
const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    date: z.coerce.date(),
    categories: z.union([z.string(), z.array(z.string())]).optional(),
    comments: z.boolean().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
