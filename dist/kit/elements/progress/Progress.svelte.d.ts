import type { Appearance, Shape } from "../../../types/Appearance.js";
import type { Range_1_100, Size } from "../../../types/index.js";
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
declare const Progress: $$__sveltets_2_IsomorphicComponent<{
    appearance?: Appearance;
    size?: Size;
    shape?: Shape;
    percent?: Range_1_100;
    animated?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type Progress = InstanceType<typeof Progress>;
export default Progress;
