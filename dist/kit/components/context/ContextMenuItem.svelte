<script lang="ts">
	import { Button, Icon } from "../../elements/index.js";
	import Text from "../../elements/text/Text.svelte";
	import type { ContextItem } from "../../../types/Context.js";
	import { Appearance, Size, SVGShape } from "../../../types/index.js";
    import { createEventDispatcher, tick } from "svelte";
    import { positionSubmenu } from "./ContextMenu.js";

	export let item: ContextItem;
	export let depth: number = 0;

	let submenuVisible = false;
	let submenuRef: HTMLDivElement | null = null;
	let openLeft = false;
	let submenuTop = 0;

    async function showSubmenu() {
        submenuVisible = true;

        await tick(); // Wait for submenu to render
        await new Promise((resolve) => requestAnimationFrame(resolve)); // Ensure it's painted

        if (!submenuRef) return;

        const parent = submenuRef.parentElement;
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

<style>.submenu-indicator {
  margin-left: auto;
  padding-left: 0.5rem;
}

.submenu {
  position: absolute;
  z-index: 1000;
  background-color: var(--color-background-dark);
  border-radius: var(--border-radius);
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}</style>
