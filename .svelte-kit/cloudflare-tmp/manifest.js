export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","font.css","og.png"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		entry: {"file":"_app/immutable/start-96027e0e.js","imports":["_app/immutable/start-96027e0e.js","_app/immutable/chunks/index-81c55bf9.js","_app/immutable/chunks/singletons-41f14518.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export const prerendered = new Set([]);
