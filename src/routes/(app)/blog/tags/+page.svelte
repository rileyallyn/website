<script lang="ts">
	import type { PageData } from './$types';
	import Container from '$lib/ui/container.svelte';
	import { Badge } from '$lib/ui/Badge';

	let { data }: { data: PageData } = $props();
</script>

<Container>
	<nav aria-label="Breadcrumb" class="py-2">
		<ol class="flex items-center space-x-2 text-sm">
			<li>
				<a href="/blog" class="text-gray-600 hover:text-purple-400 hover:underline">Blog</a>
			</li>
			<li class="flex items-center">
				<span class="mx-1 text-gray-400">/</span>
				<a href="/blog/tags" class="font-medium text-purple-400 hover:underline">Tags</a>
			</li>
		</ol>
	</nav>
	<h1 class="text-xl font-bold border-b-2 border-purple-900 max-w-fit leading-relaxed">Tags</h1>
	<div class="flex flex-row gap-x-2">
		{#each data.tags as tag}
			<a href={`/blog/tags/${tag}`}>
				<Badge variant="outline">{tag}</Badge>
			</a>
		{/each}
	</div>
</Container>
