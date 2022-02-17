/* eslint-disable unicorn/prevent-abbreviations */
/// <reference types="vitepress/client" />
/// <reference types="vue/macros-global" />

declare module '@vue/theme/config' {
  import type { UserConfig } from 'vitepress';

  const config: () => Promise<UserConfig>;
  export default config;
}