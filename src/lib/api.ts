import { ApiClient } from './api-client'
import { useAuthStore } from '@/stores/auth'

export { ApiClient, type ApiClientConfig } from './api-client'

export const api = new ApiClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api',
  getToken: () => useAuthStore.getState().accessToken,
})
