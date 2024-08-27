<script lang="ts">
	import { fade } from 'svelte/transition';
	let data: HTMLAnchorElement | undefined;
	let id: string = '';
	$: id =
		data?.innerHTML
			.toLocaleLowerCase()
			.replace(/[^a-zA-Z0-9 ]/g, '')
			.split(' ')
			.join('-') || '';
	// Copy the link to the clipboard
	$: copy = false;
	const onClickCopy = () => {
		const url = `${window.location.origin}${window.location.pathname}#${id}`;
		copy = true;
		navigator.clipboard.writeText(url);
		setTimeout(() => {
			copy = false;
		}, 2000);
	};
</script>

<h2 {id} class="flex flex-row gap-y-2">
	<a href={`#${id}`} class="anchor font-bold" bind:this={data}>
		<slot />
	</a>
	{#if copy}
		<div
			class=" text-xs text-gray-500 bg-neutral-100 px-2 rounded-md max-w-fit text-center flex items-center ml-2 z-10"
			transition:fade={{ duration: 80 }}
		>
			Copied to clipboard!
		</div>
	{/if}
</h2>

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
