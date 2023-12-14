import { httpService } from '$lib/shared/services/http-service'
import { createMutation } from '@farfetched/core'

import type { ErrorReply, LoginUserDto, UserReplyType } from '@gym-mate/shared-types'

export const loginQuery = createMutation({
	effect: httpService.post<LoginUserDto, UserReplyType, ErrorReply>('/users/login')
})
