<script>
	import { XMarkIcon } from '@babeard/svelte-heroicons/solid';
	import Icon from 'svelte-awesome';
	import { github, instagram, linkedinSquare } from 'svelte-awesome/icons';

	export let open = false;
	let iconScale = 3;
</script>

<aside class="text-white w-full absolute h-full bg-black py-40 md:block" class:open>
	<div class="absolute top-0 right-0">
		<button on:click={() => (open = !open)} class=" w-7 h-7 md:hidden mt-2 mx-4">
			<XMarkIcon />
		</button>
	</div>
	<!-- TODO: Make this into a reuable component -->
	<nav class="flex pt-2 px-4 items-center gap-x-2">
		<ul class="font-bold text-4xl gap-y-2 mt-4 flex flex-col w-full ">
			<li>
				<a href="/" on:click={() => (open = false)}>About</a>
			</li>
			<li>
				<a href="/blog" on:click={() => (open = false)}>Blog</a>
			</li>
			<li>
				<a href="/contact" on:click={() => (open = false)}>Contact</a>
			</li>
			<li class="hidden">
				<a href="/photography">Photography</a>
			</li>
		</ul>
	</nav>
	<div class=" flex gap-x-4 mb-4 p-4 text-white">
		<a href="https://github.com/rileyallyn" target="_blank" rel="noreferrer">
			<Icon class="text-white" data={github} scale={iconScale} />
		</a>
		<a href="https://linkedin.com/in/riley-a-smith" target="_blank" rel="noreferrer">
			<Icon class="text-white" data={linkedinSquare} scale={iconScale} />
		</a>
		<a href="https://instagram.com/rileyy.allyn" target="_blank" rel="noreferrer">
			<Icon class="text-white" data={instagram} scale={iconScale} />
		</a>
	</div>
</aside>

<style>
	aside {
		right: -100%;
		transition: right 0.5s ease-in-out;
	}
	.open {
		right: 0;
	}
</style>
