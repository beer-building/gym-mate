

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.276a136a.js","_app/immutable/chunks/scheduler.4cfaec68.js","_app/immutable/chunks/index.f2283658.js","_app/immutable/chunks/RouteGuard.8223ab94.js","_app/immutable/chunks/navigation.f864c72c.js","_app/immutable/chunks/singletons.c69b67b7.js"];
export const stylesheets = [];
export const fonts = [];
