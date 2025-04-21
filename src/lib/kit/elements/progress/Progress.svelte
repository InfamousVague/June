<script lang="ts">
    import type { Appearance, Shape } from "$lib/types/Appearance.js";
    import type { Range_1_100, Size } from "$lib/types/index.js";
    import { defaultShape } from "../button/Button.js";
    import { defaultAppearance, defaultPercent, defaultSize } from "./Progress.js";

    export let appearance: Appearance = defaultAppearance;
    export let size: Size = defaultSize;
    export let shape: Shape = defaultShape;
    export let percent: Range_1_100 = defaultPercent;
    export let animated: boolean = false;
</script>

<div class="progress-container {appearance} {size} {shape}">
    <div class="progress-bar {animated ? "animated" : ""}" style={`width: ${percent}%;`}></div>
</div>

<style lang="scss">
    @use "./Progress.scss";
</style>