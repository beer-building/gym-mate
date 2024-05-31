"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("../../../../schemas");
const services_1 = require("../../../../services");
const schemas_2 = require("../../../../schemas");
const workoutsRoute = async (server) => {
    const workoutsService = new services_1.WorkoutsService(server);
    server.addHook('onRequest', server.authenticate);
    server.get('/', { schema: schemas_1.GetWorkoutsSchema }, async (request) => {
        const workoutProgramId = request.params.id;
        const workouts = await workoutsService.findWorkoutProgramWorkouts(workoutProgramId);
        return { workouts };
    });
    server.post('/', { schema: schemas_2.CreateWorkoutSchema }, async (request) => {
        const workoutProgramId = request.params.id;
        const userId = request.user.id;
        const newWorkout = await workoutsService.createWorkout(userId, workoutProgramId);
        return { workout: newWorkout };
    });
    server.put('/:workoutId', { schema: schemas_1.UpdateWorkoutSchema }, async (request, reply) => {
        const workoutProgramId = request.params.id;
        const workoutId = request.params.workoutId;
        const userId = request.user.id;
        const dto = request.body;
        const workout = await workoutsService.updateWorkout(workoutId, dto, userId, workoutProgramId);
        reply.status(204).send({ workout });
    });
    server.delete('/:workoutId', { schema: schemas_1.DeleteWorkoutSchema }, async (request) => {
        const workoutProgramId = request.params.id;
        const workoutId = request.params.workoutId;
        const userId = request.user.id;
        await workoutsService.deleteWorkout(workoutId, userId, workoutProgramId);
        return { ok: true };
    });
};
exports.default = workoutsRoute;
//# sourceMappingURL=index.js.map