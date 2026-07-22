# AGENTS.md

## Cursor Cloud specific instructions

This repository is the personal portfolio site of Javier Rivera, built with
**Astro** (static output) and deployed to GitHub Pages at the custom domain
`www.javirivera.com` (see `public/CNAME`).

### Dev workflow

- Install: `npm install`
- Dev server: `npm run dev` (Astro dev server, default `http://localhost:4321`)
- Build: `npm run build` (outputs to `dist/`)
- Preview a build: `npm run preview`

There is no separate lint/test suite; `npm run build` is the primary
correctness check (it type-checks routes and compiles styles).

### Project layout

- `src/pages/` — routes. `projects/[...slug].astro` and `blog/[...slug].astro`
  rebuild the original Jekyll "pretty" permalinks
  (`/projects/YYYY/MM/DD/slug/`, `/blog/YYYY/MM/DD/slug/`) from the post
  filenames via `src/lib/urls.ts`. `astro.config.mjs` sets
  `trailingSlash: 'always'` + `build.format: 'directory'` to keep those URLs.
- `src/content/blog/*.md` — blog posts (Markdown), loaded as an Astro content
  collection (`src/content.config.ts`). Keep the `YYYY-MM-DD-title` filename
  format; the loader's default id-slugification is disabled so the filename
  drives the URL.
- `src/content/projects/*.html` — project case studies. These are **raw HTML**
  (not Markdown) and are loaded by `src/lib/projects.ts` and rendered with
  `set:html`. Do not convert them to `.md`: their blank-line + tab-indented
  markup would be mangled by the Markdown processor.
- `src/styles/` — SASS ported from the original theme (Bourbon + a custom
  grid), imported once from `src/layouts/Base.astro`.
- `public/` — static assets served at the site root, so image/font paths like
  `/assets/images/...` resolve unchanged.

### Non-obvious caveats

- The ported SASS is old Ruby-Sass/Bourbon code. Modern dart-sass compiles it
  but emits many legacy deprecation warnings; these are silenced via
  `vite.css.preprocessorOptions` in `astro.config.mjs`. The indented `.sass`
  files require consistent **tabs** (dart-sass rejects mixed tabs/spaces).
- Cross-page transitions use Astro's `<ClientRouter />` (in
  `src/components/Head.astro`), replacing the old jQuery + smoothState setup.
  jQuery has been removed entirely.
- Deployment is via GitHub Actions (`.github/workflows/deploy.yml`) on push to
  `master`. This requires the repo's Pages "Source" to be set to
  "GitHub Actions" (Settings -> Pages) rather than a branch.
