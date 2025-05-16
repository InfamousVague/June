<script lang="ts">
    import { Size } from "../../../types/Size.js";

    export let size: Size = Size.Medium;
</script>

<div class="spacer {size}"></div>

<style>.spacer {
  height: var(--spacer-size);
  width: 100%;
}
.spacer.size_extra_small {
  --spacer-size: calc(var(--spacer-size) / 1.5);
}
.spacer.size_small {
  --spacer-size: calc(var(--spacer-size) / 1.25);
}
.spacer.size_large {
  --spacer-size: calc(var(--spacer-size) * 1.5);
}
.spacer.size_extra_large {
  --spacer-size: calc(var(--spacer-size) * 2);
}</style>
