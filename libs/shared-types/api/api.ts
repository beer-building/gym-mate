import { ErrorReply } from '../schemas/error'
import { CreateTelegramUserDto, CreateUserDto, LoginUserDto, UserReplyType } from '../schemas/users'
import {
	CreateWorkoutProgramDto,
	GetWorkoutProgramReply,
	WorkoutProgramReply,
	WorkoutProgramsReply
} from '../schemas/workout-programs'
import { FullWorkoutReply } from '../schemas/workout'

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
	get: <T = unknown, E = unknown>(value: string) => Promise<Response<T, E>>
	delete: <T = unknown, E = unknown>(value: string) => Promise<Response<T, E>>
}

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
	getWorkout(workoutId: string | number) {
		return this.httpClient.get<FullWorkoutReply, ErrorReply>(`/workouts/${workoutId}`)
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
