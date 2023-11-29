<script>
	import { onMount } from 'svelte';
	import { workoutPrograms, pageMounted, isLoading } from '../model';

	onMount(() => {
		pageMounted();
	});
</script>

<div class="page">
	<h1>Workout Programs</h1>
	{#if $isLoading}
		..Loading
	{:else}
		{#each $workoutPrograms as workoutProgram}
			<div>{workoutProgram.title}</div>
		{/each}
	{/if}

	<a href="/app/workout-programs/new">Create new</a>
</div>
