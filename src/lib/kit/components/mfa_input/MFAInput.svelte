<script lang="ts">
    import Input from "$lib/kit/elements/input/Input.svelte";
    import { handleMFAInput, handleMFAKey, defaultLength } from "./MFAInput.js";

    export let length: number = defaultLength;
    let inputRefs: (HTMLInputElement | undefined)[] = [];

    const onInput = (e: CustomEvent<string>, index: number) =>
        handleMFAInput(e, index, inputRefs, length);

    const onKey = (e: CustomEvent<KeyboardEvent>, index: number) =>
        handleMFAKey(e.detail, index, inputRefs);
</script>

<div class="mfa_group">
    {#each Array(length) as _, i}
        <Input
            charLimit={1}
            numeric
            bind:inputRef={inputRefs[i]}
            on:input={(e) => onInput(e, i)}
            on:keyevent={(e) => onKey(e, i)}
            hideCursor
            clearOnFocus
        />
    {/each}
</div>

<style lang="scss">
    @use "./MFAInput.scss" as *;
</style>
