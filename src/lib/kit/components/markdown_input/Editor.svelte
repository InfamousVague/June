<script lang="ts">
    import { onMount } from 'svelte';
    import Line from "./Line.svelte";
  
    let lines: string[] = [''];
  
    function handleLineChange(index: number, value: string) {
      lines[index] = value;
    }
  
    function handleLineEnter(index: number) {
      lines = [
        ...lines.slice(0, index + 1),
        '',
        ...lines.slice(index + 1)
      ];
    }
  
    function handleLineDelete(index: number) {
      if (index > 0) {
        lines = [
          ...lines.slice(0, index - 1),
          lines[index - 1] + lines[index],
          ...lines.slice(index + 1)
        ];
      }
    }
  </script>
  
  <style>
  .editor {
    font-family: monospace;
    background: #1e1e1e;
    color: #e6e6e6;
    padding: 1rem;
    border-radius: 8px;
  }
  </style>
  
  <div class="editor">
    {#each lines as line, i}
      <Line
        {line}
        lineNumber={i + 1}
        on:change={(e) => handleLineChange(i, e.detail)}
        on:enter={() => handleLineEnter(i)}
        on:delete={() => handleLineDelete(i)}
      />
    {/each}
  </div>
  