<script lang="ts">
    import Button from "../../elements/button/Button.svelte";
    import Text from "../../elements/text/Text.svelte";
    import { Appearance } from "../../../types/Appearance.js";
    import { ModalKind } from "../../../types/Modal.js";
    import { SVGShape } from "../../../types/Shapes.js";
    import { createEventDispatcher, onMount } from "svelte";
    import { defaultKind, defaultOpen, defaultTitle } from "./Modal.js";
    import { browser } from "$app/environment";
    import { Size } from "../../../types/Size.js";

    export let kind: ModalKind = defaultKind;
    export let open: boolean = defaultOpen;
    export let title: string = defaultTitle;
    export let dynamic: boolean = false;

    const dispatch = createEventDispatcher();

    function close(event: Event) {
        dispatch("close", event);
    }

    function lockBodyScroll() {
        if (browser) {
            document.body.style.overflow = 'hidden';
        }
    }

    function unlockBodyScroll() {
        if (browser) {
            document.body.style.overflow = '';
        }
    }

    onMount(() => {
        if (browser && open) {
            lockBodyScroll();
        }

        return () => {
            unlockBodyScroll();
        };
    });

    $: if (browser) {
        if (open) {
            lockBodyScroll();
        } else {
            unlockBodyScroll();
        }
    }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="modal {kind} {open ? 'open' : ''}">
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div class="modal_mask" on:click={close}></div>
    <div class="body {dynamic ? "dynamic" : ""}">
        <div class="titlebar">
            <div class="dummy">
                <Button />
            </div>
            {#if title.length}
                <Text appearance={Appearance.Muted} size={Size.Small}>{title}</Text>
            {/if}
            <Button icon={SVGShape.XMark} on:pressed={close} appearance={Appearance.Secondary} size={Size.ExtraSmall} />
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</div>

<style>.modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0;
}
.modal .modal_mask {
  position: fixed;
  inset: 0;
  background-color: var(--color-background-opaque);
  backdrop-filter: blur(var(--blur-radius));
}
.modal .body {
  background-color: var(--color-background);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  padding: var(--padding-more);
  width: 90vw;
  max-width: 600px;
  min-width: 0;
  max-height: 90vh;
  overflow-y: auto;
}
.modal .body.dynamic {
  width: fit-content;
}
.modal .body .titlebar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--padding);
  margin-bottom: var(--padding);
  border-bottom: 1px solid var(--color-border-light);
  width: 100%;
  height: 1rem;
}
.modal .body .titlebar .dummy {
  visibility: hidden;
}
.modal .body .content {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--padding) 0 0 0;
}
.modal.open {
  pointer-events: all;
  opacity: 1;
}
.modal.slide_modal .body {
  position: fixed;
  bottom: 0;
  top: unset;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  width: 90vw;
  max-width: 600px;
  min-width: 0;
  max-height: 90vh;
  background-color: var(--color-background);
  padding: var(--padding-more);
  display: flex;
  flex-direction: column;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transition: transform 300ms ease, opacity 300ms ease;
  overflow: hidden;
  height: auto;
}
.modal.slide_modal.open .body {
  transform: translateX(-50%) translateY(0);
}</style>
