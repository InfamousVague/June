<script lang="ts">
    import { SVGShape } from "../../../types/Shapes.js";
    import { Size } from "../../../types/Size.js";
    import { State, Animation, Shape, Appearance, Highlight} from "../../../types/index.js";
    import { Icon } from "../index.js";
    import { defaultAppearance, defaultHighlight, defaultPlaceholder, defaultShape, defaultSize, defaultState } from "./Input.js";

    export let size: Size = defaultSize;
    export let state: State = defaultState;
    export let shape: Shape = defaultShape;
    export let placeholder: string = defaultPlaceholder;
    export let icon: SVGShape | null = null;
    export let iconRight: SVGShape | null = null;
    export let appearance: Appearance = defaultAppearance;
    export let highlight: Highlight = defaultHighlight;
</script>


<div class="input-group {size} {shape} {appearance} {highlight} {state}">
    {#if state === State.Loading}
        <Icon icon={SVGShape.Circle} fill animation={Animation.Pulse}/>
    {:else if icon}
        <Icon {icon} {size} />
    {/if}
    <input class="input" placeholder={state === State.Loading ? "Loading" : placeholder} disabled={state === State.Disabled || state === State.Loading} />
    {#if iconRight && state !== State.Loading}
        <Icon icon={iconRight} {size} />
    {/if}
</div>

<style>.input-group {
  padding: var(--padding) var(--padding-more);
  border-radius: var(--border-radius);
  background: var(--color-secondary);
  border: var(--outline-size) solid transparent;
  display: inline-flex;
  align-items: center;
  gap: var(--gap);
  border: var(--outline-size) solid var(--text-color-light);
  border: var(--outline-size) solid var(--text-color-light);
  border: var(--outline-size) solid var(--text-color-light);
  border: var(--outline-size) solid var(--text-color-light);
  border: var(--outline-size) solid var(--text-color-light);
  border: var(--outline-size) solid var(--text-color-light);
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
.input-group.shape_pill {
  border-radius: var(--border-radius-pill);
}
.input-group.size_extra_small {
  padding: var(--padding-less) var(--padding);
}
.input-group.size_extra_small .input {
  font-size: var(--text-size-extra-small);
}
.input-group.size_small {
  padding: var(--padding-less) var(--padding);
}
.input-group.size_small .input {
  font-size: var(--text-size-small);
}
.input-group.size_medium .input {
  font-size: var(--text-size-medium);
}
.input-group.size_large .input {
  font-size: var(--text-size-large);
}
.input-group.size_extra_large .input {
  font-size: var(--text-size-extra-large);
}
.input-group:focus-within {
  border-color: var(--color-info);
}
.input-group .input {
  background: transparent;
  font-size: var(--text-size-medium);
  border: none;
  color: var(--text-color-light);
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
.input-group.simple_appearance_light .input::placeholder {
  color: var(--text-color-placeholder-light);
}</style>