<script>
	import Header from '$lib/ui/header.svelte';
	import '../app.postcss';
	import { fade } from 'svelte/transition';
	import Sidebar from '$lib/ui/sidebar.svelte';
	import Navbar from '$lib/ui/navbar.svelte';
	import GridAndDotBackground from '$lib/ui/GridAndDotBackground.svelte';
	// TODO: Find a way to make this work with SSR
	let opener = true;
	setTimeout(() => {
		opener = true;
	}, 1500);
	let open = false;
</script>

<div class="absolute h-screen w-full z-20 overflow-hidden">
	<Navbar bind:open />
	{#if opener}
		<div
			class="mx-auto h-full flex flex-col md:flex-row container max-w-5xl gap-x-20"
			in:fade={{ delay: 300 }}
		>
			<Header bind:open />
			<Sidebar />
			<div class="p-4 md:py-36 w-full scroll-smooth">
				<slot />
			</div>
		</div>
	{/if}
	{#if !opener}
		<div
			class="text-white bg-black absolute top-0 h-full w-full flex flex-col justify-center items-center"
			out:fade={{ duration: 250 }}
		>
			<div class="p-5">
				<h1 class="text-lg font-bold">👋 hey, I’m Riley.</h1>
				<p class="text-md text-left">
					I’m an experienced software developer who makes s#!t that performs.
				</p>
			</div>
		</div>
	{/if}
</div>

<GridAndDotBackground className="h-full w-full" showFade={true} />
