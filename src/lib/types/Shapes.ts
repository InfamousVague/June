export const SVGShapeOptions = `stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`;
export enum SVGShape {
    Circle          = `<path ${SVGShapeOptions} d="m11.67,1.92C6.28,1.92,1.92,6.28,1.92,11.67s4.36,9.75,9.75,9.75,9.75-4.36,9.75-9.75S17.05,1.92,11.67,1.92Z"/>`,
    XMark           = `<path ${SVGShapeOptions} d="M6 18L18 6M6 6L18 18"/>`,
    Download        = `<path ${SVGShapeOptions} d="M3 16.5V18.75C3 19.9926 4.00736 21 5.25 21H18.75C19.9926 21 21 19.9926 21 18.75V16.5M16.5 12L12 16.5M12 16.5L7.5 12M12 16.5V3"/>`,
    CheckMark       = `<path ${SVGShapeOptions} d="M4.5 12.75L10.5 18.75L19.5 5.25"/>`,
    ChevronDown     = `<path ${SVGShapeOptions} d="M19.5 8.25L12 15.75L4.5 8.25"/>`,
    ChevronRight    = `<path ${SVGShapeOptions} d="M8.25 4.5L15.75 12L8.25 19.5"/></svg>`,
    ChevronLeft     = `<path ${SVGShapeOptions} d="M15.75 19.5L8.25 12L15.75 4.5"/>`,
    Plus            = `<path ${SVGShapeOptions} d="M12 4.5V19.5M19.5 12L4.5 12"/>`,
    Minus           = `<path ${SVGShapeOptions} d="M19.5 12L4.5 12"/>`,
    Heart           = `<path ${SVGShapeOptions} d="M21 8.25C21 5.76472 18.9013 3.75 16.3125 3.75C14.3769 3.75 12.7153 4.87628 12 6.48342C11.2847 4.87628 9.62312 3.75 7.6875 3.75C5.09867 3.75 3 5.76472 3 8.25C3 15.4706 12 20.25 12 20.25C12 20.25 21 15.4706 21 8.25Z"/>`,
};