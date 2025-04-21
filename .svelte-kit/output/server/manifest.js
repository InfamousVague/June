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
		client: {start:"_app/immutable/entry/start.Bao3uiOH.js",app:"_app/immutable/entry/app.Dwv-EpW8.js",imports:["_app/immutable/entry/start.Bao3uiOH.js","_app/immutable/chunks/BclDnV8b.js","_app/immutable/chunks/BJjhExZx.js","_app/immutable/chunks/sLDvjeNS.js","_app/immutable/entry/app.Dwv-EpW8.js","_app/immutable/chunks/BJjhExZx.js","_app/immutable/chunks/_wDurvZX.js","_app/immutable/chunks/Cb8FC8hT.js","_app/immutable/chunks/B4bNVV0Q.js","_app/immutable/chunks/sLDvjeNS.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
