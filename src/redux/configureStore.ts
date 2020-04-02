import { applyMiddleware, compose, createStore } from 'redux'
import { persistReducer } from 'redux-persist'

import rootReducer, { RootInitialState, RootState } from './reducers'
import { persistConfig } from './persistConfig'

const enhancers = []
const middleware = []

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

export default () => createStore(persistedReducer, RootInitialState, composedEnhancers)
