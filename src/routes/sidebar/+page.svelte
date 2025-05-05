<script lang="ts">
    import Button from "$lib/kit/elements/button/Button.svelte";
import Sidebar from "$lib/kit/layout/sidebar/Sidebar.svelte";

</script>

<Sidebar>
    <div slot="header">
        <Button fill>Marketplace</Button>
    </div>

    <div slot="body">
        Sidebar Body
    </div>

    <div slot="footer">
        Sidebar Footer
    </div>

    Content Here

</Sidebar>

<style lang="scss">
</style>
