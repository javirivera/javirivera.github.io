# AGENTS.md

## Cursor Cloud specific instructions

This repository (`master` branch) is the **pre-built static output** of a personal
portfolio site (GitHub Pages, custom domain `www.javirivera.com`). It is plain
HTML/CSS/JS — there is no build step, package manager, dependency manifest,
test suite, or linter on this branch.

- The Jekyll/Gulp **source** lives on the separate `sources` branch (contains
  `_config.yml`, `_layouts`, `_posts`, `gulpfile.js`, `package.json`, etc.).
  Editing the rendered site happens on `master`; regenerating from source would
  require checking out `sources` and running Jekyll.
- **Run locally:** serve the repo root with any static file server, e.g.
  `python3 -m http.server 8000`, then open `http://localhost:8000/`.
  Pages use root-absolute paths (e.g. `/assets/css/main.css`, `/work/`), so the
  server must run from the repository root for assets and navigation to resolve.
- The homepage loads jQuery from a CDN; full styling/JS interactivity therefore
  requires outbound network access in the browser, but core pages render without it.
- There is nothing to install, build, lint, or test on `master`.
