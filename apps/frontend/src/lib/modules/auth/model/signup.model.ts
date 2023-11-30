import { combine, createEvent, createStore, sample } from 'effector';
import { spread } from 'patronum';
import { signupApi } from '$lib/api';
import { authService } from '$lib/modules/auth/services';
import { validateSignupData } from './signup.helpers';

// Stores
export const username$ = createStore<string>('');
export const email$ = createStore<string>('');
export const password$ = createStore<string>('');
export const passwordConfirmation$ = createStore<string>('');
export const signupErrors$ = createStore<Record<string, string>>({});

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
);

// Events
export const fieldChanged = createEvent<Record<string, string>>();
export const signupButtonClicked = createEvent();
const validationCompleted = createEvent();

spread({
	source: fieldChanged,
	targets: {
		username: username$,
		email: email$,
		password: password$,
		passwordConfirmation: passwordConfirmation$
	}
});

sample({
	clock: fieldChanged,
	source: signupErrors$,
	filter: (errors, field) => {
		return Object.keys(field)[0] in errors;
	},
	fn: (errors, field) => {
		Reflect.deleteProperty(errors, Object.keys(field)[0]);

		return { ...errors };
	},
	target: signupErrors$
});

sample({
	clock: signupButtonClicked,
	source: signupFormData$,
	fn: validateSignupData,
	target: [validationCompleted, signupErrors$]
});

sample({
	clock: validationCompleted,
	source: [signupErrors$, signupFormData$] as const,
	filter: ([errors]) => !Object.keys(errors).length,
	fn: ([_, data]) => ({
		user: { username: data.username, email: data.email, password: data.password }
	}),
	target: signupApi.signupQuery.start
});

sample({
	clock: signupApi.signupQuery.finished.success,
	fn: ({ result }) => ({ token: result.user.token }),
	target: authService.setToken
});
