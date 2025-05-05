<script lang="ts">
	import { onMount } from "svelte";
	import Key from "$lib/kit/elements/key/Key.svelte";
    import Button from "$lib/kit/elements/button/Button.svelte";
    import Icon from "$lib/kit/elements/icon/Icon.svelte";
    import { SVGShape } from "$lib/types/Shapes.js";
    import { Appearance } from "$lib/types/Appearance.js";
    import { Size } from "$lib/types/Size.js";

	let isMac = false;

	let shortcut: string[] = [];
	let recording = false;

	const modifierKeys = new Set(["Control", "Meta", "Shift", "Alt"]);
	const displayMap: Record<string, string> = {
		Control: isMac ? "⌃" : "Ctrl",
		Meta: isMac ? "⌘" : "Win",
		Shift: isMac ? "⇧" : "Shift",
		Alt: isMac ? "⌥" : "Alt",
	};

	function normalizeKey(key: string) {
		if (displayMap[key]) return displayMap[key];
		return key.length === 1 ? key.toUpperCase() : key;
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (!recording) return;

		const keys = new Set(shortcut);

		if (modifierKeys.has(e.key)) {
			keys.add(displayMap[e.key] || e.key);
		} else {
			// Remove previous non-modifier keys
			for (const k of keys) {
				if (!Object.values(displayMap).includes(k)) {
					keys.delete(k);
				}
			}
			keys.add(normalizeKey(e.key));
		}

		shortcut = Array.from(keys);
	}

	function handleKeyUp(e: KeyboardEvent) {
		if (!recording) return;
		recording = false
	}

	onMount(() => {
        isMac = typeof navigator !== "undefined" && /Mac/i.test(navigator.platform);

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);
	});

</script>

<div class="key-recording">
    {#if !recording}
        <Button on:pressed={() => {
            shortcut = [];
            recording = true;
        }}
        simple>
            <Icon fill icon={SVGShape.Circle} appearance={Appearance.Error} />
        </Button>
    {:else}
        <Button on:pressed={() => {
            recording = false;
        }}
        simple>
            <Icon fill icon={SVGShape.Square} appearance={Appearance.Error} />
        </Button>
    {/if}
	{#if shortcut.length > 0}
		<div class="combo">
			{#each shortcut as key, i}
				<Key value={key} size={Size.ExtraSmall} />
				{#if i < shortcut.length - 1}
					<Icon icon={SVGShape.Plus} />
				{/if}
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
.key-recording {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	font-family: sans-serif;
	color: var(--text-color);

	.combo {
		display: flex;
		align-items: center;
        justify-content: center;
		gap: 0.5rem;
        height: fit-content;
	}
}
</style>
