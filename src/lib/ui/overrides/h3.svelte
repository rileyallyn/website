<script lang="ts">
	let data: HTMLAnchorElement | undefined;
	let id: string = '';
	$: id = data?.innerHTML.split(' ').join('-') || '';
</script>

<h3 {id}>
	<a href={`#${id}`} class="anchor" bind:this={data}>
		<slot />
	</a>
</h3>

<style>
	/* make the anchor link look like a link and add a link icon*/
	.anchor:hover::before {
		content: '#';
		position: absolute;
		left: -1rem;
	}

	.anchor:hover {
		text-decoration: underline;
	}

	.anchor {
		text-decoration: none;
		position: relative;
	}
</style>
