import { httpService } from '$lib/shared/services/http-service';
import { createMutation } from '@farfetched/core';
import type { CreateUserDto, ErrorReply, UserReplyType } from '@gym-mate/shared-types';

export const signupQuery = createMutation({
	effect: httpService.post<CreateUserDto, UserReplyType, ErrorReply>('/users')
});
