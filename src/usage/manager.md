# Manager

The player manager needs to be registered with `app.use()` in the `main.ts` file.

```ts
import { createManager } from '@vue-youtube/core';
import { createApp } from 'vue';

import app from './app.vue';

createApp(app).use(createManager()).mount('#app');
```

::: details Show Type Declarations
```ts
export declare const createManager: () => Manager;
export interface Manager {
    install(app: App): void;
    insertScript(): void;
    registerPlayer(target: HTMLElement, cb: RegisterFunction): void;
    register(id: string, cb: RegisterFunction): void;
}
export declare type RegisterFunction = (data: RegisterFunctionReturn) => void;
export declare type RegisterFunctionReturn = {
    factory: any;
    id: string;
};
```
:::

The manager has multiple responsiblities:

- Insert the YouTube Iframe API scripts
- Make the player factory available to the component and composable functions
- Keep track of registered player instances