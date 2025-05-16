<!-- AccordionItem.svelte -->
<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { SVGShape } from "$lib/types/index.js";
	import { Icon } from "$lib/kit/elements/index.js";

	export let title: string;
	export let icon: SVGShape | null = null;
	export let open: boolean = false;

	const dispatch = createEventDispatcher();

	function toggle() {
		open = !open;
		dispatch("toggle", { open });
	}
</script>

<div class="item">
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="header" on:click={toggle}>
		{#if icon}
			<Icon icon={icon} />
		{/if}
		<span class="title">{title}</span>
        <div class="spacer"></div>
        <Icon icon={open ? SVGShape.ChevronDown : SVGShape.ChevronRight} />
	</div>

	{#if open}
		<div class="content">
			<slot />
		</div>
	{/if}
</div>

<style lang="scss">
    .item {
        display: inline-flex;
        flex-direction: column;
        padding-bottom: var(--padding);

        .header {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            gap: var(--gap);
            padding: var(--padding) 0;
            user-select: none;
            cursor: pointer;
            
            .spacer {
                flex: 1;
            }
        }
    }
    
</style>
