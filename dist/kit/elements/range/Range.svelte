<script lang="ts">
    import { Appearance } from "../../../types/Appearance.js";
    import { Size } from "../../../types/index.js";
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

<style>.range-wrapper {
  display: flex;
  min-width: var(--min-progress-width);
  align-items: center;
  gap: var(--gap);
}
.range-wrapper.size_extra_small {
  --control-size: 1rem;
}
.range-wrapper.size_small {
  --control-size: 1.25rem;
}
.range-wrapper.size_medium {
  --control-size: 1.5rem;
}
.range-wrapper.size_large {
  --control-size: 1.75rem;
}
.range-wrapper.size_extra_large {
  --control-size: 2rem;
}
.range-wrapper input[type=range] {
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: calc(var(--control-size) / 1.75);
  border-radius: var(--border-radius-pill);
  background: linear-gradient(to right, var(--color-accent, var(--color-primary)) 0%, var(--color-accent, var(--color-primary)) var(--fill-percent), var(--color-secondary, var(--color-secondary)) var(--fill-percent), var(--color-secondary, var(--color-secondary)) 100%);
  outline: none;
  transition: background var(--animation-duration-fast) ease;
  cursor: pointer;
}
.range-wrapper input[type=range]::-webkit-slider-thumb {
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  border-radius: var(--border-radius-pill);
  height: var(--control-size);
  width: var(--control-size);
  background: var(--text-color-light);
  border: none;
  transition: transform var(--animation-duration-fast) ease;
  cursor: pointer;
}
.range-wrapper input[type=range]::-moz-range-thumb {
  height: var(--control-size);
  width: var(--control-size);
  background: var(--text-color-light);
  border: none;
  border-radius: var(--border-radius-pill);
  transition: transform var(--animation-duration-fast) ease;
  cursor: pointer;
}
.range-wrapper input[type=range]::-moz-range-track {
  background: transparent;
  height: var(control-size);
  border-radius: var(--border-radius-pill);
}
.range-wrapper .range-value {
  font-size: var(--text-size-small);
  color: var(--text-color-muted);
  min-width: 2ch;
  text-align: right;
}
.range-wrapper.appearance_primary input[type=range] {
  background: linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) var(--fill-percent), var(--color-secondary, var(--color-secondary)) var(--fill-percent), var(--color-secondary, var(--color-secondary)) 100%);
}
.range-wrapper.appearance_secondary input[type=range] {
  background: linear-gradient(to right, var(--color-secondary) 0%, var(--color-secondary) var(--fill-percent), var(--color-secondary, var(--color-secondary)) var(--fill-percent), var(--color-secondary, var(--color-secondary)) 100%);
}
.range-wrapper.appearance_info input[type=range] {
  background: linear-gradient(to right, var(--color-info) 0%, var(--color-info) var(--fill-percent), var(--color-secondary, var(--color-secondary)) var(--fill-percent), var(--color-secondary, var(--color-secondary)) 100%);
}
.range-wrapper.appearance_success input[type=range] {
  background: linear-gradient(to right, var(--color-success) 0%, var(--color-success) var(--fill-percent), var(--color-secondary, var(--color-secondary)) var(--fill-percent), var(--color-secondary, var(--color-secondary)) 100%);
}
.range-wrapper.appearance_warning input[type=range] {
  background: linear-gradient(to right, var(--color-warning) 0%, var(--color-warning) var(--fill-percent), var(--color-secondary, var(--color-secondary)) var(--fill-percent), var(--color-secondary, var(--color-secondary)) 100%);
}
.range-wrapper.appearance_error input[type=range] {
  background: linear-gradient(to right, var(--color-error) 0%, var(--color-error) var(--fill-percent), var(--color-secondary, var(--color-secondary)) var(--fill-percent), var(--color-secondary, var(--color-secondary)) 100%);
}
.range-wrapper.appearance_bright input[type=range] {
  background: linear-gradient(to right, var(--text-color-light) 0%, var(--text-color-light) var(--fill-percent), var(--color-secondary, var(--color-secondary)) var(--fill-percent), var(--color-secondary, var(--color-secondary)) 100%);
}
.range-wrapper.appearance_muted input[type=range] {
  background: linear-gradient(to right, var(--text-color-muted) 0%, var(--text-color-muted) var(--fill-percent), var(--color-secondary, var(--color-secondary)) var(--fill-percent), var(--color-secondary, var(--color-secondary)) 100%);
}
.range-wrapper.appearance_inherit input[type=range] {
  background: linear-gradient(to right, var(inherit) 0%, var(inherit) var(--fill-percent), var(--color-secondary, var(--color-secondary)) var(--fill-percent), var(--color-secondary, var(--color-secondary)) 100%);
}</style>
