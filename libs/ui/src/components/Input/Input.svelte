<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let type = 'text';
	export let label = '';
	export let placeholder = '';
	export let value = '';
	export let errorText = '';

	const handleChange = (event: Event) => {
		const _value = (event.target as HTMLInputElement).value;
		dispatch('change', _value);
		(event.target as HTMLInputElement).value = value;
	};

	const dispatch = createEventDispatcher();
</script>

<label>
	{#if label}
		<span class="label">{label}</span>
	{/if}
	<input class:error={errorText} {type} {placeholder} on:input={handleChange} {value} />
	{#if errorText}
		<span class="error">{errorText}</span>
	{/if}
</label>

<style lang="postcss">
	label {
		height: 55px;
		display: flex;
		flex-direction: column;
	}
	.label {
		opacity: 0.8;
		font-size: 0.9rem;
		font-weight: bold;
		margin-bottom: 3px;
	}
	input {
		appearance: none;
		font-size: 1rem;
		border: none;
		padding: 0 6px;
		background: var(--color-surface-on-background);
		border: 1px solid var(--color-border);
		border-radius: var(--base-radius);
		height: 36px;
	}
	.error {
		color: var(--color-error);
		border-color: var(--color-error);
	}
</style>
