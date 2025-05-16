import { Appearance } from "../../../types/Appearance.js";
import { Size } from "../../../types/index.js";
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
declare const Range: $$__sveltets_2_IsomorphicComponent<{
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    displayPercent?: boolean;
    appearance?: Appearance;
    size?: Size;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type Range = InstanceType<typeof Range>;
export default Range;
