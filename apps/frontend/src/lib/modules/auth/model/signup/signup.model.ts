import { combine, createEvent, createStore, sample } from 'effector'
import { reset, spread } from 'patronum'
import { authApi } from '$lib/api'
import { authService } from '$lib/shared/services'
import { validateSignupData } from './signup.helpers'

// Stores
export const username$ = createStore('')
export const email$ = createStore('')
export const password$ = createStore('')
export const passwordConfirmation$ = createStore('')
export const signupErrors$ = createStore<Record<string, string>>({})
export const signupError$ = createStore('')

const signupFormData$ = combine(
	username$,
	email$,
	password$,
	passwordConfirmation$,
	(username, email, password, passwordConfirmation) => ({
		username,
		email,
		password,
		passwordConfirmation
	})
)

// Events
export const fieldChanged = createEvent<Record<string, string>>()
export const signupButtonClicked = createEvent()
const validationCompleted = createEvent()

spread({
	source: fieldChanged,
	targets: {
		username: username$,
		email: email$,
		password: password$,
		passwordConfirmation: passwordConfirmation$
	}
})

sample({
	clock: fieldChanged,
	source: signupErrors$,
	filter: (errors, field) => {
		return Object.keys(field)[0] in errors
	},
	fn: (errors, field) => {
		Reflect.deleteProperty(errors, Object.keys(field)[0])

		return { ...errors }
	},
	target: signupErrors$
})

sample({
	clock: signupButtonClicked,
	source: signupFormData$,
	fn: validateSignupData,
	target: [validationCompleted, signupErrors$]
})

sample({
	clock: validationCompleted,
	source: [signupErrors$, signupFormData$] as const,
	filter: ([errors]) => !Object.keys(errors).length,
	fn: ([_, data]) => ({
		user: { username: data.username, email: data.email, password: data.password }
	}),
	target: authApi.signupMutation.start
})

sample({
	clock: authApi.signupMutation.finished.success,
	fn: ({ result }) => ({ token: result.user.token }),
	target: authService.setToken
})

sample({
	clock: authApi.signupMutation.finished.failure,
	fn: ({ error }) => error.message,
	target: signupError$
})

reset({
	clock: authApi.signupMutation.started,
	target: signupError$
})

reset({
	clock: authApi.signupMutation.$succeeded,
	target: [signupError$, username$, email$, password$, passwordConfirmation$, signupErrors$]
})
