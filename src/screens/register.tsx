import React from 'react'
import { forEach } from 'lodash'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from '../redux/store'

import { Screens } from '.'

import FeedScreen from './FeedScreen'
import IdeasScreen from './IdeasScreen'
import ProfileScreen from './ProfileScreen'
import IdeaDetailsScreen from './IdeaDetailsScreen'

const screens = {
  feedScreen: {
    name: Screens.feedScreen,
    component: FeedScreen,
  },
  ideasScreen: {
    name: Screens.ideasScreen,
    component: IdeasScreen,
  },
  profileScreen: {
    name: Screens.profileScreen,
    component: ProfileScreen,
  },
  ideaDetailsScreen: {
    name: Screens.ideaDetailsScreen,
    component: IdeaDetailsScreen,
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
