import React, { useCallback } from 'react'
import { AccessToken, LoginManager } from 'react-native-fbsdk'
import { Options } from 'react-native-navigation'
import { useSelector, useDispatch } from 'react-redux'
import { Platform } from 'react-native'

import { RootState } from '../../redux/reducers'
import { login, logout } from '../../redux/actions'
import { requestAuth } from '../../Api'
import colors from '../../colors'

import Presenter from './presenter'

const ProfileScreen = () => {
  const dispatch = useDispatch()
  const user = useSelector((s: RootState) => s.auth.user)

  const handleLogin = useCallback(async () => {
    try {
      if (Platform.OS === 'android') {
        LoginManager.setLoginBehavior('web_only')
      }
      const result = await LoginManager.logInWithPermissions(['public_profile'])
      if (!result.error && !result.isCancelled) {
        const data = await AccessToken.getCurrentAccessToken()
        const token = data?.accessToken || ''
        const response = await requestAuth(token)
        dispatch(login({ user: response.data.user }))
      }
    } catch (error) {
      console.log('error', error)
    }
  }, [])

  const handleLogout = useCallback(() => {
    dispatch(logout())
  }, [])

  return (
    <Presenter
      {...{
        user,
        handleLogin,
        handleLogout,
      }}
    />
  )
}
ProfileScreen.options = (): Options => ({
  topBar: {
    visible: false,
  },
  statusBar: {
    backgroundColor: colors.backgroundColor,
  },
})

export default ProfileScreen
