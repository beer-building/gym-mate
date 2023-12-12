<script lang="ts">
	import { goto } from '$app/navigation'

	export let allow = false
	export let redirectTo: string | undefined = undefined

	$: {
		if (!allow && redirectTo) {
			goto(redirectTo, { replaceState: true })
		}
	}
</script>

{#if allow}
	<slot />
{/if}
