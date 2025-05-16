import { Highlight } from "../../../types/Appearance.js";
export declare const defaultLength: number;
export declare function handleMFAInput(e: CustomEvent<string>, index: number, refs: (HTMLInputElement | undefined)[], length: number): void;
export declare function handleMFAKey(event: KeyboardEvent, index: number, refs: (HTMLInputElement | undefined)[]): void;
export declare function handleMFAWrappedInput(e: CustomEvent<any>, index: number, values: string[], setValues: (v: string[]) => void, highlights: (Highlight)[], setHighlights: (h: Highlight[]) => void, refs: (HTMLInputElement | undefined)[], length: number, emitComplete: (code: string) => void): void;
