<script lang="ts">
	import Container from '$lib/components/ui/container.svelte';
	import BlogPost from '$lib/components/ui/blog-post.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const posts = $derived(data.posts);
</script>

<Container>
	<h1 class="max-w-fit border-b-2 border-purple-700 text-xl leading-relaxed font-bold">Blog</h1>
	<div class="flex flex-col gap-y-10">
		{#each posts as post, index (post?.slug ?? index)}
			{#if post}
				<BlogPost {post} />
			{/if}
		{/each}
	</div>
</Container>
