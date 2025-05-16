import { SVGShape } from "../../../types/Shapes.js";
export type Emoji = {
    keywords: any;
    id: string;
    name: string;
    emoji: string;
    group: number;
    skins: {
        native: string;
    }[];
};
export type EmojiCategory = {
    id: string;
    name: string;
    emojis: string[];
};
export declare const emojiData: {
    categories: EmojiCategory[];
    emojis: Record<string, Emoji>;
};
export declare const defaultEmoji: Emoji;
export declare const tabIcons: {
    people: SVGShape;
    nature: SVGShape;
    foods: SVGShape;
    activity: SVGShape;
    places: SVGShape;
    objects: SVGShape;
    symbols: SVGShape;
    flags: SVGShape;
};
export declare function filterEmojis(search: string, category: EmojiCategory): string[];
export declare function clickOutside(node: HTMLElement, callback: () => void): {
    destroy(): void;
};
export declare function updateEmojiUsage(id: string, frequentlyUsedIds: string[]): string[];
export declare function loadFrequentlyUsed(): string[];
