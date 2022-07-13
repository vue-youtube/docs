/* eslint-disable @typescript-eslint/naming-convention */
import type { DefaultTheme } from 'vitepress';

const sidebar: DefaultTheme.Config['sidebar'] = {
  '/': [
    {
      text: 'Introduction',
      items: [
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
      items: [
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
      items: [
        {
          text: 'Guide',
          link: '/migration/',
        },
      ],
    },
  ],
};

export default sidebar;