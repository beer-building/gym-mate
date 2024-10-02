import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { R as RouteGuard } from "../../../chunks/RouteGuard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(RouteGuard, "RouteGuard").$$render($$result, { allow: false, redirectTo: "/auth/login" }, {}, {})}`;
});
export {
  Page as default
};
