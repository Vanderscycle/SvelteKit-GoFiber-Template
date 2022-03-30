import type { EndpointOutput, RequestEvent } from "@sveltejs/kit";
import { magic } from "./_magic";
import { removeSessionCookie } from "./_utils";

export async function get(evt: RequestEvent): Promise<EndpointOutput> {
	try {
		if (!evt.locals["user"]) {
			return {
				status: 401,
				body: {
					error: {
						message: "Unauthorized"
					}
				}
			};
		}

		const cookie = removeSessionCookie();

		try {
			await magic.users.logoutByIssuer(evt.locals["user"].issuer);
		} catch (err) {
			console.log("Magic session already expired");
		}

		return {
			status: 200,
			headers: {
				"cache-control": "no-store",
				"set-cookie": cookie
			},
			body: {}
		};
	} catch (err) {
		return {
			status: 401,
			body: {
				error: {
					message: "Unauthorized"
				}
			}
		};
	}
}
