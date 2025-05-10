<script lang="ts">
	import { tick } from "svelte";
	import { Button, Icon } from "$lib/kit/elements/index.js";
	import Text from "$lib/kit/elements/text/Text.svelte";
	import type { ContextItem } from "$lib/types/Context.js";
	import { Appearance, Size, SVGShape } from "$lib/types/index.js";

	export let item: ContextItem;
	export let depth: number = 0;

	let submenuVisible = false;
	let submenuRef: HTMLDivElement | null = null;
	let openLeft = false;
	let submenuTop = 0;

	async function showSubmenu() {
        submenuVisible = true;
        await tick();

        // Wait until submenuRef exists and has a height
        for (let i = 0; i < 10; i++) {
            if (submenuRef?.offsetHeight) break;
            await tick();
        }

        if (!submenuRef) return;

        const rect = submenuRef.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Flip to left if overflowing to the right
        openLeft = rect.left + rect.width > viewportWidth;

        // Offset top if submenu would overflow bottom of viewport
        const parentTop = submenuRef.parentElement?.getBoundingClientRect().top ?? 0;
        const overflowBottom = parentTop + rect.height > viewportHeight;

        if (overflowBottom) {
            const maxTop = viewportHeight - rect.height - 8;
            submenuTop = Math.max(0, maxTop - parentTop);
        } else {
            submenuTop = 0;
        }
    }


	function hideSubmenu() {
		submenuVisible = false;
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="context-item"
	on:mouseenter={showSubmenu}
	on:mouseleave={hideSubmenu}
	style="position: relative;"
>
	<Button size={Size.Small} appearance={Appearance.Transparent} fill>
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
			style="
				{openLeft ? 'right: 100%' : 'left: 100%'};
				top: {submenuTop}px;
			"
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
