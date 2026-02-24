import type { StoreApi } from 'zustand'
import { api } from '@/lib/api'
import type { AuthState, AuthActions, AuthCredentials, AuthResponse } from './auth.types'

type AuthSet = StoreApi<AuthState & AuthActions>['setState']
type AuthGet = StoreApi<AuthState & AuthActions>['getState']

export const createAuthActions = (set: AuthSet, get: AuthGet): AuthActions => ({
  login: async (credentials: AuthCredentials) => {
    set({ loading: true, error: null })
    try {
      const data = await api.post<AuthResponse>('/api/auth/login', credentials)
      set({
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        isAuthenticated: true,
        loading: false,
      })
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Login failed',
        loading: false,
      })
    }
  },

  signup: async (credentials: AuthCredentials) => {
    set({ loading: true, error: null })
    try {
      const data = await api.post<AuthResponse>('/api/auth/signup', credentials)
      set({
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        isAuthenticated: true,
        loading: false,
      })
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Signup failed',
        loading: false,
      })
    }
  },

  logout: () => {
    set({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      error: null,
    })
  },
})
