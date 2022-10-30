<script>
	import Header from "components/header.svelte";
	let opener = false;
</script>
{#if !opener}
<div class="z-30 h-full w-full text-white justify-self-center self-center flex justify-center">
	<div class="self-center">
		<h1 class="text-lg font-bold">
			👋 hey, I’m Riley. 
		</h1>
		<p class="text-md">
			I’m an experienced software developer who makes s#!t that performs.
		</p>
	</div>
</div>
{/if}

{#if opener}
<div>
	<Header />
</div>
{/if}