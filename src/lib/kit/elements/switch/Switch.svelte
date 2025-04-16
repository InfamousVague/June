<script lang="ts">
    import type { Size } from "$lib/types/Size.js";
	import { BinaryState } from "$lib/types/State.js";
	import { defaultState, defaultSize, toggle } from "./Switch.js";

	export let state: BinaryState = defaultState;
    export let size: Size = defaultSize;

	$: checked = state === BinaryState.On;
	$: disabled = state === BinaryState.Disabled;

	function onChange(event: Event) {
		state = toggle(event, state);
	}
</script>

<label class="switch {size}">
	<input
		type="checkbox"
		{disabled}
		bind:checked={checked}
		on:change={onChange}
	/>
	<span class="slider"></span>
</label>

<style lang="scss">
	@use "./Switch.scss" as *;
</style>
