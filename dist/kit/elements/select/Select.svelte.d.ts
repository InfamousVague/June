import { BinaryState, Shape, SimpleApperance, type SelectOption } from "../../../types/index.js";
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
declare const Select: $$__sveltets_2_IsomorphicComponent<{
    options?: Array<SelectOption>;
    shape?: Shape;
    appearance?: SimpleApperance;
    defaultValue?: string | null;
    state?: BinaryState;
}, {
    change: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type Select = InstanceType<typeof Select>;
export default Select;
