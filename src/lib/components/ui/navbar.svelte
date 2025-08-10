<script lang="ts">
	import MenuIcon from '@lucide/svelte/icons/menu';
	import * as Sheet from '$lib/components/ui/sheet';
	import { buttonVariants } from '$lib/components/ui/Button';
	import Socials from './socials.svelte';
	import ModeWatcher from './modewatcher.svelte';
	let open = $state(false);
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger class={buttonVariants({ variant: 'outline', size: 'iconSm' })}
		><MenuIcon /></Sheet.Trigger
	>
	<Sheet.Content
		class="w-full h-full flex flex-col bg-zinc-900/50 dark:bg-zinc-900/50 backdrop-blur-sm"
	>
		<div class="flex flex-col gap-y-2 h-full justify-center">
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
			<Socials scale={3} className="p-4" />
		</div>
		<Sheet.Footer class="justify-self-end flex justify-end">
			<ModeWatcher size="icon" />
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>

<!-- <aside
	class="dark:text-white w-full absolute h-full dark:bg-zinc-950/95 backdrop-blur-xs py-40 block sm:hidden z-50 bg-stone-200/95"
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
	</div> -->
<!-- TODO: Make this into a reuable component -->
<!-- <nav class="flex pt-2 px-4 items-center gap-x-2">
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
	</nav>-->
<!-- socials -->
<!-- <Socials scale={iconScale} className="p-4" /> -->
<!-- </aside> -->
