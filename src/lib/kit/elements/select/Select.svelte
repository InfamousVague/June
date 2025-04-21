<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { BinaryState, Shape, SimpleApperance, SVGShape, type SelectOption } from "$lib/types/index.js";
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

<style lang="scss">
	@use "./Select.scss" as *;
</style>
