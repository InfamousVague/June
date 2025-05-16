<script lang="ts">
    import { Animation } from "../../../types/Animations.js";
    import { SVGShape } from "../../../types/Shapes.js";
    import { Size } from "../../../types/Size.js";
    import Icon from "../icon/Icon.svelte";

    export let size: Size = Size.Medium;
</script>

<Icon icon={SVGShape.Spinner} fill animation={Animation.Spin} {size} />

<style></style>
