<script lang="ts">
    import { Appearance, Size, State, Highlight, Style, Shape, SVGShape, Animation } from "$lib/types/index.js";
    import { createEventDispatcher } from "svelte";
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
    } from './Button.js';
  
    export let appearance: Appearance = defaultAppearance;
    export let highlight: Highlight = defaultHighlight;
    export let style: Style = defaultStyle;
    export let size: Size = defaultSize;
    export let shape: Shape = defaultShape;
    export let state: State = defaultState;
    export let text: string = defaultText;
    export let icon: SVGShape | null = null;
    
    let iconOnly = icon && !text;

    const dispatch = createEventDispatcher();

    function pressed(event: Event) {
		dispatch("pressed", event);
	}
</script>

<button
    class="button {size} {appearance} {state} {highlight} {style} {shape} {iconOnly ? "icon_only" : ""}"
    disabled={state === State.Disabled || state === State.Loading}
    on:click={pressed}>

    {#if state === State.Loading}
        <Icon icon={SVGShape.Circle} fill animation={Animation.Pulse}/>
    {:else if icon}
        <Icon {icon} {size} />
    {/if}
    <slot></slot>
    {#if text.length}
        <Text appearance={Appearance.Inherit} {size}>{text}</Text>
    {/if}

</button>

<style lang="scss">
    @use "./Button.scss" as *;
</style>