<script lang="ts">
	import {
		Button,
		Range,
		Input,
		Text,
		Icon,
	} from "$lib/kit/elements/index.js";
	import { SVGShape, Appearance, Size } from "$lib/types/index.js";
	import {
		emojiData,
		defaultEmoji,
		filterEmojis,
		clickOutside,
		updateEmojiUsage,
		loadFrequentlyUsed,
		tabIcons,
	} from "./EmojiPicker.js";
	import { onMount, tick } from "svelte";

	export let open: boolean = false;
	function toggle() {
		open = !open;
	}

	let emojiScale = 2.2;
	let searchTerm = "";
	let hoveredEmoji = defaultEmoji;
	let showSkinTones = false;
	let selectedSkinToneIndex = 0;
	let skinTonePool = [
		"wave", "hand", "spock-hand", "call_me_hand",
		"facepunch", "index_pointing_at_the_viewer",
		"handshake", "i_love_you_hand_sign"
	];
    let iconPool = ["😂", "😍", "😜", "🙃", "😤", "🫠", "🙂", "😳", "🥺"];
    let icon = "🙂";
	let skintoneEmoji = emojiData.emojis["call_me_hand"];
	let frequentlyUsedIds: string[] = [];
	let selectedCategory: string | null = "frequently-used";
	let listWrapRef: HTMLDivElement;
	let disableScrollUpdate = false;

    let searchInputRef: Input | null = null;

	onMount(() => {
		frequentlyUsedIds = loadFrequentlyUsed();
		randomizeSkintoneEmoji();
	});

	$: if (open) {
		randomizeSkintoneEmoji();
        randomizeIcon();
	}

	function randomizeSkintoneEmoji() {
		const random = skinTonePool[Math.floor(Math.random() * skinTonePool.length)];
		const chosen = emojiData.emojis[random];
		if (chosen && chosen.skins?.length > 1) {
			skintoneEmoji = chosen;
		}
	}

    function randomizeIcon() {
		const random = iconPool[Math.floor(Math.random() * iconPool.length)];
        icon = random;
	}

	function handleHover(id: string) {
		hoveredEmoji = emojiData.emojis[id];
	}

	function handleEmojiClick(id: string) {
		frequentlyUsedIds = updateEmojiUsage(id, frequentlyUsedIds);
	}

	async function scrollToCategory(id: string) {
		selectedCategory = id;
		disableScrollUpdate = true;
		await tick();

		const el = document.getElementById(`category-${id}`);
		el?.scrollIntoView({ behavior: "smooth", block: "start" });

		setTimeout(() => {
			disableScrollUpdate = false;
		}, 300);
	}

	function handleScroll() {
		if (disableScrollUpdate || !listWrapRef) return;

		const categoryElements = Array.from(
			listWrapRef.querySelectorAll(".category")
		) as HTMLElement[];

		let closestCategory: string | null = null;
		let minDistance = Infinity;

		for (const el of categoryElements) {
			const rect = el.getBoundingClientRect();
			const containerRect = listWrapRef.getBoundingClientRect();
			const distance = Math.abs(rect.top - containerRect.top);

			if (distance < minDistance) {
				minDistance = distance;
				closestCategory = el.id.replace("category-", "");
			}
		}

		if (closestCategory && closestCategory !== selectedCategory) {
			selectedCategory = closestCategory;
		}
	}

    function clearSearch() {
		searchTerm = "";
        if (searchInputRef) {
            const realInput = searchInputRef.getInputElement();
            if (realInput) realInput.value = "";   
        }
	}
</script>

<div class="emoji_picker" style={`--emoji-size: ${emojiScale}rem`}>
	<div class="trigger-wrap">
		<div class="picker" class:open use:clickOutside={() => (open = false)}>
			<div class="controls">
				<div class="header">
					<Input
						size={Size.Medium}
						icon={SVGShape.Search}
						on:input={(v) => (searchTerm = v.detail)}
						placeholder="Search emojis..."
                        iconRight={SVGShape.Backspace}
                        bind:this={searchInputRef}
                        on:rightIconPressed={clearSearch}
					/>
					<Button
						simple
						on:pressed={() => (showSkinTones = !showSkinTones)}
						appearance={Appearance.Transparent}
					>
						<span class="skin_tone_selector">
							{skintoneEmoji.skins[selectedSkinToneIndex].native}
						</span>
					</Button>
				</div>

				{#if showSkinTones}
					<div
						class="skin_tone_selector_options open"
						use:clickOutside={() => (showSkinTones = false)}
					>
						<div class="skin_tones">
							{#each skintoneEmoji.skins as skin, index}
								<button
									type="button"
									class="emoji option"
									aria-label={`Skin tone ${index + 1}`}
									on:click={() => {
										selectedSkinToneIndex = index;
										showSkinTones = false;
									}}
								>
									{skin.native}
								</button>
							{/each}
						</div>
					</div>
				{/if}
			</div>

			<div class="tab-row">
				{#if frequentlyUsedIds.length > 0}
					<button on:click={() => scrollToCategory("frequently-used")}>
						<Icon
							icon={SVGShape.Heart}
							appearance={selectedCategory === "frequently-used"
								? Appearance.Bright
								: Appearance.Muted}
							size={Size.Large}
						/>
					</button>
				{/if}
				{#each emojiData.categories as category}
					<button on:click={() => scrollToCategory(category.id)}>
						<Icon
							icon={tabIcons[category.id as keyof typeof tabIcons]}
							appearance={selectedCategory === category.id
								? Appearance.Bright
								: Appearance.Muted}
							size={Size.Large}
						/>
					</button>
				{/each}
			</div>

			<div class="list-wrap" bind:this={listWrapRef} on:scroll={handleScroll}>
				<div class="list">
                    {#if frequentlyUsedIds.length > 0 && searchTerm.trim() === ""}
						<div class="category frequently-used" id="category-frequently-used">
							<Text appearance={Appearance.Muted} size={Size.Small}>FREQUENTLY USED</Text>
							<div class="emojis">
								{#each frequentlyUsedIds as emojiId}
									<button
										type="button"
										class="emoji"
										aria-label={`Use emoji ${emojiData.emojis[emojiId].name}`}
										on:click={() => handleEmojiClick(emojiId)}
										on:mouseenter={() => handleHover(emojiId)}
										on:mouseleave={() => (hoveredEmoji = defaultEmoji)}
									>
										{emojiData.emojis[emojiId].skins[selectedSkinToneIndex]?.native ||
											emojiData.emojis[emojiId].skins[0].native}
									</button>
								{/each}
							</div>
						</div>
					{/if}

					{#each emojiData.categories as category (category.id)}
						{#if filterEmojis(searchTerm, category).length > 0}
							<div class="category" id={`category-${category.id}`}>
								<Text appearance={Appearance.Muted} size={Size.Small}>
									{category.id.toUpperCase()}
								</Text>
								<div class="emojis">
									{#each filterEmojis(searchTerm, category) as emojiId}
										<button
											type="button"
											class="emoji"
											aria-label={`Use emoji ${emojiData.emojis[emojiId].name}`}
											on:click={() => handleEmojiClick(emojiId)}
											on:mouseenter={() => handleHover(emojiId)}
											on:mouseleave={() => (hoveredEmoji = defaultEmoji)}
										>
											{emojiData.emojis[emojiId].skins[selectedSkinToneIndex]?.native ||
												emojiData.emojis[emojiId].skins[0].native}
										</button>
									{/each}
								</div>
							</div>
						{/if}
					{/each}
				</div>
			</div>

			<div class="controls">
				{#if hoveredEmoji}
					<div class="hover-info">
						<span class="emoji-preview">{hoveredEmoji.skins[0].native}</span>
						<div class="details">
							<Text size={Size.Medium} appearance={Appearance.Inherit}>
								{hoveredEmoji.name}
							</Text>
							<Text size={Size.Medium} appearance={Appearance.Muted}>
								:{hoveredEmoji.id}:
							</Text>
						</div>
					</div>
				{/if}
				<div class="scale">
					<Text appearance={Appearance.Muted} size={Size.Small}>
						Emoji Scale ({emojiScale}x)
					</Text>
					<Range
						min={1}
						max={4}
						step={0.1}
						bind:value={emojiScale}
						size={Size.ExtraSmall}
                        appearance={Appearance.Muted}
					/>
				</div>
			</div>
		</div>

		<Button
            simple
			on:pressed={toggle}
			size={Size.Medium}
			appearance={Appearance.Secondary}
		>
            {icon}
        </Button>
	</div>
</div>

<style lang="scss">
	@use "./EmojiPicker.scss" as *;
</style>
