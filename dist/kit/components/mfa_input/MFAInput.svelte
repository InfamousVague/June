<script lang="ts">
    import Input from "../../elements/input/Input.svelte";
    import {
        handleMFAKey,
        handleMFAWrappedInput,
        defaultLength
    } from "./MFAInput.js";
    import { Highlight } from "../../../types/Appearance.js";
    import { createEventDispatcher } from "svelte";

    export let length: number = defaultLength;

    const dispatch = createEventDispatcher();
    let inputRefs: (HTMLInputElement | undefined)[] = [];
    let values: string[] = Array(length).fill("");
    let highlights: Highlight[] = Array(length).fill(undefined);

    const updateValues = (v: string[]) => (values = v);
    const updateHighlights = (h: Highlight[]) => (highlights = h);

    const onKey = (e: CustomEvent<KeyboardEvent>, index: number) =>
        handleMFAKey(e.detail, index, inputRefs);

    const emitComplete = (code: string) => {
        dispatch("complete", code);
    };
</script>

<div class="mfa_group">
    {#each Array(length) as _, i}
        <Input
            charLimit={1}
            numeric
            bind:inputRef={inputRefs[i]}
            on:input={(e) =>
                handleMFAWrappedInput(
                    e,
                    i,
                    values,
                    updateValues,
                    highlights,
                    updateHighlights,
                    inputRefs,
                    length,
                    emitComplete // ← pass dispatch handler
                )
            }
            on:keyevent={(e) => onKey(e, i)}
            hideCursor
            clearOnFocus
            highlight={highlights[i]}
        />
    {/each}
</div>

<style>.mfa_group {
  display: inline-flex;
  gap: var(--gap);
}</style>