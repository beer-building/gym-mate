<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let type = 'text'
	export let label = ''
	export let placeholder = ''
	export let value = ''
	export let error = ''

	const handleChange = (event: Event) => {
		const _value = (event.target as HTMLInputElement).value
		dispatch('change', _value)
		;(event.target as HTMLInputElement).value = value
	}

	const dispatch = createEventDispatcher()
</script>

<div class="wrapper" class:error>
	<label>
		{#if label}
			<span class="label">{label}</span>
		{/if}
		<input {type} {placeholder} on:input={handleChange} {value} />
	</label>
	{#if error}
		<span class="error__text">{error}</span>
	{/if}
</div>

<style lang="postcss">
	label {
		display: flex;
		flex-direction: column;
		height: 55px;
	}
	.label {
		opacity: 0.8;
		margin-bottom: 3px;
		font-weight: bold;
		font-size: 0.9rem;
	}
	input {
		appearance: none;
		border: none;
		border: 1px solid var(--color-border);
		border-radius: var(--base-radius);
		background: var(--color-surface-on-background);
		padding: 0 6px;
		height: 36px;
		font-size: 1rem;
	}
	.error {
		& input {
			border-color: var(--color-error);
			color: var(--color-error);
		}
		&__text {
			color: var(--color-error);
			font-size: 0.8rem;
		}
	}
</style>
