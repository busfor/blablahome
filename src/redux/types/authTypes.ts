import { AuthActionTypes } from '../actionTypes'

export interface AuthState {
  id: string | null
  name: string | null
}

export interface AuthType {
  id: string
  name: string
}

export interface AuthLoginType {
  type: AuthActionTypes.LOGIN
  payload: AuthType
}

export interface AuthLogoutType {
  type: AuthActionTypes.LOGOUT
}

export type AuthActionType = AuthLoginType | AuthLogoutType
