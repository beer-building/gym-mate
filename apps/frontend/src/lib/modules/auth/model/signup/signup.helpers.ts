import { EMPTY_FIELD_TEXT } from '$lib/shared/constants'
import type { SignupFormData } from '$lib/shared/types'

const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

export const validateSignupData = ({
	username,
	email,
	password,
	passwordConfirmation
}: SignupFormData): Record<string, string> => {
	const errors = {} as Record<string, string>

	if (!username.trim().length) {
		errors.username = EMPTY_FIELD_TEXT
	}

	if (!email.trim().length) {
		errors.email = EMPTY_FIELD_TEXT
	}

	if (!password.trim().length) {
		errors.password = EMPTY_FIELD_TEXT
	}
	if (!passwordConfirmation.trim().length) {
		errors.passwordConfirmation = EMPTY_FIELD_TEXT
	}

	if (email.trim().length && !email.match(emailRegex)) {
		errors.email = 'Invalid email address.'
	}

	if (password !== passwordConfirmation) {
		errors.passwordConfirmation = 'Password confirmation does not match password.'
	}

	return errors
}
