<script lang="ts">
    import { createEventDispatcher, onMount, tick } from 'svelte';
    import ContextMenuItem from './ContextMenuItem.svelte';
    import type { ContextItem } from '$lib/types/Context.js';
  
    export let items: ContextItem[] = [];
    export let leftClick: boolean = false;
  
    let menuVisible = false;
    let menuX = 0;
    let menuY = 0;
    let menuRef: HTMLDivElement | null = null;
  
    async function handleContextMenu(event: MouseEvent) {
      event.preventDefault();

      menuX = event.clientX;
      menuY = event.clientY;
      menuVisible = true;

      await tick();

      if (menuRef) {
        const { offsetWidth, offsetHeight } = menuRef;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        if (menuX + offsetWidth > viewportWidth) {
          menuX = Math.max(8, viewportWidth - offsetWidth - 8);
        }

        if (menuY + offsetHeight > viewportHeight) {
          menuY = Math.max(8, viewportHeight - offsetHeight - 8);
        }
      }

      const handleClickOutside = (e: MouseEvent) => {
        if (!menuRef?.contains(e.target as Node)) {
          menuVisible = false;
          window.removeEventListener('click', handleClickOutside);
        }
      };

      // Delay the binding until next event loop
      setTimeout(() => {
        window.addEventListener('click', handleClickOutside);
      }, 0);
    }


    const dispatch = createEventDispatcher();

    function select(item: ContextItem) {
        menuVisible = false;
        dispatch("select", item);
    }
  </script>
  
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="wrapper"   
    on:contextmenu={e => {
      if (!leftClick) handleContextMenu(e);
    }}
    on:click={e => {
      if (leftClick && e.button === 0) handleContextMenu(e);
    }}>
    <slot></slot>
  </div>
  
  {#if menuVisible}
    <div
      bind:this={menuRef}
      class="context"
      style="top: {menuY}px; left: {menuX}px; position: fixed;"
    >
      {#each items as item}
        <ContextMenuItem {item} on:select={i => select(i.detail)}/>
      {/each}
    </div>
  {/if}
  
<style lang="scss">
    @use "./ContextMenu.scss" as *;
</style>
