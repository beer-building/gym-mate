import { c as create_ssr_component, i as createEventDispatcher, g as add_attribute, e as escape } from "./ssr.js";
/* empty css                                    */const css$1 = {
  code: "button.svelte-lxhicp{display:flex;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;margin:0;border:none;background:none;padding:0;font-size:1rem}button.svelte-lxhicp:disabled{opacity:0.7;cursor:not-allowed}.kind__default.svelte-lxhicp{transition:var(--transition);border-radius:var(--base-radius);background-color:var(--color-accent100);color:var(--color-text-on-accent);font-weight:500}.kind__icon.svelte-lxhicp{justify-content:center;transition:var(--transition);border-radius:var(--base-radius);width:var(--size);height:var(--size)}.kind__icon.size__small.svelte-lxhicp{--size:24px}.kind__icon.size__normal.svelte-lxhicp{--size:28px}.kind__icon.size__large.svelte-lxhicp{--size:42px}.kind__icon.svelte-lxhicp:hover{background-color:var(--color-surface-on-background)}.size__small.svelte-lxhicp{padding:0 12px;height:24px;font-size:0.9rem}.size__normal.svelte-lxhicp{padding:0 12px;height:28px}.size__large.svelte-lxhicp{padding:0 12px;height:42px;font-size:1.1rem}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "button" } = $$props;
  let { kind = "default" } = $$props;
  let { size = "normal" } = $$props;
  let { disabled = false } = $$props;
  createEventDispatcher();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.kind === void 0 && $$bindings.kind && kind !== void 0)
    $$bindings.kind(kind);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  $$result.css.add(css$1);
  return `<button${add_attribute("type", type, 0)} class="${"kind__" + escape(kind, true) + " size__" + escape(size, true) + " svelte-lxhicp"}" ${disabled ? "disabled" : ""}>${slots.default ? slots.default({}) : ``} </button>`;
});
const css = {
  code: "label.svelte-gcwuym.svelte-gcwuym{display:flex;flex-direction:column;height:55px}.label.svelte-gcwuym.svelte-gcwuym{opacity:0.8;margin-bottom:3px;font-weight:bold;font-size:0.9rem}input.svelte-gcwuym.svelte-gcwuym{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;border:1px solid var(--color-border);border-radius:var(--base-radius);background:var(--color-surface-on-background);padding:0 6px;height:36px;font-size:1rem}.error.svelte-gcwuym input.svelte-gcwuym{border-color:var(--color-error);color:var(--color-error)}.error__text.svelte-gcwuym.svelte-gcwuym{color:var(--color-error);font-size:0.8rem}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "text" } = $$props;
  let { label = "" } = $$props;
  let { placeholder = "" } = $$props;
  let { value = "" } = $$props;
  let { error = "" } = $$props;
  createEventDispatcher();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  $$result.css.add(css);
  return `<div class="${["wrapper svelte-gcwuym", error ? "error" : ""].join(" ").trim()}"><label class="svelte-gcwuym">${label ? `<span class="label svelte-gcwuym">${escape(label)}</span>` : ``} <input${add_attribute("type", type, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)} class="svelte-gcwuym"></label> ${error ? `<span class="error__text svelte-gcwuym">${escape(error)}</span>` : ``} </div>`;
});
export {
  Button as B,
  Input as I
};
