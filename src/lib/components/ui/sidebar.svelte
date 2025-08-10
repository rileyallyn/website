<script>
	import Socials from './socials.svelte';
	import pfp from '$lib/imgs/pfp.webp?enhanced';
	import Navbar from './mobile-nav.svelte';

	const year = new Date().getFullYear();
</script>

<header
	class="block dark:text-white md:hidden pb-1 z-40 fixed top-0 left-0 w-full dark:bg-zinc-700/5 bg-stone-200/5 backdrop-blur-xs"
>
	<nav class="flex pt-2 px-3 items-center gap-x-2">
		<enhanced:img
			src={pfp}
			alt="Riley Smith looking at the aurora borealis"
			class="rounded-lg w-10 h-10"
		/>
		<a href="/" class="mr-auto title">
			<h1 class="text-xl mr-auto">Riley Smith</h1>
		</a>
		<Navbar />
	</nav>
</header>
<aside class="dark:text-white w-fit hidden md:block">
	<enhanced:img
		src={pfp}
		alt="Riley Smith looking at the aurora borealis"
		class="rounded-xl w-36 h-36 object-cover"
		fetchpriority="high"
	/>
	<h1 class="text-2xl font-bold title pt-0.5">Riley Smith</h1>
	<p class="text-md text-gray-500 italic dark:text-gray-300" aria-label="byline">
		Software Developer
	</p>
	<ul class="gap-y-2 mt-2 flex flex-col w-full">
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
	<footer class="mt-1">
		<a
			class="text-xs text-gray-500"
			href="https://github.com/rileyallyn/website"
			aria-label="Source Code"
		>
			Source
		</a>
		<p class="text-xs text-gray-500" aria-label="Copyright">© 2024-{year} Riley Smith</p>
	</footer>
</aside>
