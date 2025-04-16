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
    @keyframes pulse {
        0% {
            opacity: 0.25;
        }
        25% {
            opacity: 0.75;
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0.25;
        }
    }
    .icon {
        width: 1rem;
        height: 1rem;

        &.animation_pulse {
            animation: pulse var(--animation-duration) linear infinite;
        }

        &.size_extra_small {
            width: var(--text-size-extra-small);
            height: var(--text-size-extra-small);
        }
        &.size_small {
            width: var(--text-size-small);
            height: var(--text-size-small);
        }
        &.size_medium {
            width: var(--text-size-medium);
            height: var(--text-size-medium);
        }
        &.size_large {
            width: var(--text-size-large);
            height: var(--text-size-large);
        }
        &.size_extra_large {
            width: var(--text-size-extra-large);
            height: var(--text-size-extra-large);
        }
    }
</style>