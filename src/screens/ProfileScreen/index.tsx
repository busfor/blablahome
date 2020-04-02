import React, { useCallback } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { AccessToken, LoginButton } from 'react-native-fbsdk'
import { Options } from 'react-native-navigation'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../redux/reducers'
import { login, logout } from '../../redux/actions'

import styles from './styles'

const ProfileScreen = () => {
  const dispatch = useDispatch()
  const profile = useSelector((s: RootState) => s.auth)

  const handleLogin = useCallback((error, result) => {
    if (!error || !result.isCancelled) {
      AccessToken.getCurrentAccessToken()
        .then((data) => {
          axios
            .post('https://blablahome.lazureykis.dev/api/users', {
              access_token: data?.accessToken.toString(),
            })
            .then((response) => {
              dispatch(login(response.data.user))
            })
        })
        .catch((e) => {
          console.log('error', e)
        })
    }
  }, [])

  const handleLogout = useCallback(() => {
    dispatch(logout())
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {Boolean(profile.id) && <Text style={styles.userName}>{profile.name}</Text>}
      <LoginButton permissions={['public_profile']} onLoginFinished={handleLogin} onLogoutFinished={handleLogout} />
    </SafeAreaView>
  )
}
ProfileScreen.options = (): Options => ({
  topBar: {
    title: {
      text: 'Profile',
    },
  },
})

export default ProfileScreen
