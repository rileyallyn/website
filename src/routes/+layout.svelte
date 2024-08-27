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
	<title>{$page.data.meta.title || 'Riley Smith'}</title>
	<meta name="title" content={$page.data.meta.title || 'Riley Smith'} />
	<meta name="description" content={$page.data.meta.description || 'Software Engineer'} />
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={$page.data.meta.url || 'https://rileyy.dev'} />
	<meta property="og:title" content={$page.data.meta.title || 'Riley Smith'} />
	<meta property="og:description" content={$page.data.meta.description || 'Software Engineer'} />
	<meta property="og:image" content={$page.data.meta?.image || 'favicon.png'} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={$page.data.meta.url || 'https://rileyy.dev'} />
	<meta property="twitter:title" content={$page.data.meta.title || 'Riley Smith'} />
	<meta
		property="twitter:description"
		content={$page.data.meta.description || 'Software Engineer'}
	/>
	<meta property="twitter:image" content={$page.data.meta?.image || 'favicon.png'} />
</svelte:head>
<GridBg className="-z-10 h-full w-full" />
<Navbar bind:open />
<Header bind:open />
<div class="relative flex flex-row h-dvh w-full pt-8">
	<div class="relative z-40 overflow-hidden ml-14 lg:ml-40 hidden md:block">
		<Sidebar />
	</div>
	<div
		class="overflow-y-auto styled-scrollbars md:mt-8 sm:max-w-2xl w-full p-3 md:p-0 pb-20 md:pb-0 mt-4"
	>
		<slot />
	</div>
</div>
