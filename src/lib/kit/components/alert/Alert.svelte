<script lang="ts">
    import Button from "$lib/kit/elements/button/Button.svelte";
    import Icon from "$lib/kit/elements/icon/Icon.svelte";
    import Text from "$lib/kit/elements/text/Text.svelte";
    import { Appearance } from "$lib/types/Appearance.js";
    import { SVGShape } from "$lib/types/Shapes.js";
    import { Size } from "$lib/types/Size.js";
    import { createEventDispatcher } from "svelte";
    
    const dispatch = createEventDispatcher();

    export let dismissed: boolean = true
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
        <div class="body">
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
$appearances: (
    primary: --color-primary,
    secondary: --color-secondary,
    info: --color-info,
    success: --color-success,
    warning: --color-warning,
    error: --color-error
);

.alert {
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
    opacity: 0;

    .mask {
        position: fixed;
        inset: 0;
        background-color: var(--color-background-opaque);
        backdrop-filter: blur(var(--blur-radius));
    }

    .body {
        background-color: var(--color-background);
        position: fixed;
        top: var(--padding);
        left: 50%;
        transform: translate(-50%, 0%);
        border-radius: var(--border-radius);
        display: flex;
        flex-direction: row;
        padding: var(--padding-more);
        width: 90vw;
        max-width: 600px;
        min-width: 0;
        max-height: 90vh;
        overflow-y: auto;
        align-items: center;
        border: var(--outline-size) solid var(--color-info);

        .left, .right {
            display: inline-flex;
            gap: var(--gap);
        }

        .left {
            flex: 1;
        }
    }


    @each $appearance, $var in $appearances {
        &.appearance_#{$appearance} {
            .body {
                border-color: var(#{$var});
            }
        }
    }

    &.open {
        pointer-events: all;
        opacity: 1;
    }

}
</style>