<script lang="ts">
	export let name = ''
	export let size = 24

	let iconContent = ''

	const fetchIcon = (name: string) => {
		import(`./icons/${name}.svg?raw`).then((module) => {
			iconContent = module.default
		})
	}

	$: {
		fetchIcon(name)
	}
</script>

<div class="icon" style:--size={`${size}px`}>
	{iconContent}
</div>

<style lang="postcss">
	.icon {
		display: flex;
		& :global(svg) {
			width: var(--size);
			height: var(--size);
		}
	}
</style>
