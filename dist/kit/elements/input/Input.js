import { Appearance, Shape, Highlight } from "../../../types/Appearance.js";
import { Size } from "../../../types/Size.js";
import { State } from "../../../types/State.js";
export const defaultPlaceholder = "Placeholder";
export const defaultSize = Size.Medium;
export const defaultState = State.Default;
export const defaultShape = Shape.Standard;
export const defaultAppearance = Appearance.Secondary;
export const defaultHighlight = Highlight.None;
export function handleInput(event, charLimit, numeric, dispatch) {
    const input = event.currentTarget;
    if (numeric) {
        input.value = input.value.replace(/\D/g, "");
    }
    if (charLimit !== null) {
        input.value = input.value.slice(0, charLimit);
    }
    dispatch("input", input.value);
}
export function handleBeforeInput(event, charLimit, numeric) {
    const input = event.currentTarget;
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
export function forwardKeyEvent(event, dispatch) {
    dispatch("keyevent", event);
    dispatch("keydownNative", event);
}
