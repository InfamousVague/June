<script lang="ts">
    import Button from "$lib/kit/elements/button/Button.svelte";
    import Text from "$lib/kit/elements/text/Text.svelte";
    import { Appearance } from "$lib/types/Appearance.js";
    import { Size } from "$lib/types/Size.js";
    import { State } from "$lib/types/State.js";

    // Convert enums to arrays of values
    const appearances = Object.values(Appearance);
    const sizes = Object.values(Size);
    const states = Object.values(State);

    function toTitleCase(str: string) {
        return str.replace(
            /\w\S*/g,
            text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
        );
    }
</script>

<div class="grid">
    {#each appearances as appearance}
        <Button
            {appearance}
            text={`${toTitleCase(appearance.replace("_", " "))}`}
        ></Button>
    {/each}
</div>
<div class="grid">
    {#each sizes as size}
        <Button
            {size}
            text={`${toTitleCase(size.replace("_", " "))}`}
        ></Button>
    {/each}
</div>
<div class="grid">
    {#each states as state}
        <Button
            {state}
            text={`${toTitleCase(state.replace("_", " "))}`}
        ></Button>
    {/each}
</div>


<div class="grid">
    {#each appearances as appearance}
        <Text {appearance}>{`${toTitleCase(appearance.replace("_", " "))}`}</Text>
    {/each}
</div>

<div class="grid">
    {#each sizes as size}
        <Text {size}>{`${toTitleCase(size.replace("_", " "))}`}</Text>
    {/each}
</div>
<div class="grid">
    {#each states as state}
        <Text {state}>{`${toTitleCase(state.replace("_", " "))}`}</Text>
    {/each}
</div>

<style lang="scss">
    // Import June variables
    @use "$lib/June.scss" as *;

    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
</style>