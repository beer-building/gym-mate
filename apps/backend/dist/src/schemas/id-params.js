"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutProgramWorkoutParams = exports.WorkoutParams = exports.IdParams = void 0;
const typebox_1 = require("@sinclair/typebox");
exports.IdParams = typebox_1.Type.Object({
    id: typebox_1.Type.Number()
});
exports.WorkoutParams = typebox_1.Type.Object({
    workoutId: typebox_1.Type.Number()
});
exports.WorkoutProgramWorkoutParams = typebox_1.Type.Intersect([exports.IdParams, exports.WorkoutParams]);
//# sourceMappingURL=id-params.js.map