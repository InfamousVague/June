import { SVGShape } from "../../../types/Shapes.js";
import { Size } from "../../../types/Size.js";
import { State, Shape, Appearance, Highlight } from "../../../types/index.js";
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const Input: $$__sveltets_2_IsomorphicComponent<{
    size?: Size;
    state?: State;
    shape?: Shape;
    placeholder?: string;
    icon?: SVGShape | null;
    iconRight?: SVGShape | null;
    appearance?: Appearance;
    highlight?: Highlight;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type Input = InstanceType<typeof Input>;
export default Input;
