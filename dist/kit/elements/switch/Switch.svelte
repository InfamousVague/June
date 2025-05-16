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
  --computed-switch-size: var(--switch-size);
  user-select: none;
  cursor: pointer;
  position: relative;
  display: inline-block;
  width: calc(var(--computed-switch-size) * 2);
  height: var(--computed-switch-size);
  border-radius: var(--computed-switch-size);
}
.switch.size_extra_small {
  --computed-switch-size: calc(var(--switch-size) * 0.67);
}
.switch.size_small {
  --computed-switch-size: calc(var(--switch-size) * 0.83);
}
.switch.size_medium {
  --computed-switch-size: var(--switch-size);
}
.switch.size_large {
  --computed-switch-size: calc(var(--switch-size) * 1.17);
}
.switch.size_extra_large {
  --computed-switch-size: calc(var(--switch-size) * 1.33);
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
  transform: translateX(calc(var(--computed-switch-size) + var(--border-size)));
}
.switch input:checked + .slider :global(.icon) {
  transform: translate(calc(var(--computed-switch-size) + var(--computed-switch-size) * 0.1), -50%);
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
  border-radius: var(--computed-switch-size);
}
.switch .slider:before {
  position: absolute;
  content: "";
  height: calc(var(--computed-switch-size) - var(--border-size));
  width: calc(var(--computed-switch-size) - var(--border-size));
  left: 0;
  top: var(--border-size);
  border-radius: var(--computed-switch-size);
  background-color: var(--text-color-light);
  transition: var(--animation-duration-fast);
}
.switch .slider :global(.icon) {
  position: absolute;
  top: 50%;
  left: calc(var(--computed-switch-size) * 0.1);
  font-size: calc(var(--computed-switch-size) * 0.6);
  line-height: 1;
  transform: translateY(-50%);
  pointer-events: none;
  transition: transform var(--animation-duration-fast);
}</style>
