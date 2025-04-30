<script lang="ts">
    import Text from "$lib/kit/elements/text/Text.svelte";
    import { Appearance } from "$lib/types/Appearance.js";
    import { Size } from "$lib/types/Size.js";

    export let count: number = 99;
</script>

<div class="badge">
    <div class="count {count > 9 ? "wide" : ""}">
        <Text appearance={Appearance.Bright} size={Size.Small}>
            {count > 98 ? "99+" : count}
        </Text>
    </div>
    <slot></slot>
</div>

<style lang="scss">
.badge {
    position: relative;

    .count {
        position: absolute;
        right: -0.5rem;
        top: -0.75rem;
        height: fit-content;
        width: fit-content;
        background: var(--color-error);
        padding: var(--padding-less);
        border-radius: var(--border-radius-large);
        pointer-events: none;

        &.wide {
            padding: var(--padding-less) var(--padding);
        }
    }
}
</style>