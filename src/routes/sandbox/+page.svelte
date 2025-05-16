<script lang="ts">
	import Pagination from "$lib/kit/components/pagination/Pagination.svelte";
	import Text from "$lib/kit/elements/text/Text.svelte";
    import { Appearance } from "$lib/types/Appearance.js";
  
	let totalPages = 1000;
	let currentPage = 1;
  </script>
  
  <div class="demo">
	<Text>Paginated Content</Text>
  
	<div class="content">
	  <Text appearance={Appearance.Muted}>Showing results for page {currentPage}</Text>
	</div>
  
	<Pagination
		bind:currentPage
		totalPages={1000}
		maxVisible={7}
		on:change={(e) => currentPage = e.detail.page}
	/>
  
  </div>
  
  <style lang="scss">
  .demo {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: var(--gap);
	padding: var(--padding-more);
  
	.content {
	  margin-bottom: var(--gap-more);
	}
  }
  </style>
  