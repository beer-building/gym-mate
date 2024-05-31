

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.889f7834.js","_app/immutable/chunks/scheduler.4cfaec68.js","_app/immutable/chunks/index.f2283658.js","_app/immutable/chunks/stores.afc424d2.js","_app/immutable/chunks/singletons.c69b67b7.js"];
export const stylesheets = [];
export const fonts = [];
