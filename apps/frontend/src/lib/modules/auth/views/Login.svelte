<script lang="ts">
	import { Button, Input } from '@gym-mate/ui';
</script>

<div class="page">
	<h1>Login</h1>
	<form>
		<Input placeholder="Login" />
		<Input type="password" placeholder="Password" />
		<Button size="large">Login</Button>
	</form>
</div>

<style>
	.page {
		max-width: 500px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		min-height: inherit;
	}
	form {
		background: var(--color-surface);
		border-radius: var(--base-radius);
		padding: 20px;
	}
</style>
