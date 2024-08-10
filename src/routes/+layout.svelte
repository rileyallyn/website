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
<GridBg className="absolute -z-10 h-full w-full" />
<Navbar bind:open />
<Header bind:open />
<div class="fixed top-0 left-0 z-40 overflow-hidden ml-40">
	<Sidebar />
</div>
<div class="overflow-y-auto pr-5 styled-scrollbars w-fit mx-auto mt-8 h-dvh max-w-4xl">
	<slot />
</div>
