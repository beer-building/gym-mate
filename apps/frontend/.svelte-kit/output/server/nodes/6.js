

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.1554785f.js","_app/immutable/chunks/scheduler.4cfaec68.js","_app/immutable/chunks/index.f2283658.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = [];
export const fonts = [];
