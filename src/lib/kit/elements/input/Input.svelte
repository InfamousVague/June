<script lang="ts">
    import { SVGShape } from "$lib/types/Shapes.js";
    import { Size } from "$lib/types/Size.js";
    import { State, Animation, Shape, Appearance, Highlight} from "$lib/types/index.js";
    import { Icon } from "../index.js";
    import { defaultAppearance, defaultHighlight, defaultPlaceholder, defaultShape, defaultSize, defaultState } from "./Input.js";

    export let size: Size = defaultSize;
    export let state: State = defaultState;
    export let shape: Shape = defaultShape;
    export let placeholder: string = defaultPlaceholder;
    export let icon: SVGShape | null = null;
    export let iconRight: SVGShape | null = null;
    export let appearance: Appearance = defaultAppearance;
    export let highlight: Highlight = defaultHighlight;
</script>


<div class="input-group {size} {shape} {appearance} {highlight} {state}">
    {#if state === State.Loading}
        <Icon icon={SVGShape.Circle} fill animation={Animation.Pulse}/>
    {:else if icon}
        <Icon {icon} {size} />
    {/if}
    <input class="input" placeholder={state === State.Loading ? "Loading" : placeholder} disabled={state === State.Disabled || state === State.Loading} />
    {#if iconRight && state !== State.Loading}
        <Icon icon={iconRight} {size} />
    {/if}
</div>

<style lang="scss">
    @use "./Input.scss" as *;
</style>