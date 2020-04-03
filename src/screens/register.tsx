import React from 'react'
import { forEach } from 'lodash'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from '../redux/store'

import { Screens } from '.'

import FeedScreen from './FeedScreen'
import ActivitiesScreen from './ActivitiesScreen'
import ProfileScreen from './ProfileScreen'
import ActivityDetailsScreen from './ActivityDetailsScreen'
import ProgressScreen from './ProgressScreen'

const screens = {
  feedScreen: {
    name: Screens.feedScreen,
    component: FeedScreen,
  },
  ActivitiesScreen: {
    name: Screens.ActivitiesScreen,
    component: ActivitiesScreen,
  },
  profileScreen: {
    name: Screens.profileScreen,
    component: ProfileScreen,
  },
  ActivityDetailsScreen: {
    name: Screens.ActivityDetailsScreen,
    component: ActivityDetailsScreen,
  },
  progressScreen: {
    name: Screens.progressScreen,
    component: ProgressScreen,
  },
}

export const registerScreens = () => {
  forEach(screens, (screen) => {
    Navigation.registerComponent(
      screen.name,
      () => (props) => (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <screen.component {...props} />
          </PersistGate>
        </Provider>
      ),
      () => screen.component
    )
  })
}
