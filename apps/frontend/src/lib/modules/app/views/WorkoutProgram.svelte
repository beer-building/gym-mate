<script>
	export let title = ''
	/** @type {number} */
	export let id
</script>

<a class="workout-program" href={`/app/workout-programs/${id}`}>
	{title}
</a>

<style lang="pcss">
	a.workout-program {
		border: 1px solid gray;
		border-radius: 6px;
		padding: 6px;
		color: inherit;
		text-decoration: none;
	}
</style>
