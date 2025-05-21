<script lang="ts">
    import { Appearance, Size, State, TextStyle } from "../../../types/index.js";
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

<style>@keyframes loading-sweep {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
.text {
  margin: 0;
  padding: 0;
  line-height: 100%;
}
.text.appearance_primary {
  color: var(--text-color);
}
.text.appearance_secondary {
  color: var(--text-color-muted);
}
.text.appearance_info {
  color: var(--color-info);
}
.text.appearance_success {
  color: var(--color-success);
}
.text.appearance_warning {
  color: var(--color-warning);
}
.text.appearance_error {
  color: var(--color-error);
}
.text.appearance_bright {
  color: var(--text-color-light);
}
.text.appearance_muted {
  color: var(--text-color-muted);
}
.text.appearance_inherit {
  color: inherit;
}
.text.size_extra_small {
  font-size: var(--text-size-extra-small);
  height: var(--text-size-extra-small);
}
.text.size_small {
  font-size: var(--text-size-small);
  height: var(--text-size-small);
}
.text.size_medium {
  font-size: var(--text-size-medium);
  height: var(--text-size-medium);
}
.text.size_large {
  font-size: var(--text-size-large);
  height: var(--text-size-large);
}
.text.size_extra_large {
  font-size: var(--text-size-extra-large);
  height: var(--text-size-extra-large);
}
.text.loading {
  display: inline-block;
  min-width: 150px;
  max-width: 100%;
  min-height: var(--text-size-medium);
  border-radius: var(--border-radius-small);
  background: linear-gradient(90deg, var(--color-secondary) 0%, var(--text-color) 40%, var(--color-secondary) 41%, var(--color-secondary) 100%);
  background-size: 200% 100%;
  animation: loading-sweep var(--animation-duration) infinite ease;
}
.text.text_style_bold {
  font-weight: bold;
}
.text.text_style_italic {
  font-style: italic;
}
.text.text_style_underline {
  text-decoration: underline;
}
.text.text_style_strike {
  text-decoration: line-through;
}
.text.padded {
  padding: 0 var(--padding);
}
.text.interactable {
  cursor: pointer;
}
.text.one_line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}</style>