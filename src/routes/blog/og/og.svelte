<script lang="ts">
	// @ts-nocheck
	export let title: string;
	export let description: string;
	export let date: string;
</script>

<div tw="bg-neutral-900 flex w-full h-full">
	<div tw="flex flex-col w-full py-12 px-4 p-8">
		<h1 tw="text-2xl tracking-tight text-white text-left text-gray-500">
			{date
				? new Date(date).toLocaleDateString('en-US', {
						month: 'long',
						day: 'numeric',
						year: 'numeric'
				  })
				: ''}
		</h1>
		<h2 tw="flex flex-col text-4xl font-bold tracking-tight text-white text-left">
			<span>{title}</span>
			<span tw="text-purple-500 font-normal max-w-2xl mt-2">{description}</span>
		</h2>
	</div>
</div>
