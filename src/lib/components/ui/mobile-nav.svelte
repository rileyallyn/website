<script lang="ts">
	import MenuIcon from '@lucide/svelte/icons/menu';
	import * as Sheet from '$lib/components/ui/sheet';
	import { buttonVariants } from '$lib/components/ui/Button';
	import Socials from './socials.svelte';
	import ModeWatcher from './modewatcher.svelte';
	let open = $state(false);
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger
		class={buttonVariants({ variant: 'outline', size: 'iconSm' })}
		aria-label="Toggle mobile navigation"><MenuIcon /></Sheet.Trigger
	>
	<Sheet.Content
		class="flex h-full w-full flex-col bg-zinc-900/50 backdrop-blur-sm dark:bg-zinc-900/50"
	>
		<div class="flex h-full flex-col justify-center gap-y-2 text-white">
			<nav class="flex items-center gap-x-2 px-4 pt-2">
				<ol class="mt-4 flex w-full flex-col gap-y-2 text-4xl font-bold">
					<li>
						<a href="/" onclick={() => (open = false)}>About</a>
					</li>
					<li>
						<a href="/blog" onclick={() => (open = false)}>Blog</a>
					</li>
					<li>
						<a href="https://resume.rileyy.dev">Resume</a>
					</li>
					<li class="hidden">
						<a href="/photography">Photography</a>
					</li>
				</ol>
			</nav>
			<Socials scale={3} className="p-4" />
		</div>
		<Sheet.Footer class="flex justify-end justify-self-end">
			<ModeWatcher size="icon" />
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>

<!-- <aside
	class="block absolute z-50 py-40 w-full h-full dark:text-white dark:bg-zinc-950/95 backdrop-blur-xs sm:hidden bg-stone-300/95"
	class:open
>
	<div class="absolute top-0 right-0">
		<button
			onclick={() => (open = !open)}
			class="mx-4 mt-2 w-7 h-7  md:hidden"
			aria-label="Toggle sidebar menu"
		>
			<span class="sr-only">Toggle sidebar menu</span>
			<XMarkIcon />
		</button>
	</div> -->
<!-- TODO: Make this into a reuable component -->
<!-- <nav class="flex gap-x-2 items-center px-4 pt-2">
		<ul class="flex flex-col gap-y-2 mt-4 w-full text-4xl font-bold">
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
	</nav>-->
<!-- socials -->
<!-- <Socials scale={iconScale} className="p-4" /> -->
<!-- </aside> -->
