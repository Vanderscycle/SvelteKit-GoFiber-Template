import { variables } from '$lib/variables';

const website = {
	author: 'Autho',
	ogLanguage: 'en_CA',
	siteLanguage: 'en_CA',
	keywords: 'Github svelte template',
	metadescription:
		'A very simple fullstack template using SvelteKit, tailwindcss, Gorm, PostgresDB(container) and GoFiber',
	siteTitle: 'svelteKit <3 GoLang',
	siteShortTitle: 'template',
	siteUrl: variables.siteUrl ? variables.siteUrl : '',
	icon: 'static/favicon.png',
	backgroundColor: '#1a1b26',
	contactEmail: variables.contactEmail ? variables.contactEmail : 'hvandersleyen@duck.com',
	githubPage: variables.githubPage ? variables.githubPage : ''
};

export { website as default };
