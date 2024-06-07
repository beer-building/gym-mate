import { fetch } from 'undici'
import { BACKEND_URL } from '../plugins/config'

class HttpService {
	constructor(private readonly baseUrl: string) {}
	private async buildRequest<RESPONSE, BODY>(
		url: string,
		method: 'GET' | 'POST' | 'PUT' | 'DELETE',
		body?: BODY
	): Promise<RESPONSE> {
		const fullUrl = new URL(url, this.baseUrl)

		const req = await fetch(fullUrl, { body: body ? JSON.stringify(body) : null, method })

		console.log(req)

		return req.json() as Promise<RESPONSE>
	}
	get<RESPONSE, BODY>(url: string, body?: BODY) {
		return this.buildRequest<RESPONSE, BODY>(url, 'GET', body)
	}
}

export const serverHttp = new HttpService(BACKEND_URL)
