<script lang="ts">
    import type { Appearance } from "../../../types/Appearance.js";
    import type { Size } from "../../../types/Size.js";
    import { defaultOpen, defaultSize, defaultAppearance } from "./Hamburger.js";

	export let open = defaultOpen;
    export let size: Size = defaultSize;
	export let appearance: Appearance = defaultAppearance;

	function toggle() {
		open = !open;
	}
</script>

<button class="hamburger {size} {appearance}" on:click={toggle} class:open aria-label="menu">
	<svg viewBox="0 0 24 24" class="icon" aria-hidden="true">
		<line class="line top" x1="4" y1="12" x2="20" y2="12" />
		<line class="line middle" x1="4" y1="12" x2="20" y2="12" />
		<line class="line bottom" x1="4" y1="12" x2="20" y2="12" />
	</svg>
</button>

<style>.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--padding);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color-bright);
}
.hamburger .icon {
  width: var(--text-size-large);
  height: var(--text-size-large);
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
}
.hamburger.size_extra_small .icon {
  width: calc(var(--text-size-extra-small) * 2);
  height: calc(var(--text-size-extra-small) * 2);
}
.hamburger.size_small .icon {
  width: calc(var(--text-size-small) * 2);
  height: calc(var(--text-size-small) * 2);
}
.hamburger.size_medium .icon {
  width: calc(var(--text-size-medium) * 2);
  height: calc(var(--text-size-medium) * 2);
}
.hamburger.size_large .icon {
  width: calc(var(--text-size-large) * 2);
  height: calc(var(--text-size-large) * 2);
}
.hamburger.size_extra_large .icon {
  width: calc(var(--text-size-extra-large) * 2);
  height: calc(var(--text-size-extra-large) * 2);
}
.hamburger .line {
  transition: transform var(--animation-duration-fast) ease, opacity var(--animation-duration-fast) ease;
  transform-origin: calc(var(--text-size-large) / 2) calc(var(--text-size-large) / 2);
}
.hamburger .line.top {
  transform: translateY(calc(var(--text-size-large) / 4 * -1));
}
.hamburger .line.bottom {
  transform: translateY(calc(var(--text-size-large) / 4));
}
.hamburger.open .line.top {
  transform: rotate(45deg);
}
.hamburger.open .line.middle {
  opacity: 0;
}
.hamburger.open .line.bottom {
  transform: rotate(-45deg);
}
.hamburger.appearance_primary {
  color: var(--text-color);
}
.hamburger.appearance_secondary {
  color: var(--text-color-muted);
}
.hamburger.appearance_info {
  color: var(--color-info);
}
.hamburger.appearance_success {
  color: var(--color-success);
}
.hamburger.appearance_warning {
  color: var(--color-warning);
}
.hamburger.appearance_error {
  color: var(--color-error);
}
.hamburger.appearance_bright {
  color: var(--text-color-light);
}
.hamburger.appearance_muted {
  color: var(--text-color-muted);
}
.hamburger.appearance_inherit {
  color: inherit;
}</style>
