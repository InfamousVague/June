<script lang="ts">
    import { Appearance, Size, State, TextStyle } from "$lib/types/index.js";
    import { defaultAppearance, defaultSize, defaultState, defaultTextStyle } from './Text.js';
  
    export let appearance: Appearance = defaultAppearance;
    export let size: Size = defaultSize;
    export let state: State = defaultState;
    export let textStyle: TextStyle = defaultTextStyle;
    export let singleLine: boolean = false;
</script>

{#if state === State.Loading}
    <p class="text loading"></p>
{:else}
    <p class="text {size} {textStyle} {(state === State.Disabled) ? Appearance.Secondary : state} {appearance} {singleLine ? "one_line" : ""}">
        <slot></slot>
    </p>
{/if}

<style lang="scss">
    @use "./Text.scss" as *;
</style>