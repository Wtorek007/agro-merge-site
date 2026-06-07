// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://wtorek007.github.io',
  base: '/agro-merge-site',
  vite: {
    plugins: [tailwindcss()]
  }
});