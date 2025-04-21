export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.Dyi5_kB1.js",app:"_app/immutable/entry/app.scZLs1MI.js",imports:["_app/immutable/entry/start.Dyi5_kB1.js","_app/immutable/chunks/DX9K5fTq.js","_app/immutable/chunks/DdVZ4T5C.js","_app/immutable/chunks/D1dv2B_X.js","_app/immutable/entry/app.scZLs1MI.js","_app/immutable/chunks/DdVZ4T5C.js","_app/immutable/chunks/O-svTTkQ.js","_app/immutable/chunks/CTuSfFA5.js","_app/immutable/chunks/BH6EWCA5.js","_app/immutable/chunks/D1dv2B_X.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
