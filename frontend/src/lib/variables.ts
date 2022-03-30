export const variables = {
	currentState: import.meta.env.VITE_WEBSITE_STATE,
	goBackendURL: import.meta.env.VITE_GO_BACKEND_URL
		? import.meta.env.VITE_GO_BACKEND_URL
		: 'localhost',
	goBackendPort: import.meta.env.VITE_GO_BACKEND_PORT ? import.meta.env.VITE_GO_BACKEND_PORT : 5000,
	siteUrl: import.meta.env.VITE_SITE_URL,
	contactEmail: import.meta.env.VITE_CONTACT_EMAIL,
	githubPage: import.meta.env.VITE_GITHUB_PAGE,
	magicAPI: import.meta.env.VITE_MAGIC_API_KEY,
	magicSecretKey: import.meta.env.VITE_MAGIC_SECRET_KEY,
	encryptionSecret: import.meta.env.VITE_ENCRYPTION_SECRET
};
