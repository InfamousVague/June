<script lang="ts">
    import {
        MFAInput,
        Tooltip,
        LanguageSelector,
        EmojiPicker,
        Modal,
        Alert,
        Badge,
        Carousel,
    } from "$lib/kit/components/index.js";
    import KeyRecording from "$lib/kit/components/keyrecording/KeyRecording.svelte";
    import Notifications from "$lib/kit/components/notifications/Notifications.svelte";
    import { notifications } from "$lib/kit/components/notifications/store.js";
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
    } from "$lib/kit/elements/index.js";
    import Spacer from "$lib/kit/elements/spacer/Spacer.svelte";
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
</script>

<Sidebar>
    <div slot="title" class="title">
        <Icon icon={SVGShape.Grapes} size={Size.ExtraLarge} appearance={Appearance.Primary}></Icon>
        <Text size={Size.Medium} appearance={Appearance.Primary}>June UI Kit</Text>
    </div>

    <div slot="body">
        <div class="sidebar">
            <Text appearance={Appearance.Muted}>Elements</Text>
            <div class="nav-buttons">
                <Button text="Text" on:pressed={() => scrollToId("text")} />
                <Button text="Icons" on:pressed={() => scrollToId("icons")} />
                <Button
                    text="Swatches"
                    on:pressed={() => scrollToId("swatches")}
                />
                <Button text="Switch" on:pressed={() => scrollToId("switch")} />
                <Button
                    text="Hamburger"
                    on:pressed={() => scrollToId("hamburger")}
                />
                <Button
                    text="Checkbox"
                    on:pressed={() => scrollToId("checkbox")}
                />
                <Button text="Input" on:pressed={() => scrollToId("input")} />
                <Button text="Select" on:pressed={() => scrollToId("select")} />
                <Button text="Radio" on:pressed={() => scrollToId("radio")} />
                <Button text="Button" on:pressed={() => scrollToId("button")} />
                <Button text="Key" on:pressed={() => scrollToId("key")} />
                <Button
                    text="Progress"
                    on:pressed={() => scrollToId("progress")}
                />
                <Button text="Range" on:pressed={() => scrollToId("range")} />
                <Button text="Loader" on:pressed={() => scrollToId("loader")} />
            </div>
            <Spacer />
            <Text appearance={Appearance.Muted}>Components</Text>
            <div class="nav-buttons">
                <Button
                    text="Tooltip"
                    on:pressed={() => scrollToId("tooltips")}
                />
                <Button
                    text="MFA Input"
                    on:pressed={() => scrollToId("mfainput")}
                />
                <Button
                    text="Emoji Picker"
                    on:pressed={() => scrollToId("emojipicker")}
                />
                <Button
                    text="Language Selector"
                    on:pressed={() => scrollToId("languageselector")}
                />
                <Button text="Modal" on:pressed={() => scrollToId("modal")} />
                <Button text="Badges" on:pressed={() => scrollToId("badges")} />
                <Button
                    text="Notification"
                    on:pressed={() => scrollToId("notifications")}
                />
                <Button text="Alert" on:pressed={() => scrollToId("alerts")} />
                <Button
                    text="Key Recording"
                    on:pressed={() => scrollToId("keyrecording")}
                />
                <Button
                    text="Carousel"
                    on:pressed={() => scrollToId("carousel")}
                />
            </div>
        </div>
    </div>

    <div class="container">
        <Text appearance={Appearance.Muted}>Options</Text>
        <Switch
            size={Size.Large}
            icons={[SVGShape.Sun, SVGShape.Moon]}
            on:toggled={(e) => {
                theme = e.detail === BinaryState.On ? "light" : "dark";
                document.documentElement.dataset.theme = theme;
            }}
        />

        <span id="carousel"></span>
        <Card title="Carousel">
            <div class="section">
                <Text appearance={Appearance.Bright} size={Size.Small}>
                    Default
                </Text>
                <div class="grid">
                    <Carousel interval={3000} adaptive>
                        <div style="background-color: #40407a"></div>
                        <div style="background-color: #706fd3"></div>
                        <div style="background-color: #ff793f"></div>
                        <div style="background-color: #ffb142"></div>
                    </Carousel>
                </div>
            </div>
        </Card>

        <Text appearance={Appearance.Muted}>Elements</Text>
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
                                <Icon icon={SVGShape[shape as keyof typeof SVGShape]} size={Size.ExtraLarge}></Icon>
                            </Tooltip>
                            {/each}
                        </div>
                    </div>
                {/if}
            </Card>
        {/each}

        <Text appearance={Appearance.Muted}>Components</Text>

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
    </div>
</Sidebar>

<style lang="scss">
    .title {
        display: inline-flex;
        align-items: center;
        gap: var(--gap-less);
    }

    .sidebar {
        display: inline-flex;
        flex-wrap: wrap;
        gap: var(--gap-less);
        padding: 0 var(--padding);

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
            background-color: var(--color-background);
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
