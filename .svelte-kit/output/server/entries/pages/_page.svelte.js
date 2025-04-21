import { t as fallback, u as slot, v as attr_class, w as attr_style, q as escape_html, x as bind_props, y as stringify, z as attr, l as pop, p as push, A as ensure_array_like, B as copy_payload, C as assign_payload, D as spread_props } from "../../chunks/index.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
var Position = /* @__PURE__ */ ((Position2) => {
  Position2["Top"] = "position_top";
  Position2["Left"] = "position_left";
  Position2["Bottom"] = "position_bottom";
  Position2["Right"] = "position_right";
  return Position2;
})(Position || {});
const defaultContent = "tooltip_text";
const defaultPosition = Position.Top;
const defaultOffset = 8;
function Tooltip($$payload, $$props) {
  let content = fallback($$props["content"], defaultContent);
  let position = fallback($$props["position"], defaultPosition);
  let offset = fallback($$props["offset"], defaultOffset);
  $$payload.out += `<div class="tooltip-wrapper svelte-a3dsh9"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> <div${attr_class(`tooltip-box ${stringify(position)}`, "svelte-a3dsh9")}${attr_style(`--offset: ${offset}px;`)}>${escape_html(content)} <div${attr_class(`tooltip-arrow ${stringify(position)}`, "svelte-a3dsh9")}></div></div></div>`;
  bind_props($$props, { content, position, offset });
}
var Appearance = /* @__PURE__ */ ((Appearance2) => {
  Appearance2["Primary"] = "appearance_primary";
  Appearance2["Secondary"] = "appearance_secondary";
  Appearance2["Info"] = "appearance_info";
  Appearance2["Success"] = "appearance_success";
  Appearance2["Warning"] = "appearance_warning";
  Appearance2["Error"] = "appearance_error";
  Appearance2["Transparent"] = "apperance_transparent";
  Appearance2["Bright"] = "appearance_bright";
  Appearance2["Muted"] = "appearance_muted";
  Appearance2["Inherit"] = "appearance_inherit";
  return Appearance2;
})(Appearance || {});
var SimpleApperance = /* @__PURE__ */ ((SimpleApperance2) => {
  SimpleApperance2["Light"] = "simple_appearance_light";
  SimpleApperance2["Dark"] = "simple_appearance_dark";
  SimpleApperance2["Inherit"] = "simple_appearance_inherit";
  return SimpleApperance2;
})(SimpleApperance || {});
var Highlight = /* @__PURE__ */ ((Highlight2) => {
  Highlight2["Primary"] = "highlight_primary";
  Highlight2["Secondary"] = "highlight_secondary";
  Highlight2["Info"] = "highlight_info";
  Highlight2["Success"] = "highlight_success";
  Highlight2["Warning"] = "highlight_warning";
  Highlight2["Error"] = "highlight_error";
  Highlight2["None"] = "highlight_none";
  return Highlight2;
})(Highlight || {});
var Style = /* @__PURE__ */ ((Style2) => {
  Style2["Outline"] = "style_outline";
  Style2["Standard"] = "style_standard";
  return Style2;
})(Style || {});
var TextStyle = /* @__PURE__ */ ((TextStyle2) => {
  TextStyle2["Standard"] = "text_style_standard";
  TextStyle2["Bold"] = "text_style_bold";
  TextStyle2["Italic"] = "text_style_italic";
  TextStyle2["Underline"] = "text_style_underline";
  TextStyle2["Strike"] = "text_style_strike";
  return TextStyle2;
})(TextStyle || {});
var Shape = /* @__PURE__ */ ((Shape2) => {
  Shape2["Standard"] = "shape_standard";
  Shape2["Pill"] = "shape_pill";
  return Shape2;
})(Shape || {});
var Size = /* @__PURE__ */ ((Size2) => {
  Size2["ExtraSmall"] = "size_extra_small";
  Size2["Small"] = "size_small";
  Size2["Medium"] = "size_medium";
  Size2["Large"] = "size_large";
  Size2["ExtraLarge"] = "size_extra_large";
  return Size2;
})(Size || {});
const defaultOpen = false;
const defaultSize$8 = Size.Medium;
const defaultAppearance$5 = Appearance.Bright;
function Hamburger($$payload, $$props) {
  let open = fallback($$props["open"], defaultOpen);
  let size = fallback($$props["size"], defaultSize$8);
  let appearance = fallback($$props["appearance"], defaultAppearance$5);
  $$payload.out += `<button${attr_class(`hamburger ${stringify(size)} ${stringify(appearance)}`, "svelte-9cwgde", { "open": open })} aria-label="menu"><svg viewBox="0 0 24 24" class="icon svelte-9cwgde" aria-hidden="true"><line class="line top svelte-9cwgde" x1="4" y1="12" x2="20" y2="12"></line><line class="line middle svelte-9cwgde" x1="4" y1="12" x2="20" y2="12"></line><line class="line bottom svelte-9cwgde" x1="4" y1="12" x2="20" y2="12"></line></svg></button>`;
  bind_props($$props, { open, size, appearance });
}
var Animation = /* @__PURE__ */ ((Animation2) => {
  Animation2["Pulse"] = "animation_pulse";
  Animation2["None"] = "animation_none";
  return Animation2;
})(Animation || {});
var PredefinedColor = /* @__PURE__ */ ((PredefinedColor2) => {
  PredefinedColor2["CreamyPeach"] = "#f3a683";
  PredefinedColor2["SawtoothAAK"] = "#f19066";
  PredefinedColor2["RosyHighlight"] = "#f7d794";
  PredefinedColor2["Summertime"] = "#f5cd79";
  PredefinedColor2["SoftBlue"] = "#778beb";
  PredefinedColor2["Cornflower"] = "#546de5";
  PredefinedColor2["BrewedMustard"] = "#e77f67";
  PredefinedColor2["Tigerly"] = "#e15f41";
  PredefinedColor2["OldGermanium"] = "#cf6a87";
  PredefinedColor2["DeepRose"] = "#c44569";
  PredefinedColor2["MountainMajesty"] = "#786fa6";
  PredefinedColor2["Corallite"] = "#574b90";
  PredefinedColor2["RougePink"] = "#f8a5c2";
  PredefinedColor2["FlamingoPink"] = "#f78fb3";
  PredefinedColor2["Squeaky"] = "#63cdda";
  PredefinedColor2["BlueCuraco"] = "#3dc1d3";
  PredefinedColor2["AppleValley"] = "#ea8685";
  PredefinedColor2["PorcleanRose"] = "#e66767";
  PredefinedColor2["PencilLead"] = "#596275";
  PredefinedColor2["Biscay"] = "#303952";
  return PredefinedColor2;
})(PredefinedColor || {});
const SVGShapeOptions = `stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`;
var SVGShape = ((SVGShape2) => {
  SVGShape2["Circle"] = `<path ${SVGShapeOptions} d="m11.67,1.92C6.28,1.92,1.92,6.28,1.92,11.67s4.36,9.75,9.75,9.75,9.75-4.36,9.75-9.75S17.05,1.92,11.67,1.92Z"/>`;
  SVGShape2["XMark"] = `<path ${SVGShapeOptions} d="M6 18L18 6M6 6L18 18"/>`;
  SVGShape2["Download"] = `<path ${SVGShapeOptions} d="M3 16.5V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V16.5M16.5 12L12 16.5M12 16.5L7.5 12M12 16.5V3"/>`;
  SVGShape2["CheckMark"] = `<path ${SVGShapeOptions} d="M4.5 12.75L10.5 18.75L19.5 5.25"/>`;
  SVGShape2["ChevronDown"] = `<path ${SVGShapeOptions} d="M19.5 8.25L12 15.75L4.5 8.25"/>`;
  SVGShape2["ChevronRight"] = `<path ${SVGShapeOptions} d="M8.25 4.5L15.75 12L8.25 19.5"/></svg>`;
  SVGShape2["ChevronLeft"] = `<path ${SVGShapeOptions} d="M15.75 19.5L8.25 12L15.75 4.5"/>`;
  SVGShape2["Plus"] = `<path ${SVGShapeOptions} d="M12 4.5V19.5M19.5 12L4.5 12"/>`;
  SVGShape2["Minus"] = `<path ${SVGShapeOptions} d="M19.5 12L4.5 12"/>`;
  SVGShape2["Heart"] = `<path ${SVGShapeOptions} d="M21 8.25C21 5.76472 18.9013 3.75 16.3125 3.75C14.3769 3.75 12.7153 4.87628 12 6.48342C11.2847 4.87628 9.62312 3.75 7.6875 3.75C5.09867 3.75 3 5.76472 3 8.25C3 15.4706 12 20.25 12 20.25C12 20.25 21 15.4706 21 8.25Z"/>`;
  SVGShape2["Moon"] = `<path ${SVGShapeOptions} d="M21.7519 15.0019C20.597 15.4839 19.3296 15.75 18 15.75C12.6152 15.75 8.25 11.3848 8.25 5.99999C8.25 4.67039 8.51614 3.40296 8.99806 2.24805C5.47566 3.71785 3 7.19481 3 11.25C3 16.6348 7.36522 21 12.75 21C16.8052 21 20.2821 18.5243 21.7519 15.0019Z"/>`;
  SVGShape2["Sun"] = `<path ${SVGShapeOptions} d="M12 3V5.25M18.364 5.63604L16.773 7.22703M21 12H18.75M18.364 18.364L16.773 16.773M12 18.75V21M7.22703 16.773L5.63604 18.364M5.25 12H3M7.22703 7.22703L5.63604 5.63604M15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z" />`;
  SVGShape2["Search"] = `<path ${SVGShapeOptions} d="M21 21L15.8033 15.8033M15.8033 15.8033C17.1605 14.4461 18 12.5711 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C12.5711 18 14.4461 17.1605 15.8033 15.8033Z"/>`;
  return SVGShape2;
})(SVGShape || {});
var State = /* @__PURE__ */ ((State2) => {
  State2["Default"] = "state_default";
  State2["Enabled"] = "state_enabled";
  State2["Disabled"] = "state_disabled";
  State2["Loading"] = "state_loading";
  return State2;
})(State || {});
var BinaryState = /* @__PURE__ */ ((BinaryState2) => {
  BinaryState2["On"] = "binary_state_on";
  BinaryState2["Off"] = "binary_state_off";
  BinaryState2["Disabled"] = "binary_state_disabled";
  return BinaryState2;
})(BinaryState || {});
function Icon($$payload, $$props) {
  push();
  let size = fallback($$props["size"], () => Size.Medium, true);
  let icon = fallback($$props["icon"], () => SVGShape.Circle, true);
  let fill = fallback($$props["fill"], false);
  let animation = fallback($$props["animation"], () => Animation.None, true);
  let appearance = fallback($$props["appearance"], () => Appearance.Inherit, true);
  $$payload.out += `<svg${attr_class(`icon ${stringify(size)} ${stringify(animation)} ${stringify(appearance)}`, "svelte-1bx0hgt")} viewBox="0 0 24 24"${attr("fill", fill ? "currentColor" : "none")}${attr("stroke", fill ? "none" : "currentColor")}>${html(icon)}</svg>`;
  bind_props($$props, { size, icon, fill, animation, appearance });
  pop();
}
const defaultAppearance$4 = Appearance.Primary;
const defaultSize$7 = Size.Medium;
const defaultState$4 = State.Default;
const defaultTextStyle = TextStyle.Standard;
function Text($$payload, $$props) {
  push();
  let appearance = fallback($$props["appearance"], defaultAppearance$4);
  let size = fallback($$props["size"], defaultSize$7);
  let state = fallback($$props["state"], defaultState$4);
  let textStyle = fallback($$props["textStyle"], defaultTextStyle);
  if (state === State.Loading) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="text loading svelte-ge1ifg"></p>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<p${attr_class(`text ${stringify(size)} ${stringify(textStyle)} ${stringify(state === State.Disabled ? Appearance.Secondary : state)} ${stringify(appearance)}`, "svelte-ge1ifg")}><!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!----></p>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { appearance, size, state, textStyle });
  pop();
}
const defaultAppearance$3 = Appearance.Secondary;
const defaultHighlight$1 = Highlight.None;
const defaultText = "";
const defaultSize$6 = Size.Medium;
const defaultState$3 = State.Default;
const defaultStyle = Style.Standard;
const defaultShape$2 = Shape.Standard;
function Button($$payload, $$props) {
  push();
  let appearance = fallback($$props["appearance"], defaultAppearance$3);
  let highlight = fallback($$props["highlight"], defaultHighlight$1);
  let style = fallback($$props["style"], defaultStyle);
  let size = fallback($$props["size"], defaultSize$6);
  let shape = fallback($$props["shape"], defaultShape$2);
  let state = fallback($$props["state"], defaultState$3);
  let text = fallback($$props["text"], defaultText);
  let icon = fallback($$props["icon"], null);
  $$payload.out += `<button${attr_class(`button ${stringify(size)} ${stringify(appearance)} ${stringify(state)} ${stringify(highlight)} ${stringify(style)} ${stringify(shape)}`, "svelte-n7ewl0")}${attr("disabled", state === State.Disabled || state === State.Loading, true)}>`;
  if (state === State.Loading) {
    $$payload.out += "<!--[-->";
    Icon($$payload, {
      icon: SVGShape.Circle,
      fill: true,
      animation: Animation.Pulse
    });
  } else if (icon) {
    $$payload.out += "<!--[1-->";
    Icon($$payload, { icon, size });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> `;
  if (text.length) {
    $$payload.out += "<!--[-->";
    Text($$payload, {
      appearance: Appearance.Inherit,
      size,
      children: ($$payload2) => {
        $$payload2.out += `<!---->${escape_html(text)}`;
      },
      $$slots: { default: true }
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></button>`;
  bind_props($$props, {
    appearance,
    highlight,
    style,
    size,
    shape,
    state,
    text,
    icon
  });
  pop();
}
const defaultSize$5 = Size.Medium;
function Checkbox($$payload, $$props) {
  push();
  let checked, disabled;
  let size = fallback($$props["size"], defaultSize$5);
  let state = fallback($$props["state"], () => BinaryState.Off, true);
  checked = state === BinaryState.On;
  disabled = state === BinaryState.Disabled;
  $$payload.out += `<label${attr_class(`checkbox ${stringify(size)}`, "svelte-hq55n8")}><input class="checkbox-input svelte-hq55n8" type="checkbox"${attr("checked", checked, true)}${attr("disabled", disabled, true)}> <span class="checkbox-control svelte-hq55n8"></span></label>`;
  bind_props($$props, { size, state });
  pop();
}
const defaultPlaceholder = "Placeholder";
const defaultSize$4 = Size.Medium;
const defaultState$2 = State.Default;
const defaultShape$1 = Shape.Standard;
const defaultAppearance$2 = Appearance.Secondary;
const defaultHighlight = Highlight.None;
function Input($$payload, $$props) {
  push();
  let size = fallback($$props["size"], defaultSize$4);
  let state = fallback($$props["state"], defaultState$2);
  let shape = fallback($$props["shape"], defaultShape$1);
  let placeholder = fallback($$props["placeholder"], defaultPlaceholder);
  let icon = fallback($$props["icon"], null);
  let iconRight = fallback($$props["iconRight"], null);
  let appearance = fallback($$props["appearance"], defaultAppearance$2);
  let highlight = fallback($$props["highlight"], defaultHighlight);
  $$payload.out += `<div${attr_class(`input-group ${stringify(size)} ${stringify(shape)} ${stringify(appearance)} ${stringify(highlight)} ${stringify(state)}`, "svelte-1u92ukb")}>`;
  if (state === State.Loading) {
    $$payload.out += "<!--[-->";
    Icon($$payload, {
      icon: SVGShape.Circle,
      fill: true,
      animation: Animation.Pulse
    });
  } else if (icon) {
    $$payload.out += "<!--[1-->";
    Icon($$payload, { icon, size });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <input class="input svelte-1u92ukb"${attr("placeholder", state === State.Loading ? "Loading" : placeholder)}${attr("disabled", state === State.Disabled || state === State.Loading, true)}> `;
  if (iconRight && state !== State.Loading) {
    $$payload.out += "<!--[-->";
    Icon($$payload, { icon: iconRight, size });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, {
    size,
    state,
    shape,
    placeholder,
    icon,
    iconRight,
    appearance,
    highlight
  });
  pop();
}
const defaultAppearance$1 = Appearance.Primary;
const defaultSize$3 = Size.Medium;
Shape.Standard;
const defaultPercent = "50";
function Progress($$payload, $$props) {
  let appearance = fallback($$props["appearance"], defaultAppearance$1);
  let size = fallback($$props["size"], defaultSize$3);
  let shape = fallback($$props["shape"], defaultShape$2);
  let percent = fallback($$props["percent"], defaultPercent);
  let animated = fallback($$props["animated"], false);
  $$payload.out += `<div${attr_class(`progress-container ${stringify(appearance)} ${stringify(size)} ${stringify(shape)}`, "svelte-1f1jnyl")}><div${attr_class(`progress-bar ${stringify(animated ? "animated" : "")}`, "svelte-1f1jnyl")}${attr_style(`width: ${percent}%;`)}></div></div>`;
  bind_props($$props, { appearance, size, shape, percent, animated });
}
const defaultSize$2 = Size.Medium;
function Radio($$payload, $$props) {
  push();
  let checked, disabled;
  let size = fallback($$props["size"], defaultSize$2);
  let state = fallback($$props["state"], () => BinaryState.Off, true);
  let name = fallback($$props["name"], "radio");
  let value = $$props["value"];
  let groupValue = $$props["groupValue"];
  checked = groupValue === value;
  disabled = state === BinaryState.Disabled;
  $$payload.out += `<label${attr_class(`radio ${stringify(size)}`, "svelte-6qs6p9")}><input class="radio-input svelte-6qs6p9" type="radio"${attr("name", name)}${attr("value", value)}${attr("checked", checked, true)}${attr("disabled", disabled, true)}> <span class="radio-control svelte-6qs6p9"></span></label>`;
  bind_props($$props, { size, state, name, value, groupValue });
  pop();
}
function RadioGroup($$payload, $$props) {
  push();
  let name = fallback($$props["name"], "radio-group");
  let options = fallback($$props["options"], () => [], true);
  let selected = fallback($$props["selected"], "");
  function getSelectedOption() {
    return options.find((option) => option.value === selected);
  }
  const each_array = ensure_array_like(options);
  $$payload.out += `<div class="radio-group svelte-1dh8wqm"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let option = each_array[$$index];
    $$payload.out += `<div class="option svelte-1dh8wqm">`;
    Radio($$payload, {
      name,
      value: option.value,
      groupValue: selected,
      state: option.state ?? BinaryState.Off
    });
    $$payload.out += `<!----> `;
    Text($$payload, {
      state: option.state === BinaryState.Disabled ? State.Disabled : State.Default,
      children: ($$payload2) => {
        $$payload2.out += `<!---->${escape_html(option.label)}`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { name, options, selected, getSelectedOption });
  pop();
}
const defaultShape = Shape.Pill;
const defaultAppearance = SimpleApperance.Dark;
const defaultState$1 = BinaryState.On;
function Select($$payload, $$props) {
  push();
  let options = fallback($$props["options"], () => [], true);
  let shape = fallback($$props["shape"], defaultShape);
  let appearance = fallback($$props["appearance"], defaultAppearance);
  let defaultValue = fallback($$props["defaultValue"], null);
  let state = fallback($$props["state"], defaultState$1);
  let selected = defaultValue ?? "";
  const each_array = ensure_array_like(options);
  $$payload.out += `<div${attr_class(`select-group ${stringify(shape)} ${stringify(appearance)} ${stringify(state)}`, "svelte-1rmz91l")}><select name="generic-select"${attr("disabled", state === BinaryState.Disabled, true)}${attr_class(`select ${stringify(defaultValue === null && selected === "" ? "null_selection" : "")}`, "svelte-1rmz91l")}>`;
  if (defaultValue === null) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<option disabled selected value="">Select Option</option>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [value, label] = each_array[$$index];
    $$payload.out += `<option${attr("value", value)}>${escape_html(label)}</option>`;
  }
  $$payload.out += `<!--]--></select> `;
  Icon($$payload, { icon: SVGShape.ChevronDown });
  $$payload.out += `<!----></div>`;
  bind_props($$props, {
    options,
    shape,
    appearance,
    defaultValue,
    state
  });
  pop();
}
let defaultColor = "#FFFFFF";
let defaultSize$1 = Size.Large;
function Swatch($$payload, $$props) {
  push();
  let color = fallback($$props["color"], defaultColor);
  let size = fallback($$props["size"], defaultSize$1);
  $$payload.out += `<button${attr_class(`swatch ${stringify(size)}`, "svelte-ghbtgx")} aria-label="color swatch"${attr_style(`background-color: ${color};`)}></button>`;
  bind_props($$props, { color, size });
  pop();
}
const defaultState = BinaryState.Off;
const defaultSize = Size.Medium;
function Switch($$payload, $$props) {
  push();
  let checked, disabled;
  let state = fallback($$props["state"], defaultState);
  let size = fallback($$props["size"], defaultSize);
  let icons = fallback($$props["icons"], null);
  checked = state === BinaryState.On;
  disabled = state === BinaryState.Disabled;
  $$payload.out += `<label${attr_class(`switch ${stringify(size)}`, "svelte-me3jqb")}><input type="checkbox"${attr("disabled", disabled, true)}${attr("checked", checked, true)} class="svelte-me3jqb"> <span class="slider svelte-me3jqb">`;
  if (icons) {
    $$payload.out += "<!--[-->";
    Icon($$payload, {
      appearance: Appearance.Secondary,
      icon: checked ? icons[0] : icons[1]
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></span></label>`;
  bind_props($$props, { state, size, icons });
  pop();
}
function _page($$payload, $$props) {
  push();
  const toTitle = (str) => str.replace(/_/g, " ").replace(/\w\S*/g, (t) => t[0].toUpperCase() + t.slice(1).toLowerCase());
  function getRandomPosition() {
    const positions = Object.values(Position);
    return positions[Math.floor(Math.random() * positions.length)];
  }
  const appearances = Object.values(Appearance);
  const simpleAppearances = Object.values(SimpleApperance);
  const highlights = Object.values(Highlight);
  const sizes = Object.values(Size);
  const shapes = Object.values(Shape);
  const states = Object.values(State);
  const binaryStates = Object.values(BinaryState);
  const colors = Object.values(PredefinedColor);
  const textStyles = Object.values(TextStyle);
  let selectedRadio = "system";
  const radioGroupOptions = [
    {
      label: "System",
      value: "system",
      state: BinaryState.On
    },
    {
      label: "Light",
      value: "light",
      state: BinaryState.Off
    },
    {
      label: "Dark",
      value: "dark",
      state: BinaryState.Disabled
    }
  ];
  const sections = [
    // Text Sections
    {
      category: "text",
      title: "Size",
      component: Text,
      items: sizes,
      key: "size",
      labelMod: (label) => `Text ${toTitle(label)}`
    },
    {
      category: "text",
      title: "Appearance",
      component: Text,
      items: appearances,
      key: "appearance"
    },
    {
      category: "text",
      title: "Style",
      component: Text,
      items: textStyles,
      key: "textStyle"
    },
    {
      category: "text",
      title: "State",
      component: Text,
      items: states,
      key: "state"
    },
    // Icons
    {
      category: "icons",
      title: "Size",
      component: Icon,
      items: sizes,
      key: "size",
      props: { icon: SVGShape.CheckMark }
    },
    {
      category: "icons",
      title: "Appearance",
      component: Icon,
      items: appearances,
      key: "appearance",
      props: { icon: SVGShape.CheckMark, size: Size.Large }
    },
    // Swatch
    {
      category: "swatches",
      title: "Colors",
      component: Swatch,
      items: colors,
      key: "color"
    },
    // Switch
    {
      category: "switch",
      title: "Binary State",
      component: Switch,
      items: binaryStates,
      key: "state"
    },
    {
      category: "switch",
      title: "Size",
      component: Switch,
      items: sizes,
      key: "size"
    },
    // Hamburger
    {
      category: "hamburger",
      title: "Hamburger",
      component: Hamburger,
      items: sizes,
      key: "size"
    },
    {
      category: "hamburger",
      title: "Apperance",
      component: Hamburger,
      items: appearances,
      key: "appearance"
    },
    // Checkbox
    {
      category: "checkbox",
      title: "Binary State",
      component: Checkbox,
      items: binaryStates,
      key: "state"
    },
    {
      category: "checkbox",
      title: "Size",
      component: Checkbox,
      items: sizes,
      key: "size"
    },
    // Input
    {
      category: "input",
      title: "Size",
      component: Input,
      items: sizes,
      key: "size"
    },
    {
      category: "input",
      title: "State",
      component: Input,
      items: states,
      key: "state"
    },
    {
      category: "input",
      title: "Icons",
      component: Input,
      items: states,
      key: "state",
      props: {
        icon: SVGShape.Search,
        iconRight: SVGShape.Heart
      }
    },
    {
      category: "input",
      title: "Highlight",
      component: Input,
      items: highlights,
      key: "highlight"
    },
    {
      category: "input",
      title: "Appearance",
      component: Input,
      items: simpleAppearances,
      key: "appearance"
    },
    {
      category: "input",
      title: "Shape",
      component: Input,
      items: shapes,
      key: "shape"
    },
    // Select
    {
      category: "select",
      title: "Shape",
      component: Select,
      items: shapes,
      key: "shape",
      props: {
        options: [
          ["Option One", "one"],
          ["Option 2", "two"]
        ]
      }
    },
    {
      category: "select",
      title: "Shape",
      component: Select,
      items: simpleAppearances,
      key: "appearance",
      props: {
        options: [
          ["Option One", "one"],
          ["Option 2", "two"]
        ]
      }
    },
    {
      category: "select",
      title: "Binary State",
      component: Select,
      items: binaryStates,
      key: "state",
      props: {
        options: [
          ["Option One", "one"],
          ["Option 2", "two"]
        ]
      }
    },
    // Radio
    {
      category: "radio",
      title: "Binary State",
      component: Radio,
      items: binaryStates,
      key: "state"
    },
    {
      category: "radio",
      title: "Size",
      component: Radio,
      items: sizes,
      key: "size"
    },
    // Buttons
    {
      category: "button",
      title: "Appearance",
      component: Button,
      items: appearances
    },
    {
      category: "button",
      title: "Shape",
      component: Button,
      items: shapes,
      key: "shape"
    },
    {
      category: "button",
      title: "Highlight",
      component: Button,
      items: highlights,
      key: "highlight"
    },
    {
      category: "button",
      title: "Outline",
      component: Button,
      items: highlights,
      props: {
        appearance: Appearance.Primary,
        style: Style.Outline
      },
      key: "highlight",
      labelMod: (label) => label.replace("Highlight", "Outline")
    },
    {
      category: "button",
      title: "Size",
      component: Button,
      items: sizes,
      key: "size"
    },
    {
      category: "button",
      title: "State",
      component: Button,
      items: states,
      key: "state"
    },
    {
      category: "button",
      title: "Icon",
      component: Button,
      items: states,
      props: { icon: SVGShape.Heart },
      key: "state"
    },
    // Progress
    {
      category: "progress",
      title: "Appearance",
      component: Progress,
      items: appearances
    },
    {
      category: "progress",
      title: "Size",
      component: Progress,
      items: sizes,
      key: "size"
    },
    {
      category: "progress",
      title: "Shape",
      component: Progress,
      items: shapes,
      key: "shape"
    }
  ];
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(Array.from(new Set(sections.map((s) => s.category))));
    const each_array_3 = ensure_array_like(colors);
    $$payload2.out += `<div class="container svelte-gqepos">`;
    Switch($$payload2, {
      size: Size.Large,
      icons: [SVGShape.Sun, SVGShape.Moon]
    });
    $$payload2.out += `<!----> <!--[-->`;
    for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
      let category = each_array[$$index_2];
      const each_array_1 = ensure_array_like(sections.filter((s) => s.category === category));
      $$payload2.out += `<div class="category-group svelte-gqepos">`;
      Text($$payload2, {
        size: Size.Medium,
        appearance: Appearance.Muted,
        children: ($$payload3) => {
          $$payload3.out += `<!---->${escape_html(toTitle(category))}`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <!--[-->`;
      for (let $$index_1 = 0, $$length2 = each_array_1.length; $$index_1 < $$length2; $$index_1++) {
        let {
          title,
          component,
          items,
          props = {},
          key = "appearance",
          labelMod
        } = each_array_1[$$index_1];
        const each_array_2 = ensure_array_like(items);
        $$payload2.out += `<div class="section svelte-gqepos">`;
        Text($$payload2, {
          appearance: Appearance.Bright,
          size: Size.Small,
          children: ($$payload3) => {
            $$payload3.out += `<!---->${escape_html(title)}`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> <div class="grid svelte-gqepos"><!--[-->`;
        for (let $$index = 0, $$length3 = each_array_2.length; $$index < $$length3; $$index++) {
          let item = each_array_2[$$index];
          $$payload2.out += `<!----> <!---->`;
          component?.($$payload2, spread_props([
            props,
            { [key]: item },
            {
              text: component === Button ? labelMod ? labelMod(toTitle(item)) : toTitle(item) : void 0,
              children: ($$payload3) => {
                if (component !== Button) {
                  $$payload3.out += "<!--[-->";
                  $$payload3.out += `${escape_html(labelMod ? labelMod(toTitle(item)) : toTitle(item))}`;
                } else {
                  $$payload3.out += "<!--[!-->";
                }
                $$payload3.out += `<!--]-->`;
              },
              $$slots: { default: true }
            }
          ]));
          $$payload2.out += `<!---->`;
        }
        $$payload2.out += `<!--]--></div></div>`;
      }
      $$payload2.out += `<!--]--> `;
      if (category === "radio") {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div class="section svelte-gqepos">`;
        Text($$payload2, {
          children: ($$payload3) => {
            $$payload3.out += `<!---->Radio Group`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> `;
        RadioGroup($$payload2, {
          name: "theme",
          options: radioGroupOptions,
          get selected() {
            return selectedRadio;
          },
          set selected($$value) {
            selectedRadio = $$value;
            $$settled = false;
          }
        });
        $$payload2.out += `<!----></div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--></div>`;
    }
    $$payload2.out += `<!--]--> <div class="category-group row svelte-gqepos">`;
    Text($$payload2, {
      size: Size.Medium,
      appearance: Appearance.Muted,
      children: ($$payload3) => {
        $$payload3.out += `<!---->Tooltips`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <div class="section svelte-gqepos">`;
    Text($$payload2, {
      appearance: Appearance.Bright,
      size: Size.Small,
      children: ($$payload3) => {
        $$payload3.out += `<!---->Position`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <div class="grid svelte-gqepos"><!--[-->`;
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let color = each_array_3[$$index_3];
      Tooltip($$payload2, {
        position: getRandomPosition(),
        content: color,
        children: ($$payload3) => {
          Swatch($$payload3, { color });
        },
        $$slots: { default: true }
      });
    }
    $$payload2.out += `<!--]--></div></div></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
