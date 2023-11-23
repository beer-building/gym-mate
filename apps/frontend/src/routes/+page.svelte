<script lang="ts">
	import { Button } from '@gym-mate/ui';
</script>

<div class="wrapper">
	<h1>Welcome to GYMMATE</h1>
</div>

<Button>test</Button>

<style lang="postcss">
	.wrapper {
		& h1 {
			color: blue;
		}
	}
</style>
