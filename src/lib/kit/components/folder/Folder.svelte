<script lang="ts">
    import { Appearance, Icon, Input, Size, SVGShape, Text } from "$lib/index.js";
    import { tick } from "svelte";
    import ContextMenu from "../context/ContextMenu.svelte";
    import prettyBytes from 'pretty-bytes';

    export let name: string = "Untitled Folder";
    export let bytes: number = 0;
    export let items: number = 0;
    export let open: boolean = false;    

    let rename: boolean = false;
    let inputRef: HTMLInputElement | undefined;
    

    $: if (rename && inputRef) {
        // delay one tick to ensure input is rendered
        tick().then(() => inputRef?.focus());
    }
</script>

<ContextMenu
    items={[
        {
            id: "rename",
            text: "Rename",
            icon: SVGShape.Pencil,
        },
        {
            id: "rename",
            text: "Delete",
            icon: SVGShape.XMark,
        }
    ]}
    
    on:select={opt => {
        if (opt.detail.id === "rename") {
            rename = true;
        }
    }}>
    <div class="folder">
        <Icon icon={open ? SVGShape.FolderOpen : SVGShape.Folder} size={Size.ExtraLarge} />
        <div class="details">
            {#if rename}
                <Input bind:value={name} size={Size.Small} bind:inputRef on:blur={() => rename = false} fill on:keyevent={(e) => {
                    if (e.detail.key === "Enter") {
                        rename = false;
                    }
                }}/>
            {:else}
                <Text singleLine>{name}</Text>
                <Text singleLine size={Size.Small} appearance={Appearance.Muted}>{prettyBytes(bytes)} - {items} item(s)</Text>
            {/if}
        </div>
    </div>
</ContextMenu>


<style lang="scss">
    .folder {
        --folder-size: 7rem;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: var(--gap-less);
        width: var(--folder-size);
        aspect-ratio: 1/1;
        overflow: hidden;
        border-radius: var(--border-radius);
        padding: var(--padding);

        .details {
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            gap: var(--gap-minimal);
        }

        &:hover {
            cursor: pointer;
        }
    }
</style>