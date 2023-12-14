import { loginApi } from '$lib/api'
import { EMPTY_FIELD_TEXT } from '$lib/shared/constants'
import { authService } from '$lib/shared/services'
import type { Record } from '@prisma/client/runtime/library'
import { combine, createEvent, createStore, sample } from 'effector'
import { spread } from 'patronum'

// Stores
export const login$ = createStore('')
export const password$ = createStore('')
export const errors$ = createStore<Record<string, string>>({})
export const formDisabled$ = combine(loginApi.loginQuery.$pending, errors$).map(
	([pending, errors]) => {
		const hasErrors = Object.entries(errors).some(([_, value]) => value)

		return pending || hasErrors
	}
)

// Events
export const fieldChanged = createEvent<Record<'login' | 'password' | string, string>>()
export const formSubmitted = createEvent()

spread({
	source: fieldChanged,
	targets: {
		login: login$,
		password: password$
	}
})

sample({
	clock: fieldChanged,
	source: errors$,
	fn: (errors, event) => {
		const field = Object.keys(event)[0]

		return { ...errors, [field]: '' }
	},
	target: errors$
})

sample({
	clock: formSubmitted,
	source: { login: login$, password: password$ },
	fn: ({ login, password }) => {
		const errors: Record<string, string> = {}
		if (!login) {
			errors.login = EMPTY_FIELD_TEXT
		}
		if (!password) {
			errors.password = EMPTY_FIELD_TEXT
		}

		return errors
	},
	target: errors$
})

sample({
	clock: formSubmitted,
	filter: formDisabled$.map((e) => !e),
	source: {
		email: login$,
		password: password$
	},
	fn: (form) => ({ user: form }),
	target: loginApi.loginQuery.start
})

sample({
	clock: loginApi.loginQuery.finished.success,
	fn: ({ result }) => ({ token: result.user.token }),
	target: authService.setToken
})

sample({
	clock: loginApi.loginQuery.finished.failure,
	fn: ({ error }) => ({ login: error.message }),
	target: errors$
})
