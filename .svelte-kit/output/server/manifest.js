export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","font.css","og.png"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-33fcf65f.js","imports":["_app/immutable/start-33fcf65f.js","_app/immutable/chunks/index-3888cab9.js","_app/immutable/chunks/singletons-f67fb1ef.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
