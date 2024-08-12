<script context="module">
	import 'prism-themes/themes/prism-duotone-dark.css';

	import h2 from '$lib/ui/overrides/h2.svelte';
	import h3 from '$lib/ui/overrides/h3.svelte';
	import img from '$lib/ui/Image.svelte';
	export { h2, h3, img };
</script>

<slot />
