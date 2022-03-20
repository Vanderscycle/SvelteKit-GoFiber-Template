<script lang="ts">
	// Tailwind.css general config
	import '../app.css';
	// import { uiState } from '$stores/ui';
	// let { darkMode } = uiState;
	import Modal from 'svelte-simple-modal';
	import { SEOIndex } from '$components/SEO';
</script>

<header>
	<SEOIndex />
</header>

<div class="dark h-full">
	<nav class="dark:DarkGui LightGui" />
	<main class="dark:bg-DarkBg bg-LightBg h-screen">
		<Modal>
			<slot />
		</Modal>
	</main>
	<footer />
</div>
