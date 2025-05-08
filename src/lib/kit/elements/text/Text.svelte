<script lang="ts">
    import { Appearance, Size, State, TextStyle } from "$lib/types/index.js";
    import { createEventDispatcher } from "svelte";
    import { defaultAppearance, defaultSize, defaultState, defaultTextStyle } from './Text.js';
  
    export let appearance: Appearance = defaultAppearance;
    export let size: Size = defaultSize;
    export let state: State = defaultState;
    export let textStyle: TextStyle = defaultTextStyle;
    export let singleLine: boolean = false;
    export let padded: boolean = false;
    export let interactable: boolean = false;

    const dispatch = createEventDispatcher();

    function clicked(event: Event) {
        if (interactable) dispatch("click", event);
    }
</script>

{#if state === State.Loading}
    <p class="text loading"></p>
{:else}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <p class="
        text 
        {size} 
        {textStyle} 
        {(state === State.Disabled) ? Appearance.Secondary : state} 
        {appearance} 
        {singleLine ? "one_line" : ""} 
        {padded ? "padded" : ""} 
        {interactable ? "interactable" : ""}" on:click={clicked}>
        <slot></slot>
    </p>
{/if}

<style lang="scss">
    @use "./Text.scss" as *;
</style>