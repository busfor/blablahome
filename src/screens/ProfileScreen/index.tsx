import React, { useCallback, useEffect, useRef } from 'react'
import { AccessToken, LoginManager } from 'react-native-fbsdk'
import { Options } from 'react-native-navigation'
import { useSelector, useDispatch } from 'react-redux'
import { Platform } from 'react-native'
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks'

import { RootState } from '../../redux/reducers'
import { login, logout } from '../../redux/actions'
import { requestAuth } from '../../Api'
import colors from '../../colors'
import { AppNavigationProps } from '../../navigation'

import Presenter from './presenter'

const ProfileScreen = ({ componentId }: AppNavigationProps) => {
  const firstAppear = useRef(true)

  const dispatch = useDispatch()
  const user = useSelector((s: RootState) => s.auth.user)

  const fetchData = useCallback(async () => {
    try {
      const data = await AccessToken.getCurrentAccessToken()
      const token = data?.accessToken || ''
      const response = await requestAuth(token)
      dispatch(login({ user: response.data.user }))
    } catch {}
  }, [])

  const handleLogin = useCallback(async () => {
    try {
      if (Platform.OS === 'android') {
        LoginManager.setLoginBehavior('web_only')
      }
      const result = await LoginManager.logInWithPermissions(['public_profile'])
      if (!result.error && !result.isCancelled) {
        await fetchData()
      }
    } catch (error) {
      console.log('error', error)
    }
  }, [fetchData])

  const handleLogout = useCallback(() => {
    dispatch(logout())
  }, [])

  useEffect(() => {
    if (user.id) {
      fetchData()
    }
  }, [])

  useNavigationComponentDidAppear(() => {
    if (!firstAppear.current && user.id) {
      fetchData()
    }
    firstAppear.current = false
  }, componentId)

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
