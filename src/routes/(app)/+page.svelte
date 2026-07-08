<script lang="ts">
	import { CardContainer, CardBody } from '$lib/components/ui/Card';
	import { cn } from '$lib/utils';
	import Container from '$lib/components/ui/container.svelte';
	import { Icon } from 'svelte-awesome';
	import { github } from 'svelte-awesome/icons';
	import ExternalLinkIcon from '@lucide/svelte/icons/external-link';
	import { techUsed as techUsedData, projects, aboutMeText } from '$lib/home-data';

	const techImgs = import.meta.glob('$lib/imgs/*.svg', {
		eager: true,
		query: {
			enhanced: true
		}
	});

	let techUsed = structuredClone(techUsedData);

	for (const tech of techUsed) {
		if (typeof techImgs === 'undefined' || !techImgs) {
			break;
		}
		// TODO: Figure out the type shit
		//@ts-expect-error - TypeScript is stupid
		tech.imgSrc = Object.entries(techImgs).find(([key]) => key.includes(tech.imgSrc))[1];
	}
</script>

<svelte:head>
	<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" />
</svelte:head>

<Container>
	<section class="" id="about">
		<h2
			class="max-w-fit border-b-2 border-purple-700 text-xl leading-relaxed font-bold"
			aria-label="About me"
		>
			About Me
		</h2>
		<p class="text-md leading-relaxed tracking-wide">{aboutMeText}</p>
	</section>
	<section id="tech" class="space-y-2">
		<h2 class="max-w-fit border-b-2 border-purple-700 text-xl leading-relaxed font-bold">
			Technologies I Use
		</h2>
		<div class="flex flex-col">
			<ol class="flex flex-wrap gap-2">
				{#each techUsed as tech (tech.name)}
					<li
						class={cn(
							'group flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition-all duration-200 ease-linear',
							'border-purple-200/70 bg-white/90 text-zinc-700 shadow-xs',
							'hover:border-purple-400/60 hover:bg-purple-50 hover:text-zinc-900 hover:shadow-sm',
							'dark:border-border dark:bg-card dark:px-2.5 dark:py-0.5 dark:text-muted-foreground dark:shadow-none',
							'dark:hover:border-border dark:hover:bg-muted-foreground/20 dark:hover:text-foreground'
						)}
					>
						<img
							src={tech.imgSrc.default}
							alt={tech.name + ' logo'}
							class={cn(
								'size-4 opacity-80 grayscale transition-all duration-200 ease-linear group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 dark:opacity-100',
								tech.imgClass
							)}
						/>
						<span class="font-medium">{tech.name}</span>
					</li>
				{/each}
			</ol>
		</div>
	</section>
	<section id="projects" class="space-y-2">
		<h2 class="max-w-fit border-b-2 border-purple-700 text-xl leading-relaxed font-bold">
			Projects
		</h2>
		<p>Some projects I've built.</p>
		<ol
			class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
			aria-label="Projects I've built"
			role="list"
		>
			{#each projects as project (project.name)}
				<li
					class={cn('h-full w-full', 'md:last:col-span-2', project.featured ? 'lg:col-span-2' : '')}
				>
					<!-- eslint-disable svelte/no-navigation-without-resolve -->
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="View {project.name} on GitHub"
						class="group block h-full w-full rounded-xl text-left no-underline outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
					>
						<CardContainer
							className="h-full w-full"
							containerClassName="h-full w-full"
							role="presentation"
						>
							<CardBody
								style="unstyled"
								className="h-full flex flex-col border bg-card transition-colors hover:border-purple-700/50 hover:bg-background"
							>
								<div class="flex items-start justify-between gap-3">
									<div class="flex min-w-0 flex-1 items-start gap-3">
										<div
											class="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-background"
										>
											<Icon name="github" data={github} scale={1.25} class="shrink-0" />
										</div>
										<h3 class="min-w-0 pt-1.5 text-base font-semibold text-foreground">
											{project.name}
										</h3>
									</div>
								</div>

								<p class="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
									{project.description}
								</p>

								<div class="mt-4 flex items-center justify-between gap-4 pt-1">
									<div class="flex min-w-0 items-center gap-2 text-xs text-muted-foreground">
										{#if project.language}
											<span
												class="size-2.5 shrink-0 rounded-full"
												style:background-color={project.languageColor ?? 'var(--muted-foreground)'}
											></span>
											<span>{project.language}</span>
										{/if}
										{#if project.language && project.updatedAt}
											<span aria-hidden="true">·</span>
										{/if}
										{#if project.updatedAt}
											<span>Updated {project.updatedAt}</span>
										{/if}
									</div>
									<span
										class="flex shrink-0 items-center gap-1 text-sm font-medium text-foreground group-hover:underline"
									>
										View
										<ExternalLinkIcon class="size-3.5" />
									</span>
								</div>
							</CardBody>
						</CardContainer>
					</a>
					<!-- eslint-enable svelte/no-navigation-without-resolve -->
				</li>
			{/each}
		</ol>
	</section>
</Container>
