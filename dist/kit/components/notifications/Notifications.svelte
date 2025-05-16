<script lang="ts">
	import { notifications } from "./store.js";
	import { AbsolutePosition, Appearance, Size, SVGShape } from "../../../types/index.js";
	import { Button, Icon, Text } from "../../elements/index.js";
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


<style>.notification_group {
  position: fixed;
  width: var(--notification-size);
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  z-index: 9999;
  padding: var(--padding-more);
}
.notification_group.top {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.notification_group.top_right {
  top: 0;
  right: 0;
}
.notification_group.top_left {
  top: 0;
  left: 0;
}
.notification_group.left {
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.notification_group.right {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
.notification_group.bottom {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.notification_group.bottom_right {
  bottom: 0;
  right: 0;
}
.notification_group.bottom_left {
  bottom: 0;
  left: 0;
}
.notification_group.middle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.notification {
  background: var(--color-background-opaque);
  backdrop-filter: blur(var(--blur-radius));
  border-radius: var(--border-radius);
  padding: var(--padding-more);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--gap);
  box-shadow: var(--shadow);
}
.notification .text {
  flex: 1;
}
.notification .close {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--text-color);
}</style>
