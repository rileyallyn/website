<script lang="ts">
	import { cn } from '$lib/utils';
	import { slide } from 'svelte/transition';
	interface Props {
		className?: string;
		children?: import('svelte').Snippet;
	}

	let { className = '', children }: Props = $props();
</script>

<main
	class={cn(
		'container dark:text-white gap-y-4 flex flex-col tracking-wide scroll-smooth md:pb-28 p-0 mx-auto md:mx-0',
		className
	)}
	in:slide={{ duration: 500 }}
	out:slide={{ duration: 500 }}
>
	{@render children?.()}
</main>
