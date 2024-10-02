import { fetch, Response } from 'undici'
import { BACKEND_URL } from '../plugins/config'
import { Api } from '@gym-mate/shared-types'

export class HttpError extends Error {
	response: Response
	constructor(res: Response) {
		super(res.statusText)
		this.response = res
	}
}

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

		const response = await fetch(fullUrl, {
			headers: {
				'content-type': 'application/json',
				...(this.token ? { Authorization: `Bearer ${this.token}` } : {})
			},
			body: body ? JSON.stringify(body) : null,
			method
		})

		if (!response.ok) throw new HttpError(response)

		const data = (await response.json()) as DATA

		return Promise.resolve({ data, status: response.status })
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
