<script lang="ts">
    import Button from "$lib/kit/elements/button/Button.svelte";
    import Icon from "$lib/kit/elements/icon/Icon.svelte";
    import Text from "$lib/kit/elements/text/Text.svelte";
    import { Appearance } from "$lib/types/Appearance.js";
    import { AbsolutePosition } from "$lib/types/Position.js";
    import { SVGShape } from "$lib/types/Shapes.js";
    import { Size } from "$lib/types/Size.js";
    import { createEventDispatcher } from "svelte";
    
    const dispatch = createEventDispatcher();

    export let dismissed: boolean = true
    export let position: AbsolutePosition = AbsolutePosition.Bottom;
    export let message: string = "Missing alert text"
    export let appearance: Appearance = Appearance.Info

    function dismiss() {
        dismissed = true;
        dispatch("deny");
    }

    function confirm() {
        dismissed = true;
        dispatch("confirm");
    }
</script>

{#if !dismissed}
    <div class="alert open {appearance}">
        <div class="mask"></div>
        <div class="body {position}">
            <div class="left">
                <Icon icon={SVGShape.Info} size={Size.ExtraLarge} appearance={appearance}/>
                <div class="text">
                    <Text size={Size.Medium} appearance={Appearance.Muted}>Alert</Text>
                    <Text size={Size.Medium}>{message}</Text>
                </div>
            </div>
            <div class="right">
                <Button appearance={appearance} on:pressed={confirm}>Confirm</Button>
                <Button appearance={Appearance.Secondary} on:pressed={dismiss}>Deny</Button>
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
    @use "./Alert.scss" as *;
</style>