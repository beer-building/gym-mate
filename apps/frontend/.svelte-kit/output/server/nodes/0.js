import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.a32e986c.js","_app/immutable/chunks/auth.service.f9cc30c8.js","_app/immutable/chunks/http-service.b939156e.js","_app/immutable/chunks/scheduler.4cfaec68.js","_app/immutable/chunks/index.f2283658.js"];
export const stylesheets = ["_app/immutable/assets/0.ea058804.css"];
export const fonts = [];
