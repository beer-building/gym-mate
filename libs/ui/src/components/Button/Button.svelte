<script lang="ts">
	import { createEventDispatcher } from 'svelte'

	export let type: 'button' | 'submit' = 'button'
	export let kind: 'default' | 'icon' = 'default'
	export let size: 'normal' | 'small' | 'large' = 'normal'

	const dispatch = createEventDispatcher()
</script>

<button {type} class="kind__{kind} size__{size}" on:click={() => dispatch('click')}>
	<slot />
</button>

<style lang="postcss">
	button {
		display: flex;
		align-items: center;
		appearance: none;
		cursor: pointer;
		margin: 0;
		border: none;
		background: none;
		padding: 0;
		font-size: 1rem;

		&:disabled {
			cursor: not-allowed;
		}
	}

	.kind {
		&__default {
			transition: var(--transition);
			border-radius: var(--base-radius);
			background-color: var(--color-accent100);
			color: var(--color-text-on-accent);
			font-weight: 500;
		}

		&__icon {
			justify-content: center;
			transition: var(--transition);
			border-radius: var(--base-radius);
			width: var(--size);
			height: var(--size);
			&.size {
				&__small {
					--size: 24px;
				}
				&__normal {
					--size: 28px;
				}
				&__large {
					--size: 42px;
				}
			}
			&:hover {
				background-color: var(--color-surface-on-background);
			}
		}
	}
	.size {
		&__small {
			padding: 0 12px;
			height: 24px;
			font-size: 0.9rem;
		}
		&__normal {
			padding: 0 12px;
			height: 28px;
		}
		&__large {
			padding: 0 12px;
			height: 42px;
			font-size: 1.1rem;
		}
	}
</style>
