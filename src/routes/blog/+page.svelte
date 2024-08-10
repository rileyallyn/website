<script>
	import Container from '$lib/ui/container.svelte';
	export let data;
	const { posts } = data;
</script>

<Container>
	<h1 class="text-xl font-bold border-b-2 border-purple-900 max-w-fit leading-relaxed">Blog</h1>
	<div class="flex flex-col gap-y-10">
		{#each posts as post}
			{#if post}
				<section>
					<a
						href="/blog/{post.slug}"
						class="flex flex-col gap-y-2 p-4 border-2 rounded-lg border-purple-900 hover:bg-purple-900 dark:bg-neutral-950 transition-colors hover:text-white bg-neutral-100"
					>
						<div class="flex items-center gap-x-2">
							<div class="flex flex-col">
								<h2 class="text-lg font-bold hover:underline">{post.title}</h2>
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
					</a>
				</section>
			{:else}
				<span>No posts found!</span>
			{/if}
		{/each}
	</div>
</Container>
