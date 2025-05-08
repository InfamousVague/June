export function toTitleCase(str: string): string {
    return str
        .replace(/[-_]/g, " ")
        .replace(/\w\S*/g, (txt) => txt[0].toUpperCase() + txt.slice(1).toLowerCase());
}