import React, { useCallback } from 'react'
import { AccessToken, LoginManager } from 'react-native-fbsdk'
import { Options } from 'react-native-navigation'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../redux/reducers'
import { login, logout } from '../../redux/actions'

import Presenter from './presenter'

const ProfileScreen = () => {
  const dispatch = useDispatch()
  const profile = useSelector((s: RootState) => s.auth)
  const handleLogin = useCallback(async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile'])
      if (!result.error && !result.isCancelled) {
        const data = await AccessToken.getCurrentAccessToken()
        const response = await axios.post('https://blablahome.lazureykis.dev/api/users', {
          access_token: data?.accessToken,
        })
        dispatch(login(response.data.user))
      }
    } catch (error) {
      console.log('error', error)
    }
  }, [])

  const handleLogout = useCallback(() => {
    dispatch(logout())
  }, [])

  return <Presenter {...{ username: profile.name, loggedIn: Boolean(profile.id), handleLogin, handleLogout }} />
}
ProfileScreen.options = (): Options => ({
  topBar: {
    background: {
      color: '#E5E5E5',
    },
  },
  statusBar: {
    backgroundColor: '#E5E5E5',
  },
})

export default ProfileScreen
