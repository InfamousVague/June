# June UI Kit – Usage Guide

For type usage and examples see [TYPES.md](TYPES.md).


## Elements 

### Button

A stylized button component for user interactions, supporting clicks and form submissions. Use it to trigger actions or navigate through your app.

Import Path: `$lib/kit/elements/button/Button.svelte`

```html
<script>
  import { Button } from '$lib/kit/elements';

  function handleClick() {
    console.log('Button clicked');
  }
</script>

<!-- Usage of Button with click handler -->
<Button on:click={handleClick}>Submit</Button>
```

### Checkbox

A custom checkbox input component that can be toggled on or off. It includes an optional label (as its child content) to describe the option being toggled.

Import Path: `$lib/kit/elements/checkbox/Checkbox.svelte`

```html
<script>
  import { Checkbox } from '$lib/kit/elements';
  let subscribe = false;
</script>

<!-- Usage of Checkbox with a label and two-way binding -->
<Checkbox bind:checked={subscribe}>Subscribe to newsletter</Checkbox>
```


### Hamburger

A hamburger menu icon component for toggling navigation menus. It displays the classic three-line icon, and can toggle to an “X” or close icon when active.

Import Path: `$lib/kit/elements/hamburger/Hamburger.svelte`

```html
<script>
  import { Hamburger } from '$lib/kit/elements';
  let menuOpen = false;
</script>

<!-- Usage of Hamburger with bind for open state -->
<Hamburger bind:open={menuOpen} on:click={() => menuOpen = !menuOpen} />
```

### Icon

A flexible icon component for displaying graphical icons (e.g. SVGs or icon fonts). You can specify which icon to display, and possibly adjust its size or style via props.

Import Path: `$lib/kit/elements/icon/Icon.svelte`

```html
<script>
  import { Icon } from '$lib/kit/elements';
</script>

<!-- Usage of Icon (for example, a heart icon) -->
<Icon name="heart" />
```

### Input

A styled text input field for user text entry. It supports standard text input features like placeholders and can be used with two-way binding for reactive forms.

Import Path: `$lib/kit/elements/input/Input.svelte`

```html
<script>
  import { Input } from '$lib/kit/elements';
  let username = '';
</script>

<!-- Usage of Input with placeholder and two-way data binding -->
<Input bind:value={username} placeholder="Enter your username" />
```

### Key

A component for displaying a keyboard key label. Use it to visually represent keyboard keys (for example in shortcut hints) with a stylized appearance similar to an actual keycap.

Import Path: `$lib/kit/elements/key/Key.svelte`


```html
<script>
  import { Key } from '$lib/kit/elements';
</script>

<!-- Usage of Key to display a keyboard key (e.g., "Enter") -->
<Key>Enter</Key>
```

### Loader

A loading indicator component to show progress or waiting state. Often rendered as a spinner or animation, it signals to the user that a process is ongoing.

Import Path: `$lib/kit/elements/loader/Loader.svelte`

```html
<script>
  import { Loader } from '$lib/kit/elements';
</script>

<!-- Usage of Loader (displays a loading spinner) -->
<Loader />
```

### Progress

A progress bar component for visualizing completion percentage of a task or loading sequence. You can set its value (and max, if needed) to indicate progress.

Import Path: `$lib/kit/elements/progress/Progress.svelte`

```html
<script>
  import { Progress } from '$lib/kit/elements';
  let percent = 50;
</script>

<!-- Usage of Progress bar showing 50% completion -->
<Progress value={percent} max={100} />
```

### Radio

A single radio button input for selecting an option. Typically used as part of a group (see RadioGroup below) to allow the user to choose one option from many.

Import Path: `$lib/kit/elements/radio/Radio.svelte`

```html
<script>
  import { Radio, RadioGroup } from '$lib/kit/elements';
  let selectedOption = 'A';
</script>

<!-- Usage of Radio within a RadioGroup for multiple options -->
<RadioGroup bind:value={selectedOption}>
  <Radio value="A">Option A</Radio>
  <Radio value="B">Option B</Radio>
  <Radio value="C">Option C</Radio>
</RadioGroup>
```

### RadioGroup

A container component to group multiple Radio components. It manages the state of which radio is selected, ensuring only one option in the group can be active at a time.

Import Path: `$lib/kit/elements/radio/RadioGroup.svelte`

```html
<script>
  import { Radio, RadioGroup } from '$lib/kit/elements';
  let choice = 'yes';
</script>

<!-- Usage of RadioGroup wrapping Radio buttons -->
<RadioGroup bind:value={choice}>
  <Radio value="yes">Yes</Radio>
  <Radio value="no">No</Radio>
</RadioGroup>
```

### Range

A range slider component for selecting a numeric value within a range. It provides a draggable handle on a track, similar to an HTML `<input type="range">`.

Import Path: `$lib/kit/elements/range/Range.svelte`

```html
<script>
  import { Range } from '$lib/kit/elements';
  let volume = 75;
</script>

<!-- Usage of Range slider with min, max, and binding -->
<Range bind:value={volume} min={0} max={100} />
```

### Select

A custom select box component for picking one option from a dropdown list. It can be used similar to a native HTML select, with options provided as children or via props.

Import Path: `$lib/kit/elements/select/Select.svelte`

```html
<script>
  import { Select } from '$lib/kit/elements';
  let favoriteColor = 'blue';
</script>

<!-- Usage of Select with option elements -->
<Select bind:value={favoriteColor}>
  <option value="red">Red</option>
  <option value="blue">Blue</option>
  <option value="green">Green</option>
</Select>
```

### Swatch

A color swatch component for displaying (and possibly selecting) colors. Typically rendered as a small colored square or circle, it can be used to show a chosen color value.

Import Path: `$lib/kit/elements/swatch/Swatch.svelte`

```html
<script>
  import { Swatch } from '$lib/kit/elements';
</script>

<!-- Usage of Swatch displaying a specific color -->
<Swatch color="#3498db" />
```

### Switch

A toggle switch component representing an on/off state (functionally similar to a checkbox, but with a slider appearance). Use it for binary settings like dark mode toggles, etc.

Import Path: `$lib/kit/elements/switch/Switch.svelte`

```html
<script>
  import { Switch } from '$lib/kit/elements';
  let isEnabled = true;
</script>

<!-- Usage of Switch with two-way binding and label -->
<Switch bind:checked={isEnabled}>Enable notifications</Switch>
```

### Text

A text display component for rendering paragraphs or spans of text with consistent styling. It can be used for body text, captions, or any styled textual content.

Import Path: `$lib/kit/elements/text/Text.svelte`

```html
<script>
  import { Text } from '$lib/kit/elements';
</script>

<!-- Usage of Text for a paragraph of content -->
<Text>This is a sample piece of text content displayed using the Text component.</Text>
```

## Components

### Tooltip

A component that provides a tooltip popup, which displays informative text when a user hovers over or focuses on a target element. Wrap the target element with Tooltip and provide the tooltip text via a prop.

Import Path: `$lib/kit/components/tooltip/Tooltip.svelte`

```html
<script>
  import { Tooltip } from '$lib/kit/components';
  import { Button } from '$lib/kit/elements';
</script>

<!-- Usage of Tooltip wrapping a button, with tooltip content provided -->
<Tooltip content="Click to submit the form">
  <Button>Submit</Button>
</Tooltip>
```

### MFAInput

A multi-factor authentication code input component that splits user input into multiple fields (typically for one-time passcodes). It streamlines entering verification codes by automatically moving focus as digits are entered.

Import Path: `$lib/kit/components/mfa_input/MFAInput.svelte`

```html
<script>
  import { MFAInput } from '$lib/kit/components';

  // Function to handle the completed code entry
  function verifyCode(event) {
    const code = event.detail;  // the full code entered
    console.log('MFA code entered:', code);
  }
</script>

<!-- Usage of MFAInput with length of 6 digits, listening for completion event -->
<MFAInput length={6} on:complete={verifyCode} />
```