<script lang="ts">
	import Container from '$lib/ui/container.svelte';
	import { Icon } from 'svelte-awesome';
	import type { PageData } from './$types';
	import arrowLeft from 'svelte-awesome/icons/arrowLeft';

	export let data: PageData;
	const { post, page } = data;
</script>

<Container className="dark:bg-black/25 bg-neutral-100/50">
	<a href="/blog" class="flex items-center gap-x-2 text-gray-600 hover:underline">
		<Icon data={arrowLeft} />
		<span>Back to blog</span>
	</a>
	<div class="flex flex-col gap-y-6">
		<div class="flex flex-col gap-y-2 border-b-2 border-purple-900 pb-4">
			<div class="flex items-center gap-x-2">
				<div class="flex flex-col">
					<h1 class="text-xl font-bold">{post.postTitle}</h1>
					<p class="text-sm text-gray-500">
						{new Date(post.datePublished).toLocaleDateString('en-US', {
							month: 'long',
							day: 'numeric',
							year: 'numeric',
							timeZone: 'UTC'
						})}
					</p>
					<p class="text-sm text-gray-500">{post.timeToRead}</p>
				</div>
			</div>
		</div>
		<article class="prose prose-zinc dark:prose-invert max-w-xl">
			<svelte:component this={page} />
		</article>
	</div>
</Container>
