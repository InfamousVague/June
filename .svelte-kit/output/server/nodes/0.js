import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.2aIyFTb3.js","_app/immutable/chunks/CTuSfFA5.js","_app/immutable/chunks/DdVZ4T5C.js","_app/immutable/chunks/CRahPGqP.js","_app/immutable/chunks/COblriZ4.js"];
export const stylesheets = ["_app/immutable/assets/0.BIFkPtyJ.css"];
export const fonts = [];
