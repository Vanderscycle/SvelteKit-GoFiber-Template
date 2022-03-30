import { goto } from '$app/navigation';
import { variables } from '$lib/variables';
import { magicStore } from '$stores/auth';
import { Magic } from 'magic-sdk';

let magic: Magic;

function createMagic(): Magic {
	magic = magic || new Magic(variables.magicAPI);
	magic.preload().then(() => console.log('Magic <iframe> loaded.'));
	return magic;
}

export async function login(email: string): Promise<void> {
	const magic = createMagic();

	const didToken = await magic.auth.loginWithMagicLink({ email: email, showUI: true });
	// console.log(didToken);

	// Validate the did token on the server
	const res = await fetch('/api/auth/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${didToken}`
		}
	});

	if (res.ok) {
		const data = await res.json();
		magicStore.set({
			user: data.user
		});
	}
}

export async function logout(): Promise<void> {
	await fetch('/api/auth/logout');
	magicStore.set({
		user: null
	});
	goto('/');
}
