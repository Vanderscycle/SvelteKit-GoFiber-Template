import type { EndpointOutput, RequestEvent } from "@sveltejs/kit";
import { magic } from "./_magic";
import { createSessionCookie } from "./_utils";

export async function post(evt: RequestEvent): Promise<EndpointOutput> {
	try {
		// Parse and validate the DID token
		const didToken = magic.utils.parseAuthorizationHeader(evt.request.headers.get("authorization"));
		await magic.token.validate(didToken);

		// Token is valid, so get the user metadata and set it in a cookie.
		const metadata = await magic.users.getMetadataByToken(didToken);
		const cookie = await createSessionCookie(metadata);
		// console.log(didToken, cookie, metadata);

		return {
			status: 200,

			headers: {
				"set-cookie": cookie
			},
			//@ts-ignore
			body: {
				user: metadata
			}
		};
	} catch (err) {
		return {
			status: 500,

			body: {
				error: {
					message: "Internal Server Error"
				}
			}
		};
	}
}
