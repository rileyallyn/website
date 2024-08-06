<script>
	import { Icon } from 'svelte-awesome';
	import { github, instagram, linkedinSquare, envelope } from 'svelte-awesome/icons';
	import Socials from './socials.svelte';
</script>

<aside class="dark:text-white w-56 sticky top-0 h-screen py-28 hidden md:block">
	<img
		src="/pfp.webp"
		alt="Riley Smith looking at the aurora borealis"
		class="rounded-full w-24 h-24"
	/>
	<h1 class="text-2xl font-bold title">Riley Smith</h1>
	<p class="text-md text-gray-500 italic">Software Developer</p>
	<ul class="gap-y-2 mt-2 flex flex-col w-full">
		<li>
			<a href="/">About</a>
		</li>
		<li>
			<a href="/blog">Blog</a>
		</li>
		<li class="hidden">
			<a href="/photography">Photography</a>
		</li>
	</ul>
	<!-- socials -->
	<Socials scale={1.5} />
	<footer class="mt-1">
		<a class="text-xs text-gray-500" href="https://github.com/rileyallyn/website">Source</a>
		<p class="text-xs text-gray-500">© 2024 Riley Smith</p>
	</footer>
</aside>
