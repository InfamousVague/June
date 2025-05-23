<script lang="ts">
    import Avatar from "$lib/kit/components/avatar/Avatar.svelte";
    import Breadcrumb from "$lib/kit/components/breadcrumb/Breadcrumb.svelte";
    import ContextMenu from "$lib/kit/components/context/ContextMenu.svelte";
    import {
        MFAInput,
        Tooltip,
        LanguageSelector,
        EmojiPicker,
        Modal,
        Alert,
        Badge,
        Carousel,
        Folder,
        File,
    } from "$lib/kit/components/index.js";
    import KeyRecording from "$lib/kit/components/keyrecording/KeyRecording.svelte";
    import Navigation from "$lib/kit/components/navigation/Navigation.svelte";
    import Notifications from "$lib/kit/components/notifications/Notifications.svelte";
    import { notifications } from "$lib/kit/components/notifications/store.js";
    import Pagination from "$lib/kit/components/pagination/Pagination.svelte";
    import ThemeSwitcher from "$lib/kit/components/theme_switcher/ThemeSwitcher.svelte";
    import {
        Icon,
        Radio,
        Switch,
        Text,
        Checkbox,
        Button,
        RadioGroup,
        Progress,
        Range,
        Key,
        Input,
        Loader,
        Select,
        Swatch,
        Hamburger,
        Tag,
    } from "$lib/kit/elements/index.js";
    import Link from "$lib/kit/elements/link/Link.svelte";
    import Spacer from "$lib/kit/elements/spacer/Spacer.svelte";
    import Accordion from "$lib/kit/layout/accordion/Accordion.svelte";
    import AccordionItem from "$lib/kit/layout/accordion/AccordionItem.svelte";
    import Card from "$lib/kit/layout/card/Card.svelte";
    import Sidebar from "$lib/kit/layout/sidebar/Sidebar.svelte";
    import {
        Appearance,
        Style,
        Highlight,
        Shape,
        TextStyle,
        SimpleApperance,
    } from "$lib/types/Appearance.js";
    import {
        PredefinedColor,
        Position,
        SVGShape,
        Size,
        State,
        BinaryState,
        ModalKind,
        AbsolutePosition,
    } from "$lib/types/index.js";

    const toTitle = (str: string) =>
        str
            .replace(/_/g, " ")
            .replace(
                /\w\S*/g,
                (t) => t[0].toUpperCase() + t.slice(1).toLowerCase(),
            );

    function getRandomPosition(): Position {
        const positions = Object.values(Position);
        return positions[Math.floor(Math.random() * positions.length)];
    }

    let theme: "light" | "dark" = "dark";

    // Value collections
    const appearances = Object.values(Appearance);
    const simpleAppearances = Object.values(SimpleApperance);
    const highlights = Object.values(Highlight);
    const sizes = Object.values(Size);
    const shapes = Object.values(Shape);
    const states = Object.values(State);
    const binaryStates = Object.values(BinaryState);
    const colors = Object.values(PredefinedColor);
    const textStyles = Object.values(TextStyle);

    let selectedRadio = "system";

    const radioGroupOptions = [
        { label: "System", value: "system", state: BinaryState.On },
        { label: "Light", value: "light", state: BinaryState.Off },
        { label: "Dark", value: "dark", state: BinaryState.Disabled },
    ];

    const sections = [
        // Text Sections
        {
            category: "text",
            title: "Size",
            component: Text,
            items: sizes,
            key: "size",
            labelMod: (label: string) => `Text ${toTitle(label)}`,
        },
        {
            category: "text",
            title: "Appearance",
            component: Text,
            items: appearances,
            key: "appearance",
        },
        {
            category: "text",
            title: "Style",
            component: Text,
            items: textStyles,
            key: "textStyle",
        },
        {
            category: "text",
            title: "State",
            component: Text,
            items: states,
            key: "state",
        },

        // Icons
        {
            category: "icons",
            title: "Size",
            component: Icon,
            items: sizes,
            key: "size",
            props: { icon: SVGShape.CheckMark },
        },
        {
            category: "icons",
            title: "Appearance",
            component: Icon,
            items: appearances,
            key: "appearance",
            props: { icon: SVGShape.CheckMark, size: Size.Large },
        },

        // Swatch
        {
            category: "swatches",
            title: "Colors",
            component: Swatch,
            items: colors,
            key: "color",
        },

        // Switch
        {
            category: "switch",
            title: "Binary State",
            component: Switch,
            items: binaryStates,
            key: "state",
        },
        {
            category: "switch",
            title: "Size",
            component: Switch,
            items: sizes,
            key: "size",
        },

        // Hamburger
        {
            category: "hamburger",
            title: "Hamburger",
            component: Hamburger,
            items: sizes,
            key: "size",
        },
        {
            category: "hamburger",
            title: "Apperance",
            component: Hamburger,
            items: appearances,
            key: "appearance",
        },

        // Checkbox
        {
            category: "checkbox",
            title: "Binary State",
            component: Checkbox,
            items: binaryStates,
            key: "state",
        },
        {
            category: "checkbox",
            title: "Size",
            component: Checkbox,
            items: sizes,
            key: "size",
        },

        // Input
        {
            category: "input",
            title: "Size",
            component: Input,
            items: sizes,
            key: "size",
        },
        {
            category: "input",
            title: "State",
            component: Input,
            items: states,
            key: "state",
        },
        {
            category: "input",
            title: "Icons",
            component: Input,
            items: states,
            key: "state",
            props: { icon: SVGShape.Search, iconRight: SVGShape.Heart },
        },
        {
            category: "input",
            title: "Highlight",
            component: Input,
            items: highlights,
            key: "highlight",
        },
        {
            category: "input",
            title: "Appearance",
            component: Input,
            items: simpleAppearances,
            key: "appearance",
        },
        {
            category: "input",
            title: "Shape",
            component: Input,
            items: shapes,
            key: "shape",
        },

        // Select
        {
            category: "select",
            title: "Shape",
            component: Select,
            items: shapes,
            key: "shape",
            props: {
                options: [
                    { key: "one", value: "Option One" },
                    { key: "two", value: "Option Two" },
                ],
            },
        },
        {
            category: "select",
            title: "Shape",
            component: Select,
            items: simpleAppearances,
            key: "appearance",
            props: {
                options: [
                    { key: "one", value: "Option One" },
                    { key: "two", value: "Option Two" },
                ],
            },
        },
        {
            category: "select",
            title: "Binary State",
            component: Select,
            items: binaryStates,
            key: "state",
            props: {
                options: [
                    { key: "one", value: "Option One" },
                    { key: "two", value: "Option Two" },
                ],
            },
        },

        // Radio
        {
            category: "radio",
            title: "Binary State",
            component: Radio,
            items: binaryStates,
            key: "state",
        },
        {
            category: "radio",
            title: "Size",
            component: Radio,
            items: sizes,
            key: "size",
        },

        // Buttons
        {
            category: "button",
            title: "Appearance",
            component: Button,
            items: appearances,
        },
        {
            category: "button",
            title: "Shape",
            component: Button,
            items: shapes,
            key: "shape",
        },
        {
            category: "button",
            title: "Highlight",
            component: Button,
            items: highlights,
            key: "highlight",
        },
        {
            category: "button",
            title: "Outline",
            component: Button,
            items: highlights,
            props: { appearance: Appearance.Primary, style: Style.Outline },
            key: "highlight",
            labelMod: (label: string) => label.replace("Highlight", "Outline"),
        },
        {
            category: "button",
            title: "Size",
            component: Button,
            items: sizes,
            key: "size",
        },
        {
            category: "button",
            title: "State",
            component: Button,
            items: states,
            key: "state",
        },
        {
            category: "button",
            title: "Icon",
            component: Button,
            items: states,
            props: { icon: SVGShape.Heart },
            key: "state",
        },

        // Key
        {
            category: "key",
            title: "Size",
            component: Key,
            items: sizes,
            key: "size",
        },
        {
            category: "key",
            title: "Appearance",
            component: Key,
            items: appearances,
            key: "appearance",
        },

        // Tag
        {
            category: "tag",
            title: "Appearance",
            component: Tag,
            items: appearances,
            key: "appearance",
        },
        {
            category: "tag",
            title: "Size",
            component: Tag,
            items: sizes,
            key: "size",
        },
        {
            category: "tag",
            title: "Highlight",
            component: Tag,
            items: highlights,
            key: "highlight",
        },

        // Link
        {
            category: "link",
            title: "Appearance",
            component: Link,
            items: appearances,
            key: "appearance",
        },
        {
            category: "link",
            title: "Size",
            component: Link,
            items: sizes,
            key: "size",
        },

        // Progress
        {
            category: "progress",
            title: "Appearance",
            component: Progress,
            items: appearances,
        },
        {
            category: "progress",
            title: "Size",
            component: Progress,
            items: sizes,
            key: "size",
        },
        {
            category: "progress",
            title: "Shape",
            component: Progress,
            items: shapes,
            key: "shape",
        },

        // Range
        {
            category: "range",
            title: "Appearance",
            component: Range,
            items: appearances,
            key: "appearance",
        },
        {
            category: "range",
            title: "Size",
            component: Range,
            items: sizes,
            key: "size",
        },

        // Loader
        {
            category: "loader",
            title: "Size",
            component: Loader,
            items: sizes,
            key: "size",
        },
    ];

    let modalOneOpen = false;
    let modalTwoOpen = false;

    function notify(
        appearance: Appearance = Appearance.Primary,
        icon: SVGShape = SVGShape.Info,
    ) {
        notifications.push({
            title: "Notification Test",
            subtitle: "This is a test notificaiton.",
            icon,
            appearance,
        });
    }

    let showAlert = false;

    function scrollToId(id: string) {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }

    let currentPage = 1;

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
        <div class="sidebar">
            <Accordion>
                <AccordionItem title="Options" icon={SVGShape.Cog} open={true}>
                    <Text appearance={Appearance.Muted}>Theme</Text>
                    <ThemeSwitcher />
                </AccordionItem>
            
                <AccordionItem title="Elements" icon={SVGShape.Code} open={true}>
                    <div class="nav-buttons">
                        <Button
                            shape={Shape.Pill}
                            text="Text"
                            on:pressed={() => scrollToId("text")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Icons"
                            on:pressed={() => scrollToId("icons")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Swatches"
                            on:pressed={() => scrollToId("swatches")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Switch"
                            on:pressed={() => scrollToId("switch")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Hamburger"
                            on:pressed={() => scrollToId("hamburger")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Checkbox"
                            on:pressed={() => scrollToId("checkbox")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Input"
                            on:pressed={() => scrollToId("input")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Select"
                            on:pressed={() => scrollToId("select")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Radio"
                            on:pressed={() => scrollToId("radio")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Button"
                            on:pressed={() => scrollToId("button")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Key"
                            on:pressed={() => scrollToId("key")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Progress"
                            on:pressed={() => scrollToId("progress")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Range"
                            on:pressed={() => scrollToId("range")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Tag"
                            on:pressed={() => scrollToId("tag")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Loader"
                            on:pressed={() => scrollToId("loader")}
                        />
                    </div>
                </AccordionItem>
            
                <AccordionItem title="Components" icon={SVGShape.Puzzle} open={true}>
                    <div class="nav-buttons">
                        <Button
                            shape={Shape.Pill}
                            text="Tooltip"
                            on:pressed={() => scrollToId("tooltips")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="MFA Input"
                            on:pressed={() => scrollToId("mfainput")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Emoji Picker"
                            on:pressed={() => scrollToId("emojipicker")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Language Selector"
                            on:pressed={() => scrollToId("languageselector")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Modal"
                            on:pressed={() => scrollToId("modal")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Badges"
                            on:pressed={() => scrollToId("badges")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Notification"
                            on:pressed={() => scrollToId("notifications")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Alert"
                            on:pressed={() => scrollToId("alerts")}
                        />
                         <Button
                            shape={Shape.Pill}
                            text="Pagination"
                            on:pressed={() => scrollToId("pagination")}
                        />
                         <Button
                            shape={Shape.Pill}
                            text="File / Folder"
                            on:pressed={() => scrollToId("folder")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Key Recording"
                            on:pressed={() => scrollToId("keyrecording")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Context Menu"
                            on:pressed={() => scrollToId("context")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Carousel"
                            on:pressed={() => scrollToId("carousel")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Breadcrumb"
                            on:pressed={() => scrollToId("breadcrumb")}
                        />
                        <Button
                            shape={Shape.Pill}
                            text="Avatar"
                            on:pressed={() => scrollToId("avatar")}
                        />
                    </div>
                </AccordionItem>
            </Accordion>
        </div>
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

    <div class="container">
        <span id="carousel"></span>
        <Card title="Carousel">
            <Carousel interval={3000} adaptive showDots={true}>
                <img src="/june/carousel/frame_1.avif" alt="Frame 1" />
                <img src="/june/carousel/frame_2.avif" alt="Frame 2" />
                <img src="/june/carousel/frame_3.avif" alt="Frame 3" />
                <img src="/june/carousel/frame_4.avif" alt="Frame 4" />
            </Carousel>
        </Card>

        {#each Array.from(new Set(sections.map((s) => s.category))) as category}
            <span id={category}></span>
            <Card title={toTitle(category)}>
                {#each sections.filter((s) => s.category === category) as { title, component, items, props = { }, key = "appearance", labelMod }}
                    <div class="section">
                        <Text appearance={Appearance.Muted} size={Size.Small}
                            >{title}</Text
                        >
                        <div class="grid">
                            {#each items as item}
                                {/* @ts-ignore */ null}
                                <svelte:component
                                    this={component}
                                    {...props}
                                    {...{ [key]: item }}
                                    text={component === Button
                                        ? labelMod
                                            ? labelMod(toTitle(item))
                                            : toTitle(item)
                                        : undefined}
                                >
                                    {#if component !== Button}
                                        {labelMod
                                            ? labelMod(toTitle(item))
                                            : toTitle(item)}
                                    {/if}
                                </svelte:component>
                            {/each}
                        </div>
                    </div>
                {/each}

                {#if category === "radio"}
                    <!-- ✅ Radio Group Section -->
                    <div class="section">
                        <Text appearance={Appearance.Muted} size={Size.Small}
                            >Radio Group</Text
                        >
                        <RadioGroup
                            name="theme"
                            options={radioGroupOptions}
                            bind:selected={selectedRadio}
                        />
                    </div>
                {:else if category === "icons"}
                    <div class="section">
                        <Text appearance={Appearance.Muted} size={Size.Small}
                            >Included Shapes</Text
                        >
                        <div class="icons">
                            {#each Object.keys(SVGShape) as shape}
                                <Tooltip content={shape}>
                                    <Icon
                                        icon={SVGShape[
                                            shape as keyof typeof SVGShape
                                        ]}
                                        size={Size.Large}
                                    ></Icon>
                                </Tooltip>
                            {/each}
                        </div>
                    </div>
                {/if}
            </Card>
        {/each}

        <span id="tooltips"></span>
        <Card title="Tooltips">
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Position
                </Text>
                <div class="grid">
                    {#each colors as color}
                        <Tooltip position={getRandomPosition()} content={color}>
                            <Swatch {color} />
                        </Tooltip>
                    {/each}
                </div>
            </div>
        </Card>

        <span id="mfainput"></span>
        <Card title="MFAInput">
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Default
                </Text>
                <div class="grid">
                    <MFAInput />
                </div>
            </div>
        </Card>

        <span id="emojipicker"></span>
        <Card title="Emoji Picker">
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Default
                </Text>
                <div class="grid">
                    <EmojiPicker />
                </div>
            </div>
        </Card>

        <span id="languageselector"></span>
        <Card title="Language Selector">
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Default
                </Text>
                <div class="grid">
                    <LanguageSelector />
                </div>
            </div>
        </Card>

        <span id="modal"></span>
        <Card title="Modal">
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Popup
                </Text>
                <div class="grid">
                    <Modal
                        open={modalOneOpen}
                        kind={ModalKind.Pop}
                        on:close={() => {
                            modalOneOpen = false;
                        }}
                        title="Approval Requested"
                    >
                        <div class="modal-content">
                            <div class="text">
                                <Text
                                    appearance={Appearance.Muted}
                                    size={Size.Large}
                                    >Nothing Wants Your Location</Text
                                >
                                <Text>
                                    Nothing wants to use your location, this is
                                    purely for mockup purposes.
                                </Text>
                                <Text>
                                    If you'd like to fake allow "Nothing" to use
                                    your location, it will do nothing.
                                </Text>
                                <Spacer size={Size.Small} />
                                <Text
                                    appearance={Appearance.Muted}
                                    size={Size.Small}
                                >
                                    Furthermore, this is a second paragraph that
                                    really means nothing.
                                </Text>
                                <Spacer size={Size.Small} />
                            </div>
                            <div class="controls">
                                <Button
                                    text="Allow"
                                    fill
                                    appearance={Appearance.Success}
                                ></Button>
                                <Button
                                    text="Deny"
                                    fill
                                    appearance={Appearance.Secondary}
                                ></Button>
                            </div>
                        </div>
                    </Modal>

                    <Modal
                        open={modalTwoOpen}
                        kind={ModalKind.Slide}
                        on:close={() => {
                            modalTwoOpen = false;
                        }}
                        title="Approval Requested"
                    >
                        <div class="modal-content">
                            <div class="text">
                                <Text
                                    appearance={Appearance.Muted}
                                    size={Size.Large}
                                    >Nothing Wants Your Location</Text
                                >
                                <Text>
                                    Nothing wants to use your location, this is
                                    purely for mockup purposes.
                                </Text>
                                <Text>
                                    If you'd like to fake allow "Nothing" to use
                                    your location, it will do nothing.
                                </Text>
                                <Spacer size={Size.Small} />
                                <Text
                                    appearance={Appearance.Muted}
                                    size={Size.Small}
                                >
                                    Furthermore, this is a second paragraph that
                                    really means nothing.
                                </Text>
                                <Spacer size={Size.Small} />
                            </div>
                            <div class="controls">
                                <Button
                                    text="Allow"
                                    fill
                                    appearance={Appearance.Success}
                                ></Button>
                                <Button
                                    text="Deny"
                                    fill
                                    appearance={Appearance.Secondary}
                                ></Button>
                            </div>
                        </div>
                    </Modal>

                    <Button
                        on:pressed={() => {
                            modalOneOpen = !modalOneOpen;
                        }}
                    >
                        Open Popup
                    </Button>

                    <Button
                        on:pressed={() => {
                            modalTwoOpen = !modalTwoOpen;
                        }}
                    >
                        Open Slide
                    </Button>
                </div>
            </div>
        </Card>

        <span id="badges"></span>
        <Card title="Badge">
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Default
                </Text>
                <div class="grid">
                    <Badge count={13}>
                        <Button icon={SVGShape.User} text="Friends"></Button>
                    </Badge>

                    <Badge count={999}>
                        <Button icon={SVGShape.User}></Button>
                    </Badge>
                </div>
            </div>
        </Card>

        <span id="notifications"></span>
        <Card title="Notifications">
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Default
                </Text>
                <div class="grid">
                    <Notifications position={AbsolutePosition.TopRight} />

                    <Button
                        appearance={Appearance.Primary}
                        on:pressed={() => {
                            notify(Appearance.Primary, SVGShape.Info);
                        }}
                        text="Notify Primary"
                    ></Button>

                    <Button
                        appearance={Appearance.Secondary}
                        on:pressed={() => {
                            notify(Appearance.Secondary, SVGShape.Grapes);
                        }}
                        text="Notify Secondary"
                    ></Button>

                    <Button
                        appearance={Appearance.Success}
                        on:pressed={() => {
                            notify(Appearance.Success, SVGShape.CheckMark);
                        }}
                        text="Notify Success"
                    ></Button>

                    <Button
                        appearance={Appearance.Info}
                        on:pressed={() => {
                            notify(Appearance.Info, SVGShape.Info);
                        }}
                        text="Notify Info"
                    ></Button>

                    <Button
                        appearance={Appearance.Warning}
                        on:pressed={() => {
                            notify(Appearance.Warning, SVGShape.Flag);
                        }}
                        text="Notify Warning"
                    ></Button>

                    <Button
                        appearance={Appearance.Error}
                        on:pressed={() => {
                            notify(Appearance.Error, SVGShape.XMark);
                        }}
                        text="Notify Error"
                    ></Button>
                </div>
            </div>
        </Card>

        <span id="alerts"></span>
        <Card title="Alert">
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Default
                </Text>
                <div class="grid">
                    <Alert
                        position={AbsolutePosition.Top}
                        appearance={Appearance.Error}
                        message="This is a mock alert which does nothing."
                        on:confirm={() => (showAlert = false)}
                        on:deny={() => (showAlert = false)}
                        dismissed={!showAlert}
                    />
                    <Button
                        appearance={Appearance.Secondary}
                        on:pressed={() => {
                            showAlert = true;
                        }}
                        text="Trigger Alert"
                    ></Button>
                </div>
            </div>
        </Card>

        <span id="keyrecording"></span>
        <Card title="Keyboard Shortcuts">
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Default
                </Text>
                <div class="grid">
                    <KeyRecording />
                </div>
            </div>
        </Card>

        <span id="context"></span>
        <Card title="Context">
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Default
                </Text>
                <div class="grid">
                    <ContextMenu
                    leftClick
                        items={[
                            {
                                id: "subscribe",
                                text: "Notify",
                                icon: SVGShape.Bell,
                            },
                            {
                                id: "feed",
                                text: "Add to Feed",
                                icon: SVGShape.Pulse,
                            },
                            {
                                id: "download",
                                text: "Download",
                                icon: SVGShape.Download,
                            },
                            {
                                id: "admin",
                                text: "Admin",
                                icon: SVGShape.Cog,
                                children: [
                                    {
                                        id: "report",
                                        text: "Report",
                                        icon: SVGShape.Flag,
                                    },
                                    {
                                        id: "delete",
                                        text: "Delete",
                                        icon: SVGShape.XMark,
                                    },
                                    {
                                        id: "more",
                                        text: "More",
                                        icon: SVGShape.Plus,
                                        children: [
                                            {
                                                id: "bug",
                                                text: "Flag Bug",
                                                icon: SVGShape.Junebug,
                                            },
                                            {
                                                id: "grapes",
                                                text: "Grapes",
                                                icon: SVGShape.Grapes,
                                            },
                                        ],
                                    },
                                ],
                            },
                        ]}
                    >
                        <Text>Right click me</Text>
                    </ContextMenu>
                </div>
            </div>
        </Card>

        <span id="breadcrumb"></span>
        <Card title="Breadcrumb">
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Default
                </Text>
                <div class="grid">
                    <Breadcrumb route="/settings/users/123/edit" />
                </div>
            </div>
        </Card>

        <span id="pagination"></span>
        <Card title="Pagination">
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Default
                </Text>
                <div class="grid">
                    <Pagination
                        bind:currentPage
                        totalPages={1000}
                        maxVisible={7}
                        on:change={(e) => currentPage = e.detail.page}
                    />
                </div>
            </div>
        </Card>

        <span id="folder"></span>
        <Card title="Folder">
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Default
                </Text>
                <div class="grid">
                    <Folder color={PredefinedColor.AppleValley}/>
                    <File color={PredefinedColor.Biscay} />
                </div>
            </div>
        </Card>

        <span id="avatar"></span>
        <Card title="Avatar">
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Default
                </Text>
                <div class="grid">
                    <Avatar />
                </div>
            </div>
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Highlight
                </Text>
                <div class="grid">
                    <Avatar
                        image="/assets/june.png"
                        highlight={Highlight.Primary}
                    />
                    <Avatar
                        image="/assets/june.png"
                        highlight={Highlight.Secondary}
                    />
                    <Avatar
                        image="/assets/june.png"
                        highlight={Highlight.Info}
                    />
                    <Avatar
                        image="/assets/june.png"
                        highlight={Highlight.Success}
                    />
                    <Avatar
                        image="/assets/june.png"
                        highlight={Highlight.Warning}
                    />
                    <Avatar
                        image="/assets/june.png"
                        highlight={Highlight.Error}
                    />
                </div>
            </div>
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Size
                </Text>
                <div class="grid">
                    <Avatar image="/assets/june.png" size={Size.ExtraSmall} />
                    <Avatar image="/assets/june.png" size={Size.Small} />
                    <Avatar image="/assets/june.png" size={Size.Medium} />
                    <Avatar image="/assets/june.png" size={Size.Large} />
                    <Avatar image="/assets/june.png" size={Size.ExtraLarge} />
                </div>
            </div>
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Indicator
                </Text>
                <div class="grid">
                    <Avatar
                        image="/assets/june.png"
                        indicator={Appearance.Primary}
                    />
                    <Avatar
                        image="/assets/june.png"
                        indicator={Appearance.Secondary}
                    />
                    <Avatar
                        image="/assets/june.png"
                        indicator={Appearance.Success}
                    />
                    <Avatar
                        image="/assets/june.png"
                        indicator={Appearance.Warning}
                    />
                    <Avatar
                        image="/assets/june.png"
                        indicator={Appearance.Info}
                    />
                    <Avatar
                        image="/assets/june.png"
                        indicator={Appearance.Error}
                    />
                </div>
            </div>
        </Card>
    </div>
</Sidebar>

<style lang="scss">
    .title {
        display: inline-flex;
        align-items: center;
        gap: var(--gap-less);
    }


    .body {
        display: inline-flex;
        flex: 1;
    }
    .sidebar {
        display: inline-flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: var(--gap-less);
        padding: 0 var(--padding);
        flex: 1;

        .nav-buttons {
            display: inline-flex;
            flex-wrap: wrap;
            gap: var(--gap-less);
        }
    }

    .container {
        display: inline-flex;
        flex-direction: column;
        gap: calc(var(--gap) * 2);
        padding: var(--padding-more);
        flex: 1;
        overflow-x: hidden;

        .section {
            display: inline-flex;
            gap: var(--gap);
            flex-direction: column;
            padding: var(--padding-more);
            border-radius: var(--border-radius);
            background-color: var(--color-background-dark);
            flex: 1;

            .grid {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                align-items: flex-end;
            }

            .icons {
                display: inline-flex;
                flex-wrap: wrap;
                gap: var(--gap-less);
            }
        }
    }

    .modal-content {
        display: inline-flex;
        flex-direction: column;
        gap: var(--gap);
        flex: 1;
        height: 100%;
        padding: calc(var(--padding) * 2);
        justify-content: flex-end;

        .controls {
            display: inline-flex;
            flex-direction: column;
            gap: var(--gap-less);
        }

        .text {
            display: inline-flex;
            flex-direction: column;
            gap: var(--gap);
            flex: 1;
            text-align: center;
            justify-content: center;
        }
    }
</style>
