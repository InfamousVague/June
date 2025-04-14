<script lang="ts">
    import { Appearance, Size, State } from "$lib/types/index.js";
    import { defaultAppearance, defaultSize, defaultState, defaultText } from './Button.js';
  
    export let appearance: Appearance = defaultAppearance;
    export let size: Size = defaultSize;
    export let state: State = defaultState;
    export let text: string = defaultText;
  
    export function pressed() {
      // stub
    }
</script>

<button class="button {size} {appearance} {state}">
    {text}
</button>

<style lang="scss">
    @use './Button.scss' as *;
</style>