<script lang="ts">
    import type { Color } from "../../../types/Color.js";
    import type { Size } from "../../../types/Size.js";
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

<style>.swatch {
  width: var(--control-size);
  height: var(--control-size);
  border-radius: 50%;
  border: none;
}
.swatch.size_extra_small {
  --control-size: 1rem;
}
.swatch.size_small {
  --control-size: 1.5rem;
}
.swatch.size_medium {
  --control-size: 2rem;
}
.swatch.size_large {
  --control-size: 2.5rem;
}
.swatch.size_extra_large {
  --control-size: 3rem;
}</style>
