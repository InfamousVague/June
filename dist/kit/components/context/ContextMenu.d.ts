export declare function positionContextMenu(menuRef: HTMLElement | null, clientX: number, clientY: number, padding?: number): Promise<{
    x: number;
    y: number;
}>;
export declare function positionSubmenu(ref: HTMLElement | null, parentRef: HTMLElement | null, padding?: number): Promise<{
    openLeft: boolean;
    submenuTop: number;
}>;
