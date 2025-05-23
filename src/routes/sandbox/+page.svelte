<script lang="ts">
    import { Input, Sidebar, SVGShape } from "$lib/index.js";
    import Button from "$lib/kit/elements/button/Button.svelte";
    import Toolbar from "$lib/kit/layout/toolbar/Toolbar.svelte";
  
	let totalPages = 1000;
	let currentPage = 1;
  </script>
  
  <div class="demo">
	<Sidebar>

		<Toolbar>
			<div slot="left" class="left">
				<Input icon={SVGShape.Search} />
			</div>

			<div>
				Middle
			</div>

			<div slot="right" class="right">
				<Button icon={SVGShape.FolderPlus} />
			</div>

		</Toolbar>
	</Sidebar>
	
  </div>
  
  <style lang="scss">
  </style>
  