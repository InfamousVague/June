<script lang="ts">
    import type { Appearance } from "$lib/types/Appearance.js";
    import type { Size } from "$lib/types/Size.js";
    import { createEventDispatcher } from "svelte";
    import { defaultOpen, defaultSize, defaultAppearance } from "./Hamburger.js";

	export let open = defaultOpen;
    export let size: Size = defaultSize;
	export let appearance: Appearance = defaultAppearance;

	const dispatch = createEventDispatcher();

	function toggle() {
		open = !open;
		dispatch("toggle", open);
	}
</script>

<button class="hamburger {size} {appearance}" on:click={toggle} class:open aria-label="menu">
	<svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
		<line class="line top" x1="4" y1="12" x2="20" y2="12" />
		<line class="line middle" x1="4" y1="12" x2="20" y2="12" />
		<line class="line bottom" x1="4" y1="12" x2="20" y2="12" />
	</svg>
</button>

<style lang="scss">
    @use "./Hamburger.scss" as *;
</style>
