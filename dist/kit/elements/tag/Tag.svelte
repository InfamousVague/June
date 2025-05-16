<script lang="ts">
    import { Size, Highlight, Appearance } from "../../../types/index.js";
    import { defaultAppearance, defaultContent, defaultHighlight, defaultHole, defaultSize } from "./Tag.js";

    export let content: string = defaultContent;
    export let appearance: Appearance = defaultAppearance;
    export let size: Size = defaultSize;
    export let highlight: Highlight = defaultHighlight;
    export let hole: boolean = defaultHole;
</script>

<div class="tag {appearance} {highlight} {size} {hole ? "" : "no_hole"}">
    {#if hole}
        <div class="hole"></div>
    {/if}
    {content}
</div>

<style>.tag {
  display: inline-flex;
  align-items: center;
  padding: var(--padding-less) var(--padding) var(--padding-less) 0;
  background-color: var(--color-secondary);
  color: var(--color-tag-text, white);
  border-radius: var(--border-radius);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-left: 1rem;
  position: relative;
  font-size: var(--text-size-medium);
  line-height: 1;
  gap: 0.4em;
  overflow: visible;
  padding-left: 0.2rem;
  border: none;
  border: var(--outline-size) solid var(--text-color-light);
  border: var(--outline-size) solid var(--text-color-light);
  border: var(--outline-size) solid var(--text-color-light);
  border: var(--outline-size) solid var(--text-color-light);
  border: var(--outline-size) solid var(--text-color-light);
  border: var(--outline-size) solid var(--text-color-light);
}
.tag.no_hole {
  border-radius: var(--border-radius);
  padding: var(--padding-less) var(--padding) var(--padding-less) var(--padding);
  margin-left: 0;
}
.tag .hole {
  position: absolute;
  left: -1.5em;
  width: 1.5rem;
  height: 100%;
  background-color: var(--color-secondary);
  border-radius: 0;
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  mask-image: radial-gradient(circle 0.3em at 50% 50%, transparent 0.3em, black 0);
  mask-composite: exclude;
  -webkit-mask-image: radial-gradient(circle 0.3em at 50% 50%, transparent 0.3em, black 0);
  -webkit-mask-composite: destination-out;
}
.tag.appearance_primary {
  background-color: var(--color-primary);
  color: var(--text-color-light);
}
.tag.appearance_primary .hole {
  background-color: var(--color-primary);
}
.tag.appearance_secondary {
  background-color: var(--color-secondary);
  color: var(--text-color-light);
}
.tag.appearance_secondary .hole {
  background-color: var(--color-secondary);
}
.tag.appearance_info {
  background-color: var(--color-info);
  color: var(--text-color-dark);
}
.tag.appearance_info .hole {
  background-color: var(--color-info);
}
.tag.appearance_transparent {
  background-color: var(transparent);
  color: var(--text-color-dark);
}
.tag.appearance_transparent .hole {
  background-color: var(transparent);
}
.tag.appearance_success {
  background-color: var(--color-success);
  color: var(--text-color-dark);
}
.tag.appearance_success .hole {
  background-color: var(--color-success);
}
.tag.appearance_warning {
  background-color: var(--color-warning);
  color: var(--text-color-dark);
}
.tag.appearance_warning .hole {
  background-color: var(--color-warning);
}
.tag.appearance_bright {
  background-color: var(--text-color-light);
  color: var(--text-color-dark);
}
.tag.appearance_bright .hole {
  background-color: var(--text-color-light);
}
.tag.appearance_muted {
  background-color: var(--text-color-muted);
  color: var(--text-color-dark);
}
.tag.appearance_muted .hole {
  background-color: var(--text-color-muted);
}
.tag.appearance_error {
  background-color: var(--color-error);
  color: var(--text-color-dark);
}
.tag.appearance_error .hole {
  background-color: var(--color-error);
}
.tag.highlight_primary {
  border: var(--outline-size) solid var(--color-primary);
  border-left: none;
}
.tag.highlight_primary .hole {
  border: var(--outline-size) solid var(--color-primary);
  border-right: none;
}
.tag.highlight_none {
  border: none;
}
.tag.highlight_secondary {
  border: var(--outline-size) solid var(--color-secondary);
  border-left: none;
}
.tag.highlight_secondary .hole {
  border: var(--outline-size) solid var(--color-secondary);
  border-right: none;
}
.tag.highlight_none {
  border: none;
}
.tag.highlight_info {
  border: var(--outline-size) solid var(--color-info);
  border-left: none;
}
.tag.highlight_info .hole {
  border: var(--outline-size) solid var(--color-info);
  border-right: none;
}
.tag.highlight_none {
  border: none;
}
.tag.highlight_success {
  border: var(--outline-size) solid var(--color-success);
  border-left: none;
}
.tag.highlight_success .hole {
  border: var(--outline-size) solid var(--color-success);
  border-right: none;
}
.tag.highlight_none {
  border: none;
}
.tag.highlight_warning {
  border: var(--outline-size) solid var(--color-warning);
  border-left: none;
}
.tag.highlight_warning .hole {
  border: var(--outline-size) solid var(--color-warning);
  border-right: none;
}
.tag.highlight_none {
  border: none;
}
.tag.highlight_error {
  border: var(--outline-size) solid var(--color-error);
  border-left: none;
}
.tag.highlight_error .hole {
  border: var(--outline-size) solid var(--color-error);
  border-right: none;
}
.tag.highlight_none {
  border: none;
}
.tag.size_extra_small {
  font-size: var(--text-size-extra-small);
}
.tag.size_small {
  font-size: var(--text-size-small);
}
.tag.size_medium {
  font-size: var(--text-size-medium);
}
.tag.size_large {
  font-size: var(--text-size-large);
}
.tag.size_extra_large {
  font-size: var(--text-size-extra-large);
}
.tag.size_extra_small {
  padding-left: 0.5rem;
}
.tag.size_small {
  padding-left: 0.3rem;
}
.tag.size_large {
  padding-left: 0.35rem;
}
.tag.size_large .hole {
  position: absolute;
  left: -1.4rem;
}
.tag.size_extra_large {
  padding-left: 0.5rem;
}
.tag.size_extra_large .hole {
  position: absolute;
  left: -1.4rem;
}</style>
