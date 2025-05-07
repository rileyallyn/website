<script lang="ts">
	import type { PageData } from './$types';
	import Container from '$lib/ui/container.svelte';
	import { Badge } from '$lib/ui/Badge';
	import BlogPost from '$lib/ui/blog-post.svelte';

	let { data }: { data: PageData } = $props();
</script>

<Container>
	{#if data.posts.length > 0}
		<nav aria-label="Breadcrumb" class="py-2">
			<ol class="flex items-center space-x-2 text-sm">
				<li>
					<a href="/blog" class="text-gray-600 hover:text-purple-400 hover:underline">Blog</a>
				</li>
				<li class="flex items-center">
					<span class="mx-1 text-gray-400">/</span>
					<a href="/blog/tags" class="font-medium text-gray-600 hover:underline">Tags</a>
				</li>
				<li class="flex items-center">
					<span class="mx-1 text-gray-400">/</span>
					<a href="/blog/tags/{data.tag}" class="font-medium text-purple-400 hover:underline"
						>{data.tag}</a
					>
				</li>
			</ol>
		</nav>
	{/if}
	<h1 class="text-xl font-bold border-b-2 border-purple-900 max-w-fit leading-relaxed">
		Blog posts tagged with {data.tag}
	</h1>
	<div class="flex flex-col gap-y-10">
		{#if data.posts}
			{#each data.posts as post}
				{#if post}
					<BlogPost {post} />
				{/if}
			{/each}
		{:else}
			<span>No posts found!</span>
		{/if}
	</div>
</Container>
