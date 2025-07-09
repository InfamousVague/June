<script lang="ts">
    import { Shape } from "../../../types/Appearance.js";

    export let shape: Shape = Shape.Standard
    const SLOTS = $$slots

</script>

<div class="toolbar {shape}">
    {#if SLOTS.left}
        <div class="left">
            <slot name="left"></slot>
        </div>
    {/if}
    {#if SLOTS.middle}
        <div class="middle">
            <slot name="middle"></slot>
        </div>
    {/if}
    {#if SLOTS.right}
        <div class="right">
            <slot name="right"></slot>
        </div>
    {/if}
</div>

<style>.toolbar {
  display: inline-flex;
  height: fit-content;
  padding: var(--padding);
  background-color: var(--color-background-secondary);
  width: calc(100% - var(--padding) * 2);
  align-items: center;
  gap: var(--gap);
}
.toolbar.shape_pill {
  border-radius: var(--border-radius-pill);
}
.toolbar .left {
  align-self: flex-start;
}
.toolbar .middle {
  flex: 1;
}
.toolbar .right {
  align-self: flex-end;
}</style>