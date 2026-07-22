import { getCollection, type CollectionEntry } from 'astro:content';
import { blogUrl } from './urls';

export type BlogEntry = CollectionEntry<'blog'>;

export interface BlogPost {
  entry: BlogEntry;
  url: string;
  title: string;
  date: Date;
  description?: string;
}

// Newest first, matching Jekyll's default post ordering.
export async function getSortedPosts(): Promise<BlogPost[]> {
  const entries = await getCollection('blog');
  return entries
    .map((entry) => ({
      entry,
      url: blogUrl(entry.id),
      title: entry.data.title,
      date: entry.data.date,
      description: entry.data.description,
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}
