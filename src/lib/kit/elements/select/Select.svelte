<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import type { SelectOption } from "$lib/types/index.js";
	import { BinaryState, Shape, SimpleApperance, SVGShape } from "$lib/types/index.js";
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

<style lang="scss">
	@use "./Select.scss" as *;
</style>
