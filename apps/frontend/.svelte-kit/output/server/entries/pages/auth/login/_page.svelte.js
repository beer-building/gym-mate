import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../chunks/ssr.js";
import { I as Input, B as Button } from "../../../../chunks/Input.js";
/* empty css                                                     */import { l as loginQuery, E as EMPTY_FIELD_TEXT } from "../../../../chunks/constants.js";
import { s as setToken } from "../../../../chunks/auth.service.js";
import { createStore, combine, createEvent, sample } from "effector";
import { spread } from "patronum";
const login$ = createStore("");
const password$ = createStore("");
const errors$ = createStore({});
const formDisabled$ = combine(loginQuery.$pending, errors$).map(
  ([pending, errors]) => {
    const hasErrors = Object.entries(errors).some(([_, value]) => value);
    return pending || hasErrors;
  }
);
const fieldChanged = createEvent();
const formSubmitted = createEvent();
spread({
  source: fieldChanged,
  targets: {
    login: login$,
    password: password$
  }
});
sample({
  clock: fieldChanged,
  source: errors$,
  fn: (errors, event) => {
    const field = Object.keys(event)[0];
    return { ...errors, [field]: "" };
  },
  target: errors$
});
sample({
  clock: formSubmitted,
  source: { login: login$, password: password$ },
  fn: ({ login, password }) => {
    const errors = {};
    if (!login) {
      errors.login = EMPTY_FIELD_TEXT;
    }
    if (!password) {
      errors.password = EMPTY_FIELD_TEXT;
    }
    return errors;
  },
  target: errors$
});
sample({
  clock: formSubmitted,
  filter: formDisabled$.map((e) => !e),
  source: {
    email: login$,
    password: password$
  },
  fn: (form) => ({ user: form }),
  target: loginQuery.start
});
sample({
  clock: loginQuery.finished.success,
  fn: ({ result }) => ({ token: result.user.token }),
  target: setToken
});
sample({
  clock: loginQuery.finished.failure,
  fn: ({ error }) => ({ login: error.message }),
  target: errors$
});
const Login_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page.svelte-15s75xk{display:flex;flex-direction:column;justify-content:center;margin:0 auto;padding:12px;max-width:500px;height:100%;min-height:inherit}form.svelte-15s75xk{display:flex;flex-direction:column;gap:10px;margin-top:24px;box-shadow:var(--shadow1);border-radius:var(--base-radius);background:var(--color-surface);padding:20px}form.svelte-15s75xk button{justify-content:center;margin-top:12px;width:100%}",
  map: null
};
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $login, $$unsubscribe_login;
  let $errors, $$unsubscribe_errors;
  let $password, $$unsubscribe_password;
  let $disabled, $$unsubscribe_disabled;
  const login = login$;
  $$unsubscribe_login = subscribe(login, (value) => $login = value);
  const password = password$;
  $$unsubscribe_password = subscribe(password, (value) => $password = value);
  const errors = errors$;
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  const disabled = formDisabled$;
  $$unsubscribe_disabled = subscribe(disabled, (value) => $disabled = value);
  $$result.css.add(css);
  $$unsubscribe_login();
  $$unsubscribe_errors();
  $$unsubscribe_password();
  $$unsubscribe_disabled();
  return `<div class="page svelte-15s75xk"><h1 data-svelte-h="svelte-1wsy7a9">Login</h1> <form class="svelte-15s75xk">${validate_component(Input, "Input").$$render(
    $$result,
    {
      placeholder: "Login",
      label: "Login",
      type: "email",
      value: $login,
      error: $errors.login
    },
    {},
    {}
  )} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "password",
      placeholder: "Password",
      label: "Password",
      value: $password,
      error: $errors.password
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      disabled: $disabled,
      type: "submit",
      size: "large"
    },
    {},
    {
      default: () => {
        return `Login`;
      }
    }
  )}</form> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Login, "Login").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
