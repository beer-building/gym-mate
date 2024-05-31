"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWorkoutProgramsSchema = void 0;
const shared_types_1 = require("@gym-mate/shared-types");
exports.GetWorkoutProgramsSchema = {
    description: 'Get workout programs list',
    tags: ['Authentication'],
    summary: 'Workout programs list',
    response: {
        200: shared_types_1.WorkoutProgramsReply,
        400: shared_types_1.ErrorReply
    }
};
//# sourceMappingURL=get-workout-programs.js.map