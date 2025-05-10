<script lang="ts">
    import { onMount, tick } from 'svelte';
    import ContextMenuItem from './ContextMenuItem.svelte';
    import type { ContextItem } from '$lib/types/Context.js';
  
    export let items: ContextItem[] = [];
  
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
  
      const handleClickOutside = () => {
        menuVisible = false;
        window.removeEventListener('click', handleClickOutside);
      };
  
      window.addEventListener('click', handleClickOutside);
    }
  </script>
  
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="wrapper" on:contextmenu={handleContextMenu}>
    <slot></slot>
  </div>
  
  {#if menuVisible}
    <div
      bind:this={menuRef}
      class="context"
      style="top: {menuY}px; left: {menuX}px; position: fixed;"
    >
      {#each items as item}
        <ContextMenuItem {item} />
      {/each}
    </div>
  {/if}
  
<style lang="scss">
    @use "./ContextMenu.scss" as *;
</style>
