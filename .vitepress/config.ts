import { defineConfig } from 'vitepress';

import sidebar from './sidebar';
import nav from './nav';

export default defineConfig({
  lang: 'en-US',
  title: 'VueYoutube',
  description: 'Integrate the YouTube Iframe Player into your Vue 2/3 app.',
  srcDir: './src',
  base: '/docs/',
  themeConfig: {
    logo: 'logo.svg',
    nav,
    sidebar,
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/vue-youtube/docs',
      },
    ],
    search: {
      provider: 'local',
    },
  },
  head: [['link', { rel: 'icon', type: 'image/x-icon', href: '/docs/favicon.ico' }]],
  cleanUrls: true,
});