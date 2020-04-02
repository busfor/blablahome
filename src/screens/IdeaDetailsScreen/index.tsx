import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Options } from 'react-native-navigation'

import styles from './styles'

const IdeaDetailsScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>Idea details will be here soon!</Text>
  </SafeAreaView>
)

IdeaDetailsScreen.options = (): Options => ({
  topBar: {
    title: {
      text: 'Idea Details',
    },
  },
})

export default IdeaDetailsScreen
