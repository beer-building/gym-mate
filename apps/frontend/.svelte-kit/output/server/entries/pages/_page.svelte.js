import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../chunks/ssr.js";
import { $ as $isAuthorized } from "../../chunks/auth.service.js";
const Landing_svelte_svelte_type_style_lang = "";
const css = {
  code: ".header.svelte-uxdrjx.svelte-uxdrjx{position:sticky;top:0;background:var(--color-surface);padding:10px 12px}.header__inner.svelte-uxdrjx.svelte-uxdrjx{display:flex;justify-content:space-between;align-items:center}.header.svelte-uxdrjx nav.svelte-uxdrjx{display:flex;gap:10px}.header.svelte-uxdrjx nav a.svelte-uxdrjx{display:flex;align-items:center;border-radius:var(--base-radius);background:var(--color-accent10);padding:0 12px;height:32px;color:var(--color-accent100);text-decoration:none}.header.svelte-uxdrjx nav a.login.svelte-uxdrjx{background:var(--color-accent100);color:var(--color-text-on-accent)}.logo.svelte-uxdrjx img.svelte-uxdrjx{border-radius:8px;height:32px}.container.svelte-uxdrjx.svelte-uxdrjx{margin:0 auto;width:100%;max-width:900px}main.svelte-uxdrjx.svelte-uxdrjx{padding:40px 0}",
  map: null
};
const Landing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isAuthorized$1, $$unsubscribe_isAuthorized;
  const isAuthorized = $isAuthorized;
  $$unsubscribe_isAuthorized = subscribe(isAuthorized, (value) => $isAuthorized$1 = value);
  $$result.css.add(css);
  $$unsubscribe_isAuthorized();
  return `<header class="header svelte-uxdrjx"><div class="container header__inner svelte-uxdrjx"><a href="/" class="logo svelte-uxdrjx" data-svelte-h="svelte-10s04zn"><img src="/images/logo.svg" alt="Logo" class="svelte-uxdrjx"></a> ${$isAuthorized$1 ? `<nav class="svelte-uxdrjx" data-svelte-h="svelte-1k2b0gc"><a href="/app" class="svelte-uxdrjx">Goto app</a></nav>` : `<nav class="svelte-uxdrjx" data-svelte-h="svelte-16xpe8z"><a class="login svelte-uxdrjx" href="/auth/login">Login</a> <a href="/auth/signup" class="svelte-uxdrjx">Sign up</a></nav>`}</div></header> <main class="svelte-uxdrjx" data-svelte-h="svelte-xkxf1z"><div class="container svelte-uxdrjx"><h1>Welcome to gymmate</h1></div> </main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Landing, "Landing").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
