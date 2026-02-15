import { ApiClient } from './api-client'

export { ApiClient, type ApiClientConfig } from './api-client'

export const api = new ApiClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api',
})
