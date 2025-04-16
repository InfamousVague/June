<script lang="ts">
    import { BinaryState } from "$lib/types/index.js";
    import { Size } from "$lib/types/Size.js";
    import { defaultSize } from "./Checkbox.js";

    export let size: Size = defaultSize;
    export let state: BinaryState = BinaryState.Off;

    // Checkbox requires a boolean for `checked`
    $: checked = state === BinaryState.On;
    $: disabled = state === BinaryState.Disabled;

    function handleToggle(event: Event) {
        const target = event.target as HTMLInputElement;
        state = target.checked ? BinaryState.On : BinaryState.Off;
    }
</script>

<label class="checkbox {size}">
	<input
		class="checkbox-input"
		type="checkbox"
		bind:checked={checked}
		{disabled}
		on:change={handleToggle}
	/>
	<span class="checkbox-control"></span>
</label>

<style lang="scss">
    @use "./Checkbox.scss" as *;
</style>
