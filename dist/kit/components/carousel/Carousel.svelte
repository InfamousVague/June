<script lang="ts">
	import Button from "../../elements/button/Button.svelte";
	import { SVGShape } from "../../../types/Shapes.js";
	import { onMount, onDestroy } from "svelte";

	export let interval: number = 0;         // Auto-slide interval in ms
	export let size: string = "920px";       // Width if adaptive = false
	export let adaptive: boolean = false;    // If true, width is 100%
    export let showDots: boolean = true;     // If true, shows pagination dots

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

		{#if totalFrames > 1 && showDots}
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

<style>.carousel-wrapper {
  position: relative;
  aspect-ratio: 16/9;
}
.carousel-wrapper.adaptive {
  width: 100%;
}
.carousel-wrapper::before {
  content: "";
  display: block;
  padding-top: 56.25%;
}
.carousel-wrapper .carousel {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: var(--border-radius);
}
.carousel-wrapper .carousel .frame-container {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
}
.carousel-wrapper .carousel .frame-container > :global(div) {
  min-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}
.carousel-wrapper .carousel .frame-container :global(img),
.carousel-wrapper .carousel .frame-container :global(video),
.carousel-wrapper .carousel .frame-container :global(canvas) {
  min-width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.carousel-wrapper .carousel .controls {
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
}
.carousel-wrapper .carousel .controls :global(.button) {
  pointer-events: all;
}
.carousel-wrapper .carousel .controls .dummy {
  flex-grow: 1;
}
.carousel-wrapper .carousel .indicators {
  position: absolute;
  bottom: var(--padding);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}
.carousel-wrapper .carousel .indicators .dot {
  width: var(--text-size-medium);
  height: var(--text-size-medium);
  border-radius: 50%;
  background-color: var(--color-secondary);
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.carousel-wrapper .carousel .indicators .dot.active {
  background-color: var(--color-primary);
}</style>
