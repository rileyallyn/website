<script>
  import Background from "components/background.svelte";
  import Header from "components/header.svelte";
	import "../app.postcss";
</script>

<div class="absolute h-screen w-screen -z-10">
	<Background />
</div>
<div class="absolute h-screen w-screen mx-auto z-10 flex flex-col">
	<slot />
</div>
