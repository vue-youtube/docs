# Composable

## Usage

```vue
<script setup lang="ts">
// Import the 'usePlayer' function
import { usePlayer } from '@vue-youtube/core';
import { ref } from 'vue';

// Use a template ref to reference the target element
const player = ref();

// Call the 'usePlayer' function with the desired video ID and target ref
usePlayer('dQw4w9WgXcQ', player);
</script>

<template>
  <div ref="player" />
</template>
```

## Event Callbacks

The composable function provides multiple hooks to handle events. **All import statements are removed for simplicity.**

### onReady

*See [Reference](https://developers.google.com/youtube/iframe_api_reference#onReady)*

> This event fires whenever a player has finished loading and is ready to begin receiving API calls.

```js
const player = ref();
const { onReady } = usePlayer('dQw4w9WgXcQ', player);

onReady((event) => {
  // Start playing the video when the player is ready*
  event.target.playVideo();
})
```

**This will only work when the player is muted. See [Configuration](#configuration)*

<details>
<summary>Show Type Declarations</summary>

```ts
export function onReady(cb: ReadyCallback): void
export type ReadyCallback = PlayerEventCallback<PlayerEvent>
export interface PlayerEventCallback<T extends PlayerEvent> {
  (event: T): void;
}
export interface PlayerEvent {
  target: Player;
}
```

</details>

### onStateChange

*See [Reference](https://developers.google.com/youtube/iframe_api_reference#onStateChange)*

> This event fires whenever the player's state changes. The data property of the event object that the API passes to 
> your event listener function will specify an integer that corresponds to the new player state.

```js
const player = ref();
const { onStateChange } = usePlayer('dQw4w9WgXcQ', player);

onStateChange((event) => {
  console.log(event)
})
```

<details>
<summary>Show Type Declarations</summary>

```ts
export function onStateChange(cb: PlayerStateChangeCallback): void
export type PlayerStateChangeCallback = PlayerEventCallback<
  PlayerStateChangeEvent
>
export interface PlayerEventCallback<T extends PlayerEvent> {
  (event: T): void;
}
export interface PlayerStateChangeEvent extends PlayerEvent {
  data: PlayerState;
}
export enum PlayerState {
  UNSTARTED = -1,
  ENDED = 0,
  PLAYING = 1,
  PAUSED = 2,
  BUFFERING = 3,
  VIDEO_CUED = 5
}
```

</details>

### onPlaybackQualityChange

*See [Reference](https://developers.google.com/youtube/iframe_api_reference#onPlaybackQualityChange)*

> This event fires whenever the video playback quality changes. It might signal a change in the viewer's playback
> environment.

```js
const player = ref();
const { onPlaybackQualityChange } = usePlayer('dQw4w9WgXcQ', player);

onPlaybackQualityChange((event) => {
  console.log(event)
})
```

<details>
<summary>Show Type Declarations</summary>

```ts
export function onPlaybackQualityChange(cb: PlayerStateChangeCallback): void
export type PlaybackQualityChangeCallback = PlayerEventCallback<
  PlaybackQualityChangeEvent
>
export interface PlayerEventCallback<T extends PlayerEvent> {
  (event: T): void;
}
export interface PlaybackQualityChangeEvent extends PlayerEvent {
  data: VideoQuality;
}
export type VideoQuality = (
  VideoQualityDefault |
  VideoQualitySmall |
  VideoQualityMedium |
  VideoQualityLarge |
  VideoQualityHD720 |
  VideoQualityHD1080 |
  VideoQualityHighres
)
export type VideoQualityDefault = 'default'
export type VideoQualitySmall = 'small'
export type VideoQualityMedium = 'medium'
export type VideoQualityLarge = 'large'
export type VideoQualityHD720 = 'hd720'
export type VideoQualityHD1080 = 'hd1080'
export type VideoQualityHighres = 'highres'
```

</details>

### onPlaybackRateChange

*See [Reference](https://developers.google.com/youtube/iframe_api_reference#onPlaybackRateChange)*

> This event fires whenever the video playback rate changes.

```js
const player = ref();
const { onPlaybackRateChange } = usePlayer('dQw4w9WgXcQ', player);

onPlaybackRateChange((event) => {
  console.log(event)
})
```

<details>
<summary>Show Type Declarations</summary>

```ts
export function onPlaybackRateChange(cb: PlaybackRateChangeCallback): void
export type PlaybackRateChangeCallback = PlayerEventCallback<
  PlaybackRateChangeEvent
>
export interface PlayerEventCallback<T extends PlayerEvent> {
  (event: T): void;
}
export interface PlaybackRateChangeEvent extends PlayerEvent {
  data: number;
}
```

</details>

### onError

*See [Reference](https://developers.google.com/youtube/iframe_api_reference#onError)*

> This event fires if an error occurs in the player. The API will pass an event object to the event listener function.

```js
const player = ref();
const { onError } = usePlayer('dQw4w9WgXcQ', player);

onError((event) => {
  console.log(event)
})
```

<details>
<summary>Show Type Declarations</summary>

```ts
export function onError(cb: ErrorCallback): void
export type ErrorCallback = PlayerEventCallback<ErrorEvent>
export interface PlayerEventCallback<T extends PlayerEvent> {
  (event: T): void;
}
export interface ErrorEvent extends PlayerEvent {
  data: PlayerError;
}
export enum PlayerError {
  INVALID_PARAMETER = 2,
  HTML5_ERROR = 5,
  NOT_FOUND = 100,
  NOT_ALLOWED = 101,
  NOT_ALLOWED_DISGUISE = 150
}
```

</details>

## Configuration

The `usePlayer` function has a optional third parameter to provide player options. The values prefixed with `//` are the
default values.

```js
const player = ref();
usePlayer('dQw4w9WgXcQ', player, {
  playerVars: {}, // {}
  cookie: false,  // true
  width: 1920,    // 1280
  height: 1080,   // 720
});
```

**Supported Options**

| Option       | Details                                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------- |
| `playerVars` | Customize the player behavior, see [here](https://developers.google.com/youtube/player_parameters#Parameters) for reference. |
| `cookie`     | When this option is `true` the host `https://www.youtube.com` is used, otherwise `https://www.youtube-nocookie.com`|
| `width`      | Set the width of the YouTube player. Number and string supported. |
| `height`     | Set the height of the YouTube player. Number and string supported. |

<details>
<summary>Show Type Declarations</summary>

```ts
export function usePlayer(
  newVideoId: MaybeRef<string>, 
  element: MaybeElementRef, 
  options: Options = {}
) : {
  instance: ShallowRef<Player | undefined>
  togglePlay: () => void
  toggleMute: () => void
  onPlaybackQualityChange: (cb: PlaybackQualityChangeCallback) => void
  onPlaybackRateChange: (cb: PlaybackRateChangeCallback) => void
  onStateChange: (cb: PlayerStateChangeCallback) => void
  onApiChange: (cb: APIChangeCallback) => void
  onError: (cb: ErrorCallback) => void
  onReady: (cb: ReadyCallback) => void
}
export interface Options {
  height?: number | string;
  width?: number | string;
  playerVars?: PlayerVars;
  cookie?: boolean;
}
export interface PlayerVars {
  autohide?: AutohideOption | undefined;
  autoplay?: AutoplayOption | undefined;
  cc_load_policy?: CCLoadPolicyOption | undefined;
  cc_lang_pref?: string | undefined;
  color?: ProgressBarColor | undefined;
  controls?: ControlsOption | undefined;
  disablekb?: KeyboardOptions | undefined;
  enablejsapi?: JSAPIOptions | undefined;
  end?: number | undefined;
  fs?: FullscreenOption | undefined;
  hl?: string | undefined;
  iv_load_policy?: IVPolicyOption | undefined;
  list?: string | undefined;
  listType?: ListType | undefined;
  loop?: LoopOption | undefined;
  modestbranding?: ModestBrandingOption | undefined;
  mute?: MuteOption | undefined;
  origin?: string | undefined;
  playlist?: string | undefined;
  playsinline?: PlaysInlineOption | undefined;
  rel?: RelatedVideosOption | undefined;
  showinfo?: ShowInfoOption | undefined;
  start?: number | undefined;
}
```

</details>

## Examples

### Dynamically change the video ID

You can pass a ref as the first argument of `usePlayer`. When the content of the ref changes, the new video will
automatically start playing.

```js
import { usePlayer } from '@vue-youtube/core';
import { ref } from 'vue';

const videoId = ref('dQw4w9WgXcQ');
const player = ref();

const { onStateChange } = usePlayer(videoId, player);

// Change video ID after 10 seconds (10000 ms)
setTimeout(() => {
  videoId.value = 'aqz-KE-bpKQ';
}, 10 * 1000)

// Log the video ID when the video starts to play
onStateChange((event) => {
  if (event.data == 1) {
    console.log("I'm playing", videoId.value)
  }
});
```

### Use `toggle*` helper functions

`usePlayer` provides two helper functions `togglePlay` and `toggleMute`. `togglePlay` pauses/unpauses the video and
`toggleMute` mutes/unmutes the player.

```vue
<script setup lang="ts">
import { usePlayer } from '@vue-youtube/core';
import { ref } from 'vue';

const player = ref();

const { togglePlay, toggleMute } = usePlayer('dQw4w9WgXcQ', player);
</script>

<template>
  <div ref="player" />
  <button @click="togglePlay">Pause/Unpause</button>
  <button @click="toggleMute">Mute/Unmute</button>
</template>
```