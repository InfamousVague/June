<script lang="ts">
    import Button from "../../elements/button/Button.svelte";
    import { Appearance } from "../../../types/Appearance.js";
    import type { Route } from "../../../types/Routes.js";
    import { createEventDispatcher } from "svelte";
    import Tooltip from "../tooltip/Tooltip.svelte";
    import { Position } from "../../../types/Position.js";

    export let routes: Route[] = [];
    export let active: string = "";
    export let vertical: boolean = false;

    const dispatch = createEventDispatcher();

    function navigate(to: Route) {
        dispatch("navigate", to);
        active = to.to;
    }
</script>

<div class="nav {vertical ? "vertical" : ""}">
    {#each routes as route}
        <Tooltip content={route.name} position={vertical ? Position.Right : Position.Top}>
            <Button 
                icon={route.icon}
                simple
                appearance={active === route.to ? Appearance.Primary : Appearance.Secondary}
                on:pressed={() => navigate(route)}
                ></Button>
        </Tooltip>
    {/each}
</div>

<style>.nav {
  flex: 1;
  display: inline-flex;
  justify-content: space-between;
  gap: var(--gap);
  padding: var(--padding) var(--padding-more) var(--padding-more) var(--padding-more);
}
.nav.vertical {
  flex-direction: column;
  padding: var(--padding);
}</style>