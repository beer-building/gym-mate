"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutsService = void 0;
const repositories_1 = require("../repositories");
const workout_program_service_1 = require("./workout-program.service");
class WorkoutsService {
    server;
    workoutRepository;
    workoutProgramService;
    constructor(server) {
        this.server = server;
        this.workoutRepository = new repositories_1.WorkoutsRepository(server);
        this.workoutProgramService = new workout_program_service_1.WorkoutProgramService(server);
    }
    async findWorkoutProgramWorkouts(id) {
        return this.workoutRepository.findWorkoutProgramWorkouts(id);
    }
    async findWorkout(id) {
        return this.workoutRepository.findWorkout(id);
    }
    async updateWorkout(workoutId, dto, userId, workoutProgramId) {
        await this.workoutProgramService.findUserWorkoutProgram(userId, workoutProgramId);
        return this.workoutRepository.updateWorkout(workoutId, dto);
    }
    async createWorkout(userId, workoutProgramId) {
        await this.workoutProgramService.findUserWorkoutProgram(userId, workoutProgramId);
        return this.workoutRepository.createWorkout(workoutProgramId);
    }
    async deleteWorkout(workoutId, userId, workoutProgramId) {
        await this.workoutProgramService.findUserWorkoutProgram(userId, workoutProgramId);
        return this.workoutRepository.deleteWorkout(workoutId);
    }
    findWorkouts() { }
}
exports.WorkoutsService = WorkoutsService;
//# sourceMappingURL=workouts.service.js.map