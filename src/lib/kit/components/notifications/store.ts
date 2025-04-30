// notificationStore.ts
import { writable } from "svelte/store";
import type { Notification } from "$lib/types/index.js";

const { subscribe, update } = writable<Notification[]>([]);

let counter = 0;

function push(notification: Omit<Notification, "id">, autoDismissTime = 400000) {
	const id = ++counter;
	const n = { ...notification, id };
	update((notifications) => [...notifications, n]);

	setTimeout(() => {
		dismiss(id);
	}, autoDismissTime);
}

function dismiss(id: number) {
	update((notifications) => notifications.filter((n) => n.id !== id));
}

export const notifications = {
	subscribe,
	push,
	dismiss,
};
