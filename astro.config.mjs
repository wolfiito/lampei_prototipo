// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // <--- Usamos este import
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), // <--- Integración oficial
    react()
  ],
  image: {
    domains: ["images.unsplash.com"],
  }
});