<script>
	import { cn } from '$lib/utils';
	import { slide } from 'svelte/transition';
	export let className = '';
</script>

<main
	class={cn(
		'dark:text-white gap-y-4 flex flex-col tracking-wide scroll-smooth overflow-y-auto md:pb-28 max-w-fit',
		className
	)}
	in:slide={{ duration: 500 }}
	out:slide={{ duration: 500 }}
>
	<slot />
</main>
