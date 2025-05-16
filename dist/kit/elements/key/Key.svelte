<script lang="ts">
    import type { Appearance } from "../../../types/Appearance.js";
    import type { Size } from "../../../types/Size.js";
    import { defaultAppearance, defaultKey, defaultSize } from "./Key.js";

    export let value: string = defaultKey;
    export let size: Size = defaultSize;
    export let appearance: Appearance = defaultAppearance;
    export let customWidth: string = "";
</script>

<div class="key {size} {appearance}" style={customWidth ? `width: ${customWidth}px;` : ''}>
    <span data-cy="key-value">
        {value}
    </span>
</div>

<style>div.key {
  --computed-control-size: var(--control-size);
  min-width: var(--computed-control-size);
  min-height: var(--computed-control-size);
  text-transform: uppercase;
  padding-bottom: 4px;
  display: inline-flex;
  height: fit-content;
}
div.key > span {
  background-color: var(--color-secondary);
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: var(--computed-control-size);
  flex: 1;
  padding: var(--padding);
  height: calc(var(--computed-control-size) - 4px);
  border: var(--outline-size) solid var(--text-color);
  border-radius: var(--border-radius);
  font-size: var(--text-size-medium);
  color: var(--text-color);
  box-shadow: 0px 5px 0px calc(var(--outline-size) * -1) var(--color-secondary), 0px 4px 0px 0px var(--text-color);
}
div.key.size_extra_small {
  --computed-control-size: calc(var(--control-size) * 0.5);
}
div.key.size_extra_small > span {
  font-size: var(--text-size-extra-small);
}
div.key.size_small {
  --computed-control-size: calc(var(--control-size) * 0.75);
}
div.key.size_small > span {
  font-size: var(--text-size-small);
}
div.key.size_medium {
  --computed-control-size: var(--control-size);
}
div.key.size_medium > span {
  font-size: var(--text-size-medium);
}
div.key.size_large {
  --computed-control-size: calc(var(--control-size) * 1.25);
}
div.key.size_large > span {
  font-size: var(--text-size-large);
}
div.key.size_extra_large {
  --computed-control-size: calc(var(--control-size) * 1.5);
}
div.key.size_extra_large > span {
  font-size: var(--text-size-extra-large);
}
div.key.appearance_primary > span {
  background-color: var(--color-secondary);
  border: var(--outline-size) solid var(--color-primary);
  color: var(--color-primary);
  box-shadow: 0px 5px 0px calc(var(--outline-size) * -1) var(--color-secondary), 0px 4px 0px 0px var(--color-primary);
}
div.key.appearance_secondary > span {
  background-color: var(--color-background-secondary);
  border: var(--outline-size) solid var(--color-secondary);
  color: var(--color-secondary);
  box-shadow: 0px 5px 0px calc(var(--outline-size) * -1) var(--color-background-secondary), 0px 4px 0px 0px var(--color-secondary);
}
div.key.appearance_info > span {
  background-color: var(--color-secondary);
  border: var(--outline-size) solid var(--color-info);
  color: var(--color-info);
  box-shadow: 0px 5px 0px calc(var(--outline-size) * -1) var(--color-secondary), 0px 4px 0px 0px var(--color-info);
}
div.key.appearance_success > span {
  background-color: var(--color-secondary);
  border: var(--outline-size) solid var(--color-success);
  color: var(--color-success);
  box-shadow: 0px 5px 0px calc(var(--outline-size) * -1) var(--color-secondary), 0px 4px 0px 0px var(--color-success);
}
div.key.appearance_warning > span {
  background-color: var(--color-secondary);
  border: var(--outline-size) solid var(--color-warning);
  color: var(--color-warning);
  box-shadow: 0px 5px 0px calc(var(--outline-size) * -1) var(--color-secondary), 0px 4px 0px 0px var(--color-warning);
}
div.key.appearance_error > span {
  background-color: var(--color-secondary);
  border: var(--outline-size) solid var(--color-error);
  color: var(--color-error);
  box-shadow: 0px 5px 0px calc(var(--outline-size) * -1) var(--color-secondary), 0px 4px 0px 0px var(--color-error);
}
div.key.appearance_bright > span {
  background-color: var(--color-secondary);
  border: var(--outline-size) solid var(--text-color-light);
  color: var(--text-color-light);
  box-shadow: 0px 5px 0px calc(var(--outline-size) * -1) var(--color-secondary), 0px 4px 0px 0px var(--text-color-light);
}
div.key.appearance_muted > span {
  background-color: var(--color-secondary);
  border: var(--outline-size) solid var(--text-color-muted);
  color: var(--text-color-muted);
  box-shadow: 0px 5px 0px calc(var(--outline-size) * -1) var(--color-secondary), 0px 4px 0px 0px var(--text-color-muted);
}
div.key.appearance_inherit > span {
  background-color: var(--color-secondary);
  border: var(--outline-size) solid var(inherit);
  color: var(inherit);
  box-shadow: 0px 5px 0px calc(var(--outline-size) * -1) var(--color-secondary), 0px 4px 0px 0px var(inherit);
}</style>
