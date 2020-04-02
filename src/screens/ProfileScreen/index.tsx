import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { AccessToken, LoginButton } from 'react-native-fbsdk'
import { Options } from 'react-native-navigation'
import axios from 'axios'

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
            axios.post('https://blablahome.lazureykis.dev/api/users', {
              access_token: data.accessToken.toString(),
            }).then((response) => {
              console.log('response', response)
            })
            console.log(data)
            console.log(data.accessToken.toString())
          }).catch((error) => {
            console.log('error', error)
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
