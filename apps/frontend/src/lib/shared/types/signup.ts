export type SignupFormData = {
	username: string;
	email: string;
	password: string;
	passwordConfirmation: string;
};

export type SignupResponse =
	| {
			user: {
				email: string;
				id: number;
				image: string;
				token: string;
				username: string;
			};
	  }
	| { error: string; message: string; statusCode: number };
