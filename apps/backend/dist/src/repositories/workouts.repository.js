"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutsRepository = void 0;
class WorkoutsRepository {
    server;
    constructor(server) {
        this.server = server;
    }
    async createWorkout(workoutProgramId) {
        return this.server.prisma.workout.create({
            data: { workoutProgramId }
        });
    }
    async updateWorkout(id, dto) {
        return this.server.prisma.workout.update({
            data: { ...dto.workout },
            where: { id }
        });
    }
    async findWorkout(id) {
        return this.server.prisma.workout.findUnique({
            where: { id }
        });
    }
    async findWorkoutProgramWorkouts(workoutProgramId) {
        return this.server.prisma.workout.findMany({
            where: { workoutProgramId }
        });
    }
    async deleteWorkout(workoutId) {
        return this.server.prisma.workout.delete({
            where: { id: workoutId }
        });
    }
}
exports.WorkoutsRepository = WorkoutsRepository;
//# sourceMappingURL=workouts.repository.js.map