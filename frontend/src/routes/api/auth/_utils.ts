import { serialize } from 'cookie';

import Iron from '@hapi/iron';
import { variables } from '$lib/variables';

const ENCRYPTION_SECRET = variables.encryptionSecret;
const SESSION_LENGTH_MS = 604800000;
export const SESSION_NAME = 'session';

async function encrypt(data): Promise<string> {
	return data && Iron.seal(data, ENCRYPTION_SECRET, Iron.defaults);
}

async function decrypt<T>(data: string): Promise<T> {
	return data && Iron.unseal(data, ENCRYPTION_SECRET, Iron.defaults);
}

export async function createSessionCookie(data: any): Promise<string> {
	const encrypted_data = await encrypt(data);

	return serialize(SESSION_NAME, encrypted_data, {
		maxAge: SESSION_LENGTH_MS / 1000,
		expires: new Date(Date.now() + SESSION_LENGTH_MS),
		httpOnly: true,
		secure: true, //variables.currentState !== "dev"
		path: '/',
		sameSite: 'lax'
	});
}

export async function getSession<T>(cookie: string): Promise<T> {
	try {
		return await decrypt(cookie);
	} catch (e) {
		//TODO::consider calling logout functiuon when this happen
		console.warn(e);
	}
}

export function removeSessionCookie(): string {
	return serialize(SESSION_NAME, '', {
		maxAge: -1,
		path: '/'
	});
}
