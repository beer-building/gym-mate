"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkoutSchema = void 0;
const shared_types_1 = require("@gym-mate/shared-types");
const id_params_1 = require("../id-params");
exports.UpdateWorkoutSchema = {
    description: 'Update workout in workout program',
    params: id_params_1.WorkoutProgramWorkoutParams,
    body: shared_types_1.UpdateWorkoutDto,
    tags: ['Authentication'],
    summary: 'Workout program workout',
    response: {
        204: shared_types_1.WorkoutReply,
        400: shared_types_1.ErrorReply
    }
};
//# sourceMappingURL=update-workout-schema.js.map