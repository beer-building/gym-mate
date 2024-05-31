"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = void 0;
const shared_types_1 = require("@gym-mate/shared-types");
exports.LoginSchema = {
    body: shared_types_1.LoginUserDto,
    description: 'Sign in user',
    tags: ['Authentication'],
    summary: 'sign in',
    response: {
        200: shared_types_1.UserReply,
        401: shared_types_1.ErrorReply
    }
};
//# sourceMappingURL=login.js.map