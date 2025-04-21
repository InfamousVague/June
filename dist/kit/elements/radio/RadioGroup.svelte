<script lang="ts">
    import Radio from "./Radio.svelte";
    import { Text } from "../index.js";
    import { BinaryState, State } from "../../../types/index.js";

    export let name: string = "radio-group";
    export let options: {
        label: string;
        value: string;
        state?: BinaryState;
    }[] = [];
    export let selected: string = "";

    // Emit selected value on change
    function handleChange(event: CustomEvent<string>) {
        selected = event.detail;
    }

    export function getSelectedOption() {
        return options.find((option) => option.value === selected);
    }
</script>

<div class="radio-group">
    {#each options as option}
        <div class="option">
            <Radio
                {name}
                value={option.value}
                groupValue={selected}
                state={option.state ?? BinaryState.Off}
                on:change={handleChange}
            />
            <Text state={option.state === BinaryState.Disabled ? State.Disabled : State.Default}>{option.label}</Text>
        </div>
    {/each}
</div>

<style>.radio-group {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}
.radio-group .option {
  display: inline-flex;
  flex-direction: row;
  gap: var(--gap);
  align-items: center;
}</style>
