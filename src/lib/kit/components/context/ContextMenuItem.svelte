<script lang="ts">
	import { Button, Icon } from "$lib/kit/elements/index.js";
	import Text from "$lib/kit/elements/text/Text.svelte";
	import type { ContextItem } from "$lib/types/Context.js";
	import { Appearance, Size, SVGShape } from "$lib/types/index.js";
    import { createEventDispatcher } from "svelte";
    import { positionSubmenu } from "./ContextMenu.js";

	export let item: ContextItem;
	export let depth: number = 0;

	let submenuVisible = false;
	let submenuRef: HTMLDivElement | null = null;
	let openLeft = false;
	let submenuTop = 0;

	async function showSubmenu() {
        submenuVisible = true;

        const parent = submenuRef?.parentElement ?? null;
        const { openLeft: shouldOpenLeft, submenuTop: top } = await positionSubmenu(submenuRef, parent);
        openLeft = shouldOpenLeft;
        submenuTop = top;
    }

	function hideSubmenu() {
		submenuVisible = false;
	}

    const dispatch = createEventDispatcher();

    function select(item: ContextItem) {
        dispatch("select", item);
    }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="context-item"
	on:mouseenter={showSubmenu}
	on:mouseleave={hideSubmenu}
	style="position: relative;"
>
	<Button size={Size.Small} appearance={Appearance.Transparent} fill on:pressed={() => select(item)}>
		{#if item.icon}
			<Icon icon={item.icon} appearance={Appearance.Bright} />
		{/if}
		<Text>{item.text}</Text>
		{#if item.children}
			<span class="submenu-indicator">
				<Icon icon={SVGShape.ChevronRight} appearance={Appearance.Bright} />
			</span>
		{/if}
	</Button>

	{#if item.children && submenuVisible}
		<div
			bind:this={submenuRef}
			class="submenu"
			style="{openLeft ? 'right: 100%' : 'left: 100%'}; top: {submenuTop}px;"
		>
			{#each item.children as child}
				<svelte:self item={child} depth={depth + 1} />
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	@use "./ContextMenuItem.scss" as *;
</style>
