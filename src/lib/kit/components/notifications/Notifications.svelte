<script lang="ts">
	import { notifications } from "./store.js";
	import { AbsolutePosition, Appearance, Size, SVGShape } from "$lib/types/index.js";
	import { Button, Icon, Text } from "$lib/kit/elements/index.js";
	import { fly } from "svelte/transition";

	export let position: AbsolutePosition = AbsolutePosition.TopRight;
</script>

<div class="notification_group {position}">
	{#each $notifications as n (n.id)}
		<div
			class="notification {n.appearance}"
			in:fly={{ x: 100, opacity: 0, duration: 250 }}
			out:fly={{ x: 100, opacity: 0, duration: 200 }}>
			
			<div class="icon">
				<Icon
					icon={n.icon}
					size={Size.ExtraLarge}
					appearance={n.appearance === Appearance.Secondary ? Appearance.Inherit : n.appearance}
				/>
			</div>

			<div class="text">
				<Text>{n.title}</Text>
				<Text appearance={Appearance.Muted}>{n.subtitle}</Text>
			</div>

			<Button
				appearance={n.appearance}
				on:pressed={() => notifications.dismiss(n.id!)}
				icon={SVGShape.XMark}
				size={Size.Small}
			/>
		</div>
	{/each}
</div>


<style lang="scss">
    @use "./Notifications.scss" as *;
</style>
