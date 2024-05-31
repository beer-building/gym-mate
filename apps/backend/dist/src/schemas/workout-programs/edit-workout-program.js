"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditWorkoutProgramSchema = void 0;
const shared_types_1 = require("@gym-mate/shared-types");
const id_params_1 = require("../id-params");
exports.EditWorkoutProgramSchema = {
    body: shared_types_1.EditWorkoutProgramDto,
    description: 'Edit workout program',
    tags: ['Authentication'],
    summary: 'Workout program',
    params: id_params_1.IdParams,
    response: {
        201: shared_types_1.WorkoutProgramReply,
        400: shared_types_1.ErrorReply
    }
};
//# sourceMappingURL=edit-workout-program.js.map