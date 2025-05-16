// notificationStore.ts
import { writable } from "svelte/store";
const { subscribe, update } = writable([]);
let counter = 0;
function push(notification, autoDismissTime = 10000) {
    const id = ++counter;
    const n = { ...notification, id };
    update((notifications) => [...notifications, n]);
    setTimeout(() => {
        dismiss(id);
    }, autoDismissTime);
}
function dismiss(id) {
    update((notifications) => notifications.filter((n) => n.id !== id));
}
export const notifications = {
    subscribe,
    push,
    dismiss,
};
