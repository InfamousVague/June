import { Size } from "../../../types/Size.js";
import { BinaryState } from "../../../types/State.js";
export const defaultState = BinaryState.Off;
export const defaultSize = Size.Medium;
export function toggle(event, state) {
    if (state === BinaryState.Disabled)
        return state; // prevent toggling when disabled
    const target = event.target;
    return target.checked ? BinaryState.On : BinaryState.Off;
}
