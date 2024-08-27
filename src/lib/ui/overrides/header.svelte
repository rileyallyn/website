<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	type $$Props = HTMLAttributes<HTMLHeadingElement> & {
		tag?: HeadingLevel;
	};

	let className: $$Props['class'] = undefined;
	export let tag: $$Props['tag'] = 'h3';

	let data: HTMLAnchorElement | undefined;
	let id: string = '';
	$: id =
		data?.innerHTML
			.toLocaleLowerCase()
			.replace(/[^a-zA-Z0-9 ]/g, '')
			.split(' ')
			.join('-') || '';
	export { className as class };
</script>

<svelte:element this={tag} class={className}>
	<a href={`#${id}`} class="anchor font-bold" bind:this={data}>
		<slot />
	</a>
</svelte:element>
