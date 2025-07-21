<script lang="ts">
    import Hamburger from "../../elements/hamburger/Hamburger.svelte";
    import { Appearance } from "../../../types/Appearance.js";

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

<style>.layout {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
}
.layout .sidebar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--sidebar-width, 250px);
  display: flex;
  flex-direction: column;
  transition: transform var(--animation-duration-fast) ease;
  background-color: var(--color-background-secondary);
}
.layout .sidebar.fullscreen {
  width: 100vw;
}
.layout .sidebar.open {
  transform: translateX(0);
}
.layout .sidebar .controls {
  display: flex;
  justify-content: flex-end;
  padding: var(--padding);
  justify-content: space-between;
}
.layout .sidebar.closed {
  transform: translateX(calc(-100% + var(--sidebar-collapsed-width)));
}
.layout .sidebar.closed .controls {
  width: var(--sidebar-collapsed-width);
  align-self: flex-end;
  justify-content: center;
  padding: var(--padding) 0;
}
.layout .sidebar.full-collapse.closed {
  transform: translateX(-100%) !important;
}
.layout .sidebar .inner {
  display: flex;
  flex-direction: row;
  flex: 1;
  position: relative;
  overflow: hidden;
}
.layout .sidebar .inner .content {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}
.layout .sidebar .inner .content header {
  padding: var(--padding);
  gap: var(--gap-less);
}
.layout .sidebar .inner .content .body {
  padding: var(--padding);
  flex: 1;
  overflow-y: auto;
  display: inline-flex;
}
.layout .sidebar .inner .content footer {
  flex: 0 1;
  display: inline-flex;
}
.layout .sidebar .inner .content footer :global(div) {
  display: inline-flex;
  flex: 1;
}
.layout .sidebar .inner .aside {
  width: var(--sidebar-collapsed-width);
  transition: transform var(--animation-duration-fast) ease;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: var(--padding) 0;
}
.layout .sidebar .inner .aside.hidden {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  transform: translateX(100%);
  opacity: 0;
}
.layout .sidebar .inner .aside.visible {
  opacity: 1;
  position: static;
  transform: translateX(0);
  display: inline-flex;
  flex-direction: column;
}
.layout .content {
  transition: margin-left var(--animation-duration-fast) ease;
  display: inline-flex;
  flex-grow: 1;
  width: 100%;
  overflow-y: scroll;
}
.layout .content.with-sidebar {
  margin-left: var(--sidebar-width, 250px);
}
.layout .content.full-width {
  margin-left: var(--sidebar-collapsed-width);
}</style>
