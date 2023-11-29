<script>
	import { onMount } from 'svelte';
	import { workoutPrograms$, pageMounted } from '../model';

	onMount(() => {
		pageMounted();
	});
</script>

<div class="page">
	<h1>Workout Programs</h1>
	{#each $workoutPrograms$ as workoutProgram}
		<div>{workoutProgram.title}</div>
	{/each}
</div>
