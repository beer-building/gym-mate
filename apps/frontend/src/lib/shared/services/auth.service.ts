import { httpService } from '$lib/shared/services/http-service'
import type { TokenStorage } from '$lib/shared/types/auth'
import { createEvent, createStore, sample } from 'effector'

import { persist } from 'effector-storage/local'

export const $token = createStore<{ token: string }>({ token: '' })
export const $isAuthorized = $token.map(({ token }) => Boolean(token.length))

export const setToken = createEvent<TokenStorage>()

sample({
	clock: $token,
	fn: ({ token }) => token,
	target: httpService.setAuthCredentials()
})

persist<{ token: string }>({
	source: setToken,
	target: $token,
	key: 'token'
})
