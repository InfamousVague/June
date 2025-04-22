<script lang="ts">
    import { Animation } from "$lib/types/Animations.js";
    import { SVGShape } from "$lib/types/Shapes.js";
    import { Size } from "$lib/types/Size.js";
    import Icon from "../icon/Icon.svelte";

    export let size: Size = Size.Medium;
</script>

<Icon icon={SVGShape.Spinner} fill animation={Animation.Spin} {size} />

<style lang="scss"></style>
