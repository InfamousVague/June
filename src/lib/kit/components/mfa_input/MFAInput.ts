import { Highlight } from "$lib/types/Appearance.js";

export const defaultLength: number = 5;

export function handleMFAInput(
    e: CustomEvent<string>,
    index: number,
    refs: (HTMLInputElement | undefined)[],
    length: number
) {
    const value = e.detail;
    if (value.length === 1 && index < length - 1) {
        refs[index + 1]?.focus();
    }
}

export function handleMFAKey(
    event: KeyboardEvent,
    index: number,
    refs: (HTMLInputElement | undefined)[]
) {
    const current = refs[index];
    if (event.key === "Backspace" && current?.value === "" && index > 0) {
        event.preventDefault();
        refs[index - 1]?.focus();
    }
}

export function handleMFAWrappedInput(
    e: CustomEvent<any>,
    index: number,
    values: string[],
    setValues: (v: string[]) => void,
    highlights: (Highlight | undefined)[],
    setHighlights: (h: (Highlight | undefined)[]) => void,
    refs: (HTMLInputElement | undefined)[],
    length: number,
    emitComplete: (code: string) => void // NEW
) {
    const value: string =
        typeof e.detail === "string"
            ? e.detail
            : typeof e.detail?.value === "string"
                ? e.detail.value
                : (e.target as HTMLInputElement)?.value ?? "";

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    const newHighlights = [...highlights];
    newHighlights[index] = value.trim() ? Highlight.Success : undefined;
    setHighlights(newHighlights);

    handleMFAInput(e, index, refs, length);

    const code = newValues.join("");
    const isComplete = newValues.every((v) => v.trim().length === 1);
    if (isComplete) {
        emitComplete(code);
    }
}
