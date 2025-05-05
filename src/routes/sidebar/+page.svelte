<script lang="ts">
    import Button from "$lib/kit/elements/button/Button.svelte";
    import Text from "$lib/kit/elements/text/Text.svelte";
    import Sidebar from "$lib/kit/layout/sidebar/Sidebar.svelte";
    import { SVGShape } from "$lib/types/Shapes.js";
</script>

<Sidebar>
    <div slot="title">
        <Text>Sidebar</Text>
    </div>

    <div slot="header">
        <Button fill>Marketplace</Button>
    </div>

    <div slot="body">
        Sidebar Body
    </div>

    <div slot="footer">
        Sidebar Footer
    </div>

    <div slot="aside">
        <Button simple icon={SVGShape.Grapes}></Button>
    </div>

    Content Here

</Sidebar>

<style lang="scss">
</style>
