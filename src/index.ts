import { Navigation } from 'react-native-navigation'

import { registerScreens } from './screens/register'
import { Screens } from './screens'
import { feedIcon } from './images'
import { FontFamily } from './constants/fonts'
import colors from './colors'

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    statusBar: {
      style: 'dark',
      backgroundColor: colors.white,
    },
    topBar: {
      noBorder: true,
      elevation: 0,
      title: {
        fontFamily: FontFamily.medium,
        fontSize: 18,
      },
      background: {
        translucent: true,
      },
    },
    layout: {
      orientation: ['portrait'],
      backgroundColor: colors.white,
    },
    bottomTab: {
      selectedIconColor: 'rgb(0,122,255)',
    },
    bottomTabs: {
      titleDisplayMode: 'alwaysShow',
      translucent: true,
    },
    animations: {
      push: {
        waitForRender: true,
      },
      showModal: {
        waitForRender: true,
      },
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
                    name: Screens.ActivitiesScreen,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Activities',
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
                    name: Screens.progressScreen,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Progress',
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
