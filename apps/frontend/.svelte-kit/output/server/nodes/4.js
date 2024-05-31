

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.976394e5.js","_app/immutable/chunks/scheduler.4cfaec68.js","_app/immutable/chunks/index.f2283658.js","_app/immutable/chunks/auth.service.f9cc30c8.js","_app/immutable/chunks/http-service.b939156e.js"];
export const stylesheets = ["_app/immutable/assets/4.6bcd567f.css"];
export const fonts = [];
