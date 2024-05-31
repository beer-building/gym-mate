"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWorkoutProgramSchema = void 0;
const shared_types_1 = require("@gym-mate/shared-types");
const id_params_1 = require("../id-params");
exports.GetWorkoutProgramSchema = {
    description: 'Get workout programs list',
    tags: ['Authentication'],
    summary: 'Workout Program',
    params: id_params_1.IdParams,
    response: {
        200: shared_types_1.GetWorkoutProgramReply,
        400: shared_types_1.ErrorReply
    }
};
//# sourceMappingURL=get-workout-program.js.map