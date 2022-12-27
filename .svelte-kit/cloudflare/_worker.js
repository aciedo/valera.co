var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/index.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a2, b) {
  return a2 != a2 ? b == b : a2 !== b || (a2 && typeof a2 === "object" || typeof a2 === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_current_component(component4) {
  current_component = component4;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function validate_component(component4, name) {
  if (!component4 || !component4.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
  }
  return component4;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    Promise.resolve();
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse3;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var dec = opt.decode || decode;
      var index4 = 0;
      while (index4 < str.length) {
        var eqIdx = str.indexOf("=", index4);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index4);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index4 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index4, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index4 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e3) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      try {
        value = options.decodeValues ? decodeURIComponent(value) : value;
      } catch (e3) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e3
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse3(input, options) {
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!input) {
        if (!options.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers && input.headers["set-cookie"]) {
        input = input.headers["set-cookie"];
      } else if (input.headers) {
        var sch = input.headers[Object.keys(input.headers).find(function(key2) {
          return key2.toLowerCase() === "set-cookie";
        })];
        if (!sch && input.headers.cookie && !options.silent) {
          console.warn(
            "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
          );
        }
        input = sch;
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
      if (!options.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse3;
    module.exports.parse = parse3;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/chunks/hooks.js
var hooks_exports = {};
var init_hooks = __esm({
  ".svelte-kit/output/server/chunks/hooks.js"() {
  }
});

// .svelte-kit/output/server/entries/fallbacks/layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/layout.svelte.js"() {
    init_chunks();
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${slots.default ? slots.default({}) : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  file: () => file,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component, file, imports, stylesheets;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/components/layout.svelte-6fdd989c.js";
    imports = ["_app/immutable/components/layout.svelte-6fdd989c.js", "_app/immutable/chunks/index-3888cab9.js"];
    stylesheets = [];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
function removed_session() {
  throw new Error(
    "stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
  );
}
var getStores, page, Error$1;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_chunks();
    getStores = () => {
      const stores = getContext("__svelte__");
      const readonly_stores = {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        updated: stores.updated
      };
      Object.defineProperties(readonly_stores, {
        preloading: {
          get() {
            console.error("stores.preloading is deprecated; use stores.navigating instead");
            return {
              subscribe: stores.navigating.subscribe
            };
          },
          enumerable: false
        },
        session: {
          get() {
            removed_session();
            return {};
          },
          enumerable: false
        }
      });
      return readonly_stores;
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1>

<pre>${escape($page.error.message)}</pre>



${$page.error.frame ? `<pre>${escape($page.error.frame)}</pre>` : ``}
${$page.error.stack ? `<pre>${escape($page.error.stack)}</pre>` : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  file: () => file2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component2, file2, imports2, stylesheets2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    file2 = "_app/immutable/components/error.svelte-be43a0d6.js";
    imports2 = ["_app/immutable/components/error.svelte-be43a0d6.js", "_app/immutable/chunks/index-3888cab9.js", "_app/immutable/chunks/singletons-f67fb1ef.js"];
    stylesheets2 = [];
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var css$2, Icon, css$1, Social, css, Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_chunks();
    css$2 = {
      code: "@media screen and (max-width: 1280px){.wmpt-desktop.svelte-2mkm0r{display:none}}@media screen and (min-width: 1280px){.wmpt-mobile.svelte-2mkm0r{display:none}}",
      map: null
    };
    Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$2);
      return `<svg width="${"34"}" height="${"33"}" viewBox="${"0 0 34 33"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"wmpt-mobile svelte-2mkm0r"}"><path d="${"M11.1847 22.8233L11.2899 22.7886L11.3805 22.7249L13.0745 21.5354L12.3749 23.6182L12.3363 23.7332L12.3359 23.8545L12.3119 30.9889L12.3093 31.7406L13.0609 31.7415L20.0973 31.75L20.8413 31.7509L20.8482 31.0069L20.9135 23.9293L20.9147 23.8041L20.8751 23.6853L20.2199 21.7189L22.0194 23.0322L22.1164 23.103L22.2306 23.1399L28.9252 25.3062L29.6388 25.5371L29.8697 24.8235L32.036 18.1289L32.2674 17.4138L31.5517 17.1839L24.7591 15.0021L24.6456 14.9657L24.5265 14.9662L22.5256 14.9748L24.28 13.7001L24.3775 13.6293L24.4479 13.5315L28.6374 7.71029L29.0741 7.10352L28.4688 6.66487L22.7869 2.54771L22.1833 2.11031L21.7422 2.71126L17.5114 8.47566L17.4381 8.57563L17.4008 8.69391L16.7953 10.6144L16.1353 8.56438L16.0985 8.45033L16.0281 8.3534L11.8184 2.55916L11.3775 1.9524L10.7708 2.39324L5.09013 6.52045L4.48337 6.96129L4.9242 7.56805L9.13396 13.3623L9.2021 13.4561L9.29536 13.5249L10.9385 14.7376L8.80803 14.6853L8.67797 14.6821L8.55443 14.7229L1.76479 16.9653L1.05696 17.1991L1.28642 17.9084L3.44627 24.5844L3.67855 25.3023L4.39506 25.0657L11.1847 22.8233Z"}" stroke="${"#48D597"}" stroke-width="${"1.5"}"></path></svg>

<svg width="${"44"}" height="${"42"}" viewBox="${"0 0 44 42"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"wmpt-desktop svelte-2mkm0r"}"><path d="${"M14.9116 28.5733L15.0518 28.5269L15.1727 28.4421L17.2982 26.9496L16.4187 29.5679L16.3672 29.7212L16.3667 29.8829L16.3355 39.1287L16.3321 40.1309L17.3343 40.1321L26.4529 40.1431L27.445 40.1443L27.4541 39.1524L27.5388 29.9802L27.5403 29.8132L27.4875 29.6548L26.6662 27.1898L28.9274 28.84L29.0567 28.9344L29.209 28.9837L37.8848 31.791L38.8362 32.0989L39.1441 31.1474L41.9514 22.4716L42.26 21.5181L41.3058 21.2117L32.5029 18.3842L32.3517 18.3356L32.1928 18.3363L29.6867 18.3471L31.89 16.7463L32.02 16.6518L32.1139 16.5214L37.5432 8.9775L38.1255 8.16847L37.3183 7.5836L29.955 2.24802L29.1502 1.66482L28.5621 2.46609L23.0793 9.93639L22.9814 10.0697L22.9317 10.2274L22.1735 12.6322L21.3451 10.0594L21.2962 9.9073L21.2023 9.77806L15.7467 2.26909L15.1589 1.46007L14.3499 2.04786L6.98813 7.39647L6.17911 7.98425L6.7669 8.79327L12.2225 16.3022L12.3133 16.4273L12.4377 16.5191L14.4955 18.0378L11.8235 17.9723L11.6501 17.968L11.4853 18.0224L2.68639 20.9284L1.74261 21.2401L2.04855 22.1858L4.8476 30.8375L5.15729 31.7948L6.11265 31.4793L14.9116 28.5733Z"}" stroke="${"#48D597"}" stroke-width="${"2.5"}"></path></svg>`;
    });
    css$1 = {
      code: "@media screen and (min-width: 1280px){social.svelte-hmjhuv.svelte-hmjhuv{margin-top:16px}.wmpt-mobile.svelte-hmjhuv.svelte-hmjhuv{display:none}}@media screen and (max-width: 1280px){.wmpt-desktop.svelte-hmjhuv.svelte-hmjhuv{display:none}}social.svelte-hmjhuv.svelte-hmjhuv{display:flex;flex-direction:row;align-items:center;padding:0px;gap:32px}a.svelte-hmjhuv.svelte-hmjhuv{transition-duration:200ms}a.svelte-hmjhuv svg path.svelte-hmjhuv,g.svelte-hmjhuv.svelte-hmjhuv{transition-duration:400ms}a.svelte-hmjhuv.svelte-hmjhuv:hover{transform:translateY(-2px)}a.svelte-hmjhuv:hover svg path.svelte-hmjhuv{fill:#48d597}a.svelte-hmjhuv.svelte-hmjhuv:active{transform:translateY(2px)}",
      map: null
    };
    Social = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css$1);
      return `<social class="${"svelte-hmjhuv"}"><a href="${"https://github.com/valeralabs"}" class="${"wmpt-desktop svelte-hmjhuv"}"><svg width="${"32"}" height="${"32"}" viewBox="${"0 0 32 32"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"github"}"><g clip-path="${"url(#clip0_1940_7061)"}" class="${"svelte-hmjhuv"}"><path d="${"M16 0.666992C7.16 0.666992 0 7.707 0 16.3896C0 23.3376 4.584 29.2296 10.94 31.307C11.74 31.455 12.0333 30.9684 12.0333 30.551C12.0333 30.1776 12.02 29.1884 12.0133 27.8776C7.56268 28.8256 6.624 25.7684 6.624 25.7684C5.896 23.9536 4.844 23.4684 4.844 23.4684C3.39468 22.4936 4.956 22.5136 4.956 22.5136C6.56268 22.623 7.40668 24.1336 7.40668 24.1336C8.83332 26.5376 11.152 25.843 12.0667 25.4416C12.2107 24.4244 12.6227 23.7324 13.08 23.339C9.52668 22.9456 5.792 21.5936 5.792 15.5697C5.792 13.8537 6.412 12.451 7.43868 11.351C7.25868 10.9537 6.71868 9.355 7.57868 7.18966C7.57868 7.18966 8.91868 6.76832 11.9787 8.80166C13.2587 8.45232 14.6187 8.279 15.9787 8.271C17.3387 8.279 18.6987 8.45232 19.9787 8.80166C23.0188 6.76832 24.3588 7.18966 24.3588 7.18966C25.2188 9.355 24.6788 10.9537 24.5188 11.351C25.5388 12.451 26.1588 13.8537 26.1588 15.5697C26.1588 21.6096 22.4188 22.939 18.8587 23.3256C19.4187 23.7976 19.9387 24.7616 19.9387 26.235C19.9387 28.339 19.9187 30.0296 19.9187 30.5404C19.9187 30.9524 20.1988 31.4444 21.0188 31.287C27.42 29.223 32 23.327 32 16.3896C32 7.707 24.836 0.666992 16 0.666992Z"}" fill="${"white"}" class="${"svelte-hmjhuv"}"></path></g><defs><clipPath id="${"clip0_1940_7061"}"><rect width="${"32"}" height="${"32"}" fill="${"white"}"></rect></clipPath></defs></svg></a>
    <a href="${"https://twitter.com/valeralabs"}" class="${"wmpt-desktop svelte-hmjhuv"}"><svg width="${"32"}" height="${"28"}" viewBox="${"0 0 32 28"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"twitter"}"><path d="${"M32 4.078C30.81 4.6 29.542 4.946 28.22 5.114C29.58 4.302 30.618 3.026 31.106 1.488C29.838 2.244 28.438 2.778 26.946 3.076C25.742 1.794 24.026 1 22.154 1C18.5219 1 15.598 3.948 15.598 7.562C15.598 8.082 15.642 8.582 15.75 9.058C10.296 8.792 5.47 6.178 2.228 2.196C1.662 3.178 1.33 4.302 1.33 5.512C1.33 7.784 2.5 9.798 4.244 10.964C3.19 10.944 2.156 10.638 1.28 10.156C1.28 10.176 1.28 10.202 1.28 10.228C1.28 13.416 3.554 16.064 6.536 16.6739C6.002 16.82 5.42 16.8899 4.816 16.8899C4.396 16.8899 3.972 16.8659 3.574 16.7779C4.424 19.376 6.836 21.286 9.704 21.348C7.472 23.094 4.638 24.146 1.57 24.146C1.032 24.146 0.516 24.122 0 24.056C2.906 25.93 6.35 27 10.064 27C22.136 27 28.736 17 28.736 8.332C28.736 8.042 28.726 7.762 28.712 7.484C30.014 6.56 31.108 5.406 32 4.078Z"}" fill="${"white"}" class="${"svelte-hmjhuv"}"></path></svg></a>
    <a href="${"https://github.com/valeralabs"}" class="${"wmpt-mobile svelte-hmjhuv"}"><svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g clip-path="${"url(#clip0_1940_7042)"}" class="${"svelte-hmjhuv"}"><path d="${"M12 0.500244C5.37 0.500244 0 5.78025 0 12.2922C0 17.5032 3.438 21.9222 8.205 23.4802C8.805 23.5912 9.02499 23.2263 9.02499 22.9133C9.02499 22.6332 9.015 21.8913 9.00999 20.9082C5.67201 21.6192 4.968 19.3263 4.968 19.3263C4.422 17.9652 3.633 17.6013 3.633 17.6013C2.54601 16.8702 3.717 16.8852 3.717 16.8852C4.92201 16.9672 5.55501 18.1002 5.55501 18.1002C6.62499 19.9032 8.364 19.3823 9.05001 19.0812C9.15801 18.3183 9.46701 17.7993 9.81 17.5043C7.14501 17.2092 4.344 16.1952 4.344 11.6772C4.344 10.3902 4.809 9.33825 5.57901 8.51325C5.44401 8.21524 5.03901 7.01625 5.68401 5.39225C5.68401 5.39225 6.68901 5.07624 8.98401 6.60124C9.94401 6.33924 10.964 6.20925 11.984 6.20325C13.004 6.20925 14.024 6.33924 14.984 6.60124C17.2641 5.07624 18.2691 5.39225 18.2691 5.39225C18.9141 7.01625 18.5091 8.21524 18.3891 8.51325C19.1541 9.33825 19.6191 10.3902 19.6191 11.6772C19.6191 16.2072 16.8141 17.2042 14.144 17.4942C14.564 17.8482 14.954 18.5712 14.954 19.6763C14.954 21.2543 14.939 22.5222 14.939 22.9053C14.939 23.2143 15.1491 23.5833 15.7641 23.4653C20.565 21.9173 24 17.4953 24 12.2922C24 5.78025 18.627 0.500244 12 0.500244Z"}" fill="${"white"}" class="${"svelte-hmjhuv"}"></path></g><defs><clipPath id="${"clip0_1940_7042"}"><rect width="${"24"}" height="${"24"}" fill="${"white"}"></rect></clipPath></defs></svg></a>
    <a href="${"https://twitter.com/valeralabs"}" class="${"wmpt-mobile svelte-hmjhuv"}"><svg width="${"24"}" height="${"21"}" viewBox="${"0 0 24 21"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><g clip-path="${"url(#clip0_1940_7040)"}" class="${"svelte-hmjhuv"}"><path d="${"M24 3.0585C23.1075 3.45 22.1565 3.7095 21.165 3.8355C22.185 3.2265 22.9635 2.2695 23.3295 1.116C22.3785 1.683 21.3285 2.0835 20.2095 2.307C19.3065 1.3455 18.0195 0.75 16.6155 0.75C13.8914 0.75 11.6985 2.961 11.6985 5.6715C11.6985 6.0615 11.7315 6.4365 11.8125 6.7935C7.722 6.594 4.1025 4.6335 1.671 1.647C1.2465 2.3835 0.9975 3.2265 0.9975 4.134C0.9975 5.838 1.875 7.3485 3.183 8.223C2.3925 8.208 1.617 7.9785 0.96 7.617C0.96 7.632 0.96 7.6515 0.96 7.671C0.96 10.062 2.6655 12.048 4.902 12.5054C4.5015 12.615 4.065 12.6674 3.612 12.6674C3.297 12.6674 2.979 12.6494 2.6805 12.5834C3.318 14.532 5.127 15.9645 7.278 16.011C5.604 17.3205 3.4785 18.1095 1.1775 18.1095C0.774 18.1095 0.387 18.0915 0 18.042C2.1795 19.4475 4.7625 20.25 7.548 20.25C16.602 20.25 21.552 12.75 21.552 6.249C21.552 6.0315 21.5445 5.8215 21.534 5.613C22.5105 4.92 23.331 4.0545 24 3.0585Z"}" fill="${"white"}" class="${"svelte-hmjhuv"}"></path></g><defs><clipPath id="${"clip0_1940_7040"}"><rect width="${"24"}" height="${"21"}" fill="${"white"}"></rect></clipPath></defs></svg></a>
</social>`;
    });
    css = {
      code: "main.svelte-18bbbqy{margin:24px 16px;display:flex;flex-direction:column;align-items:flex-start;padding:0px;flex:none;order:0;flex-grow:0}@media screen and (min-width: 1280px){main.svelte-18bbbqy{gap:16px;width:1024px}#hi.svelte-18bbbqy{gap:10px}h1.svelte-18bbbqy{font-size:48px;letter-spacing:-0.02em}.wmpt-mobile.svelte-18bbbqy{display:none}strike-through.svelte-18bbbqy{text-decoration-line:line-through;text-decoration-thickness:3px}}@media screen and (max-width: 1280px){main.svelte-18bbbqy{gap:24px;align-self:stretch;max-width:512px}#hi.svelte-18bbbqy{gap:5px}h1.svelte-18bbbqy{font-size:32px;letter-spacing:-0.01em}.wmpt-desktop.svelte-18bbbqy{display:none}strike-through.svelte-18bbbqy{text-decoration-line:line-through;text-decoration-thickness:1.5px}}#hi.svelte-18bbbqy{display:flex;flex-direction:row;align-items:center;padding:0px;flex:none;order:0;flex-grow:0;margin:0px 0px}h1.svelte-18bbbqy{font-family:'GT Planar';font-style:normal;font-weight:300;line-height:125%;color:#ffffff;flex:none;order:0;flex-grow:0;margin:0px 0px;user-select:none}green.svelte-18bbbqy{color:#48d597;color:color(display-p3 0.2824 0.8353 0.5922/1)}grey.svelte-18bbbqy{color:#888888}",
      map: null
    };
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css);
      return `<main class="${"svelte-18bbbqy"}"><div id="${"hi"}" class="${"svelte-18bbbqy"}"><h1 class="${"svelte-18bbbqy"}">Hi. We\u2019re <green class="${"svelte-18bbbqy"}">Valera</green></h1>
		${validate_component(Icon, "Icon").$$render($$result, {}, {}, {})}
		<h1 class="${"wmpt-desktop svelte-18bbbqy"}">. We make payment tech.</h1>
		<h1 class="${"wmpt-mobile svelte-18bbbqy"}">.</h1></div>
	<h1 class="${"wmpt-mobile svelte-18bbbqy"}">We make payment tech.</h1>
	<h1 class="${"svelte-18bbbqy"}">From daily coffees \u2615 to corporate treasuries \u{1F4BC}, we help people <grey class="${"svelte-18bbbqy"}"><strike-through class="${"svelte-18bbbqy"}">trust</strike-through></grey>
		<green class="${"svelte-18bbbqy"}">verify</green> their money.
	</h1>
	<h1 class="${"svelte-18bbbqy"}">We support the <green class="${"svelte-18bbbqy"}">1.7 billion</green> that banks rejected.</h1>
	<h1 class="${"svelte-18bbbqy"}">And we help the <green class="${"svelte-18bbbqy"}">8 billion</green> protect themselves against cancerous inflation.
	</h1>

	${validate_component(Social, "Social").$$render($$result, {}, {}, {})}
</main>`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  file: () => file3,
  imports: () => imports3,
  index: () => index3,
  stylesheets: () => stylesheets3
});
var index3, component3, file3, imports3, stylesheets3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    index3 = 2;
    component3 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file3 = "_app/immutable/components/pages/_page.svelte-ff94ce15.js";
    imports3 = ["_app/immutable/components/pages/_page.svelte-ff94ce15.js", "_app/immutable/chunks/index-3888cab9.js"];
    stylesheets3 = ["_app/immutable/assets/_page-b4e736b3.css"];
  }
});

// .svelte-kit/output/server/index.js
init_chunks();

// node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\u0000",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function stringify_string(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var object_proto_names2 = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function uneval(value) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!is_primitive(thing)) {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== object_proto_names2) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a2, b) => b[1] - a2[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map(
          (v, i) => i in thing ? stringify2(v) : ""
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c2) {
  return escaped[c2] || c2;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
function stringify(value) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing))
      return indexes.get(thing);
    if (thing === void 0)
      return UNDEFINED;
    if (Number.isNaN(thing))
      return NAN;
    if (thing === Infinity)
      return POSITIVE_INFINITY;
    if (thing === -Infinity)
      return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0)
      return NEGATIVE_ZERO;
    const index5 = p++;
    indexes.set(thing, index5);
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          str = `["Date","${thing.toISOString()}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0)
              str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index5] = str;
    return index5;
  }
  const index4 = flatten(value);
  if (index4 < 0)
    return `${index4}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing instanceof String)
    return stringify_string(thing.toString());
  if (thing === void 0)
    return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0)
    return NEGATIVE_ZERO.toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}

// .svelte-kit/output/server/index.js
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  {
    stores.page.set(page2);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0 }, {}, {
    default: () => {
      return `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, { data: data_1, form }, {}, {})}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, { data: data_0, form }, {}, {})}`}

${``}`;
});
var HttpError = class {
  constructor(status, body) {
    this.status = status;
    if (typeof body === "string") {
      this.body = { message: body };
    } else if (body) {
      this.body = body;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
};
var Redirect = class {
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
};
var ValidationError = class {
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
};
function error(status, message) {
  return new HttpError(status, message);
}
function json(data, init2) {
  const headers = new Headers(init2 == null ? void 0 : init2.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(JSON.stringify(data), {
    ...init2,
    headers
  });
}
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a2, b) => {
    if (a2.q !== b.q) {
      return b.q - a2.q;
    }
    if (a2.subtype === "*" !== (b.subtype === "*")) {
      return a2.subtype === "*" ? 1 : -1;
    }
    if (a2.type === "*" !== (b.type === "*")) {
      return a2.type === "*" ? 1 : -1;
    }
    return a2.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  var _a;
  const type = ((_a = request.headers.get("content-type")) == null ? void 0 : _a.split(";", 1)[0].trim()) ?? "";
  return types.includes(type);
}
function is_form_content_type(request) {
  return is_content_type(request, "application/x-www-form-urlencoded", "multipart/form-data");
}
var DATA_SUFFIX = "/__data.json";
function check_method_names(mod) {
  ["get", "post", "put", "patch", "del"].forEach((m) => {
    if (m in mod) {
      const replacement = m === "del" ? "DELETE" : m.toUpperCase();
      throw Error(
        `Endpoint method "${m}" has changed to "${replacement}". See https://github.com/sveltejs/kit/discussions/5359 for more information.`
      );
    }
  });
}
var GENERIC_ERROR = {
  id: "__error"
};
function method_not_allowed(mod, method) {
  return new Response(`${method} method not allowed`, {
    status: 405,
    headers: {
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = [];
  for (const method in ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
    if (method in mod)
      allowed.push(method);
  }
  if (mod.GET || mod.HEAD)
    allowed.push("HEAD");
  return allowed;
}
function data_response(data, event) {
  const headers = {
    "content-type": "application/json",
    "cache-control": "private, no-store"
  };
  try {
    return new Response(stringify(data), { headers });
  } catch (e3) {
    const error2 = e3;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error2.path);
    const message = match ? `Data returned from \`load\` while rendering ${event.routeId} is not serializable: ${error2.message} (data.${match[2]})` : error2.message;
    return new Response(JSON.stringify(message), { headers, status: 500 });
  }
}
function get_option(nodes, option) {
  return nodes.reduce((value, node) => {
    var _a, _b;
    for (const thing of [node == null ? void 0 : node.server, node == null ? void 0 : node.shared]) {
      if (thing && ("router" in thing || "hydrate" in thing)) {
        throw new Error(
          "`export const hydrate` and `export const router` have been replaced with `export const csr`. See https://github.com/sveltejs/kit/pull/6446"
        );
      }
    }
    return ((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a[option]) ?? ((_b = node == null ? void 0 : node.server) == null ? void 0 : _b[option]) ?? value;
  }, void 0);
}
function static_error_page(options, status, message) {
  return new Response(options.error_template({ status, message }), {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
function handle_fatal_error(event, options, error2) {
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = handle_error_and_jsonify(event, options, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.url.pathname.endsWith(DATA_SUFFIX) || type === "application/json") {
    return new Response(JSON.stringify(body), {
      status,
      headers: { "content-type": "application/json; charset=utf-8" }
    });
  }
  return static_error_page(options, status, body.message);
}
function handle_error_and_jsonify(event, options, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return options.handle_error(error2, event);
  }
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
async function render_endpoint(event, mod, state) {
  const method = event.request.method;
  check_method_names(mod);
  let handler = mod[method];
  if (!handler && method === "HEAD") {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.initiator) {
      throw new Error(`${event.routeId} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    const response = await handler(
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (error2) {
    if (error2 instanceof Redirect) {
      return new Response(void 0, {
        status: error2.status,
        headers: { location: error2.location }
      });
    } else if (error2 instanceof ValidationError) {
      return json(error2.data, { status: error2.status });
    }
    throw error2;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (method === "PUT" || method === "PATCH" || method === "DELETE") {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter((val) => val != null);
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return error2;
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options, server2) {
  const actions = server2.actions;
  if (!actions) {
    maybe_throw_migration_error(server2);
    return new Response("POST method not allowed. No actions exist for this page", {
      status: 405,
      headers: {
        allow: "GET"
      }
    });
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (data instanceof ValidationError) {
      check_serializability(data.data, event.routeId, "data");
      return action_json({ type: "invalid", status: data.status, data: data.data });
    } else {
      check_serializability(data, event.routeId, "data");
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        data
      });
    }
  } catch (e3) {
    const error2 = normalize_error(e3);
    if (error2 instanceof Redirect) {
      return action_json({
        type: "redirect",
        status: error2.status,
        location: error2.location
      });
    }
    return action_json(
      {
        type: "error",
        error: handle_error_and_jsonify(event, options, check_incorrect_invalid_use(error2))
      },
      {
        status: error2 instanceof HttpError ? error2.status : 500
      }
    );
  }
}
function check_incorrect_invalid_use(error2) {
  return error2 instanceof ValidationError ? new Error(`Cannot "throw invalid()". Use "return invalid()"`) : error2;
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event, leaf_node) {
  return leaf_node.server && event.request.method !== "GET" && event.request.method !== "HEAD";
}
async function handle_action_request(event, server2) {
  const actions = server2.actions;
  if (!actions) {
    maybe_throw_migration_error(server2);
    event.setHeaders({
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (data instanceof ValidationError) {
      return { type: "invalid", status: data.status, data: data.data };
    } else {
      return {
        type: "success",
        status: 200,
        data
      };
    }
  } catch (e3) {
    const error2 = normalize_error(e3);
    if (error2 instanceof Redirect) {
      return {
        type: "redirect",
        status: error2.status,
        location: error2.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_invalid_use(error2)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      `When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions`
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new Error(
      `Actions expect form-encoded data (received ${event.request.headers.get("content-type")}`
    );
  }
  return action(event);
}
function maybe_throw_migration_error(server2) {
  for (const method of ["POST", "PUT", "PATCH", "DELETE"]) {
    if (server2[method]) {
      throw new Error(
        `${method} method no longer allowed in +page.server, use actions instead. See the PR for more info: https://github.com/sveltejs/kit/pull/6469`
      );
    }
  }
}
function check_serializability(value, id, path) {
  const type = typeof value;
  if (type === "string" || type === "boolean" || type === "number" || type === "undefined") {
    return;
  }
  if (type === "object") {
    if (!value)
      return;
    if (Array.isArray(value)) {
      value.forEach((child, i) => {
        check_serializability(child, id, `${path}[${i}]`);
      });
      return;
    }
    if (Object.getPrototypeOf(value) === Object.prototype) {
      for (const key2 in value) {
        check_serializability(value[key2], id, `${path}.${key2}`);
      }
      return;
    }
  }
  throw new Error(
    `${path} returned from action in ${id} cannot be serialized as JSON without losing its original type` + (value instanceof Date ? " (Date objects are serialized as strings)" : "")
  );
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = params[key2].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  }
  return params;
}
var tracked_url_properties = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    let value = tracked[property];
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return value;
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
async function unwrap_promises(object) {
  var _a;
  for (const key2 in object) {
    if (typeof ((_a = object[key2]) == null ? void 0 : _a.then) === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
async function load_server_data({ event, state, node, parent }) {
  var _a;
  if (!(node == null ? void 0 : node.server))
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await ((_a = node.server.load) == null ? void 0 : _a.call(null, {
    ...event,
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[key2];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    url
  }));
  const data = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data,
    uses: {
      dependencies: uses.dependencies.size > 0 ? Array.from(uses.dependencies) : void 0,
      params: uses.params.size > 0 ? Array.from(uses.params) : void 0,
      parent: uses.parent ? 1 : void 0,
      url: uses.url ? 1 : void 0
    }
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  var _a;
  const server_data_node = await server_data_promise;
  if (!((_a = node == null ? void 0 : node.shared) == null ? void 0 : _a.load)) {
    return (server_data_node == null ? void 0 : server_data_node.data) ?? null;
  }
  const load_event = {
    url: event.url,
    params: event.params,
    data: (server_data_node == null ? void 0 : server_data_node.data) ?? null,
    routeId: event.routeId,
    fetch: async (input, init2) => {
      const response = await event.fetch(input, init2);
      const url = new URL(input instanceof Request ? input.url : input, event.url);
      const same_origin = url.origin === event.url.origin;
      let dependency;
      if (same_origin && state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(url.pathname, dependency);
      }
      const proxy = new Proxy(response, {
        get(response2, key2, _receiver) {
          async function text() {
            const body = await response2.text();
            if (!body || typeof body === "string") {
              const status_number = Number(response2.status);
              if (isNaN(status_number)) {
                throw new Error(
                  `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
                );
              }
              fetched.push({
                url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
                method: event.request.method,
                request_body: init2 == null ? void 0 : init2.body,
                response_body: body,
                response: response2
              });
            }
            if (dependency) {
              dependency.body = body;
            }
            return body;
          }
          if (key2 === "arrayBuffer") {
            return async () => {
              const buffer = await response2.arrayBuffer();
              if (dependency) {
                dependency.body = new Uint8Array(buffer);
              }
              return buffer;
            };
          }
          if (key2 === "text") {
            return text;
          }
          if (key2 === "json") {
            return async () => {
              return JSON.parse(await text());
            };
          }
          return Reflect.get(response2, key2, response2);
        }
      });
      if (csr) {
        const get = response.headers.get;
        response.headers.get = (key2) => {
          const lower = key2.toLowerCase();
          const value = get.call(response.headers, lower);
          if (value && !lower.startsWith("x-sveltekit-")) {
            const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
            if (!included) {
              throw new Error(
                `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.routeId})`
              );
            }
          }
          return value;
        };
      }
      return proxy;
    },
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  };
  Object.defineProperties(load_event, {
    session: {
      get() {
        throw new Error(
          "session is no longer available. See https://github.com/sveltejs/kit/discussions/5883"
        );
      },
      enumerable: false
    }
  });
  const data = await node.shared.load.call(null, load_event);
  return data ? unwrap_promises(data) : null;
}
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function hash(value) {
  let hash2 = 5381;
  if (typeof value === "string") {
    let i = value.length;
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else if (ArrayBuffer.isView(value)) {
    const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
    let i = buffer.length;
    while (i)
      hash2 = hash2 * 33 ^ buffer[--i];
  } else {
    throw new TypeError("value must be a string or TypedArray");
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    if (key2 === "age")
      age = value;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_body) {
    attrs.push(`data-hash=${escape_html_attr(hash(fetched.request_body))}`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a2;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a2 = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a2 >>> 7 ^ a2 >>> 18 ^ a2 >>> 3 ^ a2 << 25 ^ a2 << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a2 = bytes[i + 0];
    const b = bytes[i + 1];
    const c2 = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c2;
    bytes[i + 2] = b;
    bytes[i + 3] = a2;
  }
}
function encode(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars2[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes[i - 2] >> 2];
    result += chars2[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars2[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  constructor(use_hashes, directives, nonce, dev) {
    __privateAdd(this, _use_hashes, void 0);
    __privateAdd(this, _script_needs_csp, void 0);
    __privateAdd(this, _style_needs_csp, void 0);
    __privateAdd(this, _directives, void 0);
    __privateAdd(this, _script_src, void 0);
    __privateAdd(this, _style_src, void 0);
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, dev ? { ...directives } : directives);
    const d = __privateGet(this, _directives);
    if (dev) {
      const effective_style_src2 = d["style-src"] || d["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = directives[key2];
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  constructor(use_hashes, directives, nonce, dev) {
    var _a, _b;
    super(use_hashes, directives, nonce, dev);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = ((_a = directives["report-to"]) == null ? void 0 : _a.length) ?? 0 > 0;
      const has_report_uri = ((_b = directives["report-uri"]) == null ? void 0 : _b.length) ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  constructor({ mode, directives, reportOnly }, { prerender, dev }) {
    __publicField(this, "nonce", generate_nonce());
    __publicField(this, "csp_provider");
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce, dev);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce, dev);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
var updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch,
  fetched,
  options,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  var _a;
  if (state.prerendering) {
    if (options.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { entry } = options.manifest._;
  const stylesheets4 = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = (action_result == null ? void 0 : action_result.type) === "success" || (action_result == null ? void 0 : action_result.type) === "invalid" ? action_result.data ?? null : null;
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      components: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data = {};
    for (let i = 0; i < branch.length; i += 1) {
      data = { ...data, ...branch[i].data };
      props[`data_${i}`] = data;
    }
    props.page = {
      error: error2,
      params: event.params,
      routeId: event.routeId,
      status,
      url: event.url,
      data,
      form: form_value
    };
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        }
      });
    };
    print_error("origin", "origin");
    print_error("path", "pathname");
    print_error("query", "searchParams");
    rendered = options.root.render(props);
    for (const { node } of branch) {
      if (node.imports) {
        node.imports.forEach((url) => modulepreloads.add(url));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url) => stylesheets4.add(url));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body = rendered.html;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerendering
  });
  const target = hash(body);
  let assets2;
  if (options.paths.assets) {
    assets2 = options.paths.assets;
  } else if ((_a = state.prerendering) == null ? void 0 : _a.fallback) {
    assets2 = options.paths.base;
  } else {
    const segments = event.url.pathname.slice(options.paths.base.length).split("/").slice(2);
    assets2 = segments.length > 0 ? segments.map(() => "..").join("/") : ".";
  }
  const prefixed = (path) => path.startsWith("/") ? path : `${assets2}/${path}`;
  const serialized = { data: "", form: "null" };
  try {
    serialized.data = uneval(branch.map(({ server_data }) => server_data));
  } catch (e3) {
    const error3 = e3;
    const match = /\[(\d+)\]\.data\.(.+)/.exec(error3.path);
    if (match) {
      throw new Error(
        `Data returned from \`load\` while rendering ${event.routeId} is not serializable: ${error3.message} (data.${match[2]})`
      );
    }
    throw error3;
  }
  if (form_value) {
    serialized.form = uneval(form_value);
  }
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (options.dev)
      attributes.push(" data-sveltekit");
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets4) {
    const path = prefixed(dep);
    const attributes = [];
    if (csp.style_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      const preload_atts = ['rel="preload"', 'as="style"'].concat(attributes);
      link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
    }
    attributes.unshift('rel="stylesheet"');
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  if (page_config.csr) {
    const init_app = `
			import { start } from ${s(prefixed(entry.file))};

			start({
				env: ${s(options.public_env)},
				hydrate: ${page_config.ssr ? `{
					status: ${status},
					error: ${s(error2)},
					node_ids: [${branch.map(({ node }) => node.index).join(", ")}],
					params: ${uneval(event.params)},
					routeId: ${s(event.routeId)},
					data: ${serialized.data},
					form: ${serialized.form}
				}` : "null"},
				paths: ${s(options.paths)},
				target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode,
				trailing_slash: ${s(options.trailing_slash)}
			});
		`;
    for (const dep of modulepreloads) {
      const path = prefixed(dep);
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (state.prerendering) {
        head += `
		<link rel="modulepreload" href="${path}">`;
      }
    }
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
  }
  if (page_config.ssr && page_config.csr) {
    body += `
	${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n	")}`;
  }
  if (options.service_worker) {
    const init_service_worker = `
			if ('serviceWorker' in navigator) {
				addEventListener('load', function () {
					navigator.serviceWorker.register('${prefixed("service-worker.js")}');
				});
			}
		`;
    csp.add_script(init_service_worker);
    head += `
		<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  head += rendered.head;
  const html = await resolve_opts.transformPageChunk({
    html: options.app_template({ head, body, assets: assets2, nonce: csp.nonce }),
    done: true
  }) || "";
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  return new Response(html, {
    status,
    headers
  });
}
async function respond_with_error({ event, options, state, status, error: error2, resolve_opts }) {
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await options.manifest._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state.initiator = GENERIC_ERROR;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await options.manifest._.nodes[1](),
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: handle_error_and_jsonify(event, options, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (error3) {
    if (error3 instanceof Redirect) {
      return redirect_response(error3.status, error3.location);
    }
    return static_error_page(
      options,
      error3 instanceof HttpError ? error3.status : 500,
      handle_error_and_jsonify(event, options, error3).message
    );
  }
}
async function render_page(event, route, page2, options, state, resolve_opts) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  state.initiator = route;
  if (is_action_json_request(event)) {
    const node = await options.manifest._.nodes[page2.leaf]();
    if (node.server) {
      return handle_action_json_request(event, options, node.server);
    }
  }
  try {
    const nodes = await Promise.all([
      ...page2.layouts.map((n2) => n2 == void 0 ? n2 : options.manifest._.nodes[n2]()),
      options.manifest._.nodes[page2.leaf]()
    ]);
    const leaf_node = nodes.at(-1);
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event, leaf_node)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if ((action_result == null ? void 0 : action_result.type) === "redirect") {
        return redirect_response(303, action_result.location);
      }
      if ((action_result == null ? void 0 : action_result.type) === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if ((action_result == null ? void 0 : action_result.type) === "invalid") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node == null ? void 0 : node.server);
    const data_pathname = event.url.pathname.replace(/\/$/, "") + DATA_SUFFIX;
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod && mod.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options,
        state,
        resolve_opts
      });
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && (action_result == null ? void 0 : action_result.type) === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            }
          });
        } catch (e3) {
          load_error = e3;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr
          });
        } catch (e3) {
          load_error = e3;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e3) {
          const err = normalize_error(e3);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: new Response(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = handle_error_and_jsonify(event, options, err);
          while (i--) {
            if (page2.errors[i]) {
              const index4 = page2.errors[i];
              const node2 = await options.manifest._.nodes[index4]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      const body = stringify({
        type: "data",
        nodes: branch.map((branch_node) => branch_node == null ? void 0 : branch_node.server_data)
      });
      state.prerendering.dependencies.set(data_pathname, {
        response: new Response(body),
        body
      });
    }
    return await render_response({
      event,
      options,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched
    });
  } catch (error2) {
    return await respond_with_error({
      event,
      options,
      state,
      status: 500,
      error: error2,
      resolve_opts
    });
  }
}
function exec(match, names, types, matchers) {
  const params = {};
  for (let i = 0; i < names.length; i += 1) {
    const name = names[i];
    const type = types[i];
    let value = match[i + 1] || "";
    if (type) {
      const matcher = matchers[type];
      if (!matcher)
        throw new Error(`Missing "${type}" param matcher`);
      if (!matcher(value))
        return;
    }
    params[name] = value;
  }
  return params;
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
async function render_data(event, route, options, state) {
  var _a;
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = ((_a = event.request.headers.get("x-sveltekit-invalidated")) == null ? void 0 : _a.split(",").map(Boolean)) ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(
      url.pathname.slice(0, -DATA_SUFFIX.length),
      options.trailing_slash
    );
    const new_event = { ...event, url };
    const functions = node_ids.map((n2, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return {
              type: "skip"
            };
          }
          const node = n2 == void 0 ? n2 : await options.manifest._.nodes[n2]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await functions[j]();
                if (parent) {
                  Object.assign(data, parent.data);
                }
              }
              return data;
            }
          });
        } catch (e3) {
          aborted = true;
          throw e3;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return {
          type: "skip"
        };
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch((error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return {
            type: "error",
            error: handle_error_and_jsonify(event, options, error2),
            status: error2 instanceof HttpError ? error2.status : void 0
          };
        })
      )
    );
    const server_data = {
      type: "data",
      nodes: nodes.slice(0, length)
    };
    return data_response(server_data, event);
  } catch (e3) {
    const error2 = normalize_error(e3);
    if (error2 instanceof Redirect) {
      const server_data = {
        type: "redirect",
        location: error2.location
      };
      return data_response(server_data, event);
    } else {
      return data_response(handle_error_and_jsonify(event, options, error2), event);
    }
  }
}
function get_cookies(request, url) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header);
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    get(name, opts) {
      const c2 = new_cookies[name];
      if (c2 && domain_matches(url.hostname, c2.options.domain) && path_matches(url.pathname, c2.options.path)) {
        return c2.value;
      }
      const decode = (opts == null ? void 0 : opts.decode) || decodeURIComponent;
      const req_cookies = (0, import_cookie.parse)(header, { decode });
      return req_cookies[name];
    },
    set(name, value, opts = {}) {
      new_cookies[name] = {
        name,
        value,
        options: {
          ...defaults,
          ...opts
        }
      };
    },
    delete(name, opts = {}) {
      new_cookies[name] = {
        name,
        value: "",
        options: {
          ...defaults,
          ...opts,
          maxAge: 0
        }
      };
    },
    serialize(name, value, opts) {
      return (0, import_cookie.serialize)(name, value, {
        ...defaults,
        ...opts
      });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {};
    for (const name in initial_cookies) {
      combined_cookies[name] = initial_cookies[name];
    }
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain))
        continue;
      if (!path_matches(destination.pathname, cookie.options.path))
        continue;
      combined_cookies[cookie.name] = cookie.value;
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2);
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  return { cookies, new_cookies, get_cookie_header };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options } = new_cookie;
    headers.append("set-cookie", (0, import_cookie.serialize)(name, value, options));
  }
}
function create_fetch({ event, options, state, get_cookie_header }) {
  return async (info, init2) => {
    const request = normalize_fetch_input(info, init2, event.url);
    const request_body = init2 == null ? void 0 : init2.body;
    return await options.hooks.handleFetch({
      event,
      request,
      fetch: async (info2, init3) => {
        const request2 = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request2.url);
        if (!request2.headers.has("origin")) {
          request2.headers.set("origin", event.url.origin);
        }
        if ((request2.method === "GET" || request2.method === "HEAD") && (request2.mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request2.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && request2.credentials !== "omit") {
            const cookie = get_cookie_header(url, request2.headers.get("cookie"));
            if (cookie)
              request2.headers.set("cookie", cookie);
          }
          let response2 = await fetch(request2);
          if (request2.mode === "no-cors") {
            response2 = new Response("", {
              status: response2.status,
              statusText: response2.statusText,
              headers: response2.headers
            });
          } else {
            if (url.origin !== event.url.origin) {
              const acao = response2.headers.get("access-control-allow-origin");
              if (!acao || acao !== event.url.origin && acao !== "*") {
                throw new Error(
                  `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
                );
              }
            }
          }
          return response2;
        }
        let response;
        const prefix = options.paths.assets || options.paths.base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options.manifest.assets.has(filename);
        const is_asset_html = options.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file4 = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(options.read(file4), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request2);
        }
        if (request2.credentials !== "omit") {
          const cookie = get_cookie_header(url, request2.headers.get("cookie"));
          if (cookie) {
            request2.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request2.headers.has("authorization")) {
            request2.headers.set("authorization", authorization);
          }
        }
        if (request_body && typeof request_body !== "string" && !ArrayBuffer.isView(request_body)) {
          throw new Error("Request body must be a string or TypedArray");
        }
        response = await respond(request2, options, state);
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options2 } = set_cookie_parser.parseString(str);
            event.cookies.set(
              name,
              value,
              options2
            );
          }
        }
        return response;
      }
    });
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
var default_transform = ({ html }) => html;
var default_filter = () => false;
async function respond(request, options, state) {
  var _a, _b, _c;
  let url = new URL(request.url);
  if (options.csrf.check_origin) {
    const forbidden = request.method === "POST" && request.headers.get("origin") !== url.origin && is_form_content_type(request);
    if (forbidden) {
      return new Response(`Cross-site ${request.method} form submissions are forbidden`, {
        status: 403
      });
    }
  }
  let decoded;
  try {
    decoded = decodeURI(url.pathname);
  } catch {
    return new Response("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (options.paths.base && !((_a = state.prerendering) == null ? void 0 : _a.fallback)) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response("Not found", { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || "/";
  }
  const is_data_request = decoded.endsWith(DATA_SUFFIX);
  if (is_data_request)
    decoded = decoded.slice(0, -DATA_SUFFIX.length) || "/";
  if (!((_b = state.prerendering) == null ? void 0 : _b.fallback)) {
    const matchers = await options.manifest._.matchers();
    for (const candidate of options.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.names, candidate.types, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  if ((route == null ? void 0 : route.page) && !is_data_request) {
    const normalized = normalize_path(url.pathname, options.trailing_slash);
    if (normalized !== url.pathname && !((_c = state.prerendering) == null ? void 0 : _c.fallback)) {
      return new Response(void 0, {
        status: 301,
        headers: {
          "x-sveltekit-normalize": "1",
          location: (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
        }
      });
    }
  }
  const headers = {};
  const { cookies, new_cookies, get_cookie_header } = get_cookies(request, url);
  if (state.prerendering)
    disable_search(url);
  const event = {
    cookies,
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-cloudflare"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    routeId: route && route.id,
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            `Use \`event.cookies.set(name, value, options)\` instead of \`event.setHeaders\` to set cookies`
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = value;
          }
        }
      }
    },
    url
  };
  event.fetch = create_fetch({ event, options, state, get_cookie_header });
  const removed = (property, replacement, suffix = "") => ({
    get: () => {
      throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
    }
  });
  const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
  const body_getter = {
    get: () => {
      throw new Error(
        "To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details
      );
    }
  };
  Object.defineProperties(event, {
    clientAddress: removed("clientAddress", "getClientAddress"),
    method: removed("method", "request.method", details),
    headers: removed("headers", "request.headers", details),
    origin: removed("origin", "url.origin"),
    path: removed("path", "url.pathname"),
    query: removed("query", "url.searchParams"),
    body: body_getter,
    rawBody: body_getter
  });
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter
  };
  async function resolve(event2, opts) {
    var _a2;
    try {
      if (opts) {
        if ("transformPage" in opts) {
          throw new Error(
            "transformPage has been replaced by transformPageChunk \u2014 see https://github.com/sveltejs/kit/pull/5657 for more information"
          );
        }
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter
        };
      }
      if ((_a2 = state.prerendering) == null ? void 0 : _a2.fallback) {
        return await render_response({
          event: event2,
          options,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        let response;
        if (is_data_request) {
          response = await render_data(event2, route, options, state);
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          response = await render_page(event2, route, route.page, options, state, resolve_opts);
        } else {
          throw new Error("This should never happen");
        }
        return response;
      }
      if (state.initiator === GENERIC_ERROR) {
        return new Response("Internal Server Error", {
          status: 500
        });
      }
      if (!state.initiator) {
        return await respond_with_error({
          event: event2,
          options,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return new Response("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e3) {
      const error2 = e3 instanceof HttpError ? e3 : coalesce_to_error(e3);
      return handle_fatal_error(event2, options, error2);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
  try {
    const response = await options.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        if (!is_data_request) {
          for (const key2 in headers) {
            const value = headers[key2];
            response2.headers.set(key2, value);
          }
        }
        add_cookies_to_headers(response2.headers, Object.values(new_cookies));
        if (state.prerendering && event2.routeId !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.routeId));
        }
        return response2;
      }),
      get request() {
        throw new Error("request in handle has been replaced with event" + details);
      }
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = response.headers.get("etag");
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    return response;
  } catch (e3) {
    const error2 = coalesce_to_error(e3);
    return handle_fatal_error(event, options, error2);
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var app_template = ({ head, body, assets: assets2, nonce }) => `<!DOCTYPE html>
<html lang=en>

<head>
    <title>Hi. We\u2019re Valera. We make payment tech.</title>
    <meta name="description" content="From daily coffees \u2615 to corporate treasuries \u{1F4BC}, we help people trust verify their money. An early-stage payment technology firm developing cutting edge hardware and software using Bitcoin, the internet's native currency. Est. 722,913.">
    <meta property="og:locale" content="en_US">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Hi. We\u2019re Valera. We make payment tech.">
    <meta property="og:description" content="From daily coffees \u2615 to corporate treasuries \u{1F4BC}, we help people trust verify their money. An early-stage payment technology firm developing cutting edge hardware and software using Bitcoin, the internet's native currency. Est. 722,913.">
    <meta property="og:url" content="https://valera.co/">
    <meta property="og:site_name" content="Valera">
    <meta property="og:image" content="` + assets2 + '/og.png">\n    <meta property="og:image:secure_url" content="' + assets2 + `/og.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:description" content="From daily coffees \u2615 to corporate treasuries \u{1F4BC}, we help people trust verify their money. An early-stage payment technology firm developing cutting edge hardware and software using Bitcoin, the internet's native currency. Est. 722,913.">
    <meta name="twitter:title" content="Hi. We\u2019re Valera. We make payment tech.">
    <meta name="twitter:image" content="` + assets2 + '/og.png">\n    <meta name="twitter:site" content="@valeralabs">\n    <meta name="twitter:creator" content="@valeralabs">\n    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">\n    <meta charset=utf-8 />\n    <link rel=icon href=' + assets2 + "/favicon.png />\n    <link rel=stylesheet href=" + assets2 + "/font.css />\n    <meta name=viewport content=width=device-width /> " + head + "\n</head>\n\n<body>\n    <div>" + body + "</div>\n</body>\n\n</html>\n\n<style>\n    html {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: #000000;\n        height: 100%;\n    }\n    \n    body {\n        margin: 0;\n    }\n    \n    @media screen and (min-width: 1280px) {\n        html {\n            flex-direction: row;\n        }\n    }\n    \n    @media screen and (max-width: 1280px) {\n        html {\n            flex-direction: column;\n        }\n    }\n</style>";
var error_template = ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n";
var read = null;
set_paths({ "base": "", "assets": "" });
var Server = class {
  constructor(manifest2) {
    this.options = {
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      csrf: {
        check_origin: true
      },
      dev: false,
      handle_error: (error2, event) => {
        return this.options.hooks.handleError({
          error: error2,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        }) ?? { message: event.routeId != null ? "Internal Error" : "Not Found" };
      },
      hooks: null,
      manifest: manifest2,
      paths: { base, assets },
      public_env: {},
      read,
      root: Root,
      service_worker: false,
      app_template,
      app_template_contains_nonce: false,
      error_template,
      trailing_slash: "never"
    };
  }
  async init({ env }) {
    const entries = Object.entries(env);
    Object.fromEntries(entries.filter(([k]) => !k.startsWith("PUBLIC_")));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith("PUBLIC_")));
    this.options.public_env = pub;
    if (!this.options.hooks) {
      const module = await Promise.resolve().then(() => (init_hooks(), hooks_exports));
      if (module.externalFetch) {
        throw new Error("externalFetch has been removed \u2014 use handleFetch instead. See https://github.com/sveltejs/kit/pull/6565 for details");
      }
      this.options.hooks = {
        handle: module.handle || (({ event, resolve }) => resolve(event)),
        handleError: module.handleError || (({ error: error2 }) => console.error(error2.stack)),
        handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
      };
    }
  }
  async respond(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    return respond(request, this.options, options);
  }
};

// .svelte-kit/cloudflare-tmp/manifest.js
var manifest = {
  appDir: "_app",
  appPath: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png", "font.css", "og.png"]),
  mimeTypes: { ".png": "image/png", ".css": "text/css" },
  _: {
    entry: { "file": "_app/immutable/start-33fcf65f.js", "imports": ["_app/immutable/start-33fcf65f.js", "_app/immutable/chunks/index-3888cab9.js", "_app/immutable/chunks/singletons-f67fb1ef.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3))
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
      return {};
    }
  }
};
var prerendered = /* @__PURE__ */ new Set([]);

// .svelte-kit/cloudflare-tmp/_worker.js
async function e(e3, t2) {
  let n2 = "string" != typeof t2 && "HEAD" === t2.method;
  n2 && (t2 = new Request(t2, { method: "GET" }));
  let a2 = await e3.match(t2);
  return n2 && a2 && (a2 = new Response(null, a2)), a2;
}
function t(e3, t2, n2, o2) {
  return ("string" == typeof t2 || "GET" === t2.method) && a(n2) && (n2.headers.has("Set-Cookie") && (n2 = new Response(n2.body, n2)).headers.append("Cache-Control", "private=Set-Cookie"), o2.waitUntil(e3.put(t2, n2.clone()))), n2;
}
var n = /* @__PURE__ */ new Set([200, 203, 204, 300, 301, 404, 405, 410, 414, 501]);
function a(e3) {
  if (!n.has(e3.status) || ~(e3.headers.get("Vary") || "").indexOf("*"))
    return false;
  let t2 = e3.headers.get("Cache-Control") || "";
  return !/(private|no-cache|no-store)/i.test(t2);
}
function o(n2) {
  return async function(a2, o2) {
    let r2 = await e(n2, a2);
    if (r2)
      return r2;
    o2.defer((e3) => {
      t(n2, a2, e3, o2);
    });
  };
}
var s2 = caches.default;
var e2 = t.bind(0, s2);
var c = e.bind(0, s2);
var r = o.bind(0, s2);
var server = new Server(manifest);
var app_path = `/${manifest.appPath}/`;
var worker = {
  async fetch(req, env, context) {
    await server.init({ env });
    let pragma = req.headers.get("cache-control") || "";
    let res = !pragma.includes("no-cache") && await c(req);
    if (res)
      return res;
    let { pathname } = new URL(req.url);
    if (pathname.startsWith(app_path)) {
      res = await env.ASSETS.fetch(req);
      if (!res.ok)
        return res;
      const cache_control = pathname.startsWith(app_path + "immutable/") ? "public, immutable, max-age=31536000" : "no-cache";
      res = new Response(res.body, {
        headers: {
          "cache-control": cache_control,
          "content-type": res.headers.get("content-type"),
          "x-robots-tag": "noindex"
        }
      });
    } else {
      pathname = pathname.replace(/\/$/, "") || "/";
      let file4 = pathname.substring(1);
      try {
        file4 = decodeURIComponent(file4);
      } catch (err) {
      }
      if (manifest.assets.has(file4) || manifest.assets.has(file4 + "/index.html") || prerendered.has(pathname)) {
        res = await env.ASSETS.fetch(req);
      } else {
        res = await server.respond(req, {
          platform: { env, context, caches },
          getClientAddress() {
            return req.headers.get("cf-connecting-ip");
          }
        });
      }
    }
    pragma = res.headers.get("cache-control");
    return pragma && res.ok ? e2(req, res, context) : res;
  }
};
var worker_default = worker;
export {
  worker_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=_worker.js.map
