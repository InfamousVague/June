<script lang="ts">
    import { Appearance, Size, State, Highlight, Style } from "$lib/types/index.js";
    import Text from "../text/Text.svelte";
    import { 
        defaultAppearance,
        defaultHighlight,
        defaultSize,
        defaultState,
        defaultStyle,
        defaultText
    } from './Button.js';
  
    export let appearance: Appearance = defaultAppearance;
    export let highlight: Highlight = defaultHighlight;
    export let style: Style = defaultStyle;
    export let size: Size = defaultSize;
    export let state: State = defaultState;
    export let text: string = defaultText;
  
    export function pressed() {
      // stub
    }
</script>

<button class="button {size} {appearance} {state} {highlight} {style}" disabled={state === State.Disabled}>
    <slot></slot><Text appearance={Appearance.Inherit} {size}>{text}</Text>
</button>

<style lang="scss">
    @use "./Button.scss" as *;
</style>