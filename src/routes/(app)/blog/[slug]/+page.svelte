<script lang="ts">
	import Container from '$lib/components/ui/container.svelte';
	import { Icon } from 'svelte-awesome';
	import type { PageData } from './$types';
	import arrowLeft from 'svelte-awesome/icons/arrowLeft';
	import { Badge } from '$lib/components/ui/Badge';
	import { TIMEZONE } from '$lib/constants';
	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	const { post, page } = data;
</script>

<Container className="rounded-xl">
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
								timeZone: TIMEZONE
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
									timeZone: TIMEZONE
								})})
							</p>
						{/if}
					</div>
					<p class="text-sm text-gray-500">{post.timeToRead}</p>
					{#if post.tags}
						<div class="mt-2 flex flex-wrap gap-x-2">
							{#each post.tags as tag}
								<a href={`/blog/tags/${tag}`}>
									<Badge
										variant="outline"
										class="backdrop-blur-xs hover:bg-purple-700 hover:text-white"
									>
										{tag}
									</Badge>
								</a>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
		<article class="prose max-w-3xl prose-zinc dark:prose-invert">
			<SvelteComponent />
		</article>
	</div>
</Container>
