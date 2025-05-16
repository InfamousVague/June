<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { SVGShape } from "../../../types/Shapes.js";
    import { Size } from "../../../types/Size.js";
    import {
        State,
        Animation,
        Shape,
        Appearance,
        Highlight,
    } from "../../../types/index.js";
    import { Icon } from "../index.js";
    import {
        defaultAppearance,
        defaultHighlight,
        defaultPlaceholder,
        defaultShape,
        defaultSize,
        defaultState,
        handleInput,
        handleBeforeInput,
        forwardKeyEvent,
    } from "./Input.js";

    export let size: Size = defaultSize;
    export let state: State = defaultState;
    export let shape: Shape = defaultShape;
    export let placeholder: string = defaultPlaceholder;
    export let icon: SVGShape | null = null;
    export let iconRight: SVGShape | null = null;
    export let appearance: Appearance = defaultAppearance;
    export let highlight: Highlight = defaultHighlight;
    export let charLimit: number | null = null;
    export let numeric: boolean = false;
    export let hideCursor: boolean = false;
    export let clearOnFocus: boolean = false;
    export let inputRef: HTMLInputElement | undefined = undefined;
    export let fill: boolean = false;

	export function getInputElement() {
		return inputRef;
	}

    const dispatch = createEventDispatcher();

    function handleFocus(e: FocusEvent) {
        if (clearOnFocus && inputRef) {
            inputRef.value = "";
            dispatch("input", { value: "" });
        }
    }
    
</script>

<div
    class="input-group {size} {shape} {appearance} {highlight} {state} {charLimit === 1 ? 'single-char' : ''} {fill ? "fill" : ""}">
    {#if state === State.Loading}
        <Icon icon={SVGShape.Spinner} fill animation={Animation.Spin} />
    {:else if icon}
        <Icon {icon} {size} />
    {/if}
    <input
        bind:this={inputRef}
        class="input {hideCursor ? 'no-caret' : ''}"
        placeholder={numeric
            ? "0"
            : state === State.Loading
              ? "Loading"
              : placeholder}
        disabled={state === State.Disabled || state === State.Loading}
        type="text"
        inputmode="numeric"
        autocomplete="one-time-code"
        on:input={(e) => handleInput(e, charLimit, numeric, dispatch)}
        on:beforeinput={(e) => handleBeforeInput(e, charLimit, numeric)}
        on:keydown={(e) => forwardKeyEvent(e, dispatch)}
        on:focus={handleFocus}
    />
    {#if iconRight && state !== State.Loading}
        <Icon icon={iconRight} {size} on:press={() => {
            dispatch("rightIconPressed")
        }}/>
    {/if}
</div>

<style>.input-group {
  --computed-element-size: var(--element-size);
  --computed-padding: var(--padding);
  background: var(--color-secondary);
  border: var(--outline-size) solid transparent;
  display: inline-flex;
  align-items: center;
  gap: var(--gap);
  height: var(--computed-element-size);
  min-height: var(--computed-element-size);
  box-sizing: border-box;
  border-radius: var(--border-radius);
  padding: 0 var(--computed-padding);
}
.input-group.fill {
  width: 100%;
}
.input-group.state_disabled, .input-group.state_loading {
  cursor: not-allowed;
}
.input-group.highlight_primary {
  border: var(--outline-size) solid var(--color-primary);
}
.input-group.highlight_none {
  border: var(--outline-size) solid transparent;
}
.input-group.highlight_secondary {
  border: var(--outline-size) solid var(--color-secondary);
}
.input-group.highlight_none {
  border: var(--outline-size) solid transparent;
}
.input-group.highlight_info {
  border: var(--outline-size) solid var(--color-info);
}
.input-group.highlight_none {
  border: var(--outline-size) solid transparent;
}
.input-group.highlight_success {
  border: var(--outline-size) solid var(--color-success);
}
.input-group.highlight_none {
  border: var(--outline-size) solid transparent;
}
.input-group.highlight_warning {
  border: var(--outline-size) solid var(--color-warning);
}
.input-group.highlight_none {
  border: var(--outline-size) solid transparent;
}
.input-group.highlight_error {
  border: var(--outline-size) solid var(--color-error);
}
.input-group.highlight_none {
  border: var(--outline-size) solid transparent;
}
.input-group.simple_appearance_light {
  background-color: var(--color-background-light);
}
.input-group.simple_appearance_light .input {
  color: var(--text-color-dark);
}
.input-group.simple_appearance_light .input::placeholder {
  color: var(--text-color-placeholder-light);
}
.input-group.shape_pill {
  border-radius: var(--border-radius-pill);
}
.input-group.size_extra_small {
  --computed-element-size: calc(var(--element-size) * 0.7);
  --computed-padding: calc(var(--padding) * 0.5);
  border-radius: var(--border-radius-small);
}
.input-group.size_extra_small .input {
  font-size: var(--text-size-extra-small);
}
.input-group.size_small {
  --computed-element-size: calc(var(--element-size) * 0.8);
  --computed-padding: calc(var(--padding) * 0.7);
  border-radius: var(--border-radius-small);
}
.input-group.size_small .input {
  font-size: var(--text-size-small);
}
.input-group.size_medium {
  --computed-element-size: var(--element-size);
  --computed-padding: var(--padding);
}
.input-group.size_large {
  --computed-element-size: calc(var(--element-size) * 1.2);
  --computed-padding: calc(var(--padding) * 1.2);
}
.input-group.size_large .input {
  font-size: var(--text-size-large);
}
.input-group.size_extra_large {
  --computed-element-size: calc(var(--element-size) * 1.4);
  --computed-padding: calc(var(--padding) * 1.4);
}
.input-group.size_extra_large .input {
  font-size: var(--text-size-extra-large);
}
.input-group:focus-within {
  border-color: var(--color-info);
}
.input-group .input {
  background: transparent;
  border: none;
  color: var(--text-color-light);
  flex: 1;
  font-size: var(--text-size-medium);
  height: 100%;
  width: 100%;
  padding: 0 calc(var(--computed-padding) * 0.5);
  box-sizing: border-box;
  line-height: 1;
  display: flex;
  align-items: center;
}
.input-group .input::placeholder {
  color: var(--text-color-placeholder);
}
.input-group .input:focus {
  outline: none;
}
.input-group .input:disabled {
  opacity: var(--disabled-opacity-modifier);
  cursor: not-allowed;
}
.input-group .input.no-caret {
  caret-color: transparent;
}
.input-group.single-char {
  padding: 0;
}
.input-group.single-char .input {
  padding: var(--padding) var(--padding-more);
  width: 1rem;
  text-align: center;
  height: auto;
}</style>
