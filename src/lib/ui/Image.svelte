<script lang="ts">
	let { src, alt } = $props();
</script>

<div class="flex flex-col items-center justify-center">
	<enhanced:img {src} {alt} class="w-full max-w-md" />
	<span class="text-sm text-gray-500 italic">{alt}</span>
</div>
