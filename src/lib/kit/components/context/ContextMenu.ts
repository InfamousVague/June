import { tick } from "svelte";

export async function positionContextMenu(
	menuRef: HTMLElement | null,
	clientX: number,
	clientY: number,
	padding = 8
): Promise<{ x: number; y: number }> {
	let menuX = clientX;
	let menuY = clientY;

	await tick();

	if (menuRef) {
		const { offsetWidth, offsetHeight } = menuRef;
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;

		if (menuX + offsetWidth > viewportWidth) {
			menuX = Math.max(padding, viewportWidth - offsetWidth - padding);
		}
		if (menuY + offsetHeight > viewportHeight) {
			menuY = Math.max(padding, viewportHeight - offsetHeight - padding);
		}
	}

	return { x: menuX, y: menuY };
}
