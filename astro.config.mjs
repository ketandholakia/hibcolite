// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ketandholakia.github.io',
  base: '/hibcolite',
  vite: {
    plugins: [tailwindcss()]
  }
});