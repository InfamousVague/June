<script lang="ts">
    import { Appearance } from "$lib/types/Appearance.js";
    import { SVGShape } from "$lib/types/Shapes.js";
	import type { Size } from "$lib/types/Size.js";
	import { BinaryState } from "$lib/types/State.js";
    import { createEventDispatcher } from "svelte";
    import Icon from "../icon/Icon.svelte";
	import { defaultState, defaultSize, toggle } from "./Switch.js";

	export let state: BinaryState = defaultState;
    export let size: Size = defaultSize;
	export let icons: [SVGShape, SVGShape] | null = null;
	$: checked = state === BinaryState.On;
	$: disabled = state === BinaryState.Disabled;

	const dispatch = createEventDispatcher();

	function onChange(event: Event) {
		state = toggle(event, state);
		dispatch("toggled", state);
	}
</script>

<label class="switch {size}">
	<input
		type="checkbox"
		{disabled}
		bind:checked={checked}
		on:change={onChange}
	/>
	<span class="slider">
		{#if icons}
			<Icon appearance={Appearance.Secondary} icon={checked ? icons[0] : icons[1]} />
		{/if}
	</span>
</label>

<style lang="scss">
	@use "./Switch.scss" as *;
</style>
