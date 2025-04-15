<script lang="ts">
    import { Appearance, Size, State } from "$lib/types/index.js";
    import { defaultAppearance, defaultSize, defaultState } from './Text.js';
  
    export let appearance: Appearance = defaultAppearance;
    export let size: Size = defaultSize;
    export let state: State = defaultState;
  
    export function pressed() {
      // stub
    }
</script>

<p class="text {size} {appearance} {state}">
    <slot></slot>
</p>

<style lang="scss">
    @use "./Text.scss" as *;
</style>