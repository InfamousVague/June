<script lang="ts">
    import Hamburger from "$lib/kit/elements/hamburger/Hamburger.svelte";
import {
        Icon,
        Radio,
        Switch,
        Text,
        Checkbox,
        Button,
        RadioGroup,
    } from "$lib/kit/elements/index.js";
    import Input from "$lib/kit/elements/input/Input.svelte";
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
            title: "Text Size",
            component: Text,
            items: sizes,
            key: "size",
            labelMod: (label: string) => `Text ${toTitle(label)}`,
        },
        {
            category: "text",
            title: "Text Appearance",
            component: Text,
            items: appearances,
            key: "appearance",
        },
        {
            category: "text",
            title: "Text Style",
            component: Text,
            items: textStyles,
            key: "textStyle",
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
            key: "color" 
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
            props: { icon: SVGShape.Heart },
        },
        {
            category: "input",
            title: "Highlights",
            component: Input,
            items: highlights,
            key: "highlight",
        },
        {
            category: "input",
            title: "Appearances",
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
            title: "Shapes",
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
            title: "Icons",
            component: Button,
            items: states,
            props: { icon: SVGShape.Heart },
            key: "state",
        },
    ];
</script>

<div class="container">
    {#each Array.from(new Set(sections.map((s) => s.category))) as category}
        <div class="category-group">
            <Text size={Size.Large}>{toTitle(category)}</Text>
            {#each sections.filter((s) => s.category === category) as { title, component, items, props = { }, key = "appearance", labelMod }}
                <div class="section">
                    <Text>{title}</Text>
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
</div>

<style lang="scss">
    @use "$lib/June.scss" as *;

    .container {
        display: inline-flex;
        flex-direction: column;
        gap: calc(var(--gap) * 2);
        margin: var(--margin) var(--margin-more);

        .category-group {
            display: inline-flex;
            flex-direction: column;
            gap: var(--gap);
        }

        .section {
            display: inline-flex;
            gap: var(--gap);
            flex-direction: column;
            border: 1px solid var(--color-border);
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
