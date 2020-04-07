import React from 'react'
import { forEach } from 'lodash'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from '../redux/store'

import { Screens } from '.'

import CheckinScreen from './CheckinScreen'
import FeedScreen from './FeedScreen'
import ActivitiesScreen from './ActivitiesScreen'
import ProfileScreen from './ProfileScreen'
import ActivityDetailsScreen from './ActivityDetailsScreen'
import ProgressScreen from './ProgressScreen'
import CreateActivityScreen from './CreateActivityScreen'
import ActivityParticipationsScreen from './ActivityParticipationsScreen'
import CreateCheckinScreen from './CreateCheckinScreen'

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
  ActivityParticipationsScreen: {
    name: Screens.activityParticipationsScreen,
    component: ActivityParticipationsScreen,
  },
  progressScreen: {
    name: Screens.progressScreen,
    component: ProgressScreen,
  },
  createActivityScreen: {
    name: Screens.createActivityScreen,
    component: CreateActivityScreen,
  },
  createCheckinScreen: {
    name: Screens.createCheckinScreen,
    component: CreateCheckinScreen,
  },
  checkinScreen: {
    name: Screens.checkinScreen,
    component: CheckinScreen,
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
