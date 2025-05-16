<script lang="ts">
    import Text from "../../elements/text/Text.svelte";
    import { Appearance } from "../../../types/Appearance.js";
    import { Size } from "../../../types/Size.js";

    export let title: string = "";
</script>

<div class="card">
    <div class="heading">
        <Text appearance={Appearance.Inherit} size={Size.Small}>{title}</Text>
    </div>

    <div class="body">
        <slot></slot>
    </div>
</div>
<style>.card {
  display: inline-flex;
  flex-direction: column;
  flex: 1;
  background-color: var(--color-background-secondary);
  border-radius: var(--border-radius);
  padding: var(--padding-more);
  gap: var(--gap);
}
.card .heading {
  display: inline-flex;
  flex: 1;
}
.card .body {
  display: inline-flex;
  flex-direction: column;
  gap: var(--gap);
}</style>