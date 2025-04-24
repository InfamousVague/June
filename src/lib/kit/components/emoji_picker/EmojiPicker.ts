export type Emoji = {
    id: string;
    name: string;
    emoji: string;
    group: number;
    skins: { native: string }[];
};

export type EmojiCategory = {
    id: string;
    name: string;
    emojis: string[];
};
