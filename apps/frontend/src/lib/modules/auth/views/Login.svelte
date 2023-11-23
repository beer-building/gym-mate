<script lang="ts">
	import { Button, Input } from '@gym-mate/ui';
</script>

<div class="page">
	<h1>Login</h1>
	<form>
		<Input placeholder="Login" label="Login" />
		<Input type="password" placeholder="Password" label="Password" />
		<Button size="large">Login</Button>
	</form>
</div>

<style lang="postcss">
	.page {
		max-width: 500px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		min-height: inherit;
		padding: 12px;
	}
	form {
		background: var(--color-surface);
		border-radius: var(--base-radius);
		padding: 20px;
		box-shadow: var(--shadow1);
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-top: 24px;

		& :global(button) {
			margin-top: 12px;
			width: 100%;
			justify-content: center;
		}
	}
</style>
