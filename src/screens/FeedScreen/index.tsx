import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Options } from 'react-native-navigation'

import useHideSplashScreen from '../../hooks/useHideSplashScreen'

import styles from './styles'

const FeedScreen = () => {
  useHideSplashScreen()

  return (
    <SafeAreaView style={styles.container}>
      <Text>Feed will be here soon!</Text>
    </SafeAreaView>
  )
}

FeedScreen.options = (): Options => ({
  topBar: {
    title: {
      text: 'Feed',
    },
  },
})

export default FeedScreen
