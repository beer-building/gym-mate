<script lang="ts">
	import { RouteGuard } from '$lib/shared/components/RouteGuard'
</script>

<RouteGuard allow={false} redirectTo="/auth/login" />
