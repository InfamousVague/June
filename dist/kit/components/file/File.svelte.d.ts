import { PredefinedColor } from "../../../index.js";
import type { ContextItem } from "../../../types/Context.js";
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
declare const File: $$__sveltets_2_IsomorphicComponent<{
    name?: string;
    bytes?: number;
    type?: string;
    color?: PredefinedColor | undefined;
    additionalContext?: ContextItem[];
}, {
    context: CustomEvent<any>;
    open: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type File = InstanceType<typeof File>;
export default File;
