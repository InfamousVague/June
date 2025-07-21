<script lang="ts">
    import Hamburger from "$lib/kit/elements/hamburger/Hamburger.svelte";
    import { Appearance } from "$lib/types/Appearance.js";

    export let open: boolean = true;
    export let collapseFully: boolean = false;
    export let fullscreen: boolean = false;

    function toggleSidebar(event: CustomEvent) {
        open = event.detail;
    }
</script>

<div class="layout">
    <div class="sidebar {open ? 'open' : 'closed'} {collapseFully ? 'full-collapse' : ''} {fullscreen ? 'fullscreen' : ''}">
        <div class="controls">
            {#if open}
                <div>
                    <slot name="title" class="title"></slot>
                </div>
            {/if}
            <Hamburger {open} on:toggle={toggleSidebar} appearance={Appearance.Muted} />
        </div>

        <div class="inner">
            <div class="content">
                <header>
                    <slot name="header" />
                </header>

                <div class="body">
                    <slot name="body" class="body"/>
                </div>

                <footer>
                    <slot name="footer" />
                </footer>
            </div>

            <!-- Aside always rendered, animated in/out based on sidebar state -->
            <div class="aside {open ? 'hidden' : 'visible'}">
                <slot name="aside"></slot>
            </div>
        </div>
    </div>

    <div class="content {open ? 'with-sidebar' : 'full-width'}">
        <slot />
    </div>
</div>

<style lang="scss">
    @use "./Sidebar.scss" as *;
</style>
