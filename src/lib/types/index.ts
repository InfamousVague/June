import { SVGShape } from "./Shapes.js";

export * from "./Animations.js";
export * from "./Appearance.js";
export * from "./Color.js";
export * from "./Notifications.js";
export * from "./Modal.js";
export * from "./Position.js";
export * from "./Shapes.js";
export * from "./Size.js";
export * from "./State.js";

export type SelectOption = {
    key: string,
    value: string
};


export type Range_1_100 = `100` | `${Range_1_99}`;
export type Range_1_99 = `${Range_1_9}${Range_0_9}` | Range_1_9;
export type Range_0_9 = `0` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9`;
export type Range_1_9 = `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9`;
