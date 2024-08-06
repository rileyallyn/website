<script lang="ts">
	import { Bars3Icon } from '@babeard/svelte-heroicons/solid';
	export let open = false;
</script>

<header class=" absolute block w-full dark:text-white md:hidden pb-1 z-40">
	<nav class="flex pt-2 px-4 items-center gap-x-2">
		<img
			src="/pfp.webp"
			alt="Riley Smith looking at the aurora borealis"
			class="rounded-full w-10 h-10"
		/>
		<a href="/" class="mr-auto title">
			<h1 class="text-xl mr-auto">Riley Smith</h1>
		</a>
		<button on:click={() => (open = !open)} class="w-7 h-7 sm:hidden">
			<Bars3Icon />
		</button>
	</nav>
</header>

<style>
	.title:hover {
		animation-name: coolTextThing;
		animation-duration: 1.5s;
		animation-timing-function: ease-out;
	}
	@keyframes coolTextThing {
		0% {
			font-family: 'Courier New', Courier, monospace;
			font-style: italic;
		}
		10% {
			font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
			font-style: oblique;
		}
		20% {
			font-family: 'Times New Roman', Times, serif;
		}
		30% {
			font-family: Georgia, 'Times New Roman', Times, serif;
		}
		40% {
			font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
				Geneva, Verdana, sans-serif;
			font-weight: bold;
		}
		50% {
			font-family: 'Arial Black', Gadget, sans-serif;
			font-weight: bold;
		}
		60% {
			font-family: 'Comic Sans MS', cursive, sans-serif;
		}
		70% {
			font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
			font-style: oblique;
		}
		80% {
			font-family: 'Lucida Console', Monaco, monospace;
			font-weight: lighter;
		}
		90% {
			font-family: 'MS Sans Serif', Geneva, sans-serif;
			font-weight: 900;
			font-style: italic;
		}
		100% {
			font-family: 'MS Serif', 'New York', sans-serif;
		}
	}
</style>
