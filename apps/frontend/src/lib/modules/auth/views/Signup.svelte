<script lang="ts">
	import { Button, Input } from '@gym-mate/ui'
	import { signupModel } from '../model/signup'

	let isPasswordShown = false

	const {
		username$,
		email$,
		password$,
		passwordConfirmation$,
		signupErrors$,
		fieldChanged,
		signupButtonClicked
	} = signupModel
</script>

<div class="page">
	<h1>Sign up</h1>

	<form>
		<Input
			placeholder="Username"
			value={$username$}
			on:change={({ detail }) => {
				fieldChanged({ username: detail })
			}}
			error={$signupErrors$.username}
		/>
		<Input
			placeholder="Email"
			value={$email$}
			on:change={({ detail }) => {
				fieldChanged({ email: detail })
			}}
			error={$signupErrors$.email}
		/>
		<Input
			type={isPasswordShown ? 'text' : 'password'}
			placeholder="Password"
			value={$password$}
			on:change={({ detail }) => {
				fieldChanged({ password: detail })
			}}
			error={$signupErrors$.password}
		/>
		<Input
			type={isPasswordShown ? 'text' : 'password'}
			placeholder="Confirm password"
			value={$passwordConfirmation$}
			on:change={({ detail }) => {
				fieldChanged({ passwordConfirmation: detail })
			}}
			error={$signupErrors$.passwordConfirmation || ''}
		/>
		<label class="password-toggler">
			Show password
			<input type="checkbox" bind:checked={isPasswordShown} />
		</label>
		<Button
			size="large"
			on:click={() => {
				signupButtonClicked()
			}}>Sign up</Button
		>
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
		gap: 5px;
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

		& .password-toggler {
			display: flex;
			align-items: center;
			gap: 10px;
		}
	}
</style>
