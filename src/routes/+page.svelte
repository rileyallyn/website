<script lang="ts">
	import { CardContainer, CardBody, CardItem } from '$lib/ui/Card';
	import type { Tech } from '$lib/types';
	import { fade, slide } from 'svelte/transition';
	import { cn } from '$lib/utils';

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
			imgClass: 'invert'
		}
	];
</script>

<main
	class="container text-white gap-y-4 flex flex-col tracking-wide overflow-y-auto scroll-smooth relative"
	in:slide={{ duration: 500 }}
	out:slide={{ duration: 500 }}
>
	<section class="max-w-xl" id="about">
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
	<section class="sm:max-w-xl" id="tech">
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
							className="text-xl font-bold text-neutral-600 dark:text-white text-center mx-auto mt-4"
							>{tech.name}</CardItem
						>
					</CardBody>
				</CardContainer>
			{/each}
		</div>
	</section>
	<!-- <section id="projects">
		<h1 class="text-xl font-bold border-b-2 border-purple-900 max-w-fit leading-relaxed">
			Projects
		</h1>
	</section> -->
</main>
