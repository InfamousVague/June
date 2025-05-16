<script lang="ts">
    import Button from "../../elements/button/Button.svelte";
    import Icon from "../../elements/icon/Icon.svelte";
    import Text from "../../elements/text/Text.svelte";
    import { Appearance } from "../../../types/Appearance.js";
    import { AbsolutePosition } from "../../../types/Position.js";
    import { SVGShape } from "../../../types/Shapes.js";
    import { Size } from "../../../types/Size.js";
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

<style>.alert {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0;
}
.alert .mask {
  position: fixed;
  inset: 0;
  background-color: var(--color-background-opaque);
  backdrop-filter: blur(var(--blur-radius));
}
.alert .body {
  background-color: var(--color-background);
  position: fixed;
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
}
.alert .body .left, .alert .body .right {
  display: inline-flex;
  gap: var(--gap);
}
.alert .body .left {
  flex: 1;
}
.alert .body.top {
  top: var(--padding);
  left: 50%;
  transform: translateX(-50%);
}
.alert .body.top_right {
  top: var(--padding);
  right: var(--padding);
}
.alert .body.top_left {
  top: var(--padding);
  left: var(--padding);
}
.alert .body.left {
  top: 50%;
  left: var(--padding);
  transform: translateY(-50%);
}
.alert .body.right {
  top: 50%;
  right: var(--padding);
  transform: translateY(-50%);
}
.alert .body.bottom {
  bottom: var(--padding);
  left: 50%;
  transform: translateX(-50%);
}
.alert .body.bottom_right {
  bottom: var(--padding);
  right: var(--padding);
}
.alert .body.bottom_left {
  bottom: var(--padding);
  left: var(--padding);
}
.alert .body.middle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.alert.appearance_primary .body {
  border-color: var(--color-primary);
}
.alert.appearance_secondary .body {
  border-color: var(--color-secondary);
}
.alert.appearance_info .body {
  border-color: var(--color-info);
}
.alert.appearance_success .body {
  border-color: var(--color-success);
}
.alert.appearance_warning .body {
  border-color: var(--color-warning);
}
.alert.appearance_error .body {
  border-color: var(--color-error);
}
.alert.open {
  pointer-events: all;
  opacity: 1;
}</style>