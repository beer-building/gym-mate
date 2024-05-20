<script>
	import { onMount } from 'svelte'
	import { pageMounted, pagePending$, workoutProgram$ } from '../model/show-workout-program.model'

	export let id = ''

	onMount(() => {
		if (id) {
			pageMounted(id)
		}
	})
</script>

{#if $pagePending$}
	Loading...
{:else}
	<h2>
		{$workoutProgram$.title}
	</h2>

	<p>
		{$workoutProgram$.description}
	</p>
{/if}
