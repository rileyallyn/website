<script lang="ts">
	import { cn } from '$lib/utils/cn';

	interface Props {
		showFade?: boolean;
		className?: string;
		children?: import('svelte').Snippet;
	}

	let { showFade = true, className = '', children }: Props = $props();
</script>

<div
	class={cn(
		`absolute flex items-center justify-center bg-stone-300 bg-grid-zinc-950/[0.2] dark:bg-zinc-950 dark:bg-grid-white/[0.2]`,
		className
	)}
>
	<!-- Radial gradient for the container to give a faded look -->
	{@render children?.()}
	{#if showFade}
		<div
			class="pointer-events-none absolute inset-0 flex items-center justify-center bg-stone-300 [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)] dark:bg-zinc-950"
		></div>
	{/if}
</div>
