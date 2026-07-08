import type { Tech, Project } from './types';

export const aboutMeText: string = `
I'm a software developer and creative from Southern California with a passion for building products people enjoy using. With over seven years of experience across a range of technologies, I currently focus on web applications using modern frameworks like React and Svelte. Outside of work, I'm usually behind a camera, out on a trail, or deep into a video game.`;

export const techUsed: Tech[] = [
	{
		name: 'React',
		imgSrc: 'react.svg'
	},
	{
		name: 'Next.js',
		imgSrc: 'nextjs.svg'
	},
	{
		name: 'Svelte',
		imgSrc: 'svelte.svg'
	},
	{
		name: 'Vue.js',
		imgSrc: 'vue.svg'
	},
	{
		name: 'Laravel',
		imgSrc: 'laravel.svg'
	},
	{
		name: 'TypeScript',
		imgSrc: 'ts.svg'
	},
	{
		name: 'Go',
		imgSrc: 'golang.svg'
	},
	{
		name: 'Rust',
		imgSrc: 'rust.svg',
		imgClass: 'dark:invert'
	}
];

export const projects: Project[] = [
	{
		name: 'Resume',
		description:
			'My resume is a web application that displays my resume in a clean and modern format. It is built with Svelte and Tailwind CSS and uses supabase to allow for easy updates and changes to the resume.',
		link: 'https://github.com/rileyallyn/resume'
	},
	{
		name: 'Womp Womp',
		description: `Womp Womp is a web application that counts the amount of times I said "womp womp". It is built with Svelte and Tailwind CSS, and is completely deployed on Cloudflare Workers.`,
		link: 'https://github.com/qpixel/womp-womp'
	},
	{
		name: 'rp2040 Audio Player',
		description: 'A PCM audio player using a rp2040 microcontroller and a PCM5102A DAC.',
		link: 'https://github.com/rileyallyn/rp2040_audio_player'
	},
	{
		name: 'Submitty VSCode Extension',
		description:
			'A VSCode extension that adds support for Submitty, allowing easy submission and feedback on assignments.',
		link: 'https://github.com/Submitty/VSCode-extension'
	},
	{
		name: 'ASWWU Web',
		description:
			'ASWWU Web is the web team for the Associated Students of Walla Walla University. As a former member of the web team, I helped maintain the ASWWU website.',
		link: 'https://github.com/aswwu-web'
	}
];
