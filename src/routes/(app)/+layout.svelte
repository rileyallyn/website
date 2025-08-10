<script lang="ts">
	import Header from '$lib/components/ui/header.svelte';
	import Sidebar from '$lib/components/ui/sidebar.svelte';
	import Navbar from '$lib/components/ui/navbar.svelte';
	import GridBg from '$lib/components/ui/gridbg.svelte';
	import { page } from '$app/state';
	import ModeWatcher from '$lib/components/ui/modewatcher.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}
	let data: App.PageData = $derived(page.data);
	let { children }: Props = $props();
	let open = $state(false);
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{data.meta?.title ? `${data.meta.title} | Riley Smith` : 'Riley Smith'}</title>
	<meta
		name="title"
		content={data.meta?.title ? `${data.meta.title} | Riley Smith` : 'Riley Smith'}
	/>
	<meta name="description" content={data.meta?.description || 'Software Engineer'} />
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={data.meta?.url || 'https://rileyy.dev'} />
	<meta
		property="og:title"
		content={data.meta?.title ? `${data.meta.title} | Riley Smith` : 'Riley Smith'}
	/>
	<meta property="og:description" content={data.meta?.description || 'Software Engineer'} />
	<meta property="og:image" content={data.meta?.image || '/favicon.png'} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={data.meta?.url || 'https://rileyy.dev'} />
	<meta
		property="twitter:title"
		content={data.meta?.title ? `${data.meta.title} | Riley Smith` : 'Riley Smith'}
	/>
	<meta property="twitter:description" content={data.meta?.description || 'Software Engineer'} />
	<meta property="twitter:image" content={data.meta?.image || '/favicon.png'} />
</svelte:head>
<GridBg className="-z-10 h-full w-full" />
<Header bind:open />
<div
	class=" relative flex flex-row justify-center styled-scrollbars overflow-y-auto max-h-dvh pt-16"
>
	<div class="hidden md:block sticky w-1/3 top-0">
		<div class="relative left-64 w-fit flex flex-col gap-2">
			<Sidebar />
			<ModeWatcher />
		</div>
	</div>
	<!-- Fixed sidebar taking 25% of the page -->
	<!-- Main content taking 75% of the page with scrollable content -->
	<div class="w-full sm:w-2/3 md:pb-0 p-2 sm:p-0 md:pr-2.5 md:pl-2 h-full relative">
		<div class="max-w-2xl w-full">
			{@render children?.()}
		</div>
	</div>
</div>
<div class="absolute top-16 right-64"></div>
