<script lang="ts">
    import { Appearance, Size, State } from "$lib/types/index.js";
    import Text from "../text/Text.svelte";
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
    <slot></slot><Text appearance={Appearance.Inherit}>{text}</Text>
</button>

<style lang="scss">
    @use "./Button.scss" as *;
</style>