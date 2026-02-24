export interface User {
  id: string
  email: string
  last_sign_in_at: string
}

export interface AuthResponse {
  user: User
  accessToken: string
  refreshToken: string
}

export interface AuthCredentials {
  email: string
  password: string
}

export interface AuthState {
  user: User | null
  accessToken: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}

export interface AuthActions {
  login: (credentials: AuthCredentials) => Promise<void>
  signup: (credentials: AuthCredentials) => Promise<void>
  logout: () => void
}
