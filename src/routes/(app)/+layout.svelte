<script lang="ts">
	import Sidebar from '$lib/components/ui/sidebar.svelte';
	import GridBg from '$lib/components/ui/gridbg.svelte';
	import { page } from '$app/state';
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
	class="styled-scrollbars relative flex max-h-dvh flex-row justify-center overflow-y-auto pt-16"
>
	<div class="sticky top-0 z-10 md:w-1/3">
		<div
			class="relative flex w-fit flex-col gap-2 sm:left-8 md:left-16 lg:left-26 xl:left-56 2xl:left-96"
		>
			<Sidebar />
		</div>
	</div>
	<!-- Fixed sidebar taking 25% of the page -->
	<!-- Main content taking 75% of the page with scrollable content -->
	<div
		class="relative mr-0 h-full w-full p-2 md:mr-8 md:w-2/3 md:p-0 md:pr-2.5 md:pb-0 md:pl-2 lg:mr-0"
	>
		<div class="w-full md:max-w-4xl">
			{@render children?.()}
		</div>
	</div>
</div>
