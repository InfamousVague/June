<script lang="ts">
	import { BinaryState } from "../../../types/index.js";
	import { Size } from "../../../types/Size.js";
    import { createEventDispatcher } from "svelte";
	import { defaultSize } from "./Radio.js";

	export let size: Size = defaultSize;
	export let state: BinaryState = BinaryState.Off;
	export let name: string = "radio";
	export let value: string;
	export let groupValue: string;

    const dispatch = createEventDispatcher();

	$: checked = groupValue === value;
	$: disabled = state === BinaryState.Disabled;

	function handleSelect() {
		if (disabled) return;
		dispatch("change", value);
	}
</script>

<label class="radio {size}">
	<input
		class="radio-input"
		type="radio"
		name={name}
		value={value}
		checked={checked}
		{disabled}
		on:change={handleSelect}
	/>
	<span class="radio-control"></span>
</label>

<style>/* Variables */
:root {
  --radio-dot-size: 12px;
}

/* Shared Input Styles */
.radio .radio-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.radio .radio-control {
  position: relative;
  width: var(--control-size);
  height: var(--control-size);
  min-width: var(--control-size);
  min-height: var(--control-size);
  border: var(--border-size) solid var(--color-primary);
  transition: all var(--animation-duration-fast) linear;
}

.radio {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--gap);
  cursor: pointer;
}
.radio.size_extra_small {
  --control-size: 0.75rem;
  --radio-dot-size: 0.375rem;
}
.radio.size_small {
  --control-size: 1.0625rem;
  --radio-dot-size: 0.53125rem;
}
.radio.size_medium {
  --control-size: 1.375rem;
  --radio-dot-size: 0.6875rem;
}
.radio.size_large {
  --control-size: 1.6875rem;
  --radio-dot-size: 0.84375rem;
}
.radio.size_extra_large {
  --control-size: 2rem;
  --radio-dot-size: 1rem;
}
.radio .radio-control {
  border-radius: 50%;
}
.radio .radio-control::before, .radio .radio-control::after {
  content: "";
  position: absolute;
  transition: transform var(--animation-duration-fast) linear, opacity var(--animation-duration-fast) linear;
  will-change: transform, opacity;
}
.radio .radio-control::after {
  top: 50%;
  left: 50%;
  width: var(--radio-dot-size);
  height: var(--radio-dot-size);
  border-radius: 50%;
  background-color: white;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
}
.radio .radio-input:checked ~ .radio-control {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}
.radio .radio-input:checked ~ .radio-control::before {
  animation: ripple 240ms linear;
}
.radio .radio-input:checked ~ .radio-control::after {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
.radio .radio-input:disabled ~ .radio-control {
  opacity: var(--disabled-opacity-modifier);
  cursor: not-allowed;
}</style>
