<script lang="ts">
	import Button from "$lib/kit/elements/button/Button.svelte";
	import Text from "$lib/kit/elements/text/Text.svelte";
	import { Appearance, Style, Highlight, Shape } from "$lib/types/Appearance.js";
	import { Size } from "$lib/types/Size.js";
	import { State } from "$lib/types/State.js";

	const appearances = Object.values(Appearance);
	const highlights = Object.values(Highlight);
	const sizes = Object.values(Size);
	const states = Object.values(State);
    const toTitle = (str: string) =>
        str
            .replace(/_/g, " ")
            .replace(/\w\S*/g, t => t[0].toUpperCase() + t.slice(1).toLowerCase());

	const sections = [
		{ title: "Appearance", items: appearances, props: {} },
		{ title: "Shape Pill", items: appearances, props: { shape: Shape.Pill } },
		{ title: "Highlight", items: highlights, props: {}, key: "highlight" },
		{ title: "Highlight Pill", items: highlights, props: { shape: Shape.Pill }, key: "highlight" },
        {
			title: "Outline",
			items: highlights,
			props: { appearance: Appearance.Primary, style: Style.Outline },
			key: "highlight",
			labelMod: (label: string) => label.replace("Highlight", "Outline")
		},
		{
			title: "Outline Pill",
			items: highlights,
			props: { appearance: Appearance.Primary, style: Style.Outline, shape: Shape.Pill },
			key: "highlight",
			labelMod: (label: string) => label.replace("Highlight", "Outline")
		},
		{ title: "Size", items: sizes, props: {}, key: "size" },
		{ title: "Size Pill", items: sizes, props: { shape: Shape.Pill }, key: "size" },
		{ title: "State", items: states, props: {}, key: "state" },
		{ title: "State Pill", items: states, props: { shape: Shape.Pill }, key: "state" }
	];
</script>

<div class="container">
	<Text size={Size.Large}>Buttons</Text>

	{#each sections as { title, items, props, key = "appearance", labelMod }}
		<div class="section">
			<Text>{title}</Text>
			<div class="grid">
				{#each items as item}
					<Button
						{...props}
						{...{ [key]: item }}
						text={labelMod ? labelMod(toTitle(item)) : toTitle(item)}
					/>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	@use "$lib/June.scss" as *;

	.container {
		display: inline-flex;
		flex-direction: column;
		gap: var(--gap);

		.section {
			display: inline-flex;
			gap: var(--gap);
			flex-direction: column;
			border: 1px solid var(--text-color-muted);
			padding: var(--padding-more);
			border-radius: var(--border-radius);

			.grid {
				display: flex;
				flex-wrap: wrap;
				gap: 1rem;
			}
		}
	}
</style>
