

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/workout-programs/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.7e55f2e6.js","_app/immutable/chunks/scheduler.4cfaec68.js","_app/immutable/chunks/index.f2283658.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/workout-programs.api.832b90a3.js","_app/immutable/chunks/http-service.b939156e.js","_app/immutable/chunks/index.9a7c659e.js"];
export const stylesheets = ["_app/immutable/assets/7.ca8c0b7d.css"];
export const fonts = [];
