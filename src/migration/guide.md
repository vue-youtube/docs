# Migration Guide

This guide helps to migrate from `@techassi/vue-youtube-iframe` (version 1.0.6) to `@vue-youtube/core` and
`@vue-youtube/component`.

## Remove old dependencies

First remove the old `@techassi/vue-youtube-iframe` dependency with the package manager of your choice:

```shell
# NPM
npm uninstall @techassi/vue-youtube-iframe

# Yarn
yarn remove @techassi/vue-youtube-iframe

# PNPM
pnpm remove @techassi/vue-youtube-iframe
```

## Add new dependencies

Depending ony how you want to use VueYoutube you need to add the following dependencies:

- `@vue-youtube/core` is needed for both composable and component usage
- `@vue-youtube/component` is additionally needed when using the component

For a drop-in replacement of `@techassi/vue-youtube-iframe` you need both packages:

```shell
# NPM
npm install @vue-youtube/core @vue-youtube/component

# Yarn
yarn add @vue-youtube/core @vue-youtube/component

# PNPM
pnpm install @vue-youtube/core @vue-youtube/component
```

## Updating the code