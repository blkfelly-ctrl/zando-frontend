interface ApiConfig {
  params?: Record<string, string | number | boolean | undefined>;
}

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const buildUrl = (path: string, params?: ApiConfig['params']) => {
  const url = new URL(path, baseURL);
  if (!params) return url.toString();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, String(value));
    }
  });

  return url.toString();
};

const request = async <T>(url: string, options: RequestInit = {}) => {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`API error ${response.status}: ${body}`);
  }

  if (response.status === 204) {
    return null as unknown as T;
  }

  return response.json() as Promise<T>;
};

const apiClient = {
  get: <T>(path: string, config?: ApiConfig) => request<T>(buildUrl(path, config?.params)),
  post: <T>(path: string, body?: unknown) =>
    request<T>(buildUrl(path), {
      method: 'POST',
      body: JSON.stringify(body),
    }),
  put: <T>(path: string, body?: unknown) =>
    request<T>(buildUrl(path), {
      method: 'PUT',
      body: JSON.stringify(body),
    }),
  delete: <T>(path: string) =>
    request<T>(buildUrl(path), {
      method: 'DELETE',
    }),
};

export default apiClient;
