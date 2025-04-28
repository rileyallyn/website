<script lang="ts">
	import type { PageData } from './$types';
	import Container from '$lib/ui/container.svelte';
	import { Badge } from '$lib/ui/Badge';
	import BlogPost from '$lib/ui/blog-post.svelte';

	let { data }: { data: PageData } = $props();
</script>

<Container>
	<h1 class="text-xl font-bold border-b-2 border-purple-900 max-w-fit leading-relaxed">
		Blog posts tagged with {data.tag}
	</h1>
	<div class="flex flex-col gap-y-10">
		{#each data.posts as post}
			{#if post}
				<BlogPost {post} />
			{:else}
				<span>No posts found!</span>
			{/if}
		{/each}
	</div>
</Container>
