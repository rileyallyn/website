<script lang="ts">
	import { XMarkIcon } from '@babeard/svelte-heroicons/solid';
	import Icon from 'svelte-awesome';
	import { github, instagram, linkedinSquare } from 'svelte-awesome/icons';
	import Socials from './socials.svelte';

	interface Props {
		open?: boolean;
	}

	let { open = $bindable(false) }: Props = $props();
	let iconScale = 3;
</script>

<aside
	class="dark:text-white w-full absolute h-full dark:bg-zinc-950/95 backdrop-blur-sm py-40 block sm:hidden z-50 bg-stone-200/95"
	class:open
>
	<div class="absolute top-0 right-0">
		<button
			onclick={() => (open = !open)}
			class=" w-7 h-7 md:hidden mt-2 mx-4"
			aria-label="Toggle sidebar menu"
		>
			<span class="sr-only">Toggle sidebar menu</span>
			<XMarkIcon />
		</button>
	</div>
	<!-- TODO: Make this into a reuable component -->
	<nav class="flex pt-2 px-4 items-center gap-x-2">
		<ul class="font-bold text-4xl gap-y-2 mt-4 flex flex-col w-full">
			<li>
				<a href="/" onclick={() => (open = false)}>about</a>
			</li>
			<li>
				<a href="/blog" onclick={() => (open = false)}>blog</a>
			</li>
			<li>
				<a href="https://resume.rileyy.dev">resume</a>
			</li>
			<li class="hidden">
				<a href="/photography">photography</a>
			</li>
		</ul>
	</nav>
	<!-- socials -->
	<Socials scale={iconScale} className="p-4" />
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
