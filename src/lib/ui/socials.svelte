<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from 'svelte-awesome';
	import { github, linkedinSquare, instagram, envelope } from 'svelte-awesome/icons';
	export let scale = 1.5;
	export let className: string = '';
</script>

<div class={cn('flex gap-x-2 mt-2 dark:text-white', className)}>
	<a href="https://github.com/rileyallyn" target="_blank" rel="noreferrer">
		<Icon class="dark:text-white" data={github} {scale} />
	</a>
	<a href="https://linkedin.com/in/riley-a-smith" target="_blank" rel="noreferrer">
		<Icon class="dark:text-white" data={linkedinSquare} {scale} />
	</a>
	<a href="https://instagram.com/rileyy.allyn" target="_blank" rel="noreferrer">
		<Icon class="dark:text-white" data={instagram} {scale} />
	</a>
	<a href="mailto:riley@rileysmith.me" target="_blank" rel="noreferrer">
		<Icon class="dark:text-white" data={envelope} {scale} />
	</a>
</div>
