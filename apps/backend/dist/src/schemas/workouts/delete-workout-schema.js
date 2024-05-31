"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteWorkoutSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const shared_types_1 = require("@gym-mate/shared-types");
const id_params_1 = require("../id-params");
exports.DeleteWorkoutSchema = {
    description: 'Delete workout in workout program',
    params: id_params_1.WorkoutProgramWorkoutParams,
    tags: ['Authentication'],
    summary: 'Delete workout',
    response: {
        200: typebox_1.Type.Object({ ok: typebox_1.Type.Boolean() }),
        400: shared_types_1.ErrorReply
    }
};
//# sourceMappingURL=delete-workout-schema.js.map