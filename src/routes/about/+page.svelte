<script lang="ts">
	import { slide } from 'svelte/transition';
	import { github, twitter } from 'svelte-awesome/icons';

	import Icon from 'svelte-awesome';
</script>

<div
	class="h-[40rem] mt-5 translucent container p-4 flex flex-row"
	in:slide={{ duration: 500 }}
	out:slide
>
	<aside class="border-r-2 w-1/5 h-full">
		<nav class="mr-5 h-full flex flex-col">
			<ul class="flex flex-col gap-4 p-4 text-white">
				<li class="p-2">
					<button>
						<span>Who am I?</span>
					</button>
				</li>
				<li class="p-2">
					<button
						on:click={(e) => {
							e.currentTarget.classList.add('focused');
						}}
					>
						<span>What I've done</span>
					</button>
				</li>
				<li class="p-2">
					<button
						on:click={(e) => {
							e.currentTarget.classList.add('focused');
						}}
					>
						<span>Current technologies</span>
					</button>
				</li>
			</ul>
			<ul class="flex flex-row mt-auto p-4 text-slate-400 gap-4">
				<li aria-label="github logo">
					<a href="https://github.com/qpixel"> <Icon data={github} class="w-7 h-7" /></a>
				</li>
				<li aria-label="twitter logo">
					<a href="https://twitter.com/thatqpixel"><Icon data={twitter} class="w-7 h-7" /></a>
				</li>
			</ul>
		</nav>
	</aside>
</div>

<style>
	.translucent {
		background-color: rgba(16, 24, 35, 0.98);
		border-width: 1px;
		border-radius: 10px;
		border-color: white;
	}
	.focused {
		border-bottom: 2px solid white;
	}
</style>
