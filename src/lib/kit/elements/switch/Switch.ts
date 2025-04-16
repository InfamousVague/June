import { Size } from "$lib/types/Size.js";
import { BinaryState } from "$lib/types/State.js";

export const defaultState: BinaryState = BinaryState.Off;
export const defaultSize: Size = Size.Medium;

export function toggle(event: Event, state: BinaryState): BinaryState {
	if (state === BinaryState.Disabled) return state; // prevent toggling when disabled

	const target = event.target as HTMLInputElement;
	return target.checked ? BinaryState.On : BinaryState.Off;
}