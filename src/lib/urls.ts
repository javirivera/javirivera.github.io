// Rebuilds the Jekyll "pretty" permalink parts from a `_posts`-style id/filename
// of the form `YYYY-MM-DD-title-slug`.
export interface DatedSlug {
  year: string;
  month: string;
  day: string;
  slug: string;
}

export function parseDatedSlug(id: string): DatedSlug {
  const match = id.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
  if (!match) {
    throw new Error(`Unexpected post id (expected YYYY-MM-DD-slug): ${id}`);
  }
  const [, year, month, day, slug] = match;
  return { year, month, day, slug };
}

export function blogUrl(id: string): string {
  const { year, month, day, slug } = parseDatedSlug(id);
  return `/blog/${year}/${month}/${day}/${slug}/`;
}

export function projectUrl(id: string): string {
  const { year, month, day, slug } = parseDatedSlug(id);
  return `/projects/${year}/${month}/${day}/${slug}/`;
}
