<script lang="ts">
    import { Appearance } from "$lib/types/Appearance.js";
    import { Size } from "$lib/types/index.js";
    import {
        defaultAppearance,
        defaultDisplayPercent,
        defaultMax,
        defaultMin,
        defaultSize,
        defaultStep,
        defaultValue,
    } from "./Range.js";

    export let min: number = defaultMin;
    export let max: number = defaultMax;
    export let step: number = defaultStep;
    export let value: number = defaultValue;

    export let displayPercent: boolean = defaultDisplayPercent;
    export let appearance: Appearance = defaultAppearance;
    export let size: Size = defaultSize;

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
