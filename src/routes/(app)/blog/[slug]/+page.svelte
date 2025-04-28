<script lang="ts">
	import Container from '$lib/ui/container.svelte';
	import { Icon } from 'svelte-awesome';
	import type { PageData } from './$types';
	import arrowLeft from 'svelte-awesome/icons/arrowLeft';
	import { Badge } from '$lib/ui/Badge';
	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	const { post, page } = data;
</script>

<Container className="dark:bg-black/25 bg-neutral-100/50">
	{#if post.slug}
		<nav aria-label="Breadcrumb" class="py-2">
			<ol class="flex items-center space-x-2 text-sm">
				<li>
					<a href="/blog" class="text-gray-600 hover:text-purple-400 hover:underline">Blog</a>
				</li>
				<li class="flex items-center">
					<span class="mx-1 text-gray-400">/</span>
					<a href="/blog/{post.slug}" class="font-medium text-purple-400 hover:underline"
						>{post.postTitle}</a
					>
				</li>
			</ol>
		</nav>
	{/if}
	{@const SvelteComponent = page}
	<div class="flex flex-col gap-y-6">
		<div class="flex flex-col gap-y-2 border-b-2 border-purple-900 pb-4">
			<div class="flex items-center gap-x-2">
				<div class="flex flex-col">
					<h1 class="text-xl font-bold">{post.postTitle}</h1>
					<div class="flex flex-row gap-x-2">
						<p class="text-sm text-gray-500">
							{new Date(post.datePublished).toLocaleDateString('en-US', {
								month: 'long',
								day: 'numeric',
								year: 'numeric',
								timeZone: 'UTC'
							})}
						</p>
						{#if post.lastUpdated}
							<p class="text-sm text-gray-600 italic">
								(Last updated: {new Date(post.lastUpdated).toLocaleDateString('en-US', {
									month: 'long',
									day: 'numeric',
									year: 'numeric',
									hour: 'numeric',
									minute: 'numeric',
									timeZone: 'UTC'
								})})
							</p>
						{/if}
					</div>
					<p class="text-sm text-gray-500">{post.timeToRead}</p>
					{#if post.tags}
						<div class="flex flex-wrap gap-x-2 mt-2">
							{#each post.tags as tag}
								<a href={`/blog/tags/${tag}`}>
									<Badge variant="outline">{tag}</Badge>
								</a>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
		<article class="prose prose-zinc dark:prose-invert max-w-[40rem]">
			<SvelteComponent />
		</article>
	</div>
</Container>
