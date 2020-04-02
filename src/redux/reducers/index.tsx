import { combineReducers } from 'redux'

import { AuthState } from '../types'

import auth, { initialState as authInitialState } from './authReducer'

const rootReducer = combineReducers<RootState>({
  auth,
})

export const RootInitialState = {
  auth: authInitialState,
}

export default rootReducer

export interface RootState {
  auth: AuthState
}
