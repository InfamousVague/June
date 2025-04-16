<script lang="ts">
    import { Appearance, Size, State, Highlight, Style, Shape, SVGShape, Animation } from "$lib/types/index.js";
    import Icon from "../icon/Icon.svelte";
    import Text from "../text/Text.svelte";
    import { 
        defaultAppearance,
        defaultHighlight,
        defaultSize,
        defaultState,
        defaultStyle,
        defaultShape,
        defaultText,
        onPress
    } from './Button.js';
  
    export let appearance: Appearance = defaultAppearance;
    export let highlight: Highlight = defaultHighlight;
    export let style: Style = defaultStyle;
    export let size: Size = defaultSize;
    export let shape: Shape = defaultShape;
    export let state: State = defaultState;
    export let text: string = defaultText;
    export let icon: SVGShape | null = null;
</script>

<button
    class="button {size} {appearance} {state} {highlight} {style} {shape}"
    disabled={state === State.Disabled || state === State.Loading}
    on:click={onPress}>

    {#if state === State.Loading}
        <Icon icon={SVGShape.Circle} fill animation={Animation.Pulse}/>
    {:else if icon}
        <Icon {icon} {size} />
    {/if}
    <slot></slot>
    <Text appearance={Appearance.Inherit} {size}>{text}</Text>

</button>

<style lang="scss">
    @use "./Button.scss" as *;
</style>