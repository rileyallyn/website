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
		'container mx-auto flex flex-col gap-y-4 scroll-smooth p-0 tracking-wide md:mx-0 md:pb-28 dark:text-white',
		className
	)}
	in:slide={{ duration: 500 }}
	out:slide={{ duration: 500 }}
>
	{@render children?.()}
</main>
