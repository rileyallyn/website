<script>
	export let src;
	export let alt;
</script>

<div class="flex flex-col items-center justify-center">
	<img {src} {alt} class="w-full max-w-md" />
	<span class="text-sm text-gray-500 italic">{alt}</span>
</div>
