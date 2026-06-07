// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Base path only for GitHub Pages builds (set via ASTRO_BASE_PATH in CI).
// Locally: http://localhost:4321/
// Production: https://wtorek007.github.io/agro-merge-site/
const base = process.env.ASTRO_BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://wtorek007.github.io',
  base,
  vite: {
    plugins: [tailwindcss()]
  }
});