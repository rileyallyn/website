<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	type $$Props = HTMLAttributes<HTMLHeadingElement> & {
		tag?: HeadingLevel;
	};

	interface Props {
		class?: $$Props['class'];
		tag?: $$Props['tag'];
		children?: import('svelte').Snippet;
	}

	let { class: className = undefined, tag = 'h3', children }: Props = $props();

	let data: HTMLAnchorElement | undefined = $state();
	let id: string = $state('');
	let id = $derived(
		data?.innerHTML
			.toLocaleLowerCase()
			.replace(/[^a-zA-Z0-9 ]/g, '')
			.split(' ')
			.join('-') || ''
	);
</script>

<svelte:element this={tag} class={className}>
	<a href={`#${id}`} class="anchor font-bold" bind:this={data}>
		{@render children?.()}
	</a>
</svelte:element>
