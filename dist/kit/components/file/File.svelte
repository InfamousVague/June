<script lang="ts">
    import { Appearance, Icon, Input, Size, SVGShape, Text } from "../../../index.js";
    import { tick } from "svelte";
    import ContextMenu from "../context/ContextMenu.svelte";
    import prettyBytes from 'pretty-bytes';

    export let name: string = "Untitled File";
    export let bytes: number = 0;   
    export let type: string = "txt";

    const fileTypeIcons = [
        { name: "Text", icon: SVGShape.DocumentTXT, filetypes: ["txt", "rtf"] },
        { name: "Document", icon: SVGShape.Document, filetypes: ["doc", "docx", "odt"] },
        { name: "Spreadsheet", icon: SVGShape.DocumentChart, filetypes: ["xls", "xlsx", "ods", "csv"] },
        { name: "Presentation", icon: SVGShape.DocumentChart, filetypes: ["ppt", "pptx", "odp"] },
        { name: "Image", icon: SVGShape.DocumentMedia, filetypes: ["jpg", "jpeg", "png", "gif", "bmp", "webp"] },
        { name: "Video", icon: SVGShape.DocumentMedia, filetypes: ["mp4", "mkv", "mov", "avi", "webm"] },
        { name: "Audio", icon: SVGShape.DocumentMedia, filetypes: ["mp3", "wav", "ogg", "flac"] },
        { name: "PDF", icon: SVGShape.DocumentPDF, filetypes: ["pdf"] },
        { name: "Archive", icon: SVGShape.Archive, filetypes: ["zip", "rar", "7z", "tar", "gz"] },
        { name: "Code", icon: SVGShape.DocumentCode, filetypes: ["js", "ts", "html", "css", "json", "xml", "py", "cpp", "java"] },
    ];

    function getIconForType(ext: string): SVGShape {
        ext = ext.toLowerCase();
        for (const group of fileTypeIcons) {
            if (group.filetypes.includes(ext)) return group.icon;
        }
        return SVGShape.Document;
    }

    let rename: boolean = false;
    let inputRef: HTMLInputElement | undefined;

    $: if (rename && inputRef) {
        // delay one tick to ensure input is rendered
        tick().then(() => inputRef?.focus());
    }
    $: fileIcon = getIconForType(type);
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
    <div class="file">
        <Icon icon={fileIcon} size={Size.ExtraLarge} />
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