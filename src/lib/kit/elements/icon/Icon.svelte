<script lang="ts">
    import { Animation, Appearance, PredefinedColor, SVGShape } from "$lib/types/index.js";
    import { Size } from "$lib/types/Size.js";
    import { createEventDispatcher } from "svelte";

    export let size: Size = Size.Medium;
    export let icon: SVGShape = SVGShape.Circle;
    export let fill: boolean = false;
    export let animation: Animation = Animation.None;
    export let appearance: Appearance = Appearance.Inherit;
    export let color: PredefinedColor | undefined = undefined;

    const dispatch = createEventDispatcher();
    function onPress() {
        dispatch("press")
    }

    let colorStr = (color) ? `${color}` : "currentColor";
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<svg
    on:click={onPress}
    class="icon {size} {animation} {appearance}"
    viewBox="0 0 24 24"
    fill={fill ? colorStr : "none"}
    stroke={fill ? "none": colorStr}>
    {@html icon}
</svg>

<style lang="scss">
    @use "./Icon.scss" as *;
</style>