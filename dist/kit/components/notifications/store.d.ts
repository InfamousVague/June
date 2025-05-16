import type { Notification } from "../../../types/index.js";
declare function push(notification: Omit<Notification, "id">, autoDismissTime?: number): void;
declare function dismiss(id: number): void;
export declare const notifications: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<Notification[]>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    push: typeof push;
    dismiss: typeof dismiss;
};
export {};
