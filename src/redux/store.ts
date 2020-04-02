import { persistStore } from 'redux-persist'

import configureStore from './configureStore'

export const store = configureStore()
export const persistor = persistStore(store)
