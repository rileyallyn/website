<script>
	import Socials from './socials.svelte';
	import pfp from '$lib/imgs/pfp.webp?enhanced';

	const year = new Date().getFullYear();
</script>

<aside class="dark:text-white min-w-56 w-fit mt-8 left-32 pt-2 hidden md:block">
	<enhanced:img
		src={pfp}
		alt="Riley Smith looking at the aurora borealis"
		class="rounded-xl w-36 h-36"
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
