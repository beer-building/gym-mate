import { h as httpService } from "./http-service.js";
import { createMutation } from "@farfetched/core";
const signupQuery = createMutation({
  effect: httpService.post("/users")
});
const loginQuery = createMutation({
  effect: httpService.post("/users/login")
});
const EMPTY_FIELD_TEXT = "This field cannot be empty.";
export {
  EMPTY_FIELD_TEXT as E,
  loginQuery as l,
  signupQuery as s
};
