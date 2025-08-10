<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from 'svelte-awesome';
	import { github, linkedinSquare, instagram, envelope } from 'svelte-awesome/icons';
	interface Props {
		scale?: number;
		className?: string;
	}

	let { scale = 1.5, className = '' }: Props = $props();
</script>

<ol class={cn('mt-2 flex list-none gap-x-2 dark:text-white', className)}>
	<li>
		<a
			href="https://github.com/rileyallyn"
			target="_blank"
			rel="noreferrer"
			aria-label="Link to my GitHub profile"
		>
			<Icon class="dark:text-white" data={github} {scale} />
		</a>
	</li>
	<li>
		<a
			href="https://linkedin.com/in/riley-a-smith"
			target="_blank"
			rel="noreferrer"
			aria-label="Link to my LinkedIn profile"
		>
			<Icon class="dark:text-white" data={linkedinSquare} {scale} />
		</a>
	</li>
	<li>
		<a
			href="https://instagram.com/rileyy.allyn"
			target="_blank"
			rel="noreferrer"
			aria-label="Link to my Instagram profile"
		>
			<Icon class="dark:text-white" data={instagram} {scale} />
		</a>
	</li>
	<li>
		<a
			href="mailto:riley@rileysmith.me"
			target="_blank"
			rel="noreferrer"
			aria-label="Link to my email"
		>
			<Icon class="dark:text-white" data={envelope} {scale} />
		</a>
	</li>
</ol>
