import { useAuthStore } from './auth.store'

export const useUser = () => useAuthStore((state) => state.user)
export const useAccessToken = () => useAuthStore((state) => state.accessToken)
export const useIsAuthenticated = () => useAuthStore((state) => state.isAuthenticated)
export const useAuthLoading = () => useAuthStore((state) => state.loading)
export const useAuthError = () => useAuthStore((state) => state.error)
