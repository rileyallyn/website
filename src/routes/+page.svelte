<script lang="ts">
	import { CardContainer, CardBody, CardItem } from '$lib/ui/Card';
	import type { Tech } from '$lib/types';
	import { slide } from 'svelte/transition';
	import { cn } from '$lib/utils';

	const techUsed: Tech[] = [
		{
			name: 'React',
			imgSrc: '/react.svg'
		},
		{
			name: 'Svelte',
			imgSrc: '/svelte.svg',
			customClass: 'w-full sm:w-48'
		},
		{
			name: 'React',
			imgSrc: '/react.svg'
		},
		{
			name: 'React',
			imgSrc: '/react.svg'
		}
	];
</script>

<main class="container text-white gap-y-4 flex flex-col tracking-wide overflow-y-auto">
	<section class="max-w-xl">
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
	<section class="sm:max-w-xl">
		<h1 class="text-xl font-bold border-b-2 border-purple-900 max-w-fit leading-relaxed">
			What I Use
		</h1>
		<!-- <div class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 w-full"> -->
		<div
			class="grid grid-cols-2 gap-y-4 gap-x-1 sm:grid-cols-3 sm:grid-rows-3 sm:gap-x-8 sm:gap-y-8 py-4"
		>
			{#each techUsed as tech (tech.name)}
				<CardContainer className={cn('max-w-48', tech.customClass)}>
					<CardBody
						className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border"
					>
						<CardItem className="mx-auto"
							><img src={tech.imgSrc} alt={tech.name + ' logo'} class="w-full" /></CardItem
						>
						<CardItem
							className="text-xl font-bold text-neutral-600 dark:text-white text-center mx-auto mt-4"
							>{tech.name}</CardItem
						>
					</CardBody>
				</CardContainer>
			{/each}
			<!-- <CardContainer className="max-w-48">
				<CardBody
					className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border"
				>
					<CardItem className=""><img src="/react.svg" alt="React logo" class="w-full" /></CardItem>
					<CardItem
						className="text-xl font-bold text-neutral-600 dark:text-white text-center mx-auto mt-4"
						>React</CardItem
					>
				</CardBody>
			</CardContainer>
			<CardContainer className="max-w-48 w-full sm:w-48">
				<CardBody
					className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border"
				>
					<CardItem className="mx-auto"
						><img src="/svelte.svg" alt="Svelte logo" class="w-full" /></CardItem
					>
					<CardItem
						className="text-xl font-bold text-neutral-600 dark:text-white text-center mx-auto mt-4"
						>Svelte</CardItem
					>
				</CardBody>
			</CardContainer>
			<CardContainer className="max-w-48">
				<CardBody
					className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
				>
					<CardItem className=""><img src="/react.svg" alt="React logo" class="w-full" /></CardItem>
					<CardItem
						className="text-xl font-bold text-neutral-600 dark:text-white text-center mx-auto mt-4"
						>React</CardItem
					>
				</CardBody>
			</CardContainer>
			<CardContainer className="max-w-48">
				<CardBody
					className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
				>
					<CardItem className=""><img src="/react.svg" alt="React logo" class="w-full" /></CardItem>
					<CardItem
						className="text-xl font-bold text-neutral-600 dark:text-white text-center mx-auto mt-4"
						>React</CardItem
					>
				</CardBody>
			</CardContainer> -->
		</div>
		<!-- </div> -->
	</section>
	<section>
		<h1 class="text-xl font-bold border-b-2 border-purple-900 max-w-fit leading-relaxed">
			Projects
		</h1>
	</section>
</main>
