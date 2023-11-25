<script lang="ts">
	import { Header } from '$lib/shared';
</script>

<Header />
<div class="inner">
	<slot />
</div>

<style>
	.inner {
		padding-bottom: var(--header-height);

		@media (--desktop-viewport) {
			padding-top: var(--header-height);
			padding-bottom: 0;
		}
	}
</style>
