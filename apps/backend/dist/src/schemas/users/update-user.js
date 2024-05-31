"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserSchema = void 0;
const shared_types_1 = require("@gym-mate/shared-types");
exports.UpdateUserSchema = {
    body: shared_types_1.UpdateUserDto,
    response: {
        200: shared_types_1.UserReply
    }
};
//# sourceMappingURL=update-user.js.map