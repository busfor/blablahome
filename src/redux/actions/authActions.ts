import { AuthType } from '../types/authTypes'
import { AuthActionTypes } from '../actionTypes'

export const login = (payload: AuthType) => ({
  type: AuthActionTypes.LOGIN,
  payload,
})

export const logout = () => ({
  type: AuthActionTypes.LOGOUT,
})
