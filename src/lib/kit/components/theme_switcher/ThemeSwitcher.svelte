<script lang="ts">
	import Select from "$lib/kit/elements/select/Select.svelte";
	import type { SelectOption } from "$lib/types/index.js";
	import { onMount } from "svelte";

	const THEME_STORAGE_KEY = "june-ui-theme";

	const themes: SelectOption[] = [
		{ key: "dark", value: "Dark" },
		{ key: "light", value: "Light" },
		{ key: "coexist", value: "Coex.ist" },
		{ key: "olivia", value: "Olivia" },
		{ key: "dracula", value: "Dracula" },
        { key: "tokyo", value: "Tokyo" },
        { key: "synthwave84", value: "Synthwave '84" },
        { key: "lumenvoid", value: "Lumen Void" },
	];

	let selectedThemeKey: string = themes[0].key;

	function applyTheme(themeKey: string) {
		document.documentElement.dataset.theme = themeKey;
		localStorage.setItem(THEME_STORAGE_KEY, themeKey);
		const found = themes.find((t) => t.key === themeKey);
		if (found) {
			selectedThemeKey = found.key;
		}
	}

	onMount(() => {
		const saved = localStorage.getItem(THEME_STORAGE_KEY);
		if (saved && themes.some(t => t.key === saved)) {
			applyTheme(saved);
		} else {
			applyTheme(selectedThemeKey);
		}
	});
</script>

<div class="theme_switcher">
	<Select
		options={themes}
		bind:value={selectedThemeKey}
		on:change={(e) => applyTheme(e.detail)}
	/>
</div>

<style lang="scss">
.theme_switcher {
	display: inline-block;
}
</style>
