"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutProgramService = void 0;
const repositories_1 = require("../repositories");
const constants_1 = require("../constants");
class WorkoutProgramService {
    server;
    workoutProgramRepository;
    constructor(server) {
        this.server = server;
        this.workoutProgramRepository = new repositories_1.WorkoutProgramRepository(server);
    }
    createWorkoutProgram(dto, userId) {
        return this.workoutProgramRepository.createWorkoutProgram(dto, userId);
    }
    async findWorkoutProgram(workoutProgramId) {
        const existWorkoutProgram = await this.workoutProgramRepository.findWorkoutProgram(workoutProgramId);
        if (!existWorkoutProgram)
            throw this.server.httpErrors.badRequest(constants_1.workoutProgramErrors.NOT_EXIST);
        return existWorkoutProgram;
    }
    updateWorkoutProgram(dto, workoutProgramId) {
        return this.workoutProgramRepository.updateWorkoutProgram(dto, workoutProgramId);
    }
    async updateUserWorkoutProgram(dto, workoutProgramId, userId) {
        await this.findUserWorkoutProgram(userId, workoutProgramId);
        return this.workoutProgramRepository.updateWorkoutProgram(dto, workoutProgramId);
    }
    findUserWorkoutPrograms(userId) {
        return this.workoutProgramRepository.findUserWorkoutPrograms(userId);
    }
    async findUserWorkoutProgram(userId, workoutProgramId) {
        const workoutProgram = await this.workoutProgramRepository.findUserWorkoutProgram(userId, workoutProgramId);
        if (!workoutProgram)
            throw this.server.httpErrors.badRequest(constants_1.workoutProgramErrors.NOT_EXIST);
        return workoutProgram;
    }
}
exports.WorkoutProgramService = WorkoutProgramService;
//# sourceMappingURL=workout-program.service.js.map