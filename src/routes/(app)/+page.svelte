<script lang="ts">
	import { CardContainer, CardBody, CardItem } from '$lib/components/ui/Card';
	import type { Tech, Project } from '$lib/types';
	import { cn } from '$lib/utils';
	import Container from '$lib/components/ui/container.svelte';
	import { Icon } from 'svelte-awesome';
	import { github } from 'svelte-awesome/icons';
	import Button from '$lib/components/ui/Button/Button.svelte';
	const techImgs = import.meta.glob('$lib/imgs/*.svg', {
		eager: true,
		query: {
			enhanced: true
		}
	});

	let techUsed: Tech[] = [
		{
			name: 'React',
			imgSrc: 'react.svg',
			customClass: 'w-full  h-auto'
		},
		{
			name: 'Next.js',
			imgSrc: 'nextjs.svg',
			customClass: 'w-full '
		},
		{
			name: 'Svelte',
			imgSrc: 'svelte.svg',
			customClass: 'w-full '
		},
		{
			name: 'Vue.js',
			imgSrc: 'vue.svg',
			customClass: 'w-full '
		},
		{
			name: 'Laravel',
			imgSrc: 'laravel.svg',
			customClass: 'w-full '
		},
		{
			name: 'TypeScript',
			imgSrc: 'ts.svg',
			customClass: 'w-full '
		},
		{
			name: 'Go',
			imgSrc: 'golang.svg'
		},
		{
			name: 'Rust',
			imgSrc: 'rust.svg',
			customClass: 'w-full ',
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

	for (const tech of techUsed) {
		if (typeof techImgs === 'undefined' || !techImgs) {
			break;
		}
		// TODO: Figure out the type shit
		//@ts-ignore
		tech.imgSrc = Object.entries(techImgs).find(([key, value]) => key.includes(tech.imgSrc))[1];
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
		<p>
			I am a software developer and creative from Southern California with a passion for building
			things. With over seven years of experience in various technologies, I specialize in creating
			and learning new things. Currently, I develop web applications and websites using modern
			frameworks like React and Svelte. In my free time, I enjoy photography, hiking, and playing
			video games.
		</p>
	</section>
	<section class="" id="tech">
		<h2 class="max-w-fit border-b-2 border-purple-700 text-xl leading-relaxed font-bold">
			Tech I Use
		</h2>
		<div
			class="grid grid-cols-2 gap-x-1 gap-y-4 py-4 sm:grid-cols-3 sm:grid-rows-2 sm:gap-x-4 sm:gap-y-8"
			aria-label="Technologies I use"
			role="list"
		>
			{#each techUsed as tech (tech.name)}
				<CardContainer className={cn('w-full', tech.customClass)} role="listitem">
					<CardBody className="relative group/card  w-full h-auto rounded-xl p-6 border">
						<CardItem className="mx-auto"
							><img
								src={tech.imgSrc.default}
								alt={tech.name + ' logo'}
								class={cn('h-32 w-auto', tech.imgClass)}
							/></CardItem
						>
						<CardItem
							className="text-xl font-bold text-zinc-900 dark:text-white text-center mx-auto mt-4"
							>{tech.name}</CardItem
						>
					</CardBody>
				</CardContainer>
			{/each}
		</div>
	</section>
	<section id="projects">
		<h2 class="max-w-fit border-b-2 border-purple-700 text-xl leading-relaxed font-bold">
			Projects
		</h2>
		<ol
			class="grid grid-cols-1 gap-x-1 gap-y-4 py-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8"
			aria-label="Projects I've worked on"
			role="list"
		>
			{#each projects as project (project.name)}
				<li class="md:last:col-span-2">
					<CardContainer className="w-full" containerClassName="">
						<CardBody className="  w-full sm:w-120 h-auto rounded-xl p-6 border">
							<CardItem
								className="text-lg font-bold text-zinc-900 dark:text-white text-center mx-auto flex items-center gap-x-2"
							>
								<Icon name="github" data={github} scale={1.5} className="text-center" />
								{project.name}
							</CardItem>
							<CardItem className="text-left mt-4 leading-relaxed tracking-wide">
								<p>{project.description}</p>
							</CardItem>
							<CardItem className="mt-4 w-full">
								<Button
									href={project.link}
									variant="link"
									class="bg-black text-white dark:bg-white dark:text-black"
									size="lg"
								>
									View on GitHub
								</Button>
							</CardItem>
						</CardBody>
					</CardContainer>
				</li>
			{/each}
		</ol>
	</section>
</Container>
