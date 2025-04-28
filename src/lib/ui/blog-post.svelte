<script lang="ts">
	import type { PostMetadata } from '~/types';
	import { Badge } from './Badge';
	let { post }: { post: Omit<PostMetadata, 'locked'> & { slug: string | undefined } } = $props();
</script>

<section>
	<div
		class="flex flex-col gap-y-2 p-4 border-2 rounded-lg border-purple-900 dark:bg-neutral-950 transition-colors hover:text-white bg-neutral-100"
	>
		<div class="flex items-center gap-x-2">
			<div class="flex flex-col">
				<a href="/blog/{post.slug}" class="text-lg font-bold hover:underline">{post.title}</a>
				<p class="text-sm text-gray-500">
					{new Date(post.datePublished).toLocaleDateString('en-US', {
						month: 'long',
						day: 'numeric',
						year: 'numeric',
						timeZone: 'UTC'
					})}
				</p>
			</div>
		</div>
		<p class="text-sm text-gray-500">{post.description}</p>
		<div class="flex flex-wrap gap-x-2">
			{#if post.tags && post.tags.length > 0}
				<ul class="flex flex-wrap gap-x-2 list-none p-0 m-0">
					{#each post.tags as tag}
						<li>
							<a href="/blog/tags/{tag}" aria-label="View posts tagged with {tag}">
								<Badge variant="outline" class="hover:bg-purple-900 hover:text-white">
									{tag}
								</Badge>
							</a>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</section>
