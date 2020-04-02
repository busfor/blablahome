import { Navigation } from 'react-native-navigation'

import { registerScreens, screens } from './screens'
import { feedIcon } from './images'

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: screens.feedScreen.name,
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
        ],
      },
    },
  })
})
