import { fetch } from 'undici'
import { BACKEND_URL } from '../plugins/config'
import { Api } from '@gym-mate/shared-types'

class HttpService {
	token: string
	constructor(private readonly baseUrl: string) {
		this.token = ''
	}
	setToken(token: string) {
		this.token = token
	}
	private async buildRequest<DATA, BODY = unknown>(
		url: string,
		method: 'GET' | 'POST' | 'PUT' | 'DELETE',
		body?: BODY
	): Promise<{ data: DATA; status: number }> {
		const fullUrl = new URL(url, this.baseUrl)

		const req = await fetch(fullUrl, {
			headers: {
				'content-type': 'application/json',
				...(this.token ? { Authorization: `Bearer ${this.token}` } : {})
			},
			body: body ? JSON.stringify(body) : null,
			method
		})

		if (!req.ok) return Promise.reject(req)

		const data = (await req.json()) as DATA

		return Promise.resolve({ data, status: req.status })
	}
	get<RESPONSE>(url: string) {
		return this.buildRequest<RESPONSE>(url, 'GET')
	}
	post<RESPONSE, BODY>(url: string, body?: BODY) {
		return this.buildRequest<RESPONSE, BODY>(url, 'POST', body)
	}
	put<RESPONSE, BODY>(url: string, body?: BODY) {
		return this.buildRequest<RESPONSE, BODY>(url, 'PUT', body)
	}
	delete<RESPONSE, BODY>(url: string) {
		return this.buildRequest<RESPONSE, BODY>(url, 'DELETE')
	}
}

export const serverHttp = new HttpService(BACKEND_URL)
export const api = new Api(serverHttp)
