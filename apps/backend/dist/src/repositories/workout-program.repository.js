"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutProgramRepository = void 0;
class WorkoutProgramRepository {
    server;
    constructor(server) {
        this.server = server;
    }
    async createWorkoutProgram(dto, userId) {
        return this.server.prisma.workoutProgram.create({
            data: { ...dto.workoutProgram, userId }
        });
    }
    async findWorkoutProgram(id) {
        return this.server.prisma.workoutProgram.findUnique({ where: { id } });
    }
    async updateWorkoutProgram(dto, workoutProgramId) {
        return this.server.prisma.workoutProgram.update({
            where: { id: workoutProgramId },
            data: dto.workoutProgram
        });
    }
    async findUserWorkoutPrograms(userId) {
        return this.server.prisma.workoutProgram.findMany({
            where: { userId }
        });
    }
    async findUserWorkoutProgram(userId, workoutProgramId) {
        return this.server.prisma.workoutProgram.findUnique({
            where: { userId: userId, id: workoutProgramId },
            include: { workouts: true }
        });
    }
}
exports.WorkoutProgramRepository = WorkoutProgramRepository;
//# sourceMappingURL=workout-program.repository.js.map