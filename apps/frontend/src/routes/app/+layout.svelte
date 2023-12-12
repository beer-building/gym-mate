<script lang="ts">
	import { Header } from '$lib/shared/components'
	import { RouteGuard } from '$lib/shared/components/RouteGuard'
	import { authService } from '$lib/shared/services'

	const isAuthorized = authService.$isAuthorized
</script>

<RouteGuard allow={$isAuthorized} redirectTo="/auth">
	<Header />
	<div class="inner">
		<slot />
	</div>
</RouteGuard>

<style>
	.inner {
		padding-bottom: var(--header-height);

		@media (--desktop-viewport) {
			padding-top: var(--header-height);
			padding-bottom: 0;
		}
	}
</style>
