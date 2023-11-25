type Body = object;

type Response<T> = {
	status: number;
	data: T | unknown;
};

export class HttpService {
	static instance = new HttpService('http://localhost:3000/');
	private _headers: Record<string, string> = {};

	constructor(private baseUrl: string) {}

	_buildUrl(pathname: string, params?: Record<string, string | number>): string {
		const sp = new URLSearchParams();
		if (params) {
			Object.entries(params).forEach(([key, value]) => {
				sp.append(encodeURIComponent(key), encodeURIComponent(value));
			});
		}

		return new URL(this.baseUrl + pathname + sp.toString()).toString();
	}

	async _buildResponse<T>(res: Promise<globalThis.Response>): Promise<Response<T>> {
		const _res = await res;
		return {
			status: _res.status,
			data: (await _res.json()) as T
		};
	}

	async get<T>(path: string, queryParams?: Record<string, string | number>): Promise<Response<T>> {
		const res = await fetch(this._buildUrl(path, queryParams), {
			method: 'GET',
			headers: this._headers
		});

		const data = (await res.json()) as T;

		return {
			status: res.status,
			data
		};
	}

	async post<T>(
		path: string,
		data?: Body,
		queryParams?: Record<string, string | number>
	): Response<T> {
		const res = await fetch(this._buildUrl(path, queryParams), {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify(data)
		});
	}

	setToken(token: string) {
		this._headers['Authorization'] = `Bearer ${token}`;
	}
}
