// @ts-nocheck
import { redirect } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load = () => {
	throw redirect(302, '/app/profile')
}
;null as any as PageLoad;