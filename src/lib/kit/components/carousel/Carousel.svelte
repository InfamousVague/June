<script lang="ts">
	import Button from "$lib/kit/elements/button/Button.svelte";
	import { SVGShape } from "$lib/types/Shapes.js";
	import { onMount, onDestroy } from "svelte";

	export let interval: number = 0;         // Auto-slide interval in ms
	export let size: string = "920px";       // Width if adaptive = false
	export let adaptive: boolean = false;    // If true, width is 100%

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
		startAutoScroll(); // Reset timer on manual nav
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

<div
	class="carousel-wrapper {adaptive ? 'adaptive' : ''}"
	style={!adaptive ? `width: ${size}` : ''}
>
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
</div>

<style lang="scss">
    @use "./Carousel.scss" as *;
</style>
