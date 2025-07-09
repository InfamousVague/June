<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
  
    export let line: string = '';
    export let lineNumber: number = 1;
  
    const dispatch = createEventDispatcher();
    let inputEl: HTMLInputElement;
  
    function parseMarkdown(text: string): string {
      return text
        .replace(/^(#{1,6})\s+(.*)/, (_, hashes, content) =>
          `<span class="md">${hashes}</span> <span class="h${hashes.length}">${content}</span>`
        )
        .replace(/\*([^\*]+)\*/g, (_, content) =>
          `<span class="md">*</span><strong>${content}</strong><span class="md">*</span>`
        )
        .replace(/_([^_]+)_/g, (_, content) =>
          `<span class="md">_</span><em>${content}</em><span class="md">_</span>`
        )
        .replace(/`([^`]+)`/g, (_, content) =>
          `<span class="md">\`</span><code>${content}</code><span class="md">\`</span>`
        );
    }
  
    function handleInput(e: Event) {
      const val = (e.target as HTMLInputElement).value;
      dispatch('change', val);
    }
  
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === 'Enter') {
        e.preventDefault();
        dispatch('enter');
      } else if (e.key === 'Backspace' && line === '') {
        e.preventDefault();
        dispatch('delete');
      }
    }
  
    onMount(() => {
      inputEl.focus();
    });
  </script>
  
  <style>
  .line {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .line-number {
    width: 2rem;
    color: #666;
    user-select: none;
    text-align: right;
  }
  
  .input-wrapper {
    position: relative;
    flex: 1;
  }
  
  input {
    position: absolute;
    width: 100%;
    color: transparent;
    caret-color: #fff;
    background: transparent;
    border: none;
    font: inherit;
    z-index: 2;
  }
  
  .preview {
    position: relative;
    z-index: 1;
    white-space: pre-wrap;
    word-wrap: break-word;
    pointer-events: none;
  }
  
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
  code {
    background: rgba(255, 255, 255, 0.1);
    padding: 0 0.25em;
    border-radius: 4px;
  }
  .md {
    opacity: 0.5;
  }
  .h1 { font-size: 1.5em; font-weight: bold; }
  .h2 { font-size: 1.3em; font-weight: bold; }
  .h3 { font-size: 1.1em; font-weight: bold; }
  </style>
  
  <div class="line">
    <div class="line-number">{lineNumber}</div>
    <div class="input-wrapper">
      <div class="preview">{@html parseMarkdown(line)}</div>
      <input
        bind:this={inputEl}
        value={line}
        on:input={handleInput}
        on:keydown={handleKeydown}
      />
    </div>
  </div>
  