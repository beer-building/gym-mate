import { createEffect } from "effector";
class HttpService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  _overriddenHeaders = {
    "Content-Type": "application/json"
  };
  _buildUrl(pathname, params) {
    const sp = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        sp.append(encodeURIComponent(key), encodeURIComponent(value));
      });
    }
    return new URL(this.baseUrl + pathname + sp.toString()).toString();
  }
  async _buildResponse(res) {
    const _res = await res;
    const data = await _res.json();
    if (!_res.ok)
      return Promise.reject(data);
    return {
      data,
      status: _res.status
    };
  }
  async get(path, queryParams) {
    return this._buildResponse(
      fetch(this._buildUrl(path, queryParams), {
        method: "GET",
        headers: this._overriddenHeaders
      })
    );
  }
  async delete(path, queryParams) {
    return this._buildResponse(
      fetch(this._buildUrl(path, queryParams), {
        method: "DELETE",
        headers: this._overriddenHeaders
      })
    );
  }
  async post(path, data, queryParams) {
    return this._buildResponse(
      fetch(this._buildUrl(path, queryParams), {
        method: "POST",
        headers: this._overriddenHeaders,
        body: JSON.stringify(data)
      })
    );
  }
  async put(path, data, queryParams) {
    return this._buildResponse(
      fetch(this._buildUrl(path, queryParams), {
        method: "PUT",
        headers: this._overriddenHeaders,
        body: JSON.stringify(data)
      })
    );
  }
  async patch(path, data, queryParams) {
    return this._buildResponse(
      fetch(this._buildUrl(path, queryParams), {
        method: "PATCH",
        headers: this._overriddenHeaders,
        body: JSON.stringify(data)
      })
    );
  }
  setToken(token) {
    this._overriddenHeaders["Authorization"] = `Bearer ${token}`;
  }
}
class HttpServiceWrapEffect {
  constructor(httpService2) {
    this.httpService = httpService2;
  }
  setAuthCredentials() {
    return createEffect((token) => {
      this.httpService.setToken(token);
    });
  }
  get(path, queryParams) {
    return createEffect(async () => {
      const res = await this.httpService.get(path, queryParams);
      return res.data;
    });
  }
  delete(path, queryParams) {
    return createEffect(async () => {
      const res = await this.httpService.delete(path, queryParams);
      return res.data;
    });
  }
  post(path, queryParams) {
    return createEffect(async (body) => {
      const res = await this.httpService.post(path, body, queryParams);
      return res.data;
    });
  }
  put(path, queryParams) {
    return createEffect(async (body) => {
      const res = await this.httpService.put(path, body, queryParams);
      return res.data;
    });
  }
  patch(path, queryParams) {
    return createEffect(async (body) => {
      const res = await this.httpService.patch(path, body, queryParams);
      return res.data;
    });
  }
}
const httpService = new HttpServiceWrapEffect(new HttpService("http://localhost:3000"));
export {
  httpService as h
};
