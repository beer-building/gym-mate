"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workout_programs_1 = require("../../schemas/workout-programs");
const services_1 = require("../../services");
const workoutProgramsRoutes = async (server) => {
    const workoutProgramService = new services_1.WorkoutProgramService(server);
    server.addHook('onRequest', server.authenticate);
    server.get('/', { schema: workout_programs_1.GetWorkoutProgramsSchema }, async (request) => {
        const userId = request.user.id;
        const workoutPrograms = await workoutProgramService.findUserWorkoutPrograms(userId);
        return { workoutPrograms };
    });
    server.post('/', { schema: workout_programs_1.CreateWorkoutProgramSchema }, async (request, reply) => {
        const userId = request.user.id;
        const workoutProgram = await workoutProgramService.createWorkoutProgram(request.body, userId);
        reply.status(201).send({ workoutProgram });
    });
};
exports.default = workoutProgramsRoutes;
//# sourceMappingURL=index.js.map