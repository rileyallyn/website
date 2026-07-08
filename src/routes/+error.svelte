<script>
	import { page } from '$app/state';
	import { buttonVariants } from '$lib/components/ui/Button';
	import { HouseIcon } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import Gridbg from '$lib/components/ui/gridbg.svelte';
	import CardContainer from '$lib/components/ui/Card/CardContainer.svelte';
	import CardBody from '$lib/components/ui/Card/CardBody.svelte';
</script>

<Gridbg className="-z-10 h-full w-full" />

<div class="flex h-screen flex-col items-center justify-center gap-y-4">
	<CardContainer>
		<CardBody
			className="flex flex-col items-center justify-center gap-y-2 rounded-lg dark:bg-zinc-900 bg-stone-300 drop-shadow-lg border-2 border-purple-300/30"
			style="unstyled"
		>
			<h1 class="text-3xl font-bold">Womp Womp</h1>
			<p class="text-lg text-gray-500">
				{page.status}: {page.error?.message}
			</p>
			<div class="flex items-center gap-x-2">
				<a href="/" class={cn(buttonVariants({ variant: 'outline' }), 'flex items-center gap-x-2')}>
					<HouseIcon class="size-4" />
					<span>Go Home?</span>
				</a>
			</div>
		</CardBody>
	</CardContainer>
</div>
