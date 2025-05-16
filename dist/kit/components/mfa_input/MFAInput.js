import { Highlight } from "../../../types/Appearance.js";
export const defaultLength = 5;
export function handleMFAInput(e, index, refs, length) {
    const value = e.detail;
    if (value.length === 1 && index < length - 1) {
        refs[index + 1]?.focus();
    }
}
export function handleMFAKey(event, index, refs) {
    const current = refs[index];
    if (event.key === "Backspace" && current?.value === "" && index > 0) {
        event.preventDefault();
        refs[index - 1]?.focus();
    }
}
export function handleMFAWrappedInput(e, index, values, setValues, highlights, setHighlights, refs, length, emitComplete // NEW
) {
    const value = typeof e.detail === "string"
        ? e.detail
        : typeof e.detail?.value === "string"
            ? e.detail.value
            : e.target?.value ?? "";
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
    const newHighlights = [...highlights];
    newHighlights[index] = value.trim() ? Highlight.Success : Highlight.None;
    setHighlights(newHighlights);
    handleMFAInput(e, index, refs, length);
    const code = newValues.join("");
    const isComplete = newValues.every((v) => v.trim().length === 1);
    if (isComplete) {
        emitComplete(code);
    }
}
