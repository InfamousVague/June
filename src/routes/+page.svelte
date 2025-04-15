<script>
    import Button from "$lib/kit/elements/button/Button.svelte";
    import { Appearance } from "$lib/types/Appearance.js";
</script>
<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<Button text="Button" appearance={Appearance.Primary}></Button>

<style lang="scss">
    // Import June variables
    @use "$lib/June.scss" as *;
</style>