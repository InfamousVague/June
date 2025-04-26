<script lang="ts">
    import { Animation, Appearance, SVGShape } from "$lib/types/index.js";
    import { Size } from "$lib/types/Size.js";
    import { createEventDispatcher } from "svelte";

    export let size: Size = Size.Medium;
    export let icon: SVGShape = SVGShape.Circle;
    export let fill: boolean = false;
    export let animation: Animation = Animation.None;
    export let appearance: Appearance = Appearance.Inherit;

    const dispatch = createEventDispatcher();
    function onPress() {
        dispatch("press")
    }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<svg
    on:click={onPress}
    class="icon {size} {animation} {appearance}"
    viewBox="0 0 24 24"
    fill={fill ? "currentColor" : "none"}
    stroke={fill ? "none": "currentColor"}>
    {@html icon}
</svg>

<style lang="scss">
    @use "./Icon.scss" as *;
</style>