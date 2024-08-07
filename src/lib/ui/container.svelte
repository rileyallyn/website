<script>
	import { cn } from '$lib/utils';
	import { slide } from 'svelte/transition';
	export let className = '';
</script>

<main
	class={cn(
		'container dark:text-white gap-y-4 flex flex-col tracking-wide scroll-smooth overflow-auto h-dvh pb-16 md:pb-28',
		className
	)}
	in:slide={{ duration: 500 }}
	out:slide={{ duration: 500 }}
>
	<slot />
</main>
