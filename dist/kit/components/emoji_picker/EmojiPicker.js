import { SVGShape } from "../../../types/Shapes.js";
import rawEmojiData from "@emoji-mart/data";
export const emojiData = rawEmojiData;
export const defaultEmoji = {
    id: "dotted_line_face",
    name: "Select an Emoji",
    emoji: "🫥",
    group: -1,
    keywords: [""],
    skins: [{ native: "🫥" }],
};
export const tabIcons = {
    "people": SVGShape.User,
    "nature": SVGShape.Nature,
    "foods": SVGShape.Grapes,
    "activity": SVGShape.Basketball,
    "places": SVGShape.Earth,
    "objects": SVGShape.Pencil,
    "symbols": SVGShape.Info,
    "flags": SVGShape.Flag
};
export function filterEmojis(search, category) {
    if (!search.trim())
        return category.emojis;
    const lower = search.trim().toLowerCase();
    return category.emojis.filter((id) => {
        const emoji = emojiData.emojis[id];
        const name = emoji.name?.toLowerCase() || "";
        const keywords = (emoji.keywords || []).join(" ").toLowerCase();
        return name.includes(lower) || keywords.includes(lower);
    });
}
export function clickOutside(node, callback) {
    const handleClick = (event) => {
        if (!node.contains(event.target)) {
            callback();
        }
    };
    document.addEventListener("click", handleClick, true);
    return {
        destroy() {
            document.removeEventListener("click", handleClick, true);
        },
    };
}
const USAGE_KEY = "emoji_selector_usage";
export function updateEmojiUsage(id, frequentlyUsedIds) {
    const stored = localStorage.getItem(USAGE_KEY);
    const usage = stored ? JSON.parse(stored) : {};
    usage[id] = (usage[id] || 0) + 1;
    const sorted = Object.entries(usage)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 30)
        .map(([id]) => id);
    localStorage.setItem(USAGE_KEY, JSON.stringify(usage));
    return sorted;
}
export function loadFrequentlyUsed() {
    const stored = localStorage.getItem(USAGE_KEY);
    if (stored) {
        const usage = JSON.parse(stored);
        return Object.entries(usage)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 30)
            .map(([id]) => id);
    }
    return [];
}
