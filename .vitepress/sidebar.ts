import type { DefaultTheme } from 'vitepress';

const sidebar: DefaultTheme.Config['sidebar'] = {
  '/': [
    {
      text: 'Introduction',
      children: [
        {
          text: 'What is VueYoutube?',
          link: '/introduction/overview',
        },
        {
          text: 'Getting Started',
          link: '/introduction/getting-started',
        },
      ],
    },
    {
      text: 'Usage',
      children: [
        {
          text: 'Composable',
          link: '/usage/composable',
        },
        {
          text: 'Component',
          link: '/usage/component',
        },
      ],
    },
    {
      text: 'Migration',
      link: '/migration/guide',
    },
  ],
};

export default sidebar;