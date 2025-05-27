import { SVGShape } from "../../../types/Shapes.js";
export const fileTypeIcons = [
    { name: "Text", icon: SVGShape.DocumentTXT, filetypes: ["txt", "rtf"] },
    { name: "Document", icon: SVGShape.Document, filetypes: ["doc", "docx", "odt"] },
    { name: "Spreadsheet", icon: SVGShape.DocumentChart, filetypes: ["xls", "xlsx", "ods", "csv"] },
    { name: "Presentation", icon: SVGShape.DocumentChart, filetypes: ["ppt", "pptx", "odp"] },
    { name: "Image", icon: SVGShape.DocumentMedia, filetypes: ["jpg", "jpeg", "png", "gif", "bmp", "webp"] },
    { name: "Video", icon: SVGShape.DocumentMedia, filetypes: ["mp4", "mkv", "mov", "avi", "webm"] },
    { name: "Audio", icon: SVGShape.DocumentMedia, filetypes: ["mp3", "wav", "ogg", "flac"] },
    { name: "PDF", icon: SVGShape.DocumentPDF, filetypes: ["pdf"] },
    { name: "Archive", icon: SVGShape.Archive, filetypes: ["zip", "rar", "7z", "tar", "gz"] },
    { name: "Code", icon: SVGShape.DocumentCode, filetypes: ["js", "ts", "html", "css", "json", "xml", "py", "cpp", "java"] },
];
export function getIconForType(ext) {
    ext = ext.toLowerCase();
    for (const group of fileTypeIcons) {
        if (group.filetypes.includes(ext))
            return group.icon;
    }
    return SVGShape.Document;
}
