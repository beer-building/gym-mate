"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkoutSchema = void 0;
const shared_types_1 = require("@gym-mate/shared-types");
const id_params_1 = require("../id-params");
exports.CreateWorkoutSchema = {
    description: 'Create workout in workout program',
    params: id_params_1.IdParams,
    tags: ['Authentication'],
    summary: 'Workout program workout',
    response: {
        201: shared_types_1.WorkoutReply,
        400: shared_types_1.ErrorReply
    }
};
//# sourceMappingURL=create-workout-schema.js.map