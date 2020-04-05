import { AuthActionTypes } from '../actionTypes'
import { AuthActionType, AuthState } from '../types/authTypes'

export const initialState = {
  user: {
    completions_count: 0,
    fails_count: 0,
    id: '',
    joins_count: 0,
    name: '',
    user_id: '',
  },
}

export default function authReducer(state: AuthState = initialState, action: AuthActionType) {
  switch (action.type) {
    case AuthActionTypes.LOGIN: {
      const { user } = action.payload
      return {
        ...state,
        user,
      }
    }

    case AuthActionTypes.LOGOUT: {
      return initialState
    }

    default:
      return state
  }
}
