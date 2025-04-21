<script lang="ts">
    import { Position } from "$lib/types/Position.js";
    import { defaultContent, defaultOffset, defaultPosition } from "./Tooltip.js";

    export let content: string = defaultContent;
    export let position: Position = defaultPosition;
    export let offset = defaultOffset;
</script>

<div class="tooltip-wrapper">
    <slot />

    <div class="tooltip-box {position}" style={`--offset: ${offset}px;`}>
        {content}
        <div class="tooltip-arrow {position}"></div>
    </div>
</div>

<style lang="scss">
    @use "./Tooltip.scss" as *;
</style>
