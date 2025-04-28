<script lang="ts">
	import type { PageData } from './$types';
	import Container from '$lib/ui/container.svelte';
	import { Badge } from '$lib/ui/Badge';

	let { data }: { data: PageData } = $props();
</script>

<Container>
	<h1 class="text-xl font-bold border-b-2 border-purple-900 max-w-fit leading-relaxed">Tags</h1>
	<div class="flex flex-row gap-x-2">
		{#each data.tags as tag}
			<a href={`/blog/tags/${tag}`}>
				<Badge variant="outline">{tag}</Badge>
			</a>
		{/each}
	</div>
</Container>
