<script lang="ts">
  import { Button, Shape, Sidebar, SVGShape, ThemeSwitcher, Toolbar } from "$lib/index.js";
  import Editor from "$lib/kit/components/markdown_input/Editor.svelte";
  import MarkdownInput from "$lib/kit/components/markdown_input/MarkdownInput.svelte";
  import Hamburger from "$lib/kit/elements/hamburger/Hamburger.svelte";

  let sidebarOpen = false;
  </script>
  
 
<div class="controls">
    <Sidebar open={sidebarOpen} collapseFully fullscreen>

    </Sidebar>

    <Hamburger on:toggle={() => sidebarOpen = !sidebarOpen} />
</div>


<style lang="scss">
    .controls {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        z-index: 1000;
    }
</style>