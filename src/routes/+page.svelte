<script lang="ts">
    import EmojiPicker from "$lib/kit/components/emoji_picker/EmojiPicker.svelte";
    import { MFAInput, Tooltip } from "$lib/kit/components/index.js";
    import Hamburger from "$lib/kit/elements/hamburger/Hamburger.svelte";
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
    } from "$lib/kit/elements/index.js";
    import Input from "$lib/kit/elements/input/Input.svelte";
    import Loader from "$lib/kit/elements/loader/Loader.svelte";
    import Select from "$lib/kit/elements/select/Select.svelte";
    import Swatch from "$lib/kit/elements/swatch/Swatch.svelte";
    import {
        Appearance,
        Style,
        Highlight,
        Shape,
        TextStyle,
        SimpleApperance,
    } from "$lib/types/Appearance.js";
    import { PredefinedColor } from "$lib/types/Color.js";
    import { Position } from "$lib/types/Position.js";
    import { SVGShape } from "$lib/types/Shapes.js";
    import { Size } from "$lib/types/Size.js";
    import { State, BinaryState } from "$lib/types/State.js";

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
                    ["Option One", "one"],
                    ["Option 2", "two"],
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
                    ["Option One", "one"],
                    ["Option 2", "two"],
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
                    ["Option One", "one"],
                    ["Option 2", "two"],
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
</script>

<div class="container">
    <Switch
        size={Size.Large}
        icons={[SVGShape.Sun, SVGShape.Moon]}
        on:toggled={(e) => {
            theme = e.detail === BinaryState.On ? "light" : "dark";
            document.documentElement.dataset.theme = theme;
        }}
    />

    {#each Array.from(new Set(sections.map((s) => s.category))) as category}
        <div class="category-group">
            <Text size={Size.Medium} appearance={Appearance.Muted}>
                {toTitle(category)}
            </Text>
            {#each sections.filter((s) => s.category === category) as { title, component, items, props = { }, key = "appearance", labelMod }}
                <div class="section">
                    <Text appearance={Appearance.Bright} size={Size.Small}
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
                    <Text>Radio Group</Text>
                    <RadioGroup
                        name="theme"
                        options={radioGroupOptions}
                        bind:selected={selectedRadio}
                    />
                </div>
            {/if}
        </div>
    {/each}

    <div class="category-group row">
        <Text size={Size.Medium} appearance={Appearance.Muted}>Tooltips</Text>
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
    </div>

    <div class="category-group row">
        <Text size={Size.Medium} appearance={Appearance.Muted}>MFAInput</Text>
        <div class="section">
            <Text appearance={Appearance.Bright} size={Size.Small}>
                Default
            </Text>
            <div class="grid">
                <MFAInput />
            </div>
        </div>
    </div>

    <div class="category-group row">
        <Text size={Size.Medium} appearance={Appearance.Muted}>Emoji Picker</Text>
        <div class="section">
            <Text appearance={Appearance.Bright} size={Size.Small}>
                Default
            </Text>
            <div class="grid">
                <EmojiPicker />
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .container {
        display: inline-flex;
        flex-direction: column;
        gap: calc(var(--gap) * 2);
        margin: var(--margin) var(--margin-more);
        width: calc(100% - (var(--margin-more) * 2));

        .category-group {
            display: inline-flex;
            flex-direction: column;
            gap: var(--gap);
        }

        .section {
            display: inline-flex;
            gap: var(--gap);
            flex-direction: column;
            padding: var(--padding-more);
            border-radius: var(--border-radius);
            background-color: var(--color-background-secondary);

            .grid {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
                align-items: flex-end;
            }
        }
    }
</style>
