import { h as httpService } from "./http-service.js";
import { createQuery, createMutation } from "@farfetched/core";
import { createEffect } from "effector";
const getAll = createQuery({
  effect: httpService.get("/workout-programs")
});
const create = createMutation({
  effect: httpService.post(
    "/workout-programs"
  )
});
const workoutProgram = createQuery({
  effect: createEffect((id) => {
    return httpService.get(`/workout-programs/${id}`)();
  })
});
export {
  create as c,
  getAll as g,
  workoutProgram as w
};
