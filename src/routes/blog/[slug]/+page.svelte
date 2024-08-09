<script lang="ts">
	import Container from '$lib/ui/container.svelte';
	import { Icon } from 'svelte-awesome';
	import { format } from 'date-fns';
	import type { PageData } from './$types';
	import arrowLeft from 'svelte-awesome/icons/arrowLeft';

	export let data: PageData;
	const { post, page } = data;
</script>

<Container>
	<a href="/blog" class="flex items-center gap-x-2 text-gray-600 hover:underline">
		<Icon data={arrowLeft} />
		<span>Back to blog</span>
	</a>
	<div class="flex flex-col gap-y-6 max-w-3xl">
		<div class="flex flex-col gap-y-2 border-b-2 border-purple-900 pb-4">
			<div class="flex items-center gap-x-2">
				<div class="flex flex-col">
					<h1 class="text-xl font-bold">{post.postTitle}</h1>
					<p class="text-sm text-gray-500">{format(post.datePublished, 'MMMM d, yyyy')}</p>
				</div>
			</div>
		</div>
		<article class="prose prose-invert max-w-none">
			<svelte:component this={page} />
		</article>
	</div>
</Container>
