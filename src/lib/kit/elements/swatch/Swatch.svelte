<script lang="ts">
    import type { Color } from "$lib/types/Color.js";
    import type { Size } from "$lib/types/Size.js";
    import { createEventDispatcher } from "svelte";
    import { defaultColor, defaultSize } from "./Swatch.js";

    export let color: Color = defaultColor;
    export let size: Size = defaultSize;

    const dispatch = createEventDispatcher();

    function pressed(_: Event) {
        dispatch("pressed", color);
    }
</script>

<button
    on:click={pressed}
    class="swatch {size}"
    aria-label="color swatch"
    style={`background-color: ${color};`}
></button>

<style lang="scss">
    @use "./Swatch.scss";
</style>
