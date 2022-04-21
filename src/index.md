# VueYoutube

This plugin makes it easy to integrate the YouTube Iframe Player into your Vue 2/3 app.

```vue
<script setup lang="ts">
import { usePlayer } from '@vue-youtube/core';
import { ref } from 'vue';

const youtube = ref();

usePlayer('dQw4w9WgXcQ', youtube);
</script>

<template>
  <div ref="youtube" />
</template>
```

For more information see [Getting Started](/introduction/getting-started) and [Usage](/usage/composable).

## Migration

Are you migrating from `@techassi/vue-youtube-iframe`? You can find an in-depth migration guide
[here](/migration/guide). If you are interested to checkout all changes, see [here](/introduction/overview).