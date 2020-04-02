import { forEach } from 'lodash'
import { Navigation } from 'react-native-navigation'

import FeedScreen from './FeedScreen'

export const screens = {
  // Onboarding
  feedScreen: {
    name: 'app.FeedScreen',
    component: FeedScreen,
  },
}

export const registerScreens = () => {
  forEach(screens, (screen) => {
    Navigation.registerComponent(screen.name, () => screen.component)
  })
}
