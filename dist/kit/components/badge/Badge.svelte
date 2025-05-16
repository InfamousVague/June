<script lang="ts">
    import Text from "../../elements/text/Text.svelte";
    import { Appearance } from "../../../types/Appearance.js";
    import { Size } from "../../../types/Size.js";

    export let count: number = 99;
</script>

<div class="badge">
    <div class="count {count > 9 ? "wide" : ""}">
        <Text appearance={Appearance.Bright} size={Size.Small}>
            {count > 98 ? "99+" : count}
        </Text>
    </div>
    <slot></slot>
</div>

<style>.badge {
  position: relative;
}
.badge .count {
  position: absolute;
  right: -0.5rem;
  top: -0.75rem;
  height: fit-content;
  width: fit-content;
  background: var(--color-error);
  padding: var(--padding-less);
  border-radius: var(--border-radius-large);
  pointer-events: none;
}
.badge .count.wide {
  padding: var(--padding-less) var(--padding);
}</style>