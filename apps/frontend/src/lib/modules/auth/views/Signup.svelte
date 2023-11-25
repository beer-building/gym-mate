<script lang="ts">
	import { Button, Input } from '@gym-mate/ui';
	import {
		username$,
		email$,
		password$,
		passwordConfirmation$,
		signupErrors$,
		fieldChanged,
		signupButtonClicked
	} from '../../../models';

	let isPasswordShown = false;
</script>

<div class="page">
	<h1>Sign up</h1>

	<form>
		<Input
			placeholder="Username"
			value={$username$}
			on:change={({ detail }) => {
				fieldChanged({ username: detail });
			}}
			errorText={$signupErrors$.username}
		/>
		<Input
			placeholder="Email"
			value={$email$}
			on:change={({ detail }) => {
				fieldChanged({ email: detail });
			}}
			errorText={$signupErrors$.email}
		/>
		<Input
			type={isPasswordShown ? 'text' : 'password'}
			placeholder="Password"
			value={$password$}
			on:change={({ detail }) => {
				fieldChanged({ password: detail });
			}}
			errorText={$signupErrors$.password}
		/>
		<Input
			type={isPasswordShown ? 'text' : 'password'}
			placeholder="Confirm password"
			value={$passwordConfirmation$}
			on:change={({ detail }) => {
				fieldChanged({ passwordConfirmation: detail });
			}}
			errorText={$signupErrors$.passwordConfirmation || ''}
		/>
		<label class="password-toggler">
			Show password
			<input type="checkbox" bind:checked={isPasswordShown} />
		</label>
		<Button
			size="large"
			on:click={() => {
				signupButtonClicked();
			}}>Sign up</Button
		>
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
		gap: 5px;
		margin-top: 24px;

		& :global(button) {
			margin-top: 12px;
			width: 100%;
			justify-content: center;
		}

		& .password-toggler {
			display: flex;
			align-items: center;
			gap: 10px;
		}
	}
</style>
