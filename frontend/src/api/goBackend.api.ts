import type { BlogPost } from '$lib/interfaces';
import { variables } from '$lib/variables';
import axios from 'axios';
variables;

//TODO: how do I make it more general with return types?

export class GoRestClient {
	baseUrl: string;
	groupEndpoint: string;
	constructor(group: string, override?: boolean) {
		if (!override) {
			this.groupEndpoint = group;
			this.baseUrl = `http://${variables.goBackendURL}:${variables.goBackendPort}/${group}`;
		} else {
			this.baseUrl = group;
		}
		console.log(this.baseUrl, group);
	}

	async get(id?: string): Promise<BlogPost[]> {
		try {
			let res: any;
			if (id) {
				res = await axios.get(`${this.baseUrl}/${id}`);
			} else {
				res = await axios.get(`${this.baseUrl}`);
			}

			if (res.status === 200) {
				return res.data;
			}
		} catch (e) {
			console.warn(e);
		}
	}

	async post(payload: BlogPost): Promise<BlogPost> {
		try {
			const res = await axios.post(`${this.baseUrl}`, payload);
			if (res.status === 200) {
				return res.data;
			}
		} catch (e) {
			console.warn(e);
		}
	}

	//TODO: make the change in the backend so that it return the obj
	async delete(id: number): Promise<string> {
		try {
			if (id !== 0) {
				return await axios.delete(`${this.baseUrl}/${id}`);
			} else {
				return await axios.delete(`${this.baseUrl}`);
			}
		} catch (e) {
			console.warn(e);
		}
	}

	async patch(id: number, payload: BlogPost): Promise<BlogPost> {
		try {
			const res = await axios.patch(`${this.baseUrl}/${id}`, payload);
			if (res.status === 200) {
				return res.data;
			}
		} catch (e) {
			console.warn(e);
		}
	}
}
