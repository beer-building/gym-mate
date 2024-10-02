<script>
	import { onMount } from 'svelte'
	import { workoutPrograms, pageMounted, isLoading } from '../model'
	import WorkoutProgram from './WorkoutProgram.svelte'

	onMount(() => {
		pageMounted()
	})
</script>

<div class="page">
	<h1>Workout Programs</h1>
	<div class="workout-programs">
		{#if $isLoading}
			..Loading
		{:else}
			{#each $workoutPrograms as workoutProgram}
				<WorkoutProgram id={workoutProgram.id} title={workoutProgram.title} />
			{/each}
		{/if}

		<a href="/app/workout-programs/new">Create new</a>
	</div>
</div>

<style lang="pcss">
	h1 {
		margin-bottom: 6px;
	}
	.workout-programs {
		display: flex;
		flex-direction: column;
		gap: 4px;
		margin-bottom: 12px;
		padding: 0 6px;
	}
</style>
