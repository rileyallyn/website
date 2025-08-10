<script lang="ts">
	import type { PostMetadata } from '~/types';
	import { Badge } from './Badge';
	import { CardContainer, CardBody, CardItem } from './Card';
	import { TIMEZONE } from '$lib/constants';
	let { post }: { post: Omit<PostMetadata, 'locked'> & { slug: string | undefined } } = $props();
</script>

<section>
	<CardContainer className="h-auto w-full max-w-xl" containerClassName="">
		<CardBody className="h-auto w-full p-4 border-2 rounded-lg ">
			<CardItem className="w-full">
				<div class="flex flex-col gap-y-2">
					<div class="flex items-center gap-x-2">
						<div class="flex flex-col">
							<a href="/blog/{post.slug}" class="text-lg font-bold hover:underline">{post.title}</a>
							<div class="flex items-center gap-x-2">
								<p class="text-sm text-gray-600 dark:text-gray-200">
									{new Date(post.datePublished).toLocaleDateString('en-US', {
										month: 'long',
										day: 'numeric',
										year: 'numeric',
										timeZone: TIMEZONE
									})}
								</p>
								{#if post.lastUpdated}
									<p class="text-xs text-gray-600 italic dark:text-gray-200">
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
						</div>
					</div>
					<p class="text-sm text-gray-600 dark:text-gray-200">{post.description}</p>
					<div class="flex flex-wrap gap-x-2">
						{#if post.tags && post.tags.length > 0}
							<ul class="m-0 flex list-none flex-wrap gap-x-2 p-0">
								{#each post.tags as tag}
									<li id={tag}>
										<a href="/blog/tags/{tag}" aria-label="View posts tagged with {tag}">
											<Badge variant="outline" class="hover:bg-purple-700 hover:text-white">
												{tag}
											</Badge>
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					</div>
				</div>
			</CardItem>
		</CardBody>
	</CardContainer>
</section>
