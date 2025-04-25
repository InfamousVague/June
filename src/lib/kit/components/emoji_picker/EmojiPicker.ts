import { SVGShape } from "$lib/types/Shapes.js";
import rawEmojiData from "@emoji-mart/data";

export type Emoji = {
    keywords: any;
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

export const emojiData = rawEmojiData as {
  categories: EmojiCategory[];
  emojis: Record<string, Emoji>;
};

export const defaultEmoji: Emoji = {
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
}

export function filterEmojis(search: string, category: EmojiCategory): string[] {
	if (!search.trim()) return category.emojis;

	const lower = search.trim().toLowerCase();

	return category.emojis.filter((id) => {
		const emoji = emojiData.emojis[id];
		const name = emoji.name?.toLowerCase() || "";
		const keywords = (emoji.keywords || []).join(" ").toLowerCase();

		return name.includes(lower) || keywords.includes(lower);
	});
}

export function clickOutside(node: HTMLElement, callback: () => void) {
  const handleClick = (event: MouseEvent) => {
    if (!node.contains(event.target as Node)) {
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

export function updateEmojiUsage(id: string, frequentlyUsedIds: string[]) {
  const stored = localStorage.getItem(USAGE_KEY);
  const usage: Record<string, number> = stored ? JSON.parse(stored) : {};
  usage[id] = (usage[id] || 0) + 1;
  const sorted = Object.entries(usage)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 30)
    .map(([id]) => id);
  localStorage.setItem(USAGE_KEY, JSON.stringify(usage));
  return sorted;
}

export function loadFrequentlyUsed(): string[] {
  const stored = localStorage.getItem(USAGE_KEY);
  if (stored) {
    const usage: Record<string, number> = JSON.parse(stored);
    return Object.entries(usage)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 30)
      .map(([id]) => id);
  }
  return [];
}
