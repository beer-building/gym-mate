<script>
	import { Button, Input } from '@gym-mate/ui';
	import {
		programName,
		programDescription,
		createWorkoutProgram,
		fieldChanged,
		errorMessage
	} from '../model/new-workout-program.model';
</script>

<div>
	{#if $errorMessage}
		{$errorMessage}
	{/if}
	<Input
		placeholder="Workout program name"
		value={$programName}
		on:change={({ detail }) => fieldChanged({ programName: detail })}
	/>
	<Input
		placeholder="Workout program description"
		value={$programDescription}
		on:change={({ detail }) => fieldChanged({ programDescription: detail })}
	/>

	<Button on:click={() => createWorkoutProgram()}>Create</Button>
</div>
