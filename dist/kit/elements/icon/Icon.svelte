<script lang="ts">
    import { Animation, Appearance, SVGShape } from "../../../types/index.js";
    import { Size } from "../../../types/Size.js";
    import { createEventDispatcher } from "svelte";

    export let size: Size = Size.Medium;
    export let icon: SVGShape = SVGShape.Circle;
    export let fill: boolean = false;
    export let animation: Animation = Animation.None;
    export let appearance: Appearance = Appearance.Inherit;

    const dispatch = createEventDispatcher();
    function onPress() {
        dispatch("press")
    }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<svg
    on:click={onPress}
    class="icon {size} {animation} {appearance}"
    viewBox="0 0 24 24"
    fill={fill ? "currentColor" : "none"}
    stroke={fill ? "none": "currentColor"}>
    {@html icon}
</svg>

<style>@keyframes pulse {
  0% {
    opacity: 0.25;
  }
  25% {
    opacity: 0.75;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.25;
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.icon {
  width: 1rem;
  height: 1rem;
}
.icon.animation_pulse {
  animation: pulse var(--animation-duration) linear infinite;
}
.icon.animation_spin {
  animation: spin var(--animation-duration) linear infinite;
}
.icon.size_extra_small {
  min-width: var(--text-size-extra-small);
  min-height: var(--text-size-extra-small);
}
.icon.size_small {
  min-width: var(--text-size-small);
  min-height: var(--text-size-small);
}
.icon.size_medium {
  min-width: var(--text-size-medium);
  min-height: var(--text-size-medium);
}
.icon.size_large {
  min-width: var(--text-size-large);
  min-height: var(--text-size-large);
}
.icon.size_extra_large {
  min-width: var(--text-size-extra-large);
  min-height: var(--text-size-extra-large);
}
.icon.appearance_primary {
  color: var(--color-primary);
}
.icon.appearance_secondary {
  color: var(--color-secondary);
}
.icon.appearance_info {
  color: var(--color-info);
}
.icon.appearance_transparent {
  color: var(transparent);
}
.icon.appearance_success {
  color: var(--color-success);
}
.icon.appearance_warning {
  color: var(--color-warning);
}
.icon.appearance_bright {
  color: var(--text-color-light);
}
.icon.appearance_muted {
  color: var(--text-color-muted);
}
.icon.appearance_error {
  color: var(--color-error);
}</style>