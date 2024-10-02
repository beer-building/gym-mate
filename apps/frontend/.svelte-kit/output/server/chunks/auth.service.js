import { h as httpService } from "./http-service.js";
import { createStore, createEvent, sample } from "effector";
import { persist } from "effector-storage/local";
const $token = createStore({ token: "" });
const $isAuthorized = $token.map(({ token }) => Boolean(token.length));
const setToken = createEvent();
sample({
  clock: $token,
  fn: ({ token }) => token,
  target: httpService.setAuthCredentials()
});
persist({
  source: setToken,
  target: $token,
  key: "token"
});
export {
  $isAuthorized as $,
  setToken as s
};
