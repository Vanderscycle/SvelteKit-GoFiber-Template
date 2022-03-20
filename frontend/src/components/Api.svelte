<script lang="ts">
	import { GoRestClient } from '$api/goBackend.api';
	import { onMount } from 'svelte';
	import { variables } from '$lib/variables';
	import type { BlogPost } from '$lib/interfaces';
	import testData from '$lib/data/blogPost.test.json';
	import { httpMethodSwitch } from '$lib/helper';

	export const endpoint: string = 'api/cipher';
	export let apiData: BlogPost[] = [];
	export let localState: boolean = false;
	export let reqHttpMethod: string = 'GET';
	export let reqIndex: number = 0;
	export let payload: BlogPost;
	// const httpMethod: string[] = ["GET", "POST", "DELETE", "PATCH"];
	let api: GoRestClient = new GoRestClient(endpoint);
	let apiDB: GoRestClient = new GoRestClient('api/db');
	onMount(async () => {
		if (variables.currentState === 'dev') {
			//drop db
			// await httpMethodSwitch(apiDB, apiData, "DELETE");
			apiData = await httpMethodSwitch(
				api,
				apiData,
				reqHttpMethod,
				reqIndex,
				payload ? payload : testData
			);
		}
	});
	//make it unherit the type
</script>

<template>
	{#if variables.currentState === 'dev' && localState}
		<div>
			<pre><code>{JSON.stringify(apiData, null, 4)}</code></pre>
		</div>
	{:else}<span title="Cipher"><slot /></span>{/if}
</template>

<style lang="postcss">
	/* your styles go here */
</style>
