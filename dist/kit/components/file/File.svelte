<script lang="ts">
    import { Appearance, getIconForType, Icon, Input, PredefinedColor, Size, SVGShape, Text } from "../../../index.js";
    import { createEventDispatcher, tick } from "svelte";
    import ContextMenu from "../context/ContextMenu.svelte";
    import prettyBytes from 'pretty-bytes';
    import type { ContextItem } from "../../../types/Context.js";

    export let name: string = "Untitled File";
    export let bytes: number = 0;   
    export let type: string = "txt";
    export let color: PredefinedColor | undefined = undefined;
    export let additionalContext: ContextItem[] = []


    let rename: boolean = false;
    let inputRef: HTMLInputElement | undefined;

    $: if (rename && inputRef) {
        // delay one tick to ensure input is rendered
        tick().then(() => inputRef?.focus());
    }
    $: fileIcon = getIconForType(type);

    const dispatch = createEventDispatcher();
</script>

<ContextMenu
    items={[
        {
            id: "rename",
            text: "Rename",
            icon: SVGShape.Pencil,
        },
        ...additionalContext
    ]}
    
    on:select={opt => {
        if (opt.detail.id === "rename") {
            rename = true;
            return;
        }
        dispatch("context", opt.detail);
    }}>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="file" on:click={() => dispatch("open")}>
        <Icon icon={fileIcon} size={Size.ExtraLarge} {color} />
        <div class="details">
            {#if rename}
                <Input bind:value={name} size={Size.Small} bind:inputRef on:blur={() => rename = false} on:keyevent={(e) => {
                    if (e.detail.key === "Enter") {
                        rename = false;
                    }
                }}/>
            {:else}
                <Text singleLine>{name}</Text>
                <Text singleLine size={Size.Small} appearance={Appearance.Muted}>{prettyBytes(bytes)} (.{type})</Text>
            {/if}
        </div>
    </div>
</ContextMenu>

<style>.file {
  --file-size: 7rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-less);
  width: var(--file-size);
  height: fit-content;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: var(--border-radius);
  padding: var(--padding);
}
.file .details {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: var(--gap-minimal);
}
.file:hover {
  cursor: pointer;
}</style>