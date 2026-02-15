export type ApiClientConfig = {
  baseUrl: string
  getToken?: () => string | null
}

export class ApiClient {
  private baseUrl: string
  private getToken?: () => string | null

  constructor(config: ApiClientConfig) {
    this.baseUrl = config.baseUrl
    this.getToken = config.getToken
  }

  private async request<T>(
    path: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = this.getToken?.()

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers
    }

    if (token) {
      ;(headers as Record<string, string>)['Authorization'] = `Bearer ${token}`
    }

    const res = await fetch(`${this.baseUrl}${path}`, {
      ...options,
      headers
    })

    if (!res.ok) {
      throw new Error(`API error ${res.status}: ${res.statusText}`)
    }

    return res.json()
  }

  get<T>(path: string, options?: RequestInit) {
    return this.request<T>(path, { ...options, method: 'GET' })
  }

  post<T>(path: string, body?: unknown, options?: RequestInit) {
    return this.request<T>(path, {
      ...options,
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined
    })
  }

  put<T>(path: string, body?: unknown, options?: RequestInit) {
    return this.request<T>(path, {
      ...options,
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined
    })
  }

  patch<T>(path: string, body?: unknown, options?: RequestInit) {
    return this.request<T>(path, {
      ...options,
      method: 'PATCH',
      body: body ? JSON.stringify(body) : undefined
    })
  }

  delete<T>(path: string, options?: RequestInit) {
    return this.request<T>(path, { ...options, method: 'DELETE' })
  }
}
