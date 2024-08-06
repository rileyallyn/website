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
	<div class="relative mx-auto container max-w-5xl md:mt-20 gap-x-20 h-full">
		<Header bind:open />
		<Sidebar />
		<div class="w-full absolute top-0 bottom-0 md:left-52 py-16 md:py-0 md:h-full p-4">
			<slot />
		</div>
	</div>
</div>

<GridAndDotBackground className="h-full w-full" />
