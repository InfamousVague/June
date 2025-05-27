import { SVGShape } from "../../types/Shapes.js";
import { fileTypeIcons } from "../components/file/File.js";
export function toTitleCase(str) {
    return str
        .replace(/[-_]/g, " ")
        .replace(/\w\S*/g, (txt) => txt[0].toUpperCase() + txt.slice(1).toLowerCase());
}
export function getIconForType(ext) {
    ext = ext.toLowerCase();
    for (const group of fileTypeIcons) {
        if (group.filetypes.includes(ext))
            return group.icon;
    }
    return SVGShape.Document;
}
