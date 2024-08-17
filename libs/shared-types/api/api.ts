import { ErrorReply } from '../schemas/error'
import { CreateTelegramUserDto, CreateUserDto, LoginUserDto, UserReplyType } from '../schemas/users'
import {
	CreateWorkoutProgramDto,
	EditWorkoutProgramDto,
	GetWorkoutProgramReply,
	WorkoutProgramReply,
	WorkoutProgramsReply
} from '../schemas/workout-programs'
import { FullWorkoutReply } from '../schemas/workout'
import { FullExerciseReply } from '../schemas/exercises'

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
	loginUser(body: LoginUserDto) {
		return this.httpClient.post<LoginUserDto, UserReplyType, ErrorReply>('/users/login', body)
	}
	signupUser(body: CreateUserDto) {
		return this.httpClient.post<CreateUserDto, UserReplyType, ErrorReply>('/users', body)
	}
	signupTelegramUser(body: CreateTelegramUserDto) {
		return this.httpClient.post<CreateTelegramUserDto, UserReplyType, ErrorReply>(
			'/users/telegram',
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
	getWorkout(workoutId: string | number) {
		return this.httpClient.get<FullWorkoutReply, ErrorReply>(`/workouts/${workoutId}`)
	}
	getExercise(exerciseId: string | number) {
		return this.httpClient.get<FullExerciseReply, ErrorReply>(`/exercises/${exerciseId}`)
	}
	getWorkoutProgramWorkouts(workoutProgramId: string | number, workoutId: string | number) {
		return this.httpClient.get<FullWorkoutReply, ErrorReply>(
			`/workout-programs/${workoutProgramId}/workouts/${workoutId}`
		)
	}
	createWorkoutProgram(body: CreateWorkoutProgramDto) {
		return this.httpClient.post<CreateWorkoutProgramDto, WorkoutProgramReply, ErrorReply>(
			'/workout-programs',
			body
		)
	}
	deleteWorkoutProgram(id: string) {
		return this.httpClient.delete<boolean, ErrorReply>(`/workout-programs/${id}`)
	}
}
