<script lang="ts">
  import { Button, Shape, Sidebar, SVGShape, ThemeSwitcher, Toolbar } from "$lib/index.js";
  import Editor from "$lib/kit/components/markdown_input/Editor.svelte";
  import MarkdownInput from "$lib/kit/components/markdown_input/MarkdownInput.svelte";
  </script>
  
 
<div class="controls">
    <Toolbar shape={Shape.Pill}>
        <div slot="right">  
            <Button shape={Shape.Pill} icon={SVGShape.Plus}></Button>
            <Button shape={Shape.Pill} icon={SVGShape.Cog}></Button>
            <ThemeSwitcher />
        </div>
    </Toolbar>
</div>


<style lang="scss">
    .controls {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        z-index: 1000;
    }
</style>