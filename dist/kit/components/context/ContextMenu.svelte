<script lang="ts">
    import { createEventDispatcher, onMount, tick } from 'svelte';
    import ContextMenuItem from './ContextMenuItem.svelte';
    import type { ContextItem } from '../../../types/Context.js';
  
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

    const dispatch = createEventDispatcher();

    function select(item: ContextItem) {
        dispatch("select", item);
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
        <ContextMenuItem {item} on:select={i => select(i.detail)}/>
      {/each}
    </div>
  {/if}
  
<style>.wrapper {
  display: contents;
}

.context {
  background-color: var(--color-background-dark);
  border-radius: var(--border-radius);
  padding: 0.5rem;
  z-index: 1000;
  width: fit-content;
  height: fit-content;
  display: inline-flex;
  flex-direction: column;
  gap: var(--gap-less);
}</style>
