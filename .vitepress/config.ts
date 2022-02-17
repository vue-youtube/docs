import { defineConfig } from 'vitepress';

import sidebar from './sidebar';
import nav from './nav';

export default defineConfig({
  lang: 'en-US',
  title: 'VueYoutube',
  description: 'Integrate the YouTube Iframe Player into your Vue 2/3 app.',
  srcDir: './src',
  themeConfig: {
    nav,
    sidebar,
    editLinks: true,
    repo: 'vue-youtube/docs',
  },
});