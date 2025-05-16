<script lang="ts">
    import { Size, Highlight, Appearance } from "../../../types/index.js";

    export let size: Size = Size.Medium;
    export let highlight: Highlight = Highlight.None;
    export let image: string | null = null;
    export let indicator: Appearance = Appearance.Inherit;

    $: showMask = indicator !== Appearance.Inherit;
</script>

<div class="avatar {highlight} {size}">
    <div class="image-wrapper">
        {#if image}
            <img src={image} alt="avatar" class:masked={showMask} />
        {/if}
    </div>

    {#if showMask}
        <div class="indicator {indicator}"></div>
    {/if}
</div>

<style>.avatar {
  --computed-avatar-size: var(--avatar-size);
  position: relative;
  display: inline-block;
  border-radius: 50%;
  width: var(--computed-avatar-size);
  height: var(--computed-avatar-size);
  background-color: var(--color-secondary);
}
.avatar.highlight_primary {
  border: 2px solid var(--color-primary);
}
.avatar.highlight_secondary {
  border: 2px solid var(--color-secondary);
}
.avatar.highlight_info {
  border: 2px solid var(--color-info);
}
.avatar.highlight_success {
  border: 2px solid var(--color-success);
}
.avatar.highlight_warning {
  border: 2px solid var(--color-warning);
}
.avatar.highlight_error {
  border: 2px solid var(--color-error);
}
.avatar.size_extra_small {
  --computed-avatar-size: calc(var(--avatar-size) * 0.6);
}
.avatar.size_small {
  --computed-avatar-size: calc(var(--avatar-size) * 0.75);
}
.avatar.size_medium {
  --computed-avatar-size: var(--avatar-size);
}
.avatar.size_large {
  --computed-avatar-size: calc(var(--avatar-size) * 1.25);
}
.avatar.size_extra_large {
  --computed-avatar-size: calc(var(--avatar-size) * 1.5);
}
.avatar .image-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
}
.avatar img.masked {
  mask-image: radial-gradient(circle at 85% 85%, transparent 0.75rem, black 0);
  mask-repeat: no-repeat;
  mask-size: 100% 100%;
}
.avatar .indicator {
  position: absolute;
  bottom: 0.125rem;
  right: 0.125rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  z-index: 2;
}
.avatar .indicator.appearance_primary {
  background-color: var(--color-primary);
}
.avatar .indicator.appearance_secondary {
  background-color: var(--color-secondary);
}
.avatar .indicator.appearance_info {
  background-color: var(--color-info);
}
.avatar .indicator.appearance_success {
  background-color: var(--color-success);
}
.avatar .indicator.appearance_warning {
  background-color: var(--color-warning);
}
.avatar .indicator.appearance_error {
  background-color: var(--color-error);
}</style>
