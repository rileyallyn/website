<script lang="ts">
	import { CardContainer, CardBody, CardItem } from '$lib/ui/Card';
	import type { Tech, Project } from '$lib/types';
	import { fade, slide } from 'svelte/transition';
	import { cn } from '$lib/utils';
	import Container from '$lib/ui/container.svelte';
	import { Icon } from 'svelte-awesome';
	import { github } from 'svelte-awesome/icons';
	import Button from '$lib/ui/Button/Button.svelte';

	const techUsed: Tech[] = [
		{
			name: 'React',
			imgSrc: '/react.svg',
			customClass: 'w-full sm:w-48 h-auto'
		},
		{
			name: 'Next.js',
			imgSrc: '/nextjs.svg',
			customClass: 'w-full sm:w-48'
		},
		{
			name: 'Svelte',
			imgSrc: '/svelte.svg',
			customClass: 'w-full sm:w-48'
		},
		{
			name: 'TypeScript',
			imgSrc: '/ts.svg',
			customClass: 'w-full sm:w-48'
		},
		{
			name: 'Go',
			imgSrc: '/golang.svg'
		},
		{
			name: 'Rust',
			imgSrc: '/rust.svg',
			customClass: 'w-full sm:w-48',
			imgClass: 'dark:invert'
		}
	];
	const projects: Project[] = [
		{
			name: 'Resume',
			description:
				'My resume is a web application that displays my resume in a clean and modern format. It is built with Svelte and Tailwind CSS.',
			link: 'https://github.com/rileyallyn/resume'
		},
		{
			name: 'ASWWU Web',
			description:
				'ASWWU Web is the web team for the Associated Students of Walla Walla University. As the webhead, I maintain the ASWWU website.',
			link: 'https://github.com/aswwu-web'
		},
		{
			name: 'Womp Womp',
			description: `Womp Womp is a web application that counts the amount of times I said \'womp womp\'. It is built with Svelte and Tailwind CSS, and is completely deployed on Cloudflare Workers.`,
			link: 'https://github.com/qpixel/womp-womp'
		}
	];
</script>

<svelte:head>
	<title>Riley Smith | About</title>
	<meta name="title" content="Riley Smith" />
	<meta name="description" content="Software Developer" />
</svelte:head>

<Container className="max-w-2xl">
	<section class="" id="about">
		<h1 class="text-xl font-bold border-b-2 border-purple-900 max-w-fit leading-relaxed">
			About Me
		</h1>
		<p>
			I am a software developer and creative from Southern California with a passion for building
			things. With over seven years of experience in various technologies, I specialize in creating
			and learning new things. Currently, I develop web applications and websites using modern
			frameworks like React and Svelte. In my free time, I enjoy photography, hiking, and playing
			video games.
		</p>
	</section>
	<section class="" id="tech">
		<h1 class="text-xl font-bold border-b-2 border-purple-900 max-w-fit leading-relaxed">
			Tech I Use
		</h1>
		<div
			class="grid grid-cols-2 gap-y-4 gap-x-1 sm:grid-cols-3 sm:grid-rows-2 sm:gap-x-8 sm:gap-y-8 py-4"
		>
			{#each techUsed as tech (tech.name)}
				<CardContainer className={cn('max-w-48', tech.customClass)}>
					<CardBody
						className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border"
					>
						<CardItem className="mx-auto"
							><img
								src={tech.imgSrc}
								alt={tech.name + ' logo'}
								class={cn('w-auto h-32', tech.imgClass)}
							/></CardItem
						>
						<CardItem
							className="text-xl font-bold text-neutral-600 dark:dark:text-white text-center mx-auto mt-4"
							>{tech.name}</CardItem
						>
					</CardBody>
				</CardContainer>
			{/each}
		</div>
	</section>
	<section id="projects">
		<h1 class="text-xl font-bold border-b-2 border-purple-900 max-w-fit leading-relaxed">
			Projects
		</h1>
		<div class="grid grid-cols-2 gap-y-4 gap-x-1 sm:gap-x-8 sm:gap-y-8 py-4">
			{#each projects as project (project.name)}
				<CardContainer className="max-w-xs">
					<CardBody
						className="bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border"
					>
						<CardItem
							className="text-lg font-bold text-neutral-600 dark:text-white text-center mx-auto flex items-center gap-x-2"
						>
							<Icon name="github" data={github} scale={1.5} className="text-center" />
							{project.name}
						</CardItem>
						<CardItem className="text-left mt-4 leading-relaxed tracking-wide">
							<p>{project.description}</p>
						</CardItem>
						<CardItem className="mt-4 w-full">
							<a href={project.link} target="_blank" class="w-full">
								<Button
									variant="link"
									class="bg-black text-white dark:bg-white dark:text-black"
									size="lg">View on GitHub</Button
								>
							</a>
						</CardItem>
					</CardBody>
				</CardContainer>
			{/each}
		</div>
	</section>
</Container>
