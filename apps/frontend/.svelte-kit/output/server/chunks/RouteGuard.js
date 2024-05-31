import { c as create_ssr_component } from "./ssr.js";
import { g as goto } from "./navigation.js";
const RouteGuard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { allow = false } = $$props;
  let { redirectTo = void 0 } = $$props;
  if ($$props.allow === void 0 && $$bindings.allow && allow !== void 0)
    $$bindings.allow(allow);
  if ($$props.redirectTo === void 0 && $$bindings.redirectTo && redirectTo !== void 0)
    $$bindings.redirectTo(redirectTo);
  {
    {
      if (!allow && redirectTo) {
        goto(redirectTo, { replaceState: true });
      }
    }
  }
  return `${allow ? `${slots.default ? slots.default({}) : ``}` : ``}`;
});
export {
  RouteGuard as R
};
