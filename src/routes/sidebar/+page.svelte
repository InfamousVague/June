<script lang="ts">
    import Navigation from "$lib/kit/components/navigation/Navigation.svelte";
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
        <Navigation routes={[
            { to: "/home", name: "Home", icon: SVGShape.Home },
            { to: "/friends", name: "Friends", icon: SVGShape.Users },
            { to: "/pulse", name: "Pulse", icon: SVGShape.Pulse },
            { to: "/notifications", name: "Notifications", icon: SVGShape.Bell },
            { to: "/settings", name: "Settings", icon: SVGShape.Cog },
        ]} active={"/pulse"}></Navigation>
    </div>

    <div slot="aside">
        <Button simple icon={SVGShape.Grapes}></Button>
    </div>

    Content Here

</Sidebar>

<style lang="scss">
</style>
