<script>
	import { slide } from 'svelte/transition';
</script>

<main
	class="container text-white gap-y-4 flex h-full flex-col tracking-wide overflow-y-auto scroll-smooth relative"
	in:slide={{ duration: 500 }}
	out:slide={{ duration: 500 }}
>
	<h1 class="text-xl font-bold border-b-2 border-purple-900 max-w-fit leading-relaxed">Blog</h1>
	<h2>Coming Soon</h2>
</main>
