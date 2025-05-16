<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import type { SelectOption } from "../../../types/index.js";
	import { BinaryState, Shape, SimpleApperance, SVGShape } from "../../../types/index.js";
	import { Icon } from "../index.js";
	import { defaultAppearance, defaultShape, defaultState } from "./Select.js";

	export let options: SelectOption[] = [];
	export let shape: Shape = defaultShape;
	export let appearance: SimpleApperance = defaultAppearance;
	export let state: BinaryState = defaultState;

	export let value: string = "";

	const dispatch = createEventDispatcher();

	function handleChange(event: Event) {
		const selectedValue = (event.target as HTMLSelectElement).value;
		dispatch("change", selectedValue);
	}
</script>

<div class="select-group {shape} {appearance} {state}">
	<select
		name="generic-select"
		disabled={state === BinaryState.Disabled}
		class="select {value === '' ? 'null_selection' : ''}"
		bind:value
		on:change={handleChange}
	>
		{#if value === ""}
			<option disabled selected value="">Select Option</option>
		{/if}

		{#each options as { key, value: label }}
			<option value={key}>{label}</option>
		{/each}
	</select>
	<Icon icon={SVGShape.ChevronDown} />
</div>

<style>.select-group {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--color-secondary);
  border: none;
  border-radius: var(--border-radius);
  padding: 0 var(--padding-more);
  gap: var(--gap);
  height: var(--element-size);
  min-width: var(--select-size);
  color: var(--text-color-bright);
  font-size: var(--text-size);
  outline: none;
  cursor: pointer;
  pointer-events: none;
}
.select-group.simple_appearance_light {
  background-color: var(--color-background-light);
  color: var(--text-color-dark);
}
.select-group.simple_appearance_light .select.null_selection {
  color: var(--text-color-placeholder-light);
}
.select-group .select {
  pointer-events: all;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  appearance: none;
  color: var(--text-color-bright);
  font-size: var(--text-size);
  padding: 0 var(--padding-more);
  display: inline-flex;
  align-items: center;
  gap: var(--gap);
  outline: none;
  cursor: pointer;
  position: absolute;
  left: 0;
}
.select-group .select.null_selection {
  color: var(--text-color-placeholder);
}
.select-group.binary_state_disabled {
  opacity: var(--disabled-opacity-modifier);
  cursor: not-allowed;
}
.select-group.binary_state_disabled .select {
  cursor: not-allowed;
}
.select-group.shape_pill {
  border-radius: var(--border-radius-pill);
}</style>
