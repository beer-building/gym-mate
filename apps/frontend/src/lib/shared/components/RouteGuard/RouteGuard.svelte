<script lang="ts">
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'
	import { authService } from '$lib/shared/services'

	$: currentPath = $page.url.pathname
	const isAuthorized = authService.$isAuthorized

	$: {
		const isAppRoute = currentPath.indexOf('/app') === 0
		const isAuthRoute = currentPath.indexOf('/auth') === 0

		if ($isAuthorized && isAuthRoute) {
			goto('/app', { replaceState: true })
		}
		if (!$isAuthorized && isAppRoute) {
			goto('/auth/login', { replaceState: true })
		}
	}
</script>

<slot />
