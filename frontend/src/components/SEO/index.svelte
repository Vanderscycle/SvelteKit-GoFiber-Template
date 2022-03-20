<script lang="ts">
	import website from '$lib/config/website';
</script>

<svelte:head>
	<title>{website.siteTitle}</title>
	<meta charset="UTF-8" />
	<meta name="keywords" content={website.keywords} />
	<meta name="author" content={website.author} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="robots" content="noindex nofollow" />
	<meta name="description" content={website.metadescription} />
	<html lang={website.siteLanguage} />
</svelte:head>
