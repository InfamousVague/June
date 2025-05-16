<script>
    import { Navigation } from "$lib/kit/components/index.js";
    import { Icon, Text } from "$lib/kit/elements/index.js";
    import { Sidebar } from "$lib/kit/layout/index.js";
    import { Appearance, Size, SVGShape } from "$lib/types/index.js";

</script>
<Sidebar>
    <div slot="title" class="title">
        <Icon
            icon={SVGShape.Junebug}
            size={Size.ExtraLarge}
            appearance={Appearance.Primary}
        ></Icon>
        <Text size={Size.Medium} appearance={Appearance.Primary}
            >June UI Kit</Text
        >
    </div>

    <div slot="body" class="body">
        
    </div>

    <div slot="footer">
        <Navigation
            routes={[
                { to: "/home", name: "Home", icon: SVGShape.Home },
                { to: "/friends", name: "Friends", icon: SVGShape.Users },
                { to: "/pulse", name: "Pulse", icon: SVGShape.Pulse },
                {
                    to: "/notifications",
                    name: "Notifications",
                    icon: SVGShape.Bell,
                },
                { to: "/settings", name: "Settings", icon: SVGShape.Cog },
            ]}
            active={"/pulse"}
        ></Navigation>
    </div>

</Sidebar>