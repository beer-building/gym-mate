<script lang="ts">
	import { page } from '$app/stores'
	import { authService } from '$lib/shared/services'
	import { Icon } from '@gym-mate/ui'

	const SCOPES = [
		{
			icon: 'workout',
			title: 'Workout',
			url: '/workout-programs'
		},
		{
			icon: 'profile',
			title: 'Profile',
			url: '/profile'
		}
	]

	function logout() {
		authService.logout()
	}
</script>

<header>
	{#each SCOPES as scope}
		<a
			class="scope__button"
			class:active={'/app' + scope.url === $page.url.pathname}
			href={`/app${scope.url}`}
		>
			<Icon name={scope.icon} />
			<span>{scope.title}</span>
		</a>
	{/each}
	<button on:click={logout} class="scope__button">Logout</button>
</header>

<style lang="postcss">
	header {
		display: flex;
		position: fixed;
		bottom: 0;
		justify-content: space-evenly;
		align-items: center;
		backdrop-filter: blur(20px);
		border-top: 1px solid var(--color-border);
		width: 100%;
		height: var(--header-height);

		@media (--desktop-viewport) {
			top: 0;
			bottom: auto;
			justify-content: flex-end;
			gap: 12px;
			border-top: none;
			border-bottom: 1px solid var(--color-border);
			padding: 0 12px;
		}

		&::before {
			position: absolute;
			top: 0;
			left: 0;
			opacity: 0.7;
			z-index: 0;
			background-color: var(--color-surface);
			width: 100%;
			height: 100%;
			content: '';
		}
	}
	.scope__button {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 3px;
		appearance: none;
		opacity: 0.7;
		z-index: 1;
		transition: var(--transition);
		border: none;
		background: none;
		padding: 12px;
		padding-bottom: calc(env(safe-area-inset-bottom) + 12px);
		color: var(--color-text);
		font-weight: 500;
		font-size: 0.8rem;
		text-decoration: none;
		-webkit-tap-highlight-color: transparent;

		@media (--desktop-viewport) {
			flex: none;
			flex-direction: row;
			border-radius: var(--base-radius);
			padding: 0 12px;
			height: 36px;
			font-weight: 700;

			&:hover,
			&.active {
				background-color: var(--color-surface-on-background);
			}
		}

		&:hover,
		&.active {
			opacity: 1;
			color: var(--color-accent100);
			font-weight: 700;
		}
	}
</style>
