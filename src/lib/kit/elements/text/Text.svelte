<script lang="ts">
    import { Appearance, Size, State } from "$lib/types/index.js";
    import { defaultAppearance, defaultSize, defaultState } from './Text.js';
  
    export let appearance: Appearance = defaultAppearance;
    export let size: Size = defaultSize;
    export let state: State = defaultState;
</script>

{#if state === State.Loading}
    <p class="text loading"></p>
{:else}
    <p class="text {size} {(state === State.Disabled) ? Appearance.Secondary : state} {appearance}">
        <slot></slot>
    </p>
{/if}

<style lang="scss">
    @use "./Text.scss" as *;
</style>