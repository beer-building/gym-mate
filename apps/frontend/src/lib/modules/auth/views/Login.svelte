<script lang="ts">
	import { Button, Input } from '@gym-mate/ui'
	import { loginModel } from '../model/login'

	const login = loginModel.login$
	const password = loginModel.password$
	const errors = loginModel.errors$
	const disabled = loginModel.formDisabled$

	const onChange =
		(field: 'login' | 'password') =>
		({ detail }: { detail: string }) => {
			loginModel.fieldChanged({ [field]: detail })
		}
</script>

<div class="page">
	<h1>Login</h1>
	<form on:submit|preventDefault={() => loginModel.formSubmitted()}>
		<Input
			placeholder="Login"
			label="Login"
			type="email"
			value={$login}
			error={$errors.login}
			on:change={onChange('login')}
		/>
		<Input
			type="password"
			placeholder="Password"
			label="Password"
			value={$password}
			error={$errors.password}
			on:change={onChange('password')}
		/>
		<Button disabled={$disabled} type="submit" size="large">Login</Button>
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
