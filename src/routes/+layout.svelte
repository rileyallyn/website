<script>
	import Background from 'components/background.svelte';
	import Header from 'components/header.svelte';
	import '../app.postcss';
	import { fade } from 'svelte/transition';
	import { browser } from '$app/environment';
	// TODO: Find a way to make this work with SSR
	let opener = true;
	setTimeout(() => {
		opener = true;
	}, 1500);
</script>

<div class="absolute h-screen w-full z-20" />

<!-- <div class="absolute h-screen w-full z-20">
	{#if opener}
		<div class="flex flex-col mx-auto container" in:fade={{ delay: 300 }}>
			<Header />
			<slot />
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
</div> -->
<div class="relative h-full w-full top-0 z-10">
	<Background />
</div>
