<script lang="ts">
    import { Appearance, TextStyle } from "../../../types/Appearance.js";
    import { Size } from "../../../types/Size.js";
    import { Text } from "../index.js";

    export let url: string = "#";
    export let value: string = "localhost"
    export let appearance: Appearance = Appearance.Primary;
    export let size: Size = Size.Medium;
    export let remote: boolean = true
</script>

<a href={url} target="{remote ? "_blank" : "_self"}">
    <Text {appearance} {size} textStyle={TextStyle.Underline}>{value}</Text>
</a>

<style></style>