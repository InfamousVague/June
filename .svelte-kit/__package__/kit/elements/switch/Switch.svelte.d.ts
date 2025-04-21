import { SVGShape } from "../../../types/Shapes.js";
import type { Size } from "../../../types/Size.js";
import { BinaryState } from "../../../types/State.js";
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
declare const Switch: $$__sveltets_2_IsomorphicComponent<{
    state?: BinaryState;
    size?: Size;
    icons?: [SVGShape, SVGShape] | null;
}, {
    toggled: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type Switch = InstanceType<typeof Switch>;
export default Switch;
