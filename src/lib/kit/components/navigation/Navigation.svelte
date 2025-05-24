<script lang="ts">
    import Button from "$lib/kit/elements/button/Button.svelte";
    import { Appearance } from "$lib/types/Appearance.js";
    import type { Route } from "$lib/types/Routes.js";
    import { createEventDispatcher } from "svelte";
    import Tooltip from "../tooltip/Tooltip.svelte";
    import { Position } from "$lib/types/Position.js";

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

<style lang="scss">
    @use "./Navigation.scss" as *;
</style>