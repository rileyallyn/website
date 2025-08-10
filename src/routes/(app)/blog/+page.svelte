<script lang="ts">
	import Container from '$lib/components/ui/container.svelte';
	import BlogPost from '$lib/components/ui/blog-post.svelte';
	let { data } = $props();
	const { posts } = data;
</script>

<Container>
	<h1 class="max-w-fit border-b-2 border-purple-700 text-xl leading-relaxed font-bold">blog</h1>
	<div class="flex flex-col gap-y-10">
		{#if posts.length > 0}
			{#each posts as post}
				{#if post}
					<BlogPost {post} />
				{/if}
			{/each}
		{:else}
			<span>No blog posts found!</span>
		{/if}
	</div>
</Container>
