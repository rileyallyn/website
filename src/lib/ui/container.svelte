<script>
	import { slide } from 'svelte/transition';
</script>

<main
	class="container dark:text-white gap-y-4 flex flex-col tracking-wide scroll-smooth overflow-auto h-dvh pb-16 md:pb-28"
	in:slide={{ duration: 500 }}
	out:slide={{ duration: 500 }}
>
	<slot />
</main>
