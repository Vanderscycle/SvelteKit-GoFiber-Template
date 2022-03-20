<script lang="ts">
	import { GoRestClient } from '$api/goBackend.api';
	import type { BlogPost } from '$lib/interfaces';

	import { onMount } from 'svelte';

	let apiBlogPost: GoRestClient;
	let devDBEndpoint: GoRestClient;
	const index: number = 1;

	onMount(async () => {
		apiBlogPost = new GoRestClient('api/blogPost');
		devDBEndpoint = new GoRestClient('api/db');
		// devDBEndpoint.delete();
		let payload: BlogPost = {
			title: 'Super test brother',
			author: 'Waluigi',
			mainText: 'wawaaaaaa'
		};
		// await apiBlogPost.post(payload);
		console.log(await apiBlogPost.get(index.toString()));
		payload.author = 'Captain Toad';
		await apiBlogPost.post(payload);
		console.log(await apiBlogPost.get());
	});
</script>

<template>
	<h1>SvelteKit - Golang template </h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</template>
