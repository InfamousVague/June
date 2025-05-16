import { Appearance, Size, State, TextStyle } from "../../../types/index.js";
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
type $$__sveltets_2_PropsWithChildren<Props, Slots> = Props & (Slots extends {
    default: any;
} ? Props extends Record<string, never> ? any : {
    children?: any;
} : {});
declare const Text: $$__sveltets_2_IsomorphicComponent<$$__sveltets_2_PropsWithChildren<{
    appearance?: Appearance;
    size?: Size;
    state?: State;
    textStyle?: TextStyle;
    singleLine?: boolean;
    padded?: boolean;
    interactable?: boolean;
}, {
    default: {};
}>, {
    click: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}, {}, string>;
type Text = InstanceType<typeof Text>;
export default Text;
