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

export async function positionSubmenu(
	ref: HTMLElement | null,
	parentRef: HTMLElement | null,
	padding = 8
): Promise<{ openLeft: boolean; submenuTop: number }> {
	await tick();

	// Wait until the submenu has dimensions
	for (let i = 0; i < 10; i++) {
		if (ref?.offsetHeight) break;
		await tick();
	}

	if (!ref || !parentRef) {
		return { openLeft: false, submenuTop: 0 };
	}

	const rect = ref.getBoundingClientRect();
	const parentRect = parentRef.getBoundingClientRect();
	const viewportWidth = window.innerWidth;
	const viewportHeight = window.innerHeight;

	const openLeft = rect.left + rect.width > viewportWidth;

	let submenuTop = 0;
	const overflowBottom = parentRect.top + rect.height > viewportHeight;

	if (overflowBottom) {
		const maxTop = viewportHeight - rect.height - padding;
		submenuTop = Math.max(0, maxTop - parentRect.top);
	}

	return { openLeft, submenuTop };
}
