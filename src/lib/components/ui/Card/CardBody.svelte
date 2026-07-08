<script lang="ts">
	import { cn } from '$lib/utils';
	import { tv, type VariantProps } from 'tailwind-variants';

	const cardBody = tv({
		base: 'transform-3d *:transform-3d p-6 border rounded-xl',
		variants: {
			style: {
				unstyled: '',
				'frosted-glass':
					'dark:bg-white/5 bg-neutral-100/80 shadow-md dark:shadow-none drop-shadow-lg backdrop-blur-xs hover:bg-neutral-100/90 dark:hover:bg-white/10 border-2 border-purple-300/30 transition-all duration-300'
			}
		},
		defaultVariants: {
			style: 'frosted-glass'
		}
	});
	interface Props extends VariantProps<typeof cardBody> {
		className?: string;
		children?: import('svelte').Snippet;
	}

	let { className, style = 'frosted-glass', children }: Props = $props();
</script>

<div class={cn(cardBody({ style }), className)}>
	{@render children?.()}
</div>
