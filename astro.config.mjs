import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: "https://fransastro.netlify.app",

  integrations: [preact()],
});