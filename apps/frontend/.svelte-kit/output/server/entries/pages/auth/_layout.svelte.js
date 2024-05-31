import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { R as RouteGuard } from "../../../chunks/RouteGuard.js";
import { $ as $isAuthorized } from "../../../chunks/auth.service.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isAuthorized$1, $$unsubscribe_isAuthorized;
  const isAuthorized = $isAuthorized;
  $$unsubscribe_isAuthorized = subscribe(isAuthorized, (value) => $isAuthorized$1 = value);
  $$unsubscribe_isAuthorized();
  return `${validate_component(RouteGuard, "RouteGuard").$$render(
    $$result,
    {
      allow: !$isAuthorized$1,
      redirectTo: "/app"
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
export {
  Layout as default
};
