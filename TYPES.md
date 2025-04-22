# 📘 June UI Kit – Type Definitions Guide

This guide provides descriptions and usage examples for the TypeScript types used throughout the June UI Kit. These types help ensure consistency and type safety across components.

---

## 🖌️ Appearance

**Description:** Defines the visual style or theme of a component.

**Type Definition:**
```ts
export enum Appearance {
    Primary     = "appearance_primary",
    Secondary   = "appearance_secondary",
    Info        = "appearance_info",
    Success     = "appearance_success",
    Warning     = "appearance_warning",
    Error       = "appearance_error",
    Transparent = "apperance_transparent",
    Bright      = "appearance_bright",
    Muted       = "appearance_muted",
    Inherit     = "appearance_inherit",
}
```

**Usage Example:**

```html
<script lang="ts">
  import { Button } from '$lib/elements';
  import type { Appearance } from '$lib/types/Appearance';

  let appearance: Appearance = Appearance.Primary;
</script>

<Button {appearance}>Click Me</Button>
```

## 📏 Size

**Description**: Specifies the size of a component, affecting its dimensions and typography.​

**Type Definition**:

```ts
export enum Size {
    ExtraSmall      = "size_extra_small",
    Small           = "size_small",
    Medium          = "size_medium",
    Large           = "size_large",
    ExtraLarge      = "size_extra_large",
}
```

**Usage Example**:

```html
<script lang="ts">
  import { Input } from '$lib/kit/elements';
  import type { Size } from '$lib/types/Size';

  let size: Size = Size.Medium;
</script>

<Input {size} />
```

## 🧩 Shape

**Description**: Determines the shape of a component, such as its border radius.​

**Type Definition**:

```ts
export enum Shape {
    Standard    = "shape_standard",
    Pill        = "shape_pill",
}
```

**Usage Example**:

```html
<script lang="ts">
  import { Input } from '$lib/kit/elements';
  import type { Shape } from '$lib/types/Shape';

  let shape: Shape = Shape.Pill;
</script>

<Input {shape}></Input>
```

## 🎨 Highlight

**Description**: Indicates the highlight color or emphasis style of a component.​

**Type Definition**:

```js
export enum Highlight {
    Primary     = "highlight_primary",
    Secondary   = "highlight_secondary",
    Info        = "highlight_info",
    Success     = "highlight_success",
    Warning     = "highlight_warning",
    Error       = "highlight_error",
    None        = "highlight_none",
}
```

**Usage Example**:

```html
<script lang="ts">
  import { Button } from '$lib/elements';
  import type { Highlight } from '$lib/types/Highlight';

  let highlight: Highlight = Highlight.Success;
</script>

<Button {highlight}>Success!</Button>
```

## 🚦 State

**Description**: Represents the current state of a component, such as its interactivity or loading status.​

**Type Definition**:


```ts
export enum State {
    Default     = "state_default",
    Enabled     = "state_enabled",
    Disabled    = "state_disabled",
    Loading     = "state_loading",
}
```

**Usage Example**:

```html
<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import type { State } from '$lib/types/State';

  let state: State = 'loading';
</script>

<Button {state}>Submit</Button>
```


## 🌀 Animation

**Description**: Specifies the animation applied to a component.​
Reddit+1DEV Community+1

**Type Definition**:

```ts
export enum Animation {
    Pulse   = "animation_pulse",
    Spin    = "animation_spin",
    None    = "animation_none"
}
```

**Usage Example**:

```html
<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import type { Animation } from '$lib/types/Animation';

  let animation: Animation = 'spin';
</script>

<Icon name="loader" {animation} />
```

## 🖼️ SVGShape

**Description**: Enumerates the available SVG icons used within the UI Kit.​

**Type Definition**:

```ts
export enum SVGShape {
    Circle = `<path ${SVGShapeOptions} d="m11.67,1.92C6.28,1.92,1.92,6.28,1.92,11.67s4.36,9.75,9.75,9.75,9.75-4.36,9.75-9.75S17.05,1.92,11.67,1.92Z"/>`,
    XMark = `<path ${SVGShapeOptions} d="M6 18L18 6M6 6L18 18"/>`
    // ... other icons
}
```

**Usage Example**:

```html
<script lang="ts">
  import Icon from '$lib/components/Icon.svelte';
  import { SVGShape } from '$lib/types/SVGShape';
</script>

<Icon icon={SVGShape.User} />
```

For more detailed information and additional types, please refer to the official documentation or the source code within the `src/lib/types` directory.