import { ErrorReply } from '../schemas/error'
import { CreateTelegramUserDto, CreateUserDto, LoginUserDto, UserReplyType } from '../schemas/users'
import {
	CreateWorkoutProgramDto,
	WorkoutProgramReply,
	WorkoutProgramsReply
} from '../schemas/workout-programs'

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
	createWorkoutProgram(body: CreateWorkoutProgramDto) {
		return this.httpClient.post<CreateWorkoutProgramDto, WorkoutProgramReply, ErrorReply>(
			'/workout-programs',
			body
		)
	}
}
