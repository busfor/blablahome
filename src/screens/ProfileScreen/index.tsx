import React, { useCallback } from 'react'
import { AccessToken, LoginManager } from 'react-native-fbsdk'
import { Options } from 'react-native-navigation'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../redux/reducers'
import { login, logout } from '../../redux/actions'
import { requestAuth } from '../../Api'
import colors from '../../colors'
import { getProfilePictureUrl } from '../../utils'

import Presenter from './presenter'

const ProfileScreen = () => {
  const dispatch = useDispatch()
  const profile = useSelector((s: RootState) => s.auth.user)

  const handleLogin = useCallback(async () => {
    try {
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
        username: profile.name,
        pictureUrl: profile.user_id ? getProfilePictureUrl(profile.user_id) : null,
        loggedIn: Boolean(profile.id),
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
