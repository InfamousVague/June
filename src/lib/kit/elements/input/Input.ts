import { Appearance, Shape, Highlight } from "$lib/types/Appearance.js";
import { Size } from "$lib/types/Size.js";
import { State } from "$lib/types/State.js";

export const defaultPlaceholder: string = "Placeholder";
export const defaultSize: Size = Size.Medium;
export const defaultState: State = State.Default;
export const defaultShape: Shape = Shape.Standard;
export const defaultAppearance: Appearance = Appearance.Secondary;
export const defaultHighlight: Highlight = Highlight.None;

export function handleInput(
    event: Event,
    charLimit: number | null,
    numeric: boolean,
    dispatch: (type: string, detail?: any) => void
) {
    const input = event.currentTarget as HTMLInputElement;

    if (numeric) {
        input.value = input.value.replace(/\D/g, "");
    }

    if (charLimit !== null) {
        input.value = input.value.slice(0, charLimit);
    }

    dispatch("input", input.value);
}

export function handleBeforeInput(
    event: InputEvent,
    charLimit: number | null,
    numeric: boolean
) {
    const input = event.currentTarget as HTMLInputElement;
    const incoming = event.data ?? "";

    if (charLimit !== null && input.value.length >= charLimit) {
        if (!event.inputType.startsWith("delete")) {
            event.preventDefault();
            return;
        }
    }

    if (numeric && incoming && !/^\d+$/.test(incoming)) {
        event.preventDefault();
    }
}

export function forwardKeyEvent(
    event: KeyboardEvent,
    dispatch: (type: string, detail?: any) => void
) {
    dispatch("keyevent", event);
    dispatch("keydownNative", event);
}