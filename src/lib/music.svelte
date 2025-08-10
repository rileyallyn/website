<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

	interface MusicPlayerProps {
		url: string;
	}

	type MusicPlayer = [boolean, () => void];

	export let url: string;

	let playing = writable(false);

	const toggle = () => {
		playing.update((n) => !n);
	};

	onMount(() => {
		musicPlayer.set(new Audio(url));

		const playPause = () => {
			playing.subscribe((value) => {
				value ? musicPlayer.get()?.play() : musicPlayer.get()?.pause();
			});
		};

		playPause();

		const endedHandler = () => {
			musicPlayer.get()?.play();
		};

		musicPlayer.get()?.addEventListener('ended', endedHandler);

		onDestroy(() => {
			musicPlayer.get()?.removeEventListener('ended', endedHandler);
		});
	});

	$: {
		if ($playing) {
			musicPlayer.get()?.play();
		} else {
			musicPlayer.get()?.pause();
		}
	}

	$: musicPlayerValue = $playing;
</script>

{#if $playing}
	<button on:click={toggle}>Pause</button>
{:else}
	<button on:click={toggle}>Play</button>
{/if}
