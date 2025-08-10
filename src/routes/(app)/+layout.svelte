<script lang="ts">
	import Sidebar from '$lib/components/ui/sidebar.svelte';
	import GridBg from '$lib/components/ui/gridbg.svelte';
	import { page } from '$app/state';
	import ModeWatcher from '$lib/components/ui/modewatcher.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}
	let data: App.PageData = $derived(page.data);
	let { children }: Props = $props();
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
<div
	class="relative flex flex-row justify-center styled-scrollbars overflow-y-auto max-h-dvh pt-16"
>
	<div class="sticky md:w-1/3 top-0 z-10">
		<div class="relative sm:left-8 md:left-16 lg:left-32 xl:left-64 w-fit flex flex-col gap-2">
			<Sidebar />
			<div class="md:block hidden">
				<ModeWatcher />
			</div>
		</div>
	</div>
	<!-- Fixed sidebar taking 25% of the page -->
	<!-- Main content taking 75% of the page with scrollable content -->
	<div
		class="w-full md:w-2/3 md:pb-0 p-2 md:p-0 md:pr-2.5 md:pl-2 h-full relative mr-0 md:mr-8 lg:mr-0"
	>
		<div class="md:max-w-2xl w-full">
			{@render children?.()}
		</div>
	</div>
</div>
