import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { createStore, createEvent, sample } from "effector";
import { w as workoutProgram } from "../../../../../chunks/workout-programs.api.js";
const workoutProgram$ = createStore({});
const pagePending$ = workoutProgram.$pending;
const pageMounted = createEvent();
sample({
  clock: pageMounted,
  target: workoutProgram.start
});
sample({
  clock: workoutProgram.finished.success,
  fn: ({ result }) => result.workoutProgram,
  target: workoutProgram$
});
const ShowWorkoutProgram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pagePending$, $$unsubscribe_pagePending$;
  let $workoutProgram$, $$unsubscribe_workoutProgram$;
  $$unsubscribe_pagePending$ = subscribe(pagePending$, (value) => $pagePending$ = value);
  $$unsubscribe_workoutProgram$ = subscribe(workoutProgram$, (value) => $workoutProgram$ = value);
  let { id = "" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$unsubscribe_pagePending$();
  $$unsubscribe_workoutProgram$();
  return `${$pagePending$ ? `Loading...` : `<h2>${escape($workoutProgram$.title)}</h2> <p>${escape($workoutProgram$.description)}</p>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${validate_component(ShowWorkoutProgram, "ShowWorkoutProgram").$$render($$result, { id: $page.params.id }, {}, {})}`;
});
export {
  Page as default
};
