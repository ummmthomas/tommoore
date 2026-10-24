import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Served from GitHub Pages at ummmthomas.github.io/tommoore for now.
// When tommoore.co.uk points here, set site to 'https://tommoore.co.uk' and remove base.
export default defineConfig({
  site: 'https://ummmthomas.github.io',
  base: '/tommoore',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
