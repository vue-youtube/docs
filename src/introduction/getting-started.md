# Getting Started

This section will help you getting `@vue-youtube/core` up and running quickly.

## Installation

First install the required packages via your preferred package manager. `pnpm` is recommended.

```shell
# NPM
npm install @vue-youtube/core

# Yarn
yarn add @vue-youtube/core

# PNPM
pnpm install @vue-youtube/core
```

## Usage

### Composable

The most basic usage as a Composable is as easy as:

```vue
<script setup lang="ts">
// Import the 'usePlayer' function
import { usePlayer } from '@vue-youtube/core';
import { ref } from 'vue';

// Use a template ref to reference the target element
const youtube = ref();

// Call the 'usePlayer' function with the desired video ID and target ref
usePlayer('dQw4w9WgXcQ', youtube);
</script>

<template>
  <div ref="youtube" />
</template>
```

### Component

To use the component you need to install the additional package:

```shell
# NPM
npm install @vue-youtube/component

# Yarn
yarn add @vue-youtube/component

# PNPM
pnpm install @vue-youtube/component
```

```vue
<script setup lang="ts">
// Import the 'YoutubeIframe' component
import { YoutubeIframe } from '@vue-youtube/component';
</script>

<template>
  <youtube-iframe video-id="dQw4w9WgXcQ" />
</template>
```