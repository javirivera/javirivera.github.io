import matter from 'gray-matter';
import { parseDatedSlug, projectUrl } from './urls';

// Project case studies are authored as raw HTML (the original Jekyll `.html`
// posts). Markdown processing would mangle their blank-line-separated,
// tab-indented markup, so we load the raw file text and render it verbatim.
const files = import.meta.glob('../content/projects/*.html', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export interface Project {
  id: string;
  slug: string;
  url: string;
  date: Date;
  title: string;
  description?: string;
  tags: string[];
  image?: string;
  body: string;
}

function toProject(path: string, raw: string): Project {
  const id = path.split('/').pop()!.replace(/\.html$/, '');
  const { year, month, day, slug } = parseDatedSlug(id);
  const { data, content } = matter(raw);
  return {
    id,
    slug,
    url: projectUrl(id),
    date: new Date(`${year}-${month}-${day}T00:00:00`),
    title: String(data.title ?? slug),
    description: data.description ? String(data.description) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    image: data.image ? String(data.image) : undefined,
    body: content,
  };
}

// Newest first, matching the original within-category ordering.
export const projects: Project[] = Object.entries(files)
  .map(([path, raw]) => toProject(path, raw))
  .sort((a, b) => b.date.getTime() - a.date.getTime());
