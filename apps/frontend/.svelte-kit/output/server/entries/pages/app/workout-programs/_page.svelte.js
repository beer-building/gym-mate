import { c as create_ssr_component, g as add_attribute, e as escape, b as subscribe, f as each, v as validate_component } from "../../../../chunks/ssr.js";
import { g as getAll } from "../../../../chunks/workout-programs.api.js";
import { createStore, createEvent, sample } from "effector";
const workoutPrograms = createStore([]);
const isLoading = createStore(true);
const pageMounted = createEvent();
sample({
  clock: pageMounted,
  target: getAll.start
});
sample({
  clock: getAll.finished.success,
  fn: ({ result }) => result.workoutPrograms,
  target: workoutPrograms
});
sample({
  clock: getAll.finished.success,
  fn: () => false,
  target: isLoading
});
sample({
  clock: getAll.finished.failure,
  fn: () => false,
  target: isLoading
});
const WorkoutProgram_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.workout-program.svelte-1hbv1fg{border:1px solid gray;border-radius:6px;padding:6px;color:inherit;text-decoration:none}",
  map: null
};
const WorkoutProgram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { id } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  $$result.css.add(css$1);
  return `<a class="workout-program svelte-1hbv1fg"${add_attribute("href", `/app/workout-programs/${id}`, 0)}>${escape(title)} </a>`;
});
const WorkoutPrograms_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-1x0sgx5{margin-bottom:6px}.workout-programs.svelte-1x0sgx5{display:flex;flex-direction:column;gap:4px;margin-bottom:12px;padding:0 6px}",
  map: null
};
const WorkoutPrograms = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLoading, $$unsubscribe_isLoading;
  let $workoutPrograms, $$unsubscribe_workoutPrograms;
  $$unsubscribe_isLoading = subscribe(isLoading, (value) => $isLoading = value);
  $$unsubscribe_workoutPrograms = subscribe(workoutPrograms, (value) => $workoutPrograms = value);
  $$result.css.add(css);
  $$unsubscribe_isLoading();
  $$unsubscribe_workoutPrograms();
  return `<div class="page"><h1 class="svelte-1x0sgx5" data-svelte-h="svelte-mt8cxk">Workout Programs</h1> <div class="workout-programs svelte-1x0sgx5">${$isLoading ? `..Loading` : `${each($workoutPrograms, (workoutProgram) => {
    return `${validate_component(WorkoutProgram, "WorkoutProgram").$$render(
      $$result,
      {
        id: workoutProgram.id,
        title: workoutProgram.title
      },
      {},
      {}
    )}`;
  })}`} <a href="/app/workout-programs/new" data-svelte-h="svelte-doon8b">Create new</a></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(WorkoutPrograms, "WorkoutPrograms").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
