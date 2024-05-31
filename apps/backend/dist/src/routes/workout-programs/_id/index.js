"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../../../services");
const workout_programs_1 = require("../../../schemas/workout-programs");
const workoutProgramRoutes = async (server) => {
    const workoutProgramService = new services_1.WorkoutProgramService(server);
    server.addHook('onRequest', server.authenticate);
    server.get('/', { schema: workout_programs_1.GetWorkoutProgramSchema }, async (request, reply) => {
        const userId = request.user.id;
        const workoutProgramId = request.params.id;
        const workoutProgram = await workoutProgramService.findUserWorkoutProgram(userId, workoutProgramId);
        reply.send({ workoutProgram });
    });
    server.put('/', { schema: workout_programs_1.EditWorkoutProgramSchema }, async (request) => {
        const userId = request.user.id;
        const workoutProgramId = request.params.id;
        const updatedWorkoutProgram = await workoutProgramService.updateUserWorkoutProgram(request.body, workoutProgramId, userId);
        return { workoutProgram: updatedWorkoutProgram };
    });
};
exports.default = workoutProgramRoutes;
//# sourceMappingURL=index.js.map