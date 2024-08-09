<script>
	import { page } from '$app/stores';
	import { Icon } from 'svelte-awesome';
	import { arrowLeft } from 'svelte-awesome/icons';
</script>

<a href="/" class="flex items-center mb-2 gap-x-2 text-gray-600 hover:underline">
	<Icon data={arrowLeft} />
	<span>Go Home</span>
</a>
<h1 class="text-3xl font-bold">Womp Womp</h1>
<p class="text-lg text-gray-500">
	{$page.status}: {$page.error?.message}
</p>
