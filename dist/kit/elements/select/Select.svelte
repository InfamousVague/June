<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { BinaryState, Shape, SimpleApperance, SVGShape, type SelectOption } from "../../../types/index.js";
	import { Icon } from "../index.js";
	import { defaultAppearance, defaultShape, defaultState } from "./Select.js";

	export let options: Array<SelectOption> = [];
	export let shape: Shape = defaultShape;
    export let appearance: SimpleApperance = defaultAppearance;
	export let defaultValue: string | null = null;
    export let state: BinaryState = defaultState;

	const dispatch = createEventDispatcher();

	let selected: string = defaultValue ?? "";

	function handleChange(event: Event) {
		selected = (event.target as HTMLSelectElement).value;
		dispatch("change", selected);
	}
</script>

<div class="select-group {shape} {appearance} {state}">
	<select
		name="generic-select"
        disabled={state === BinaryState.Disabled}
		class="select {defaultValue === null && selected === "" ? "null_selection" : ""}"
		bind:value={selected}
		on:change={handleChange}
	>
		{#if defaultValue === null}
			<option disabled selected value="">Select Option</option>
		{/if}

		{#each options as [value, label]}
			<option value={value}>{label}</option>
		{/each}
	</select>
	<Icon icon={SVGShape.ChevronDown} />
</div>

<style>.select-group {
  position: relative;
  height: var(--control-size);
  color: var(--text-color-bright);
  background-color: var(--color-secondary);
  border: none;
  border-radius: var(--border-radius);
  padding: var(--padding) var(--padding-more);
  font-size: var(--text-size);
  display: inline-flex;
  align-items: center;
  outline: none;
  cursor: pointer;
  pointer-events: none;
  gap: var(--gap);
  min-width: var(--min-control-width);
  justify-content: flex-end;
  align-items: center;
}
.select-group.simple_appearance_light {
  background-color: var(--color-background-light);
  color: var(--text-color-dark);
}
.select-group .select {
  pointer-events: all;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: var(--padding);
  height: 100%;
  appearance: none;
  height: var(--control-size);
  color: var(--text-color-bright);
  background-color: transparent;
  border: none;
  padding: 0 var(--padding-more);
  font-size: var(--text-size);
  gap: var(--gap);
  display: inline-flex;
  outline: none;
  cursor: pointer;
  width: 100%;
}
.select-group .select.null_selection {
  color: var(--text-color-placeholder);
}
.select-group.simple_appearance_light .select.null_selection {
  color: var(--text-color-placeholder-light);
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
