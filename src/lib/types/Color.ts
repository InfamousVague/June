export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

// Colors credit: https://flatuicolors.com/palette/ru
export enum PredefinedColor {
    CreamyPeach         = "#f3a683",
    SawtoothAAK         = "#f19066",
    RosyHighlight       = "#f7d794",
    Summertime          = "#f5cd79",
    SoftBlue            = "#778beb",
    Cornflower          = "#546de5",
    BrewedMustard       = "#e77f67",
    Tigerly             = "#e15f41",
    OldGermanium        = "#cf6a87",
    DeepRose            = "#c44569",
    MountainMajesty     = "#786fa6",
    Corallite           = "#574b90",
    RougePink           = "#f8a5c2",
    FlamingoPink        = "#f78fb3",
    Squeaky             = "#63cdda",
    BlueCuraco          = "#3dc1d3",
    AppleValley         = "#ea8685",
    PorcleanRose        = "#e66767",
    PencilLead          = "#596275",
    Biscay              = "#303952"
}