<script lang="ts">
	import Key from "$lib/kit/elements/key/Key.svelte";
	import { keyWidths, rows } from "./Keyboard.js";
	import { onMount } from "svelte";
	import { Appearance } from "$lib/types/Appearance.js";
	import { writable } from "svelte/store";

	// Detect platform
	const isMac = typeof navigator !== 'undefined' && /Mac/i.test(navigator.platform);

	// Raw keys that should match key event `.key`
	const keyMatchMap: Record<string, string> = {
		Ctrl: 'Control',
		Control: 'Control',
		Alt: 'Alt',
		Option: 'Alt',
		Shift: 'Shift',
		Win: 'Meta',
		Cmd: 'Meta',
		"⌘": 'Meta',
		"⌥": 'Alt',
		"⌃": 'Control',
		"⇧": 'Shift',
		Meta: 'Meta',
	};

	// Get the actual key label used in the layout
	function normalizeLayoutLabel(key: string): string {
		// You can expand this if you label the keys differently in layout
		if (key === "Cmd" || key === "⌘") return isMac ? "⌘" : "Win";
		if (key === "Ctrl" || key === "⌃") return isMac ? "⌃" : "Ctrl";
		if (key === "Alt" || key === "⌥" || key === "Option") return isMac ? "⌥" : "Alt";
		if (key === "Shift" || key === "⇧") return isMac ? "⇧" : "Shift";
		if (key === "Win") return isMac ? "⌘" : "Win";

		return key.length === 1 ? key.toUpperCase() : key;
	}

	const pressedKeys = writable(new Set<string>());

	onMount(() => {
		const active = new Set<string>();

		function handleKeyDown(e: KeyboardEvent) {
			active.add(e.key);
			pressedKeys.set(new Set(active));
		}

		function handleKeyUp(e: KeyboardEvent) {
			active.delete(e.key);
			pressedKeys.set(new Set(active));
		}

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	});

	function isKeyPressed(label: string, set: Set<string>): boolean {
		const raw = keyMatchMap[label] ?? label;
		return set.has(raw);
	}
</script>

<div class="keyboard">
	{#each rows as row}
		<div class="row">
			{#each row as key}
				<Key
					value={normalizeLayoutLabel(key)}
					appearance={$pressedKeys && isKeyPressed(key, $pressedKeys)
						? Appearance.Primary
						: Appearance.Muted}
					customWidth={keyWidths[key] || ""}
				/>
			{/each}
		</div>
	{/each}
</div>

<style lang="scss">
    @use "./Keyboard.scss" as *;
</style>
