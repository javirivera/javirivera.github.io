// @ts-check
import { defineConfig } from 'astro/config';

// The theme's styles are ported from an old Ruby-Sass + Bourbon codebase.
// Modern dart-sass still compiles them but emits legacy deprecation warnings;
// silence that noise so the build/dev output stays readable.
const silenceDeprecations = [
  'import',
  'global-builtin',
  'color-functions',
  'slash-div',
  'mixed-decls',
  'abs-percent',
  'function-units',
  'duplicate-var-flags',
  'if-function',
  'elseif',
  'legacy-js-api',
];
const sassOptions = { quietDeps: true, silenceDeprecations };

// https://astro.build/config
export default defineConfig({
  site: 'https://www.javirivera.com',
  // Preserve Jekyll-style trailing-slash URLs (e.g. /work/, /projects/.../).
  trailingSlash: 'always',
  build: {
    // Emit dir/index.html so URLs keep their trailing slash, matching the
    // previous Jekyll "pretty" permalink output.
    format: 'directory',
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: sassOptions,
        scss: sassOptions,
      },
    },
  },
});
