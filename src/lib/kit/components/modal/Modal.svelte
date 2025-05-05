<script lang="ts">
    import Button from "$lib/kit/elements/button/Button.svelte";
    import Text from "$lib/kit/elements/text/Text.svelte";
    import { Appearance } from "$lib/types/Appearance.js";
    import { ModalKind } from "$lib/types/Modal.js";
    import { SVGShape } from "$lib/types/Shapes.js";
    import { createEventDispatcher, onMount } from "svelte";
    import { defaultKind, defaultOpen, defaultTitle } from "./Modal.js";
    import { browser } from "$app/environment";
    import { Size } from "$lib/types/Size.js";

    export let kind: ModalKind = defaultKind;
    export let open: boolean = defaultOpen;
    export let title: string = defaultTitle;

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
    <div class="body">
        <div class="titlebar">
            <div class="dummy">
                <Button />
            </div>
            {#if title.length}
                <Text appearance={Appearance.Muted}>{title}</Text>
            {/if}
            <Button icon={SVGShape.XMark} on:pressed={close} appearance={Appearance.Secondary} size={Size.Small} />
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</div>


<style lang="scss">
    @use "./Modal.scss" as *;
</style>
