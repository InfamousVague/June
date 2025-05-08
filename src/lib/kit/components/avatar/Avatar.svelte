<script lang="ts">
    import { Size, Highlight, Appearance } from "$lib/types/index.js";

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

<style lang="scss">
$appearances: (
    primary: --color-primary,
    secondary: --color-secondary,
    info: --color-info,
    success: --color-success,
    warning: --color-warning,
    error: --color-error
);

$highlights: (
    primary: --color-primary,
    secondary: --color-secondary,
    info: --color-info,
    success: --color-success,
    warning: --color-warning,
    error: --color-error
);
.avatar {
    --computed-avatar-size: var(--avatar-size);

    position: relative;
    display: inline-block;
    border-radius: 50%;
    width: var(--computed-avatar-size);
    height: var(--computed-avatar-size);

    @each $highlight, $var in $highlights {
        &.highlight_#{$highlight} {
            border: 2px solid var(#{$var});
        }
    }

    &.size_extra_small { --computed-avatar-size: calc(var(--avatar-size) * 0.6); }
    &.size_small       { --computed-avatar-size: calc(var(--avatar-size) * 0.75); }
    &.size_medium      { --computed-avatar-size: var(--avatar-size); }
    &.size_large       { --computed-avatar-size: calc(var(--avatar-size) * 1.25); }
    &.size_extra_large { --computed-avatar-size: calc(var(--avatar-size) * 1.5); }

    .image-wrapper {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        display: block;

        &.masked {
            mask-image: radial-gradient(
                circle at 85% 85%,
                transparent 0.75rem,
                black 0
            );
            mask-repeat: no-repeat;
            mask-size: 100% 100%;
        }
    }

    .indicator {
        position: absolute;
        bottom: 0.125rem;
        right: 0.125rem;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        z-index: 2;

        @each $appearance, $var in $appearances {
            &.appearance_#{$appearance} {
                background-color: var(#{$var});
            }
        }
    }
}

</style>
