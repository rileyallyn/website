<script>
	import Background from 'components/background.svelte';
	import Header from 'components/header.svelte';
	import '../app.postcss';
	import { fade } from 'svelte/transition';
	import Sidebar from 'components/sidebar.svelte';
	import Navbar from 'components/navbar.svelte';
	// TODO: Find a way to make this work with SSR
	let opener = false;
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
			<div class="p-4 md:py-36 w-full">
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
				<h1 class="text-lg font-bold ">👋 hey, I’m Riley.</h1>
				<p class="text-md text-left">
					I’m an experienced software developer who makes s#!t that performs.
				</p>
			</div>
		</div>
	{/if}
</div>
<div class="relative h-full w-full top-0 z-10">
	<!-- <Background /> -->
</div>
