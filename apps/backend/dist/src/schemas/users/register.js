"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterSchema = void 0;
const shared_types_1 = require("@gym-mate/shared-types");
exports.RegisterSchema = {
    body: shared_types_1.CreateUserDto,
    description: 'Sign up a user',
    tags: ['Authentication'],
    summary: 'sign up',
    response: {
        201: shared_types_1.UserReply,
        400: shared_types_1.ErrorReply
    }
};
//# sourceMappingURL=register.js.map