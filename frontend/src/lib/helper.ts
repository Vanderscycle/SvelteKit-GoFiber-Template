import type { GoRestClient } from '$api/goBackend.api';
export async function httpMethodSwitch(
	api: GoRestClient,
	apiData: any,
	method: string,
	index = '',
	payload?: object
) {
	//TODO move to otherwebsite  once filtering is done
	let res: any;
	switch (method) {
		case 'GET':
			res = await api.get(index);
			if (index !== '') {
				apiData = [...apiData, res];
			} else {
				apiData = [res];
			}
			break;
		case 'POST':
			res = await api.post(payload);
			apiData = [...apiData, res];
			break;
		case 'DELETE':
			res = await api.delete(index);
			// apiData = apiData.filter((v) => v.ID !== index);
			break;
		case 'PATCH':
			res = await api.patch(index, payload);
			apiData = [...apiData, res];
			break;
	}
	if (!res) {
		console.warn('error');
	} else {
		return apiData;
	}
}
