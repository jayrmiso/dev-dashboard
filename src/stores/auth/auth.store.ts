import { create } from 'zustand'
import type { AuthState, AuthActions } from './auth.types'
import { createAuthActions } from './auth.actions'

export const useAuthStore = create<AuthState & AuthActions>((set, get) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  ...createAuthActions(set, get),
}))
