<script lang="ts">
    import Hamburger from "$lib/kit/elements/hamburger/Hamburger.svelte";

    export let open: boolean = true;

    function toggleSidebar(event: CustomEvent) {
        open = event.detail;
    }
</script>

<div class="layout">
    <div class="sidebar {open ? 'open' : 'closed'}">
        <div class="controls">
            {#if open}
                <div>
                    <slot name="title" class="title"></slot>
                </div>
            {/if}
            <Hamburger {open} on:toggle={toggleSidebar} />
        </div>

        <div class="inner">
            <div class="content">
                <header>
                    <slot name="header" />
                </header>

                <div class="body">
                    <slot name="body" />
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
