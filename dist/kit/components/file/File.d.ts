import { SVGShape } from "../../../types/Shapes.js";
export declare const fileTypeIcons: {
    name: string;
    icon: SVGShape;
    filetypes: string[];
}[];
export declare function getIconForType(ext: string): SVGShape;
