import type { SVGShape } from "./Shapes.js"

export type ContextItem = {
    id: string,
    text: string,
    icon?: SVGShape
    children?: ContextItem[]
}