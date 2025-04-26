<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { SVGShape } from "$lib/types/Shapes.js";
    import { Size } from "$lib/types/Size.js";
    import {
        State,
        Animation,
        Shape,
        Appearance,
        Highlight,
    } from "$lib/types/index.js";
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

<style lang="scss">
    @use "./Input.scss" as *;
</style>
