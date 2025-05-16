import type { Appearance } from "./Appearance.js";
import type { SVGShape } from "./Shapes.js";
export type Notification = {
    id: number;
    title: string;
    subtitle: string;
    icon: SVGShape;
    appearance: Appearance;
};
