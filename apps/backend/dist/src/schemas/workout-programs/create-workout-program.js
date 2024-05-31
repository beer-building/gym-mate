"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkoutProgramSchema = void 0;
const shared_types_1 = require("@gym-mate/shared-types");
exports.CreateWorkoutProgramSchema = {
    body: shared_types_1.CreateWorkoutProgramDto,
    description: 'Create empty workout program',
    tags: ['Authentication'],
    summary: 'Workout program',
    response: {
        201: shared_types_1.WorkoutProgramReply,
        400: shared_types_1.ErrorReply
    }
};
//# sourceMappingURL=create-workout-program.js.map