<script lang="ts">
	import { BinaryState } from "$lib/types/index.js";
	import { Size } from "$lib/types/Size.js";
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

<style lang="scss">
	@use "./Radio.scss" as *;
</style>
