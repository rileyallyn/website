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
			'backdrop-blur-sm dark:bg-zinc-900/50 cursor-pointer bg-stone-200 hover:bg-stone-200/50'
		)}
	>
		<SunIcon
			class="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0"
		/>
		<MoonIcon
			class="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100"
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
