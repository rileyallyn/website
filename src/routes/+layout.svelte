<script>
	import Header from '$lib/ui/header.svelte';
	import '../app.postcss';
	import { fade } from 'svelte/transition';
	import Sidebar from '$lib/ui/sidebar.svelte';
	import Navbar from '$lib/ui/navbar.svelte';
	import GridAndDotBackground from '$lib/ui/GridAndDotBackground.svelte';
	let open = false;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Riley Smith</title>
	<meta name="title" content="Riley Smith" />
	<meta name="description" content="Software Developer" />
</svelte:head>

<div class="absolute w-full h-dvh z-20 overflow-hidden">
	<Navbar bind:open />
	<div class="mx-auto h-full flex flex-col md:flex-row container max-w-5xl gap-x-20">
		<Header bind:open />
		<Sidebar />
		<div class="p-4 md:py-24 w-full h-full overflow-auto">
			<slot />
		</div>
	</div>
</div>

<GridAndDotBackground className="h-full w-full" />
