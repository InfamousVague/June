<script lang="ts">
    import Input from "$lib/kit/elements/input/Input.svelte";
    import {
        handleMFAKey,
        handleMFAWrappedInput,
        defaultLength,
    } from "./MFAInput.js";
    import { Highlight } from "$lib/types/Appearance.js";

    export let length: number = defaultLength;

    let inputRefs: (HTMLInputElement | undefined)[] = [];
    let values: string[] = Array(length).fill("");
    let highlights: (Highlight | undefined)[] = Array(length).fill(undefined);

    const updateValues = (v: string[]) => (values = v);
    const updateHighlights = (h: (Highlight | undefined)[]) => (highlights = h);

    const onKey = (e: CustomEvent<KeyboardEvent>, index: number) =>
        handleMFAKey(e.detail, index, inputRefs);
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
                    length
                )
            }
            on:keyevent={(e) => onKey(e, i)}
            hideCursor
            clearOnFocus
            highlight={highlights[i]}
        />
    {/each}
</div>
