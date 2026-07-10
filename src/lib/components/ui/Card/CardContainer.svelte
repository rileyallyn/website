<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		className?: string | undefined;
		containerClassName?: string | undefined;
		children?: import('svelte').Snippet;
		role?: string | undefined;
	}

	let {
		className = undefined,
		containerClassName = undefined,
		children,
		role = 'article'
	}: Props = $props();

	let containerRef: HTMLDivElement | undefined = $state();

	const handleMouseMove = (e: MouseEvent) => {
		if (!containerRef) return;
		const { left, top, width, height } = containerRef.getBoundingClientRect();
		const x = (e.clientX - left - width / 2) / 25;
		const y = (e.clientY - top - height / 2) / 25;
		containerRef.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
	};

	const handleMouseEnter = () => {
		if (!containerRef) return;
	};

	const handleMouseLeave = () => {
		if (!containerRef) return;
		containerRef.style.transform = `rotateY(0deg) rotateX(0deg)`;
	};
</script>

<div class={cn('flex', containerClassName)} style="perspective: 1000px;" {role}>
	<div
		bind:this={containerRef}
		onmouseenter={handleMouseEnter}
		onmousemove={handleMouseMove}
		onmouseleave={handleMouseLeave}
		{role}
		class={cn('relative flex h-full flex-col  transition-all duration-200 ease-linear', className)}
		style="transform-style: preserve-3d;"
	>
		{@render children?.()}
	</div>
</div>
