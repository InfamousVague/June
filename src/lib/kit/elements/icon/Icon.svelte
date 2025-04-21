<script lang="ts">
    import { Animation, Appearance, SVGShape } from "$lib/types/index.js";
    import { Size } from "$lib/types/Size.js";

    export let size: Size = Size.Medium;
    export let icon: SVGShape = SVGShape.Circle;
    export let fill: boolean = false;
    export let animation: Animation = Animation.None;
    export let appearance: Appearance = Appearance.Inherit;
</script>

<svg
    class="icon {size} {animation} {appearance}"
    viewBox="0 0 24 24"
    fill={fill ? "currentColor" : "none"}
    stroke={fill ? "none": "currentColor"}>
    {@html icon}
</svg>

<style lang="scss">
    @use "./Icon.scss" as *;
</style>