<script lang="ts">
	import Button from "$lib/kit/elements/button/Button.svelte";
	import { SVGShape } from "$lib/types/Shapes.js";
	import { onMount, onDestroy } from "svelte";

	export let interval: number = 0;

	let currentIndex = 0;
	let totalFrames = 0;
	let slotContainer: HTMLDivElement | null = null;
	let intervalHandle: ReturnType<typeof setInterval> | null = null;

	onMount(() => {
		if (slotContainer) {
			totalFrames = slotContainer.children.length;
		}
		startAutoScroll();
	});

	onDestroy(() => {
		stopAutoScroll();
	});

	$: if (interval > 0 && totalFrames > 1) {
		startAutoScroll();
	} else {
		stopAutoScroll();
	}

	function showFrame(index: number) {
		if (totalFrames === 0) return;
		currentIndex = (index + totalFrames) % totalFrames;
	}

	function startAutoScroll() {
		stopAutoScroll();
		if (interval > 0 && totalFrames > 1) {
			intervalHandle = setInterval(() => {
				showFrame(currentIndex + 1);
			}, interval);
		}
	}

	function stopAutoScroll() {
		if (intervalHandle) {
			clearInterval(intervalHandle);
			intervalHandle = null;
		}
	}
</script>


<div class="carousel">
	<div
		class="frame-container"
		style="transform: translateX(-{currentIndex * 100}%);"
		bind:this={slotContainer}
	>
		<slot />
	</div>

	<div class="controls">
		<Button
			simple
			icon={SVGShape.ChevronLeft}
			on:pressed={() => showFrame(currentIndex - 1)}
		/>
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<div class="dummy" />
		<Button
			simple
			icon={SVGShape.ChevronRight}
			on:pressed={() => showFrame(currentIndex + 1)}
		/>
	</div>

	{#if totalFrames > 1}
		<div class="indicators">
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<!-- svelte-ignore element_invalid_self_closing_tag -->
			{#each Array(totalFrames) as _, index}
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<div
					class="dot {index === currentIndex ? 'active' : ''}"
					on:click={() => showFrame(index)}
				/>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
.carousel {
	width: 920px;
	height: 640px;
	position: relative;
	overflow: hidden;

	.frame-container {
		display: flex;
		width: 100%;
		height: 100%;
		transition: transform 0.5s ease;

		:global(div) {
			min-width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.controls {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: var(--padding);
		display: flex;
		justify-content: space-between;
		align-items: center;
		pointer-events: none;

		:global(.button) {
			pointer-events: all;
		}

		.dummy {
			flex-grow: 1;
		}
	}

	.indicators {
		position: absolute;
		bottom: var(--padding);
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 0.5rem;

		.dot {
			width: var(--text-size-medium);
			height: var(--text-size-medium);
			border-radius: 50%;
			background-color: var(--color-secondary);
			cursor: pointer;
			transition: background-color 0.3s ease;
		}

		.dot.active {
			background-color: var(--color-primary);
		}
	}
}
</style>
