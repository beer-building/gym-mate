import { goto } from '$app/navigation';
import { HttpService } from '$lib/shared/services/http-service';
import type { TokenStorage } from '$lib/shared/types/auth';
import { createEffect, createEvent, createStore, sample } from 'effector';

import { persist } from 'effector-storage/local';

export const $token = createStore<{ token: string }>({ token: '' });
export const $isAuthorized = $token.map(({ token }) => Boolean(token.length));

export const setToken = createEvent<TokenStorage>();
export const checkAuthorization = createEvent();

const redirectToAuthFx = createEffect(() => {
	goto('/auth/login');
});

const setAccessTokenToHttpServiceFx = createEffect((token: string) => {
	HttpService.instance.setToken(token);
});

sample({
	clock: $token,
	fn: ({ token }) => token,
	target: setAccessTokenToHttpServiceFx
});

persist<{ token: string }>({
	source: setToken,
	target: $token,
	key: 'token'
});

sample({
	clock: checkAuthorization,
	source: $isAuthorized,
	filter: (isAuthorized) => {
		return !isAuthorized && !window.location.pathname.includes('auth');
	},
	target: redirectToAuthFx
});
