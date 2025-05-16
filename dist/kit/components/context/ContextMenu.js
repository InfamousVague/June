import { tick } from "svelte";
export async function positionContextMenu(menuRef, clientX, clientY, padding = 8) {
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
export async function positionSubmenu(ref, parentRef, padding = 8) {
    await tick();
    if (!ref || !parentRef) {
        return { openLeft: false, submenuTop: 0 };
    }
    const submenuRect = ref.getBoundingClientRect();
    const parentRect = parentRef.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const submenuHeight = submenuRect.height;
    const parentTop = parentRect.top;
    const parentBottom = parentRect.bottom;
    const openLeft = parentRect.right + submenuRect.width > viewportWidth;
    let submenuTop = 0;
    if (submenuHeight <= viewportHeight - parentBottom - padding) {
        submenuTop = 0;
    }
    else if (submenuHeight <= parentTop - padding) {
        submenuTop = parentRect.height - submenuHeight;
    }
    else {
        const availableTop = Math.max(padding, viewportHeight - submenuHeight - padding);
        submenuTop = Math.min(0, availableTop - parentTop);
    }
    return { openLeft, submenuTop };
}
