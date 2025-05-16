import { Appearance } from "../../../types/Appearance.js";
import { AbsolutePosition } from "../../../types/Position.js";
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
declare const Alert: $$__sveltets_2_IsomorphicComponent<{
    dismissed?: boolean;
    position?: AbsolutePosition;
    message?: string;
    appearance?: Appearance;
}, {
    deny: CustomEvent<any>;
    confirm: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type Alert = InstanceType<typeof Alert>;
export default Alert;
