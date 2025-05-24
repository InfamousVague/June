<script lang="ts">
    import { Appearance, Size, State, Highlight, Style, Shape, SVGShape, Animation } from "../../../types/index.js";
    import { createEventDispatcher } from "svelte";
    import Icon from "../icon/Icon.svelte";
    import Text from "../text/Text.svelte";
    import {
        defaultAppearance,
        defaultHighlight,
        defaultSize,
        defaultState,
        defaultStyle,
        defaultShape,
        defaultText,
    } from './Button.js';

    export let appearance: Appearance = defaultAppearance;
    export let highlight: Highlight = defaultHighlight;
    export let style: Style = defaultStyle;
    export let size: Size = defaultSize;
    export let shape: Shape = defaultShape;
    export let state: State = defaultState;
    export let text: string = defaultText;
    export let icon: SVGShape | null = null;
    export let simple: boolean = false;
    export let fill: boolean = false;
    
    let iconOnly = icon && !text || simple;

    const dispatch = createEventDispatcher();

    function pressed(event: Event) {
		dispatch("pressed", event);
	}
</script>

<button
    class="button {size} {appearance} {state} {highlight} {style} {shape} {iconOnly ? "icon_only" : ""} {fill ? "fill" : ""}"
    disabled={state === State.Disabled || state === State.Loading}
    on:click={pressed}>

    {#if state === State.Loading}
        <Icon icon={SVGShape.Circle} fill animation={Animation.Pulse}/>
    {:else if icon}
        <Icon {icon} {size} />
    {/if}
    <slot></slot>
    {#if text.length}
        <Text appearance={Appearance.Inherit} {size}>{text}</Text>
    {/if}

</button>

<style>.button {
  --computed-element-size: var(--element-size);
  --computed-padding: var(--padding);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap-less);
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  background-color: transparent;
  color: var(--text-color-light);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background-color var(--animation-duration-fast) ease, color var(--animation-duration-fast) ease, border-color var(--animation-duration-fast) ease;
  height: var(--computed-element-size);
  min-width: var(--computed-element-size);
  padding: var(--computed-padding) calc(var(--computed-padding) * 2);
  border: var(--outline-size) solid var(--text-color-light);
  border: var(--outline-size) solid var(--text-color-light);
  border: var(--outline-size) solid var(--text-color-light);
  border: var(--outline-size) solid var(--text-color-light);
  border: var(--outline-size) solid var(--text-color-light);
  border: var(--outline-size) solid var(--text-color-light);
}
.button.highlight_primary {
  border: var(--outline-size) solid var(--color-primary);
}
.button.highlight_none {
  border: var(--outline-size) solid transparent;
}
.button.highlight_secondary {
  border: var(--outline-size) solid var(--color-secondary);
}
.button.highlight_none {
  border: var(--outline-size) solid transparent;
}
.button.highlight_info {
  border: var(--outline-size) solid var(--color-info);
}
.button.highlight_none {
  border: var(--outline-size) solid transparent;
}
.button.highlight_success {
  border: var(--outline-size) solid var(--color-success);
}
.button.highlight_none {
  border: var(--outline-size) solid transparent;
}
.button.highlight_warning {
  border: var(--outline-size) solid var(--color-warning);
}
.button.highlight_none {
  border: var(--outline-size) solid transparent;
}
.button.highlight_error {
  border: var(--outline-size) solid var(--color-error);
}
.button.highlight_none {
  border: var(--outline-size) solid transparent;
}
.button.appearance_primary {
  background-color: var(--color-primary);
  color: var(--text-color-light);
}
.button.appearance_primary:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-primary) 100%, var(--hover-modifier) 20%);
}
.button.appearance_secondary {
  background-color: var(--color-secondary);
  color: var(--text-color-light);
}
.button.appearance_secondary:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-secondary) 100%, var(--hover-modifier) 20%);
}
.button.appearance_info {
  background-color: var(--color-info);
  color: var(--text-color-dark);
}
.button.appearance_info:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-info) 100%, var(--hover-modifier) 20%);
}
.button.appearance_transparent {
  background-color: transparent;
  color: var(--text-color-dark);
}
.button.appearance_transparent:hover:not(:disabled) {
  background-color: var(--color-secondary-opaque);
}
.button.appearance_success {
  background-color: var(--color-success);
  color: var(--text-color-dark);
}
.button.appearance_success:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-success) 100%, var(--hover-modifier) 20%);
}
.button.appearance_warning {
  background-color: var(--color-warning);
  color: var(--text-color-dark);
}
.button.appearance_warning:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-warning) 100%, var(--hover-modifier) 20%);
}
.button.appearance_bright {
  background-color: var(--text-color-light);
  color: var(--text-color-dark);
}
.button.appearance_bright:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--text-color-light) 100%, var(--hover-modifier) 20%);
}
.button.appearance_muted {
  background-color: var(--text-color-muted);
  color: var(--text-color-dark);
}
.button.appearance_muted:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--text-color-muted) 100%, var(--hover-modifier) 20%);
}
.button.appearance_error {
  background-color: var(--color-error);
  color: var(--text-color-dark);
}
.button.appearance_error:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-error) 100%, var(--hover-modifier) 20%);
}
.button.style_outline {
  background-color: transparent;
}
.button.style_outline:hover:not(:disabled) {
  background-color: var(--color-secondary);
}
.button.style_outline.highlight_primary {
  color: var(--text-color-light);
}
.button.style_outline.highlight_primary:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-primary) 100%, var(--hover-modifier) 20%);
  border-color: color-mix(in srgb, var(--color-primary) 100%, var(--hover-modifier) 20%);
  color: var(--text-color-light);
}
.button.style_outline.highlight_secondary {
  color: var(--text-color-light);
}
.button.style_outline.highlight_secondary:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-secondary) 100%, var(--hover-modifier) 20%);
  border-color: color-mix(in srgb, var(--color-secondary) 100%, var(--hover-modifier) 20%);
  color: var(--text-color-light);
}
.button.style_outline.highlight_info {
  color: var(--color-info);
}
.button.style_outline.highlight_info:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-info) 100%, var(--hover-modifier) 20%);
  border-color: color-mix(in srgb, var(--color-info) 100%, var(--hover-modifier) 20%);
  color: var(--text-color-dark);
}
.button.style_outline.highlight_success {
  color: var(--color-success);
}
.button.style_outline.highlight_success:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-success) 100%, var(--hover-modifier) 20%);
  border-color: color-mix(in srgb, var(--color-success) 100%, var(--hover-modifier) 20%);
  color: var(--text-color-dark);
}
.button.style_outline.highlight_warning {
  color: var(--color-warning);
}
.button.style_outline.highlight_warning:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-warning) 100%, var(--hover-modifier) 20%);
  border-color: color-mix(in srgb, var(--color-warning) 100%, var(--hover-modifier) 20%);
  color: var(--text-color-dark);
}
.button.style_outline.highlight_error {
  color: var(--color-error);
}
.button.style_outline.highlight_error:hover:not(:disabled) {
  background-color: color-mix(in srgb, var(--color-error) 100%, var(--hover-modifier) 20%);
  border-color: color-mix(in srgb, var(--color-error) 100%, var(--hover-modifier) 20%);
  color: var(--text-color-dark);
}
.button.size_extra_small {
  --computed-element-size: calc(var(--element-size) * 0.7);
  --computed-padding: calc(var(--padding) * 0.5);
  border-radius: var(--border-radius-small);
}
.button.size_small {
  --computed-element-size: calc(var(--element-size) * 0.8);
  --computed-padding: calc(var(--padding) * 0.7);
  border-radius: var(--border-radius-small);
}
.button.size_medium {
  --computed-element-size: var(--element-size);
  --computed-padding: var(--padding);
}
.button.size_large {
  --computed-element-size: calc(var(--element-size) * 1.2);
  --computed-padding: calc(var(--padding) * 1.2);
}
.button.size_extra_large {
  --computed-element-size: calc(var(--element-size) * 1.4);
  --computed-padding: calc(var(--padding) * 1.4);
}
.button.shape_pill {
  border-radius: var(--border-radius-pill);
}
.button:disabled {
  opacity: var(--disabled-opacity-modifier);
  cursor: not-allowed;
}
.button.icon_only {
  width: var(--computed-element-size);
  height: var(--computed-element-size);
  min-width: var(--computed-element-size);
  min-height: var(--computed-element-size);
  padding: 0;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
}
.button.fill {
  width: 100%;
  flex: 1;
  justify-content: flex-start;
}</style>