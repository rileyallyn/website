<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		className: string;
		style?: keyof typeof styles;
		children?: import('svelte').Snippet;
	}

	const styles = {
		unstyled: 'h-96 w-96 transform-3d  *:transform-3d',
		'frosted-glass':
			'h-96 w-96 transform-3d  *:transform-3d dark:bg-white/5 shadow-md dark:shadow-none drop-shadow-lg backdrop-blur-xs hover:bg-neutral-200/15 dark:hover:bg-white/10 border-2 border-purple-300/30 transition-all duration-300'
	};

	let { className, style = 'frosted-glass', children }: Props = $props();
</script>

<div class={cn(styles[style], className)}>
	{@render children?.()}
</div>
