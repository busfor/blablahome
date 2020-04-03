import { AuthActionTypes } from '../actionTypes'
import { AuthActionType, AuthState } from '../types/authTypes'

export const initialState = {
  id: null,
  name: null,
  token: null,
}

export default function authReducer(state: AuthState = initialState, action: AuthActionType) {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      const { id, name, token } = action.payload
      return {
        ...state,
        id,
        name,
        token,
      }
    }

    case AuthActionTypes.LOGOUT: {
      return initialState
    }

    default:
      return state
  }
}
