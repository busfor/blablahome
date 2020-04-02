import { Navigation } from 'react-native-navigation'

import { registerScreens } from './screens/register'
import { Screens } from './screens'
import { feedIcon } from './images'

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    layout: {
      orientation: ['portrait'],
    },
    bottomTab: {
      selectedIconColor: 'rgb(0,122,255)',
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
    },
  })
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: Screens.feedScreen,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Feed',
                  icon: feedIcon,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: Screens.ideasScreen,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Ideas',
                  icon: feedIcon,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: Screens.profileScreen,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Profile',
                  icon: feedIcon,
                },
              },
            },
          },
        ],
      },
    },
  })
})
