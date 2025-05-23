<div class="toolbar">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="middle">
        <slot class="middle"></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
</div>

<style lang="scss">
    .toolbar {
        display: inline-flex;
        height: fit-content;
        padding: var(--padding);
        background-color: var(--color-background-secondary);
        width: calc(100% - (var(--padding) * 2));
        align-items: center;
        gap: var(--gap);

        .left {
            align-self: flex-start;
        }

        .middle {
            flex: 1;
        }

        .right {
            align-self: flex-end;
        }
        
    }
</style>