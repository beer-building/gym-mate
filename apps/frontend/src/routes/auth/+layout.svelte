<script>
	import { RouteGuard } from '$lib/shared/components/RouteGuard'
	import { authService } from '$lib/shared/services'

	const isAuthorized = authService.$isAuthorized
</script>

<RouteGuard allow={!$isAuthorized} redirectTo="/app">
	<slot />
</RouteGuard>
