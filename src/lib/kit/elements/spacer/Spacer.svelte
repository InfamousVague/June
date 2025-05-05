<script lang="ts">
    import { Size } from "$lib/types/Size.js";

    export let size: Size = Size.Medium;
</script>

<div class="spacer {size}"></div>

<style lang="scss">
    .spacer {
        height: var(--spacer-size);
        width: 100%;

        &.size_extra_small {
            --spacer-size: calc(var(--spacer-size) / 1.5);
            --spacer-size: calc(var(--spacer-size) / 1.5);
        }

        &.size_small {
            --spacer-size: calc(var(--spacer-size) / 1.25);
            --spacer-size: calc(var(--spacer-size) / 1.25);
        }

        &.size_large {
            --spacer-size: calc(var(--spacer-size) * 1.5);
            --spacer-size: calc(var(--spacer-size) * 1.5);
        }

        &.size_extra_large {
            --spacer-size: calc(var(--spacer-size) * 2);
            --spacer-size: calc(var(--spacer-size) * 2);
        }
    }
</style>
