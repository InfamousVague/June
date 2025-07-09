<script lang="ts">
    export let value: string = `
# Title
## Subtitle
Some *bold* and _italic_ text

- List item
1. Ordered item

> Quote block

\`inline code\`

***`;
  
    // Parse each line individually and decorate syntax inline
    function parseLine(line: string): string {
      // Headings: #, ##, ###
      line = line.replace(/^(#{1,6})\s+(.*)/, (_, hashes, text) =>
        `<span class="md">${hashes}</span> <span class="h${hashes.length}">${text}</span>`
      );
  
      // Unordered list
      line = line.replace(/^(\s*[-*+])\s+(.*)/, (_, bullet, item) =>
        `<span class="md">${bullet}</span> <span class="li">${item}</span>`
      );
  
      // Ordered list
      line = line.replace(/^(\s*\d+\.)\s+(.*)/, (_, num, item) =>
        `<span class="md">${num}</span> <span class="li">${item}</span>`
      );
  
      // Blockquote
      line = line.replace(/^(\s*&gt;|\s*>)(.*)/, (_, q, content) =>
        `<span class="md">&gt;</span><span class="quote">${content.trim()}</span>`
      );
  
      // Horizontal rule
      if (/^\s*(\*\s*){3,}$/.test(line) || /^\s*(-\s*){3,}$/.test(line)) {
        return `<hr class="hr" />`;
      }
  
      // Inline code
      line = line.replace(/`([^`]+)`/g, (_, content) =>
        `<span class="md">\`</span><code>${content}</code><span class="md">\`</span>`
      );
  
      // Bold
      line = line.replace(/\*([^\*]+)\*/g, (_, content) =>
        `<span class="md">*</span><strong>${content}</strong><span class="md">*</span>`
      );
  
      // Italic
      line = line.replace(/_([^_]+)_/g, (_, content) =>
        `<span class="md">_</span><em>${content}</em><span class="md">_</span>`
      );
  
      return line || '<br>';
    }
  
    $: lines = value.split('\n');
  </script>
  
  <style>.editor-container {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border-color, #444);
  font-family: monospace;
  background: var(--background, #1e1e1e);
  color: var(--text-color, #e6e6e6);
  line-height: 1.5;
  font-size: 1rem;
  height: 100%;
  min-height: 300px;
}

.line-numbers {
  padding: 0.75rem 0.5rem;
  background: #2b2b2b;
  user-select: none;
  color: #666;
  text-align: right;
  min-width: 2.5rem;
}

.lines {
  padding: 0.75rem;
  flex: 1;
  position: relative;
}

.preview {
  white-space: pre-wrap;
  word-wrap: break-word;
  pointer-events: none;
  z-index: 1;
}

textarea {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: transparent;
  caret-color: #e6e6e6;
  background: transparent;
  border: none;
  resize: none;
  z-index: 2;
  font: inherit;
  line-height: inherit;
  padding: 0;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  overflow: auto;
}

strong {
  font-weight: bold;
}

em {
  font-style: italic;
}

code {
  background: rgba(255, 255, 255, 0.1);
  padding: 0 0.3em;
  border-radius: 3px;
  font-family: monospace;
}

hr.hr {
  border: none;
  border-top: 1px solid #555;
  margin: 0.25rem 0;
}

.md {
  opacity: 0.4;
}

.quote {
  color: #88c0d0;
  font-style: italic;
}

.h1 {
  font-size: 1.5em;
  font-weight: bold;
}

.h2 {
  font-size: 1.3em;
  font-weight: bold;
}

.h3 {
  font-size: 1.1em;
  font-weight: bold;
}

.li {
  color: #ccc;
}</style>
  
  <div class="editor-container">
    <div class="line-numbers">
      {#each lines as _, i}
        {i + 1}<br>
      {/each}
    </div>
  
    <div class="lines">
      <div class="preview">
        {#each lines as line}
          <div>{@html parseLine(line)}</div>
        {/each}
      </div>
      <textarea bind:value rows={lines.length} spellcheck="false" />
    </div>
  </div>
  