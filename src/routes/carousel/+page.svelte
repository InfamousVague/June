<script lang="ts">
    import Carousel from "$lib/kit/components/carousel/Carousel.svelte";

</script>

<Carousel interval={3000}>
	<div style="background-color: #9b59b6">Custom Frame A</div>
	<div style="background-color: #f39c12">Custom Frame B</div>
	<div style="background-color: #1abc9c">Custom Frame C</div>
	<div style="background-color: #efe312">Custom Frame C</div>
	<div style="background-color: #9ab999">Custom Frame C</div>
	<div style="background-color: #ff839d">Custom Frame C</div>
</Carousel>

<style lang="scss">
</style>
