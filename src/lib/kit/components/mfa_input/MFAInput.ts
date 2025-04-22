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