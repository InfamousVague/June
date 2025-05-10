<script lang="ts">
	import { Button, Icon } from "$lib/kit/elements/index.js";
	import Text from "$lib/kit/elements/text/Text.svelte";
	import type { ContextItem } from "$lib/types/Context.js";
	import { Appearance, Size } from "$lib/types/index.js";
	import { SVGShape } from "$lib/types/Shapes.js";
    import { tick } from "svelte";
    import { positionContextMenu } from "./ContextMenu.js";

	const defaultItem = {
		id: "null",
		text: "Missing Items",
		icon: SVGShape.XMark
	};

	export let items: ContextItem[] = [
		defaultItem, defaultItem, defaultItem, defaultItem
	];

	let menuVisible = false;
	let menuX = 0;
	let menuY = 0;
	let menuRef: HTMLDivElement | null = null;

    async function handleContextMenu(event: MouseEvent) {
        event.preventDefault();

        menuX = event.clientX;
        menuY = event.clientY;
        menuVisible = true;

        await tick();
        if (menuRef) {
            const { x, y } = await positionContextMenu(menuRef, menuX, menuY);
            menuX = x;
            menuY = y;
        }

        const handleClickOutside = () => {
            menuVisible = false;
            window.removeEventListener("click", handleClickOutside);
        };

        window.addEventListener("click", handleClickOutside);
    }

</script>


<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="wrapper" on:contextmenu={handleContextMenu}>
    <slot></slot>
</div>

{#if menuVisible}
    <div
        bind:this={menuRef}
        class="context"
        style="top: {menuY}px; left: {menuX}px; position: fixed;"
    >
        {#each items as item}
            <Button size={Size.Small} appearance={Appearance.Transparent}>
                {#if item.icon}
                    <Icon icon={item.icon} appearance={Appearance.Bright}/>
                {/if}
                <Text>{item.text}</Text>
            </Button>
        {/each}
    </div>
{/if}

<style lang="scss">
    @use "./ContextMenu.scss" as *;
</style>
