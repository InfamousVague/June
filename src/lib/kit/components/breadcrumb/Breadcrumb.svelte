<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import Text from "$lib/kit/elements/text/Text.svelte";
    import { Appearance, TextStyle } from "$lib/types/index.js";
    import { toTitleCase } from "$lib/kit/utils/index.js";

    export let route: string = "";

    const dispatch = createEventDispatcher();

    $: currentRoute = route;

    $: segments =
        currentRoute
            ?.replace(/^\/|\/$/g, "")
            .split("/")
            .filter(Boolean) || [];

    function handleClick(index: number) {
        currentRoute = "/" + segments.slice(0, index + 1).join("/");
        dispatch("navigate", { path: currentRoute });
    }
</script>


<nav class="breadcrumb">
    {#each segments as segment, i}
        <span class="crumb">
            <Text
                on:click={() => handleClick(i)}
                appearance={i === segments.length - 1
                    ? Appearance.Bright
                    : Appearance.Inherit}
                textStyle={i === segments.length - 1
                    ? TextStyle.Bold
                    : TextStyle.Standard}
                singleLine={true}
                interactable
            >
                {toTitleCase(decodeURIComponent(segment))}
            </Text>
            {#if i < segments.length - 1}
                <Text appearance={Appearance.Muted} padded>/</Text>
            {/if}
        </span>
    {/each}
</nav>

<style lang="scss">
    @use "./Breadcrumb.scss" as *;
</style>
