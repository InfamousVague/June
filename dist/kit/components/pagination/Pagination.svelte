<script lang="ts">
    import { Icon, Button, Input } from "../../elements/index.js";
    import { SVGShape, Appearance, Size, State, Shape } from "../../../types/index.js";
    import { createEventDispatcher } from "svelte";
  
    export let totalPages: number = 1;
    export let currentPage: number = 1;
    export let maxVisible: number = 5;
  
    const dispatch = createEventDispatcher();
    let inputPage = currentPage;
  
    function goToPage(page: number) {
      if (page !== currentPage && page >= 1 && page <= totalPages) {
        dispatch("change", { page });
      }
    }
  
    function handleInputSubmit() {
      if (inputPage >= 1 && inputPage <= totalPages) {
        goToPage(inputPage);
      } else {
        inputPage = currentPage;
      }
    }
  
    function handleInput(e: CustomEvent<{ value: string }>) {
      const parsed = parseInt(e.detail.value, 10);
      if (!isNaN(parsed)) {
        inputPage = parsed;
      }
    }
  
    function handleKeydown(e: CustomEvent<{ value: string }>) {
        if (e.detail.value === "Enter") {
            handleInputSubmit();
        }
    }
  
    $: visiblePages = (() => {
      const half = Math.floor(maxVisible / 2);
      let start = Math.max(currentPage - half, 1);
      let end = Math.min(start + maxVisible - 1, totalPages);
  
      if (end - start + 1 < maxVisible) {
        start = Math.max(end - maxVisible + 1, 1);
      }
  
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    })();
  
    $: inputPage = currentPage;
  </script>
  
  <div class="pagination">
    <Button
      icon={SVGShape.ChevronLeft}
      appearance={Appearance.Secondary}
      size={Size.Small}
      on:pressed={() => goToPage(currentPage - 1)}
      state={currentPage === 1 ? State.Disabled : State.Default}
    />
  
    {#if visiblePages[0] > 1}
      <Button appearance={Appearance.Secondary} size={Size.Small} on:pressed={() => goToPage(1)}>1</Button>
      <span class="ellipsis">…</span>
    {/if}
  
    {#each visiblePages as page}
      <Button
        appearance={page === currentPage ? Appearance.Primary : Appearance.Secondary}
        size={Size.Small}
        on:pressed={() => goToPage(page)}
      >
        {page}
      </Button>
    {/each}
  
    {#if visiblePages[visiblePages.length - 1] < totalPages}
      <span class="ellipsis">…</span>
      <Button appearance={Appearance.Secondary} size={Size.Small} on:pressed={() => goToPage(totalPages)}>{totalPages}</Button>
    {/if}
  
    <div class="jump-to">
      <span>Page</span>
      <Input
        appearance={Appearance.Secondary}
        size={Size.Small}
        state={State.Default}
        on:input={handleInput}
        on:keydown={handleKeydown}
        placeholder={String(currentPage)}
        clearOnFocus={true}
        numeric={true}
      />
      <span>of {totalPages}</span>
    </div>
  
    <Button
      icon={SVGShape.ChevronRight}
      appearance={Appearance.Secondary}
      size={Size.Small}
      on:pressed={() => goToPage(currentPage + 1)}
      state={currentPage === totalPages ? State.Disabled : State.Default}
    />
  </div>
  
  <style>.pagination {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--gap-less);
  height: fit-content;
}
.pagination .ellipsis {
  padding: 0 var(--padding-less);
  color: var(--text-color-muted);
  user-select: none;
}
.pagination .jump-to {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: var(--text-size-small);
  color: var(--text-color-muted);
}
.pagination .jump-to :global(.input-group) {
  width: 3.5rem;
}</style>
  