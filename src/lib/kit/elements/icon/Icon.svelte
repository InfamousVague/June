<script lang="ts">
    import { Animation, SVGShape } from "$lib/types/index.js";
    import { Size } from "$lib/types/Size.js";

    export let size: Size = Size.Medium;
    export let icon: SVGShape = SVGShape.Circle;
    export let fill: boolean = false;
    export let animation: Animation = Animation.None;
</script>

<svg
    class="icon {size} {animation}"
    viewBox="0 0 24 24"
    fill={fill ? "currentColor" : "none"}
    stroke={fill ? "none": "currentColor"}>
    {@html icon}
</svg>

<style lang="scss">
    .icon {
        width: 1rem;
        height: 1rem;

        &.animation_pulse {
            animation: pulse var(--animation-duration) linear infinite;
        }
    }
</style>