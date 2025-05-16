<script lang="ts">
    import { BinaryState } from "../../../types/index.js";
    import { Size } from "../../../types/Size.js";
    import { defaultSize } from "./Checkbox.js";

    export let size: Size = defaultSize;
    export let state: BinaryState = BinaryState.Off;

    // Checkbox requires a boolean for `checked`
    $: checked = state === BinaryState.On;
    $: disabled = state === BinaryState.Disabled;

    function handleToggle(event: Event) {
        const target = event.target as HTMLInputElement;
        state = target.checked ? BinaryState.On : BinaryState.Off;
    }
</script>

<label class="checkbox {size}">
	<input
		class="checkbox-input"
		type="checkbox"
		bind:checked={checked}
		{disabled}
		on:change={handleToggle}
	/>
	<span class="checkbox-control"></span>
</label>

<style>:root {
  --checkmark-width: 6px;
  --checkmark-height: 12px;
}

.checkbox .checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.checkbox .checkbox-control {
  position: relative;
  width: var(--computed-control-size);
  height: var(--computed-control-size);
  min-width: var(--computed-control-size);
  min-height: var(--computed-control-size);
  border: var(--outline-size) solid var(--color-primary);
}

.checkbox {
  position: relative;
  display: flex;
  gap: var(--spacing-sm);
  cursor: pointer;
  transition: all var(--animation-duration-fast) ease;
  --computed-control-size: var(--control-size);
  --computed-checkmark-width: var(--checkmark-width);
  --computed-checkmark-height: var(--checkmark-height);
}
.checkbox.size_extra_small {
  --computed-control-size: calc(var(--control-size) * 0.55);
  --computed-checkmark-width: calc(var(--checkmark-width) * 0.55);
  --computed-checkmark-height: calc(var(--checkmark-height) * 0.55);
}
.checkbox.size_small {
  --computed-control-size: calc(var(--control-size) * 0.75);
  --computed-checkmark-width: calc(var(--checkmark-width) * 0.75);
  --computed-checkmark-height: calc(var(--checkmark-height) * 0.75);
}
.checkbox.size_medium {
  --computed-control-size: var(--control-size);
  --computed-checkmark-width: var(--checkmark-width);
  --computed-checkmark-height: var(--checkmark-height);
}
.checkbox.size_large {
  --computed-control-size: calc(var(--control-size) * 1.25);
  --computed-checkmark-width: calc(var(--checkmark-width) * 1.25);
  --computed-checkmark-height: calc(var(--checkmark-height) * 1.25);
}
.checkbox.size_extra_large {
  --computed-control-size: calc(var(--control-size) * 1.45);
  --computed-checkmark-width: calc(var(--checkmark-width) * 1.45);
  --computed-checkmark-height: calc(var(--checkmark-height) * 1.45);
}
.checkbox .checkbox-control {
  border-radius: var(--border-radius);
  background-color: transparent;
  transition: background-color var(--animation-duration-fast) ease, border-color var(--animation-duration-fast) ease;
}
.checkbox .checkbox-control::before, .checkbox .checkbox-control::after {
  content: "";
  position: absolute;
  transition: transform var(--animation-duration-fast) ease, opacity var(--animation-duration-fast) ease;
  will-change: transform, opacity;
}
.checkbox .checkbox-control::after {
  left: 50%;
  top: 45%;
  width: var(--computed-checkmark-width);
  height: var(--computed-checkmark-height);
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: translate(-50%, -50%) rotate(45deg) scale(0);
  opacity: 0;
}
.checkbox .checkbox-input:checked ~ .checkbox-control {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}
.checkbox .checkbox-input:checked ~ .checkbox-control::after {
  transform: translate(-50%, -50%) rotate(45deg) scale(1);
  opacity: 1;
}
.checkbox .checkbox-input:disabled ~ .checkbox-control {
  opacity: var(--disabled-opacity-modifier);
  cursor: not-allowed;
}
.checkbox .checkbox-input:disabled ~ .checkbox-control::after {
  pointer-events: none;
}
.checkbox .checkbox-input:disabled ~ * {
  pointer-events: none;
}</style>
