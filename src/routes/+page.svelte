<script lang="ts">
    import Button from "$lib/kit/elements/button/Button.svelte";
    import Text from "$lib/kit/elements/text/Text.svelte";
    import { Appearance, Style, Highlight } from "$lib/types/Appearance.js";
    import { Size } from "$lib/types/Size.js";
    import { State } from "$lib/types/State.js";

    // Convert enums to arrays of values
    const appearances = Object.values(Appearance);
    const highlights = Object.values(Highlight);
    const styles = Object.values(Style);

    const sizes = Object.values(Size);
    const states = Object.values(State);

    function toTitleCase(str: string) {
        return str.replace(
            /\w\S*/g,
            text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
        );
    }
</script>

<div class="container">
    <Text size={Size.Large}>Buttons</Text>

    <div class="section">
        <Text>Apperance</Text>
    
        <div class="grid">
            {#each appearances as appearance}
                <Button
                    {appearance}
                    text={`${toTitleCase(appearance.replace("_", " "))}`}
                ></Button>
            {/each}
        </div>
    </div>
    <div class="section">
        <Text>Highlight</Text>
    
        <div class="grid">
            {#each highlights as highlight}
                <Button
                    {highlight}
                    text={`${toTitleCase(highlight.replace("_", " "))}`}
                ></Button>
            {/each}
        </div>
    </div>
    <div class="section">
        <Text>Outline</Text>
    
        <div class="grid">
            {#each highlights as highlight}
                <Button
                    appearance={Appearance.Primary}
                    style={Style.Outline}
                    {highlight}
                    text={`${toTitleCase(highlight.replace("_", " "))}`}
                ></Button>
            {/each}
        </div>
    </div>
    <div class="section">
        <Text>Size</Text>
        <div class="grid">
            {#each sizes as size}
                <Button
                    {size}
                    text={`${toTitleCase(size.replace("_", " "))}`}
                ></Button>
            {/each}
        </div>
    </div>
    <div class="section">
        <Text>State</Text>
    
        <div class="grid">
            {#each states as state}
                <Button
                    {state}
                    text={`${toTitleCase(state.replace("_", " "))}`}
                ></Button>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    // Import June variables
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