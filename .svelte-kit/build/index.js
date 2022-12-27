
import root from '__GENERATED__/root.svelte';
import { respond } from '../../node_modules/.pnpm/@sveltejs+kit@1.0.0-next.589_svelte@3.55.0+vite@4.0.3/node_modules/@sveltejs/kit/src/runtime/server/index.js';
import { set_paths, assets, base } from '../../node_modules/.pnpm/@sveltejs+kit@1.0.0-next.589_svelte@3.55.0+vite@4.0.3/node_modules/@sveltejs/kit/src/runtime/paths.js';
import { set_building, set_version } from '../../node_modules/.pnpm/@sveltejs+kit@1.0.0-next.589_svelte@3.55.0+vite@4.0.3/node_modules/@sveltejs/kit/src/runtime/env.js';
import { set_private_env } from '../../node_modules/.pnpm/@sveltejs+kit@1.0.0-next.589_svelte@3.55.0+vite@4.0.3/node_modules/@sveltejs/kit/src/runtime/env-private.js';
import { set_public_env } from '../../node_modules/.pnpm/@sveltejs+kit@1.0.0-next.589_svelte@3.55.0+vite@4.0.3/node_modules/@sveltejs/kit/src/runtime/env-public.js';

const app_template = ({ head, body, assets, nonce }) => "<!DOCTYPE html>\n<html lang=en>\n\n<head>\n    <title>Hi. We’re Valera. We make payment tech.</title>\n    <meta name=\"description\" content=\"From daily coffees ☕ to corporate treasuries 💼, we help people trust verify their money. An early-stage payment technology firm developing cutting edge hardware and software using Bitcoin, the internet's native currency. Est. 722,913.\">\n    <meta property=\"og:locale\" content=\"en_US\">\n    <meta property=\"og:type\" content=\"website\">\n    <meta property=\"og:title\" content=\"Hi. We’re Valera. We make payment tech.\">\n    <meta property=\"og:description\" content=\"From daily coffees ☕ to corporate treasuries 💼, we help people trust verify their money. An early-stage payment technology firm developing cutting edge hardware and software using Bitcoin, the internet's native currency. Est. 722,913.\">\n    <meta property=\"og:url\" content=\"https://valera.co/\">\n    <meta property=\"og:site_name\" content=\"Valera\">\n    <meta property=\"og:image\" content=\"" + assets + "/og.png\">\n    <meta property=\"og:image:secure_url\" content=\"" + assets + "/og.png\">\n    <meta property=\"og:image:width\" content=\"1200\">\n    <meta property=\"og:image:height\" content=\"630\">\n    <meta name=\"twitter:card\" content=\"summary_large_image\">\n    <meta name=\"twitter:description\" content=\"From daily coffees ☕ to corporate treasuries 💼, we help people trust verify their money. An early-stage payment technology firm developing cutting edge hardware and software using Bitcoin, the internet's native currency. Est. 722,913.\">\n    <meta name=\"twitter:title\" content=\"Hi. We’re Valera. We make payment tech.\">\n    <meta name=\"twitter:image\" content=\"" + assets + "/og.png\">\n    <meta name=\"twitter:site\" content=\"@valeralabs\">\n    <meta name=\"twitter:creator\" content=\"@valeralabs\">\n    <meta name=\"robots\" content=\"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1\">\n    <meta charset=utf-8 />\n    <link rel=icon href=" + assets + "/favicon.png />\n    <link rel=stylesheet href=" + assets + "/font.css />\n    <meta name=viewport content=width=device-width /> " + head + "\n</head>\n\n<body>\n    <div>" + body + "</div>\n</body>\n\n</html>\n\n<style>\n    html {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: #000000;\n        height: 100%;\n    }\n    \n    body {\n        margin: 0;\n    }\n    \n    @media screen and (min-width: 1280px) {\n        html {\n            flex-direction: row;\n        }\n    }\n    \n    @media screen and (max-width: 1280px) {\n        html {\n            flex-direction: column;\n        }\n    }\n</style>";

const error_template = ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid #ccc;\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n";

let read = null;

set_paths({"base":"","assets":""});
set_version("1672142783005");

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_building(settings.building);
	read = settings.read;
}

export class Server {
	constructor(manifest) {
		this.options = {
			csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
			csrf: {
				check_origin: true,
			},
			dev: false,
			embedded: false,
			handle_error: (error, event) => {
				return this.options.hooks.handleError({ error, event }) ?? {
					message: event.route.id != null ? 'Internal Error' : 'Not Found'
				};
			},
			hooks: null,
			manifest,
			paths: { base, assets },
			public_env: {},
			read,
			root,
			service_worker: false,
			app_template,
			app_template_contains_nonce: false,
			error_template,
			version: "1672142783005"
		};
	}

	/**
	 * Take care: Some adapters may have to call `Server.init` per-request to set env vars,
	 * so anything that shouldn't be rerun should be wrapped in an `if` block to make sure it hasn't
	 * been done already.
	 */
	async init({ env }) {
		const entries = Object.entries(env);

		const prv = Object.fromEntries(entries.filter(([k]) => !k.startsWith('PUBLIC_')));

		const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith('PUBLIC_')));

		set_private_env(prv);
		set_public_env(pub);

		this.options.public_env = pub;

		if (!this.options.hooks) {
			const module = await import("./hooks.js");

			this.options.hooks = {
				handle: module.handle || (({ event, resolve }) => resolve(event)),
				handleError: module.handleError || (({ error }) => console.error(error.stack)),
				handleFetch: module.handleFetch || (({ request, fetch }) => fetch(request))
			};
		}
	}

	async respond(request, options = {}) {
		if (!(request instanceof Request)) {
			throw new Error('The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details');
		}

		return respond(request, this.options, options);
	}
}
