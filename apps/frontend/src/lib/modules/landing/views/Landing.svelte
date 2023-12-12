<script lang="ts">
	import { authService } from '$lib/shared/services'

	const isAuthorized = authService.$isAuthorized
</script>

<header class="header">
	<div class="container header__inner">
		<a href="/" class="logo">
			<img src="/images/logo.svg" alt="Logo" />
		</a>

		{#if $isAuthorized}
			<nav>
				<a href="/app">Goto app</a>
			</nav>
		{:else}
			<nav>
				<a class="login" href="/auth/login">Login</a>
				<a href="/auth/signup">Sign up</a>
			</nav>
		{/if}
	</div>
</header>

<main>
	<div class="container">
		<h1>Welcome to gymmate</h1>
	</div>
</main>

<style lang="postcss">
	.header {
		position: sticky;
		top: 0;
		background: var(--color-surface);
		padding: 10px 12px;

		&__inner {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		& nav {
			display: flex;
			gap: 10px;

			a {
				display: flex;
				align-items: center;
				border-radius: var(--base-radius);
				background: var(--color-accent10);
				padding: 0 12px;
				height: 32px;
				color: var(--color-accent100);
				text-decoration: none;
				&.login {
					background: var(--color-accent100);
					color: var(--color-text-on-accent);
				}
			}
		}
	}

	.logo {
		& img {
			border-radius: 8px;
			height: 32px;
		}
	}
	.container {
		margin: 0 auto;
		width: 100%;
		max-width: 900px;
	}
	main {
		padding: 40px 0;
	}
</style>
