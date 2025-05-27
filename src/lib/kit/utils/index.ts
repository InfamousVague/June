import { SVGShape } from "$lib/types/Shapes.js";
import { fileTypeIcons } from "../components/file/File.js";

export function toTitleCase(str: string): string {
    return str
        .replace(/[-_]/g, " ")
        .replace(/\w\S*/g, (txt) => txt[0].toUpperCase() + txt.slice(1).toLowerCase());
}

export function getIconForType(ext: string): SVGShape {
    ext = ext.toLowerCase();
    for (const group of fileTypeIcons) {
        if (group.filetypes.includes(ext)) return group.icon;
    }
    return SVGShape.Document;
}
