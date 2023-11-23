import { FastifySchema } from "fastify";
import { RouteGenericInterface } from "fastify/types/route";

import {
  CreateUserDto,
  ErrorReply,
  UserReply,
  UserReplyType,
} from "@gym-mate/shared-types";

export interface RegisterRequest extends RouteGenericInterface {
  Body: CreateUserDto;
  Reply: UserReplyType;
}

export const RegisterSchema: FastifySchema = {
  body: CreateUserDto,
  description: "Sign up a user",
  tags: ["Authentication"],
  summary: "sign up",
  response: {
    201: UserReply,
    400: ErrorReply,
  },
};
