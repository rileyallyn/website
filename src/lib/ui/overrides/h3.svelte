<script lang="ts">
	let data: HTMLAnchorElement | undefined;
	let id: string = '';
	$: id =
		data?.innerHTML
			.toLocaleLowerCase()
			.replace(/[^a-zA-Z ]/g, '')
			.split(' ')
			.join('-') || '';
</script>

<h3 {id}>
	<a href={`#${id}`} class="anchor font-bold" bind:this={data}>
		<slot />
	</a>
</h3>

<style>
	.anchor:hover {
		text-decoration: underline;
	}

	.anchor {
		text-decoration: none;
		position: relative;
	}
</style>
