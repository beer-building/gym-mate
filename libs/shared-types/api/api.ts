import type { ErrorReply } from '../schemas/error'
import type {
	CreateTelegramUserDto,
	CreateUserDto,
	LoginUserDto,
	UserReplyType
} from '../schemas/users'
import type {
	CreateWorkoutProgramDto,
	EditWorkoutProgramDto,
	GetWorkoutProgramReply,
	WorkoutProgramReply,
	WorkoutProgramsReply
} from '../schemas/workout-programs'
import type {
	AddWorkoutExerciseDto,
	CreateWorkoutDto,
	FullWorkoutReply,
	UpdateWorkoutDto,
	WorkoutReply
} from '../schemas/workout'
import type { ExercisesByMuscleGroupReply, FullExerciseReply } from '../schemas/exercises'
import type { EditWorkoutExerciseDto, WorkoutExerciseReply } from '../schemas/workout-exercise'

type Body = object | string

type Response<T, E> = {
	status: number
	data: T
	error?: E
}

interface HttpServiceInterface {
	post: <P extends Body, T = unknown, E = unknown>(
		value: string,
		body: P
	) => Promise<Response<T, E>>
	put: <P extends Body, T = unknown, E = unknown>(value: string, body: P) => Promise<Response<T, E>>
	get: <T = unknown, E = unknown>(value: string) => Promise<Response<T, E>>
	delete: <T = unknown, E = unknown>(value: string) => Promise<Response<T, E>>
}

// TODO: Find other place for this
export class Api {
	constructor(private readonly httpClient: HttpServiceInterface) {}
	// Auth
	loginUser(body: LoginUserDto) {
		return this.httpClient.post<LoginUserDto, UserReplyType, ErrorReply>('/users/login', body)
	}
	signupUser(body: CreateUserDto) {
		return this.httpClient.post<CreateUserDto, UserReplyType, ErrorReply>('/users', body)
	}
	loginTelegramUser(body: CreateTelegramUserDto) {
		return this.httpClient.post<CreateTelegramUserDto, UserReplyType, ErrorReply>(
			'/users/telegram/login',
			body
		)
	}
	signupTelegramUser(body: CreateTelegramUserDto) {
		return this.httpClient.post<CreateTelegramUserDto, UserReplyType, ErrorReply>(
			'/users/telegram',
			body
		)
	}
	// Workout Programs
	createWorkoutProgram(body: CreateWorkoutProgramDto) {
		return this.httpClient.post<CreateWorkoutProgramDto, WorkoutProgramReply, ErrorReply>(
			'/workout-programs',
			body
		)
	}
	workoutProgramsList() {
		return this.httpClient.get<WorkoutProgramsReply, ErrorReply>('/workout-programs')
	}
	getWorkoutProgram(id: string) {
		return this.httpClient.get<GetWorkoutProgramReply, ErrorReply>(`/workout-programs/${id}`)
	}
	updateWorkoutProgram(id: string, body: EditWorkoutProgramDto) {
		return this.httpClient.put<EditWorkoutProgramDto, WorkoutProgramReply, ErrorReply>(
			`/workout-programs/${id}`,
			body
		)
	}
	deleteWorkoutProgram(id: string) {
		return this.httpClient.delete<boolean, ErrorReply>(`/workout-programs/${id}`)
	}
	// Workouts
	getWorkout(workoutId: string | number) {
		return this.httpClient.get<FullWorkoutReply, ErrorReply>(`/workouts/${workoutId}`)
	}
	createWorkout(workoutProgramId: string | number, body: CreateWorkoutDto) {
		return this.httpClient.post<CreateWorkoutDto, WorkoutReply, ErrorReply>(
			`/workout-programs/${workoutProgramId}/workouts`,
			body
		)
	}
	updateWorkout(workoutId: string | number, body: UpdateWorkoutDto) {
		return this.httpClient.put<UpdateWorkoutDto, WorkoutReply, ErrorReply>(
			`/workouts/${workoutId}`,
			body
		)
	}
	getWorkoutProgramWorkouts(workoutProgramId: string | number, workoutId: string | number) {
		return this.httpClient.get<FullWorkoutReply, ErrorReply>(
			`/workout-programs/${workoutProgramId}/workouts/${workoutId}`
		)
	}
	addExerciseToWorkout(workoutId: string | number, body: AddWorkoutExerciseDto) {
		return this.httpClient.put<AddWorkoutExerciseDto, WorkoutReply, ErrorReply>(
			`/workouts/${workoutId}/add_exercise`,
			body
		)
	}
	// Workout exercises
	getWorkoutExercise(exerciseId: string | number) {
		return this.httpClient.get<WorkoutExerciseReply, ErrorReply>(`/workout-exercises/${exerciseId}`)
	}
	updateWorkoutExercise(exerciseId: string | number, body: EditWorkoutExerciseDto) {
		return this.httpClient.put<EditWorkoutExerciseDto, WorkoutExerciseReply, ErrorReply>(
			`/workout-exercises/${exerciseId}`,
			body
		)
	}
	// Exercises
	getExercise(exerciseId: string | number) {
		return this.httpClient.get<FullExerciseReply, ErrorReply>(`/exercises/${exerciseId}`)
	}
	getAllExercises() {
		return this.httpClient.get<ExercisesByMuscleGroupReply, ErrorReply>(`/exercises`)
	}
}
