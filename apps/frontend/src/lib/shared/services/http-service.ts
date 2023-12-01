import { createEffect } from 'effector';

type Body = object | string;

type Response<T> = {
	status: number;
	data: T;
};

export class HttpService {
	private _overriddenHeaders: Record<string, string> = {
		'Content-Type': 'application/json'
	};

	constructor(private baseUrl: string) {}

	private _buildUrl(pathname: string, params?: Record<string, string | number>): string {
		const sp = new URLSearchParams();
		if (params) {
			Object.entries(params).forEach(([key, value]) => {
				sp.append(encodeURIComponent(key), encodeURIComponent(value));
			});
		}

		return new URL(this.baseUrl + pathname + sp.toString()).toString();
	}

	private async _buildResponse<T>(res: Promise<globalThis.Response>): Promise<Response<T>> {
		const _res = await res;

		return {
			status: _res.status,
			data: (await _res.json()) as T
		};
	}

	async get<T = unknown>(
		path: string,
		queryParams?: Record<string, string | number>
	): Promise<Response<T>> {
		return this._buildResponse<T>(
			fetch(this._buildUrl(path, queryParams), {
				method: 'GET',
				headers: this._overriddenHeaders
			})
		);
	}

	async delete<T = unknown>(
		path: string,
		queryParams?: Record<string, string | number>
	): Promise<Response<T>> {
		return this._buildResponse<T>(
			fetch(this._buildUrl(path, queryParams), {
				method: 'DELETE',
				headers: this._overriddenHeaders
			})
		);
	}

	async post<T = unknown, B extends Body = Body>(
		path: string,
		data: B,
		queryParams?: Record<string, string | number>
	): Promise<Response<T>> {
		return this._buildResponse(
			fetch(this._buildUrl(path, queryParams), {
				method: 'POST',
				headers: this._overriddenHeaders,
				body: JSON.stringify(data)
			})
		);
	}

	async put<T = unknown, B extends Body = Body>(
		path: string,
		data: B,
		queryParams?: Record<string, string | number>
	): Promise<Response<T>> {
		return this._buildResponse<T>(
			fetch(this._buildUrl(path, queryParams), {
				method: 'PUT',
				headers: this._overriddenHeaders,
				body: JSON.stringify(data)
			})
		);
	}

	async patch<T = unknown, B extends Body = Body>(
		path: string,
		data: B,
		queryParams?: Record<string, string | number>
	): Promise<Response<T>> {
		return this._buildResponse<T>(
			fetch(this._buildUrl(path, queryParams), {
				method: 'PATCH',
				headers: this._overriddenHeaders,
				body: JSON.stringify(data)
			})
		);
	}

	setToken(token: string) {
		this._overriddenHeaders['Authorization'] = `Bearer ${token}`;
	}
}

class HttpServiceWrapEffect {
	constructor(private httpService: HttpService) {}

	setAuthCredentials() {
		return createEffect((token: string) => {
			this.httpService.setToken(token);
		});
	}

	get<T = unknown, E = unknown>(path: string, queryParams?: Record<string, string | number>) {
		return createEffect<void, T, E>(async () => {
			const res = await this.httpService.get<T>(path, queryParams);

			return res.data;
		});
	}
	delete<T = unknown, E = unknown>(path: string, queryParams?: Record<string, string | number>) {
		return createEffect<void, T, E>(async () => {
			const res = await this.httpService.delete<T>(path, queryParams);

			return res.data;
		});
	}
	post<P extends Body, T = unknown, E = unknown>(
		path: string,
		queryParams?: Record<string, string | number>
	) {
		return createEffect<P, T, E>(async (body: P) => {
			const res = await this.httpService.post<T>(path, body, queryParams);
			return res.data;
		});
	}
	put<P extends Body, T = unknown, E = unknown>(
		path: string,
		queryParams?: Record<string, string | number>
	) {
		return createEffect<P, T, E>(async (body: P) => {
			const res = await this.httpService.put<T>(path, body, queryParams);
			return res.data;
		});
	}
	patch<P extends Body, T = unknown, E = unknown>(
		path: string,
		queryParams?: Record<string, string | number>
	) {
		return createEffect<P, T, E>(async (body: P) => {
			const res = await this.httpService.patch<T>(path, body, queryParams);
			return res.data;
		});
	}
}

export const httpService = new HttpServiceWrapEffect(new HttpService('http://localhost:3000'));
