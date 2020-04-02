import React, { useCallback } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Options } from 'react-native-navigation'

import { Touchable } from '../../component'
import { AppNavigation } from '../../navigation'
import { Screens } from '..'

import styles from './styles'

const IdeasScreen = () => {
  const onPressIdea = useCallback(() => {
    AppNavigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: Screens.ideaDetailsScreen,
            },
          },
        ],
      },
    })
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Touchable onPress={onPressIdea}>
        <Text>Tap me</Text>
      </Touchable>
    </SafeAreaView>
  )
}

IdeasScreen.options = (): Options => ({
  topBar: {
    title: {
      text: 'Ideas',
    },
  },
})

export default IdeasScreen
