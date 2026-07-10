<script module>
	import h2 from '$lib/components/ui/overrides/h2.svelte';
	import h3 from '$lib/components/ui/overrides/h3.svelte';
	// eslint-disable-next-line no-import-assign
	export { h2, h3 };
</script>

<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}
