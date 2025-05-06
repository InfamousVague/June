import { onMount, onDestroy } from "svelte";
import { writable, get } from "svelte/store";

export function useCarousel(interval: number) {
	const currentIndex = writable(0);
	const totalFrames = writable(0);

	let slotContainer: HTMLDivElement | null = null;
	let intervalHandle: ReturnType<typeof setInterval> | null = null;

	onMount(() => {
		if (slotContainer) {
			totalFrames.set(slotContainer.children.length);
		}
		startAutoScroll();
	});

	onDestroy(() => {
		stopAutoScroll();
	});

	function showFrame(index: number) {
		const total = get(totalFrames);
		if (total === 0) return;
		currentIndex.set((index + total) % total);
		startAutoScroll();
	}

	function startAutoScroll() {
		stopAutoScroll();
		const total = get(totalFrames);
		if (interval > 0 && total > 1) {
			intervalHandle = setInterval(() => {
				const next = (get(currentIndex) + 1) % total;
				currentIndex.set(next);
			}, interval);
		}
	}

	function stopAutoScroll() {
		if (intervalHandle) {
			clearInterval(intervalHandle);
			intervalHandle = null;
		}
	}

	return {
		currentIndex,
		totalFrames,
		showFrame,
		startAutoScroll,
		stopAutoScroll,
		get slotContainer() {
			return slotContainer;
		},
		set slotContainer(el: HTMLDivElement | null) {
			slotContainer = el;
		}
	};
}
