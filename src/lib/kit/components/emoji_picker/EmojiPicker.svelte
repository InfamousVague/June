<script lang="ts">
    import { Button, Range, Input, Text} from "$lib/kit/elements/index.js";
    import { SVGShape, Appearance, Size } from "$lib/types/index.js";
    import rawEmojiData from "@emoji-mart/data";
    import type { EmojiCategory, Emoji } from "./EmojiPicker.js";
    import Tooltip from "../tooltip/Tooltip.svelte";

    export let open: boolean = false;

    function toggle() {
        open = !open;
    }

    const emojiData = rawEmojiData as {
        categories: EmojiCategory[];
        emojis: Record<string, Emoji>;
    };

    let emojiScale = 2.2;
    let searchTerm = "";

    function filterEmojis(category: EmojiCategory) {
        if (!searchTerm) return category.emojis;

        const term = searchTerm.toLowerCase();
        return category.emojis.filter(id => {
            const emoji = emojiData.emojis[id];
            return emoji.name.toLowerCase().includes(term);
        });
    }
</script>


<div class="emoji_picker" style={`--emoji-size: ${emojiScale}rem`}>
    <div class="trigger-wrap">
        <div class="picker" class:open>
            <div class="controls">
                <Input
                    size={Size.Medium}
                    icon={SVGShape.Search}
                    on:input={v => {
                        searchTerm = v.detail;
                    }}
                    placeholder="Search emojis..."
                />
            </div>
            
            <div class="list-wrap">
                <div class="list">
                    {#each emojiData.categories as category (category.id)}
                        {#if filterEmojis(category).length > 0}
                            <div class="category">
                                <Text appearance={Appearance.Muted}>{category.id}</Text>
                                <div class="emojis">
                                    {#each filterEmojis(category) as emojiId}
                                    <Tooltip content={`:${emojiId}:`}>
                                        <span class="emoji">
                                            {emojiData.emojis[emojiId].skins[0].native}
                                        </span>
                                    </Tooltip>
                                    {/each}
                                </div>
                            </div>
                        {/if}
                    {/each}
                </div>
            </div>

            <div class="controls">
                <div class="scale">
                    <Text appearance={Appearance.Muted} size={Size.Small}
                        >Emoji Scale ({emojiScale}x)</Text
                    >

                    <Range
                        min={1}
                        max={4}
                        step={0.1}
                        bind:value={emojiScale}
                        size={Size.ExtraSmall}
                    />
                </div>
            </div>
        </div>

        <Button
            on:pressed={toggle}
            appearance={open ? Appearance.Primary : Appearance.Secondary}
            icon={SVGShape.Smile}
        />
    </div>
</div>

<style lang="scss">
    @use "./EmojiPicker.scss" as *;
</style>
