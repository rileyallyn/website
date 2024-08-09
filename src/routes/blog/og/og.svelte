<script lang="ts">
	// @ts-nocheck
	export let title: string;
	export let description: string;
</script>

<div tw="bg-neutral-900 flex w-full h-full">
	<div tw="flex flex-col md:flex-row w-full py-12 px-4 p-8">
		<h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-white text-left">
			<span>{title}</span>
			<span tw="text-indigo-600">{description}</span>
		</h2>
	</div>
</div>
