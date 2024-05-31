export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","apple-touch-icon-precomposed.png","apple-touch-icon.png","favicon.ico","images/.DS_Store","images/logo.svg","images/logo@120.png","images/logo@152.png","images/logo@168.png","images/logo@192.png","images/logo@48.png","images/logo@72.png","images/logo@76.png","images/logo@96.png","manifest.webmanifest"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.d3d188ad.js","app":"_app/immutable/entry/app.d43b7aed.js","imports":["_app/immutable/entry/start.d3d188ad.js","_app/immutable/chunks/scheduler.4cfaec68.js","_app/immutable/chunks/singletons.c69b67b7.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.d43b7aed.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.4cfaec68.js","_app/immutable/chunks/index.f2283658.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
