<script lang="ts">
    import type { Appearance, Shape } from "../../../types/Appearance.js";
    import type { Range_1_100, Size } from "../../../types/index.js";
    import { defaultShape } from "../button/Button.js";
    import { defaultAppearance, defaultPercent, defaultSize } from "./Progress.js";

    export let appearance: Appearance = defaultAppearance;
    export let size: Size = defaultSize;
    export let shape: Shape = defaultShape;
    export let percent: Range_1_100 = defaultPercent;
    export let animated: boolean = false;
</script>

<div class="progress-container {appearance} {size} {shape}">
    <div class="progress-bar {animated ? "animated" : ""}" style={`width: ${percent}%;`}></div>
</div>

<style>.progress-container {
  height: var(--control-size);
  min-width: var(--min-progress-width);
  background-color: var(--color-secondary);
  border-radius: var(--border-radius);
  overflow: hidden;
  position: relative;
}
.progress-container.size_extra_small {
  --control-size: 1rem;
}
.progress-container.size_small {
  --control-size: 1.25rem;
}
.progress-container.size_medium {
  --control-size: 1.5rem;
}
.progress-container.size_large {
  --control-size: 1.75rem;
}
.progress-container.size_extra_large {
  --control-size: 2rem;
}
.progress-container.shape_pill {
  border-radius: var(--border-radius-pill);
}
.progress-container .progress-bar {
  height: 100%;
  position: relative;
  overflow: hidden;
}
.progress-container .progress-bar.animated::after {
  content: "";
  position: absolute;
  top: 0;
  left: -150%;
  height: 100%;
  width: 150%;
  animation: sweep 2s infinite linear;
  background: linear-gradient(120deg, transparent 0%, var(--progress-glow) 50%, transparent 100%);
}
.progress-container.appearance_primary .progress-bar {
  background: var(--color-primary);
}
.progress-container.appearance_primary .progress-bar.animated {
  --progress-glow: color-mix(in srgb, var(--color-primary) 70%, var(--hover-modifier));
}
.progress-container.appearance_secondary .progress-bar {
  background: var(--color-secondary);
}
.progress-container.appearance_secondary .progress-bar.animated {
  --progress-glow: color-mix(in srgb, var(--color-secondary) 70%, var(--hover-modifier));
}
.progress-container.appearance_info .progress-bar {
  background: var(--color-info);
}
.progress-container.appearance_info .progress-bar.animated {
  --progress-glow: color-mix(in srgb, var(--color-info) 70%, var(--hover-modifier));
}
.progress-container.appearance_transparent .progress-bar {
  background: var(transparent);
}
.progress-container.appearance_transparent .progress-bar.animated {
  --progress-glow: color-mix(in srgb, var(transparent) 70%, var(--hover-modifier));
}
.progress-container.appearance_success .progress-bar {
  background: var(--color-success);
}
.progress-container.appearance_success .progress-bar.animated {
  --progress-glow: color-mix(in srgb, var(--color-success) 70%, var(--hover-modifier));
}
.progress-container.appearance_warning .progress-bar {
  background: var(--color-warning);
}
.progress-container.appearance_warning .progress-bar.animated {
  --progress-glow: color-mix(in srgb, var(--color-warning) 70%, var(--hover-modifier));
}
.progress-container.appearance_bright .progress-bar {
  background: var(--text-color-light);
}
.progress-container.appearance_bright .progress-bar.animated {
  --progress-glow: color-mix(in srgb, var(--text-color-light) 70%, var(--hover-modifier));
}
.progress-container.appearance_muted .progress-bar {
  background: var(--text-color-muted);
}
.progress-container.appearance_muted .progress-bar.animated {
  --progress-glow: color-mix(in srgb, var(--text-color-muted) 70%, var(--hover-modifier));
}
.progress-container.appearance_error .progress-bar {
  background: var(--color-error);
}
.progress-container.appearance_error .progress-bar.animated {
  --progress-glow: color-mix(in srgb, var(--color-error) 70%, var(--hover-modifier));
}

@keyframes sweep {
  from {
    left: -150%;
  }
  to {
    left: 100%;
  }
}</style>