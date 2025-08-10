<script lang="ts">
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';

	import { resetMode, setMode } from 'mode-watcher';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { buttonVariants } from '$lib/components/ui/Button';
	import { cn } from '$lib/utils';

	interface Props {
		size?: 'iconSm' | 'icon';
	}

	let { size = 'iconSm' }: Props = $props();
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class={cn(
			buttonVariants({ variant: 'outline', size }),
			'cursor-pointer bg-stone-200 backdrop-blur-sm hover:bg-stone-200/50 dark:bg-zinc-900/50'
		)}
	>
		<SunIcon
			class="h-[1.1rem] w-[1.1rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90"
		/>
		<MoonIcon
			class="absolute h-[1.1rem] w-[1.1rem] scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0"
		/>
		<span class="sr-only">Toggle theme</span>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="start">
		<DropdownMenu.Item onclick={() => setMode('light')} class="cursor-pointer">
			Light
		</DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => setMode('dark')} class="cursor-pointer">
			Dark
		</DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => resetMode()} class="cursor-pointer">System</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
