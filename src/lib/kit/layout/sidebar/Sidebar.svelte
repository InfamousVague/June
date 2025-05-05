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
                <slot name="title" class="title"></slot>
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
    .layout {
        position: relative;
        width: 100vw;
        height: 100vh;
        display: flex;
        overflow: hidden;

        .sidebar {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: var(--sidebar-width, 250px);
            display: flex;
            flex-direction: column;
            transition: transform var(--animation-duration-fast) ease;
            background-color: var(--color-background-secondary);

            &.open {
                transform: translateX(0);
            }

            .controls {
                display: flex;
                justify-content: flex-end;
                padding: var(--padding);
                justify-content: space-between;
            }

            &.closed {
                transform: translateX(
                    calc(-100% + var(--sidebar-collapsed-width))
                );

                .controls {
                    width: var(--sidebar-collapsed-width);
                    align-self: flex-end;
                    justify-content: center;
                    padding: var(--padding) 0;
                }
            }

            .inner {
                display: flex;
                flex-direction: row;
                flex: 1;
                position: relative;
                overflow: hidden;

                .content {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    min-width: 0;

                    header {
                        padding: var(--padding);
                        gap: var(--gap-less);
                    }

                    .body {
                        padding: var(--padding);
                        flex: 1;
                        overflow-y: auto;
                    }

                    footer {
                        flex: 0 1;
                    }
                }

                .aside {
                    width: var(--sidebar-collapsed-width);
                    transition: transform var(--animation-duration-fast) ease;
                    display: flex;
                    justify-content: center;
                    padding: var(--padding) 0;

                    &.hidden {
                        position: absolute;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        transform: translateX(100%);
                    }

                    &.visible {
                        position: static;
                        transform: translateX(0);
                    }
                }
            }
        }

        .content {
            transition: margin-left var(--animation-duration-fast) ease;
            flex-grow: 1;
            width: 100%;
            overflow-y: scroll;

            &.with-sidebar {
                margin-left: var(--sidebar-width, 250px);
            }

            &.full-width {
                margin-left: var(--sidebar-collapsed-width);
            }
        }
    }
</style>
