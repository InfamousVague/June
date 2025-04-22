<script lang="ts">
    import type { Appearance } from "$lib/types/Appearance.js";
    import type { Size } from "$lib/types/Size.js";
    import { defaultAppearance, defaultKey, defaultSize } from "./Key.js";

    export let value: string = defaultKey;
    export let size: Size = defaultSize;
    export let appearance: Appearance = defaultAppearance;
</script>

<div class="key {size} {appearance}">
    <span data-cy="key-value">
        {value}
    </span>
</div>

<style lang="scss">
    @use "./Key.scss" as *;
</style>
