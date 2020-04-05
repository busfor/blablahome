import { AuthActionTypes } from '../actionTypes'
import { User } from '../../AppPropTypes'

export interface AuthState {
  user: User
}

export interface AuthType {
  user: User
}

export interface AuthLoginType {
  type: AuthActionTypes.LOGIN
  payload: AuthType
}

export interface AuthLogoutType {
  type: AuthActionTypes.LOGOUT
}

export type AuthActionType = AuthLoginType | AuthLogoutType
