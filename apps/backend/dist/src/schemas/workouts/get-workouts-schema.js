"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWorkoutsSchema = void 0;
const shared_types_1 = require("@gym-mate/shared-types");
const id_params_1 = require("../id-params");
exports.GetWorkoutsSchema = {
    description: 'Get workout programs workouts',
    params: id_params_1.IdParams,
    tags: ['Authentication'],
    summary: 'Workout-program workouts',
    response: {
        200: shared_types_1.WorkoutsReply,
        400: shared_types_1.ErrorReply
    }
};
//# sourceMappingURL=get-workouts-schema.js.map