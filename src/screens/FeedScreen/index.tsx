import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Options } from 'react-native-navigation'

import styles from './styles'

const FeedScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>Feed will be here soon!</Text>
  </SafeAreaView>
)

FeedScreen.options = (): Options => ({
  topBar: {
    title: {
      text: 'Feed',
    },
  },
})

export default FeedScreen
