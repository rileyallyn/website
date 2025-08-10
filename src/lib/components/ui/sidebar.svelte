<script>
	import Socials from './socials.svelte';
	import pfp from '$lib/imgs/pfp.webp?enhanced';
	import Navbar from './mobile-nav.svelte';
	import ModeWatcher from './modewatcher.svelte';

	const year = new Date().getFullYear();
</script>

<header
	class="fixed top-0 left-0 z-40 block w-full bg-stone-200/5 pb-1 backdrop-blur-xs md:hidden dark:bg-zinc-700/5 dark:text-white"
>
	<nav class="flex items-center gap-x-2 px-3 pt-2">
		<enhanced:img
			src={pfp}
			alt="Riley Smith looking at the aurora borealis"
			class="h-10 w-10 rounded-lg"
		/>
		<a href="/" class="title mr-auto">
			<h1 class="mr-auto text-xl">Riley Smith</h1>
		</a>
		<Navbar />
	</nav>
</header>
<aside class="hidden w-fit md:block dark:text-white">
	<enhanced:img
		src={pfp}
		alt="Riley Smith looking at the aurora borealis"
		class="h-36 w-36 rounded-xl object-cover"
		fetchpriority="high"
	/>
	<div class="mt-3 flex flex-col gap-y-1">
		<h1 class="title text-2xl font-bold">Riley Smith</h1>
		<p class="text-md text-zinc-900 italic dark:text-gray-300" aria-label="byline">
			Software Developer
		</p>
		<ul class="flex w-full flex-col gap-y-2">
			<li class="hover:underline">
				<a href="/">about</a>
			</li>
			<li class="hover:underline">
				<a href="/blog">blog</a>
			</li>
			<li class="hover:underline">
				<a href="https://resume.rileyy.dev">resume</a>
			</li>
			<li class="hidden hover:underline">
				<a href="/photography">photography</a>
			</li>
		</ul>
		<!-- socials -->
		<Socials scale={1.5} />
	</div>
	<footer class="">
		<a
			class="text-xs text-zinc-300"
			href="https://github.com/rileyallyn/website"
			aria-label="Source Code"
		>
			Source
		</a>
		<p class="text-xs text-zinc-300 font-stretch-105%" aria-label="Copyright">
			© 2024-{year} Riley Smith
		</p>
		<ModeWatcher />
	</footer>
</aside>
