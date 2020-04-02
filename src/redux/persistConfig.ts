import { PersistConfig } from 'redux-persist'
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1'
import AsyncStorage from '@react-native-community/async-storage'

import { RootState } from './reducers'

const whitelist = ['config', 'searchForm', 'auth', 'orders', 'booking', 'passengers', 'payment', 'contacts']

export const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist,
  stateReconciler: autoMergeLevel1,
}
