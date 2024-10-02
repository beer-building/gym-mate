import { c as create_ssr_component, b as subscribe, e as escape, v as validate_component } from "../../../../../chunks/ssr.js";
import { I as Input, B as Button } from "../../../../../chunks/Input.js";
/* empty css                                                        */import { g as goto } from "../../../../../chunks/navigation.js";
import { c as create } from "../../../../../chunks/workout-programs.api.js";
import { createStore, createEvent, createEffect, sample } from "effector";
import { spread } from "patronum";
const programName = createStore("");
const programDescription = createStore("");
const errorMessage = createStore("");
const fieldChanged = createEvent();
const createWorkoutProgram = createEvent();
const redirectToWorkoutProgramsFx = createEffect(() => {
  goto("/app/workout-programs");
});
spread({
  source: fieldChanged,
  targets: {
    programName,
    programDescription
  }
});
sample({
  clock: createWorkoutProgram,
  source: [programName, programDescription],
  fn: ([title, description]) => ({ workoutProgram: { title, description } }),
  target: create.start
});
sample({
  clock: create.finished.success,
  target: redirectToWorkoutProgramsFx
});
sample({
  clock: create.finished.failure,
  fn: ({ error }) => error.message,
  target: errorMessage
});
const NewWorkoutProgram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $errorMessage, $$unsubscribe_errorMessage;
  let $programName, $$unsubscribe_programName;
  let $programDescription, $$unsubscribe_programDescription;
  $$unsubscribe_errorMessage = subscribe(errorMessage, (value) => $errorMessage = value);
  $$unsubscribe_programName = subscribe(programName, (value) => $programName = value);
  $$unsubscribe_programDescription = subscribe(programDescription, (value) => $programDescription = value);
  $$unsubscribe_errorMessage();
  $$unsubscribe_programName();
  $$unsubscribe_programDescription();
  return `<div>${$errorMessage ? `${escape($errorMessage)}` : ``} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      placeholder: "Workout program name",
      value: $programName
    },
    {},
    {}
  )} ${validate_component(Input, "Input").$$render(
    $$result,
    {
      placeholder: "Workout program description",
      value: $programDescription
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Create`;
    }
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NewWorkoutProgram, "NewWorkoutProgram").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
