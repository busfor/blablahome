import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { AccessToken, LoginButton } from 'react-native-fbsdk'
import { Options } from 'react-native-navigation'

import styles from './styles'

const ProfileScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>Profile will be here soon!</Text>
    <LoginButton
      permissions={['public_profile']}
      onLoginFinished={(error, result) => {
        if (error) {
          console.log('login has error: ' + result.error)
        } else if (result.isCancelled) {
          console.log('login is cancelled.')
        } else {
          console.log(result)
          AccessToken.getCurrentAccessToken().then((data) => {
            console.log(data)
            console.log(data.accessToken.toString())
          })
        }
      }}
      onLogoutFinished={() => console.log('logout.')}
    />
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
