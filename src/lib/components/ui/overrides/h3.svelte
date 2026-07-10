<script lang="ts">
	import { fade } from 'svelte/transition';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
	let data: HTMLAnchorElement | undefined = $state();
	let cleanedId = $derived(
		data?.innerHTML
			.toLocaleLowerCase()
			.replace(/[^a-zA-Z0-9 ]/g, '')
			.split(' ')
			.join('-') || ''
	);
	// Copy the link to the clipboard
	let copy = $state(false);

	const onClickCopy = () => {
		const url = `${window.location.origin}${window.location.pathname}#${cleanedId}`;
		copy = true;
		navigator.clipboard.writeText(url);
		setTimeout(() => {
			copy = false;
		}, 2000);
	};
</script>

<h3 id={cleanedId} class="flex flex-row gap-y-2">
	<a
		href={`#${cleanedId}`}
		class="anchor max-w-fit font-bold"
		bind:this={data}
		onclick={onClickCopy}
	>
		{@render children?.()}
	</a>
	{#if copy}
		<div
			class=" z-10 ml-2 flex max-w-fit items-center rounded-md bg-neutral-200 px-2 text-center text-xs text-gray-500 dark:bg-neutral-900 dark:text-gray-100"
			transition:fade={{ duration: 80 }}
		>
			Copied to clipboard!
		</div>
	{/if}
</h3>

<style>
	.anchor:hover {
		text-decoration: underline;
	}

	.anchor {
		text-decoration: none;
		position: relative;
	}

	.anchor::after {
		content: '🔗';
		position: absolute;
		right: -1.5em;
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
		color: var(--text-accent);
	}
	.anchor:hover::after {
		opacity: 1;
	}
</style>
