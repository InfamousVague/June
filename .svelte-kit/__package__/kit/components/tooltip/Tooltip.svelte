<script lang="ts">
    import { Position } from "../../../types/Position.js";
    import { defaultContent, defaultOffset, defaultPosition } from "./Tooltip.js";

    export let content: string = defaultContent;
    export let position: Position = defaultPosition;
    export let offset = defaultOffset;
</script>

<div class="tooltip-wrapper">
    <slot />

    <div class="tooltip-box {position}" style={`--offset: ${offset}px;`}>
        {content}
        <div class="tooltip-arrow {position}"></div>
    </div>
</div>

<style>.tooltip-wrapper {
  position: relative;
  display: inline-block;
}
.tooltip-wrapper .tooltip-box {
  position: absolute;
  background-color: var(--color-background-dark);
  color: var(--text-color-light);
  padding: var(--padding) var(--padding-more);
  font-size: var(--text-size-medium);
  border-radius: var(--border-radius);
  white-space: nowrap;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.tooltip-wrapper .tooltip-box.position_top {
  bottom: calc(100% + var(--offset));
  left: 50%;
  transform: translateX(-50%) translateY(8px) scale(0.9);
}
.tooltip-wrapper .tooltip-box.position_bottom {
  top: calc(100% + var(--offset));
  left: 50%;
  transform: translateX(-50%) translateY(-8px) scale(0.9);
}
.tooltip-wrapper .tooltip-box.position_left {
  right: calc(100% + var(--offset));
  top: 50%;
  transform: translateX(8px) translateY(-50%) scale(0.9);
}
.tooltip-wrapper .tooltip-box.position_right {
  left: calc(100% + var(--offset));
  top: 50%;
  transform: translateX(-8px) translateY(-50%) scale(0.9);
}
.tooltip-wrapper .tooltip-box .tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}
.tooltip-wrapper .tooltip-box .tooltip-arrow.position_top {
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 6px 6px 0 6px;
  border-color: var(--color-background-dark) transparent transparent transparent;
}
.tooltip-wrapper .tooltip-box .tooltip-arrow.position_bottom {
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 0 6px 6px 6px;
  border-color: transparent transparent var(--color-background-dark) transparent;
}
.tooltip-wrapper .tooltip-box .tooltip-arrow.position_left {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-width: 6px 0 6px 6px;
  border-color: transparent transparent transparent var(--color-background-dark);
}
.tooltip-wrapper .tooltip-box .tooltip-arrow.position_right {
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  border-width: 6px 6px 6px 0;
  border-color: transparent var(--color-background-dark) transparent transparent;
}
.tooltip-wrapper:hover .tooltip-box.position_top {
  transform: translateX(-50%) translateY(0) scale(1);
  opacity: 1;
  pointer-events: auto;
}
.tooltip-wrapper:hover .tooltip-box.position_bottom {
  transform: translateX(-50%) translateY(0) scale(1);
  opacity: 1;
  pointer-events: auto;
}
.tooltip-wrapper:hover .tooltip-box.position_left {
  transform: translateX(0) translateY(-50%) scale(1);
  opacity: 1;
  pointer-events: auto;
}
.tooltip-wrapper:hover .tooltip-box.position_right {
  transform: translateX(0) translateY(-50%) scale(1);
  opacity: 1;
  pointer-events: auto;
}</style>
