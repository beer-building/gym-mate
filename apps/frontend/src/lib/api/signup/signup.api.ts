import { HttpService } from '$lib/shared/services/http-service';
import { createMutation } from '@farfetched/core';
import type { CreateUserDto, ErrorReply, UserReplyType } from '@gym-mate/shared-types';
import { createEffect } from 'effector';

export const signupQuery = createMutation({
	effect: createEffect<CreateUserDto, UserReplyType, ErrorReply>(
		async (userData: CreateUserDto) => {
			const res = await HttpService.instance.post<UserReplyType>('/users', userData);

			return res.data;
		}
	)
});
