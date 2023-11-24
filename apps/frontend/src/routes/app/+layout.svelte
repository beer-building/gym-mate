<script lang="ts">
	import { Header } from '$lib/shared';
</script>

<div class="wrapper">
	<Header />
	<div class="inner">
		<slot />
	</div>
</div>

<style>
	.inner {
		padding-bottom: 50px;
	}
</style>
