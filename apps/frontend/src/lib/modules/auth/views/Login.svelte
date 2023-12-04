<script lang="ts">
	import { Button, Input } from '@gym-mate/ui'
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
		padding: 12px;
		max-width: 500px;
		height: 100%;
		min-height: inherit;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-top: 24px;
		box-shadow: var(--shadow1);
		border-radius: var(--base-radius);
		background: var(--color-surface);
		padding: 20px;

		& :global(button) {
			justify-content: center;
			margin-top: 12px;
			width: 100%;
		}
	}
</style>
