<script lang="ts">
    import { Appearance } from "$lib/types/Appearance.js";
    import { Size } from "$lib/types/index.js";

    export let min = 0;
    export let max = 100;
    export let step = 1;
    export let value = 50;

    export let displayPercent: boolean = false;
    export let appearance: Appearance = Appearance.Primary;
    export let size: Size = Size.Medium;

    const calcPercent = (val: number) => ((val - min) * 100) / (max - min);
</script>

<div class="range-wrapper {appearance} {size}">
    <input
        type="range"
        bind:value
        {min}
        {max}
        {step}
        style={`--fill-percent: ${calcPercent(value)}%`}
    />
    {#if displayPercent}
        <div class="range-value">{value}</div>
    {/if}
</div>

<style lang="scss">
   @use "./Range.scss" as *;
</style>
