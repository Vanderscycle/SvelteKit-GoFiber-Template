<script lang="ts" context="module">
	import { magicStore } from '$stores/auth';
</script>

<script lang="ts">
	// Tailwind.css general config
	import Auth from '$components/Auth.svelte';
	import { variables } from '$lib/variables';
</script>

<div class="dark h-full">
	{#if variables.currentState === 'dev'}
		<pre>
<code
				>{JSON.stringify($magicStore, null, 4)}
    </code>
  </pre>
	{/if}
	<main class="dark:bg-DarkBg bg-LightBg h-screen dark:text-darkText text-Text">
		{#if variables.currentState !== 'dev'}
			{#if $magicStore}
				<slot />
			{:else}
				<Auth />
			{/if}
		{:else}
			<slot />
		{/if}
	</main>
</div>

<style lang="postcss">
</style>
