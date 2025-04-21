<script lang="ts">
    import { Appearance } from "../../../types/Appearance.js";
    import { SVGShape } from "../../../types/Shapes.js";
	import type { Size } from "../../../types/Size.js";
	import { BinaryState } from "../../../types/State.js";
    import { createEventDispatcher } from "svelte";
    import Icon from "../icon/Icon.svelte";
	import { defaultState, defaultSize, toggle } from "./Switch.js";

	export let state: BinaryState = defaultState;
    export let size: Size = defaultSize;
	export let icons: [SVGShape, SVGShape] | null = null;
	$: checked = state === BinaryState.On;
	$: disabled = state === BinaryState.Disabled;

	const dispatch = createEventDispatcher();

	function onChange(event: Event) {
		state = toggle(event, state);
		dispatch("toggled", state);
	}
</script>

<label class="switch {size}">
	<input
		type="checkbox"
		{disabled}
		bind:checked={checked}
		on:change={onChange}
	/>
	<span class="slider">
		{#if icons}
			<Icon appearance={Appearance.Secondary} icon={checked ? icons[0] : icons[1]} />
		{/if}
	</span>
</label>

<style>.switch {
  user-select: none;
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: calc(var(--switch-size) * 2);
  height: var(--switch-size);
  border-radius: var(--switch-size);
}
.switch.size_extra_small {
  --switch-size: 1rem;
}
.switch.size_small {
  --switch-size: 1.25rem;
}
.switch.size_medium {
  --switch-size: 1.5rem;
}
.switch.size_large {
  --switch-size: 1.75rem;
}
.switch.size_extra_large {
  --switch-size: 2rem;
}
.switch input:disabled + .slider {
  opacity: var(--disabled-opacity-modifier);
  cursor: not-allowed;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.switch input:checked + .slider {
  background-color: var(--color-success);
}
.switch input:checked + .slider:before {
  transform: translateX(var(--switch-size));
}
.switch input:checked + .slider :global(.icon) {
  transform: translate(calc(var(--switch-size) + var(--switch-size) * 0.1), -50%);
}
.switch .slider {
  user-select: none;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-secondary);
  transition: var(--animation-duration-fast);
  border-radius: var(--switch-size);
}
.switch .slider:before {
  position: absolute;
  content: "";
  height: calc(var(--switch-size) - var(--border-size));
  width: calc(var(--switch-size) - var(--border-size));
  left: 0;
  top: 0;
  border-radius: var(--switch-size);
  background-color: var(--text-color-light);
  transition: var(--animation-duration-fast);
}
.switch .slider :global(.icon) {
  position: absolute;
  top: 50%;
  left: calc(var(--switch-size) * 0.1);
  font-size: calc(var(--switch-size) * 0.6);
  line-height: 1;
  transform: translateY(-50%);
  pointer-events: none;
  transition: transform var(--animation-duration-fast);
}</style>
