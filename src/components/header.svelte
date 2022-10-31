<script lang="ts">
	import { Bars3Icon } from '@babeard/svelte-heroicons/solid';

	const barsClickHandler = () => {};
</script>

<header class="h-24 w-full text-white">
	<nav class="flex p-10">
		<a href="/" class="mr-auto">
			<h1 class="text-xl mr-auto">Riley Smith</h1>
		</a>
		<ul class="hidden sm:flex">
			<li class="mr-4 p-2">
				<a href="/about" class="text-md">About</a>
			</li>
			<li class="mr-4 p-2">
				<a href="/projects" class="text-md">Projects</a>
			</li>
			<li class="mr-4 p-2">
				<a href="/blog" class="text-md">Blog</a>
			</li>
			<li class="mr-4 p-2 border rounded-lg border-blue-400">
				<a href="/contact" class="text-md">Contact</a>
			</li>
		</ul>
		<button on:click={barsClickHandler} class="w-7 h-7 sm:hidden">
			<Bars3Icon />
		</button>
	</nav>
</header>
