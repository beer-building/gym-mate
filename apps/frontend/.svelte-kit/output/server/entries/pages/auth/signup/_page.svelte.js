import { c as create_ssr_component, b as subscribe, v as validate_component, g as add_attribute } from "../../../../chunks/ssr.js";
import { I as Input, B as Button } from "../../../../chunks/Input.js";
/* empty css                                                     */import { createStore, combine, createEvent, sample } from "effector";
import { spread } from "patronum";
import { E as EMPTY_FIELD_TEXT, s as signupQuery } from "../../../../chunks/constants.js";
import { s as setToken } from "../../../../chunks/auth.service.js";
const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
const validateSignupData = ({
  username,
  email,
  password,
  passwordConfirmation
}) => {
  const errors = {};
  if (!username.trim().length) {
    errors.username = EMPTY_FIELD_TEXT;
  }
  if (!email.trim().length) {
    errors.email = EMPTY_FIELD_TEXT;
  }
  if (!password.trim().length) {
    errors.password = EMPTY_FIELD_TEXT;
  }
  if (!passwordConfirmation.trim().length) {
    errors.passwordConfirmation = EMPTY_FIELD_TEXT;
  }
  if (email.trim().length && !email.match(emailRegex)) {
    errors.email = "Invalid email address.";
  }
  if (password !== passwordConfirmation) {
    errors.passwordConfirmation = "Password confirmation does not match password.";
  }
  return errors;
};
const username$ = createStore("");
const email$ = createStore("");
const password$ = createStore("");
const passwordConfirmation$ = createStore("");
const signupErrors$ = createStore({});
const signupFormData$ = combine(
  username$,
  email$,
  password$,
  passwordConfirmation$,
  (username, email, password, passwordConfirmation) => ({
    username,
    email,
    password,
    passwordConfirmation
  })
);
const fieldChanged = createEvent();
const signupButtonClicked = createEvent();
const validationCompleted = createEvent();
spread({
  source: fieldChanged,
  targets: {
    username: username$,
    email: email$,
    password: password$,
    passwordConfirmation: passwordConfirmation$
  }
});
sample({
  clock: fieldChanged,
  source: signupErrors$,
  filter: (errors, field) => {
    return Object.keys(field)[0] in errors;
  },
  fn: (errors, field) => {
    Reflect.deleteProperty(errors, Object.keys(field)[0]);
    return { ...errors };
  },
  target: signupErrors$
});
sample({
  clock: signupButtonClicked,
  source: signupFormData$,
  fn: validateSignupData,
  target: [validationCompleted, signupErrors$]
});
sample({
  clock: validationCompleted,
  source: [signupErrors$, signupFormData$],
  filter: ([errors]) => !Object.keys(errors).length,
  fn: ([_, data]) => ({
    user: { username: data.username, email: data.email, password: data.password }
  }),
  target: signupQuery.start
});
sample({
  clock: signupQuery.finished.success,
  fn: ({ result }) => ({ token: result.user.token }),
  target: setToken
});
const signupModel = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  email$,
  fieldChanged,
  password$,
  passwordConfirmation$,
  signupButtonClicked,
  signupErrors$,
  username$
}, Symbol.toStringTag, { value: "Module" }));
const Signup_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page.svelte-1i8rd0i.svelte-1i8rd0i{display:flex;flex-direction:column;justify-content:center;margin:0 auto;padding:12px;max-width:500px;height:100%;min-height:inherit}form.svelte-1i8rd0i.svelte-1i8rd0i{display:flex;flex-direction:column;gap:5px;margin-top:24px;box-shadow:var(--shadow1);border-radius:var(--base-radius);background:var(--color-surface);padding:20px}form.svelte-1i8rd0i button{justify-content:center;margin-top:12px;width:100%}form.svelte-1i8rd0i .password-toggler.svelte-1i8rd0i{display:flex;align-items:center;gap:10px}",
  map: null
};
const Signup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $username$, $$unsubscribe_username$;
  let $signupErrors$, $$unsubscribe_signupErrors$;
  let $email$, $$unsubscribe_email$;
  let $password$, $$unsubscribe_password$;
  let $passwordConfirmation$, $$unsubscribe_passwordConfirmation$;
  let isPasswordShown = false;
  const { username$: username$2, email$: email$2, password$: password$2, passwordConfirmation$: passwordConfirmation$2, signupErrors$: signupErrors$2, fieldChanged: fieldChanged2, signupButtonClicked: signupButtonClicked2 } = signupModel;
  $$unsubscribe_username$ = subscribe(username$2, (value) => $username$ = value);
  $$unsubscribe_email$ = subscribe(email$2, (value) => $email$ = value);
  $$unsubscribe_password$ = subscribe(password$2, (value) => $password$ = value);
  $$unsubscribe_passwordConfirmation$ = subscribe(passwordConfirmation$2, (value) => $passwordConfirmation$ = value);
  $$unsubscribe_signupErrors$ = subscribe(signupErrors$2, (value) => $signupErrors$ = value);
  $$result.css.add(css);
  $$unsubscribe_username$();
  $$unsubscribe_signupErrors$();
  $$unsubscribe_email$();
  $$unsubscribe_password$();
  $$unsubscribe_passwordConfirmation$();
  return `<div class="page svelte-1i8rd0i"><h1 data-svelte-h="svelte-13vjqy4">Sign up</h1> <form class="svelte-1i8rd0i">${validate_component(Input, "Input").$$render(
    $$result,
    {
      placeholder: "Username",
      value: $username$,
      error: $signupErrors$.username
    },
    {},
    {}
  )} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      placeholder: "Email",
      value: $email$,
      error: $signupErrors$.email
    },
    {},
    {}
  )} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "password",
      placeholder: "Password",
      value: $password$,
      error: $signupErrors$.password
    },
    {},
    {}
  )} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      type: "password",
      placeholder: "Confirm password",
      value: $passwordConfirmation$,
      error: $signupErrors$.passwordConfirmation || ""
    },
    {},
    {}
  )} <label class="password-toggler svelte-1i8rd0i">Show password
			<input type="checkbox"${add_attribute("checked", isPasswordShown, 1)}></label> ${validate_component(Button, "Button").$$render($$result, { size: "large" }, {}, {
    default: () => {
      return `Sign up`;
    }
  })}</form> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Signup, "Signup").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
