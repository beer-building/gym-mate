import { c as create_ssr_component, d as add_styles, b as subscribe, f as each, g as add_attribute, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
/* empty css                                                  */import { R as RouteGuard } from "../../../chunks/RouteGuard.js";
import { $ as $isAuthorized } from "../../../chunks/auth.service.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const css$2 = {
  code: ".icon.svelte-1gi82k{display:flex}.icon.svelte-1gi82k svg{width:var(--size);height:var(--size)}",
  map: null
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { size = 24 } = $$props;
  let iconContent = "";
  const fetchIcon = (name2) => {
    __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./icons/profile.svg": () => import("../../../chunks/profile.js"), "./icons/trash.svg": () => import("../../../chunks/trash.js"), "./icons/workout.svg": () => import("../../../chunks/workout.js") }), `./icons/${name2}.svg`).then((module) => {
      iconContent = module.default;
    });
  };
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$2);
  {
    {
      fetchIcon(name);
    }
  }
  return `<div class="icon svelte-1gi82k"${add_styles({ "--size": `${size}px` })}> <!-- HTML_TAG_START -->${iconContent}<!-- HTML_TAG_END --> </div>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-9k2zr7{display:flex;position:fixed;bottom:0;justify-content:space-evenly;align-items:center;-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);border-top:1px solid var(--color-border);width:100%;height:var(--header-height)}@media(min-width: 650px){header.svelte-9k2zr7{top:0;bottom:auto;justify-content:flex-end;gap:12px;border-top:none;border-bottom:1px solid var(--color-border);padding:0 12px\n	}}header.svelte-9k2zr7::before{position:absolute;top:0;left:0;opacity:0.7;z-index:0;background-color:var(--color-surface);width:100%;height:100%;content:''}.scope__button.svelte-9k2zr7{display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center;gap:3px;-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:0.7;z-index:1;transition:var(--transition);border:none;background:none;padding:12px;padding-bottom:calc(env(safe-area-inset-bottom) + 12px);color:var(--color-text);font-weight:500;font-size:0.8rem;text-decoration:none;-webkit-tap-highlight-color:transparent}@media(min-width: 650px){.scope__button.svelte-9k2zr7{flex:none;flex-direction:row;border-radius:var(--base-radius);padding:0 12px;height:36px;font-weight:700\n	}.scope__button.svelte-9k2zr7:hover,.scope__button.active.svelte-9k2zr7{background-color:var(--color-surface-on-background)}}.scope__button.svelte-9k2zr7:hover,.scope__button.active.svelte-9k2zr7{opacity:1;color:var(--color-accent100);font-weight:700}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const SCOPES = [
    {
      icon: "workout",
      title: "Workout",
      url: "/workout-programs"
    },
    {
      icon: "profile",
      title: "Profile",
      url: "/profile"
    }
  ];
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="svelte-9k2zr7">${each(SCOPES, (scope) => {
    return `<a class="${[
      "scope__button svelte-9k2zr7",
      "/app" + scope.url === $page.url.pathname ? "active" : ""
    ].join(" ").trim()}"${add_attribute("href", `/app${scope.url}`, 0)}>${validate_component(Icon, "Icon").$$render($$result, { name: scope.icon }, {}, {})} <span>${escape(scope.title)}</span> </a>`;
  })} </header>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".inner.svelte-xbd0tf{padding-bottom:var(--header-height);@media (--desktop-viewport) {\n			padding-top: var(--header-height);\n			padding-bottom: 0;\n		}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isAuthorized$1, $$unsubscribe_isAuthorized;
  const isAuthorized = $isAuthorized;
  $$unsubscribe_isAuthorized = subscribe(isAuthorized, (value) => $isAuthorized$1 = value);
  $$result.css.add(css);
  $$unsubscribe_isAuthorized();
  return `${validate_component(RouteGuard, "RouteGuard").$$render(
    $$result,
    {
      allow: $isAuthorized$1,
      redirectTo: "/auth"
    },
    {},
    {
      default: () => {
        return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="inner svelte-xbd0tf">${slots.default ? slots.default({}) : ``}</div>`;
      }
    }
  )}`;
});
export {
  Layout as default
};
