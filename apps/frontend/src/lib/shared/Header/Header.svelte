<script lang="ts">
	import { page } from '$app/stores';
	import { Icon } from '@gym-mate/ui';

	const SCOPES = [
		{
			icon: 'workout',
			url: '/workout'
		},
		{
			icon: 'profile',
			url: '/profile'
		}
	];
</script>

<header>
	{#each SCOPES as scope}
		<a
			class="scope__button"
			class:active={'/app' + scope.url === $page.url.pathname}
			href={`/app${scope.url}`}
		>
			<Icon name={scope.icon} />
		</a>
	{/each}
</header>

<style>
	header {
		position: fixed;
		bottom: 0;
		width: 100%;
		border-top: 1px solid var(--color-border);
		padding: 0;
		backdrop-filter: blur(20px);
		height: 50px;
		display: flex;
		background-color: var(--color-surface);
	}
	.scope__button {
		appearance: none;
		border: none;
		background: none;
		flex: 1;
		display: flex;
		padding: 0 10px;
		align-items: center;
		justify-content: center;
		color: var(--color-text);

		&:hover,
		&.active {
			background: var(--color-surface-on-background);
		}
	}
</style>
