<script lang="ts">
    import { Shape } from "../../../types/Appearance.js";

    export let shape: Shape = Shape.Standard
</script>

<div class="toolbar {shape}">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="middle">
        <slot class="middle"></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
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