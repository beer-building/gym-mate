<script>
	import { page } from '$app/stores'
	import ShowWorkoutProgram from '$lib/modules/app/views/ShowWorkoutProgram.svelte'
</script>

<ShowWorkoutProgram id={$page.params.id} />
