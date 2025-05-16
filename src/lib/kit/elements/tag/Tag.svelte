<script lang="ts">
    import { Size, Highlight, Appearance } from "$lib/types/index.js";
    import { defaultAppearance, defaultContent, defaultHighlight, defaultHole, defaultSize } from "./Tag.js";

    export let content: string = defaultContent;
    export let appearance: Appearance = defaultAppearance;
    export let size: Size = defaultSize;
    export let highlight: Highlight = defaultHighlight;
    export let hole: boolean = defaultHole;
</script>

<div class="tag {appearance} {highlight} {size} {hole ? "" : "no_hole"}">
    {#if hole}
        <div class="hole"></div>
    {/if}
    {content}
</div>

<style lang="scss">
    @use "./Tag.scss" as *;
</style>
