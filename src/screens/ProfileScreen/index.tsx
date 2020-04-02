import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Options } from 'react-native-navigation'

import styles from './styles'

const ProfileScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>Profile will be here soon!</Text>
  </SafeAreaView>
)

ProfileScreen.options = (): Options => ({
  topBar: {
    title: {
      text: 'Profile',
    },
  },
})

export default ProfileScreen
