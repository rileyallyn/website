<script>
	import Header from '$lib/ui/header.svelte';
	import '../app.postcss';
	import Sidebar from '$lib/ui/sidebar.svelte';
	import Navbar from '$lib/ui/navbar.svelte';
	import GridBg from '$lib/ui/gridbg.svelte';
	import { page } from '$app/stores';
	let open = false;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{$page.data.meta.title}</title>
	<meta name="title" content={$page.data.meta.title} />
	<meta name="description" content={$page.data.meta.description} />
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={$page.data.meta.url} />
	<meta property="og:title" content={$page.data.meta.title} />
	<meta property="og:description" content={$page.data.meta.description} />
	<meta property="og:image" content={$page.data.meta?.image} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={$page.data.meta.url} />
	<meta property="twitter:title" content={$page.data.meta.title} />
	<meta property="twitter:description" content={$page.data.meta.description} />
	<meta property="twitter:image" content={$page.data.meta?.image} />
</svelte:head>

<div class="absolute w-full h-dvh z-20 overflow-hidden">
	<Navbar bind:open />
	<div class="relative mx-auto container max-w-5xl md:mt-[5.5rem] gap-x-20 h-full md:pl-2">
		<Header bind:open />
		<Sidebar />
		<div class="w-full absolute top-0 bottom-0 md:left-52 py-16 md:py-0 md:h-full px-4 md:px-6">
			<slot />
		</div>
	</div>
</div>

<GridBg className="h-full w-full" />
