<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends WithElementRef<HTMLAttributes<HTMLDivElement>> {
		className?: string;
		translateX?: number | string;
		translateY?: number | string;
		translateZ?: number | string;
		rotateX?: number | string;
		rotateY?: number | string;
		rotateZ?: number | string;
		isMouseEntered?: boolean;
		children?: import('svelte').Snippet;
	}

	let {
		className,
		translateX = 0,
		translateY = 0,
		translateZ = 0,
		rotateX = 0,
		rotateY = 0,
		rotateZ = 0,
		isMouseEntered = false,
		ref = $bindable(null),
		children,
		...restProps
	}: Props = $props();

	$effect(() => {
		if (!ref) return;
		ref.style.transform = isMouseEntered
			? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
			: `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
	});
</script>

<div
	bind:this={ref}
	class={cn('w-fit transition duration-200 ease-linear', className)}
	{...restProps}
>
	{@render children?.()}
</div>
