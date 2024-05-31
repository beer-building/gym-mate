

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.a4207f20.js","_app/immutable/chunks/scheduler.4cfaec68.js","_app/immutable/chunks/index.f2283658.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/stores.afc424d2.js","_app/immutable/chunks/singletons.c69b67b7.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/RouteGuard.8223ab94.js","_app/immutable/chunks/navigation.f864c72c.js","_app/immutable/chunks/auth.service.f9cc30c8.js","_app/immutable/chunks/http-service.b939156e.js"];
export const stylesheets = ["_app/immutable/assets/2.fb1d0df0.css","_app/immutable/assets/Icon.d9577866.css"];
export const fonts = [];
