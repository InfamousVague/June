<script lang="ts">
	import Select from "$lib/kit/elements/select/Select.svelte";
	import { createEventDispatcher } from "svelte";
	import type { SelectOption } from "$lib/types/index.js";

	// [key, value] objects - Full list
	const supportedLanguagesOptions: SelectOption[] = [
		{ key: "en", value: "🇺🇸 English" },
		{ key: "es", value: "🇪🇸 Spanish" },
		{ key: "fr", value: "🇫🇷 French" },
		{ key: "de", value: "🇩🇪 German" },
		{ key: "ja", value: "🇯🇵 Japanese" },
		{ key: "zh", value: "🇨🇳 Chinese" },
		{ key: "ru", value: "🇷🇺 Russian" },
		{ key: "ar", value: "🇸🇦 Arabic" },
		{ key: "pt", value: "🇵🇹 Portuguese" },
		{ key: "it", value: "🇮🇹 Italian" },
		{ key: "ko", value: "🇰🇷 Korean" }
	];

	export let selectedLanguage: string = supportedLanguagesOptions[0].key; // Default: "en"
	const dispatch = createEventDispatcher();

	function handleChange(event: CustomEvent<string>) {
		selectedLanguage = event.detail.trim(); // event.detail is the selected `key`
		dispatch("languageSelected", { language: selectedLanguage }); // send language code like "en"
	}
</script>

<Select
	options={supportedLanguagesOptions}
	on:change={handleChange}
/>
