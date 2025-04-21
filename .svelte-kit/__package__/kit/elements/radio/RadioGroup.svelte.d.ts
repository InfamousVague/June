import { BinaryState } from "../../../types/index.js";
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
declare const RadioGroup: $$__sveltets_2_IsomorphicComponent<{
    name?: string;
    options?: {
        label: string;
        value: string;
        state?: BinaryState;
    }[];
    selected?: string;
    getSelectedOption?: () => {
        label: string;
        value: string;
        state?: BinaryState;
    } | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {
    getSelectedOption: () => {
        label: string;
        value: string;
        state?: BinaryState;
    } | undefined;
}, string>;
type RadioGroup = InstanceType<typeof RadioGroup>;
export default RadioGroup;
