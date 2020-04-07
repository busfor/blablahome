import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react'
import { Platform } from 'react-native'
import { AccessToken, LoginManager } from 'react-native-fbsdk'
import { Options } from 'react-native-navigation'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks/dist'

import { Participation } from '../../AppPropTypes'
import { login } from '../../redux/actions'
import { RootState } from '../../redux/reducers'
import { fetchParticipationsForUser, requestAuth } from '../../Api'
import colors from '../../colors'
import { AppNavigation, AppNavigationProps } from '../../navigation'
import { Screens } from '..'
import NoInfo from '../../component/NoInfo'

import Presenter from './presenter'

const ProgressScreen = ({ componentId }: AppNavigationProps) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [participations, setParticipations] = useState<Participation[]>([])
  const firstAppear = useRef(true)
  const profile = useSelector((s: RootState) => s.auth.user)

  useEffect(() => {
    handleRefresh()
  }, [])

  const fetchData = useCallback(async () => {
    try {
      if (!profile.id) {
        return
      }
      const { data: fetchedParticipations } = await fetchParticipationsForUser(profile.id)
      setParticipations(fetchedParticipations)
      setLoading(false)
    } catch (error) {
      console.log('error', error)
    }
  }, [profile])

  const handleRefresh = useCallback(() => {
    setLoading(true)
    fetchData()
  }, [fetchData])

  useNavigationComponentDidAppear(() => {
    if (!firstAppear.current) {
      fetchData()
    }
    firstAppear.current = false
  }, componentId)

  const handleAcivityPress = useCallback(
    (participation: Participation) => {
      AppNavigation.showModal({
        stack: {
          children: [
            {
              component: {
                name: Screens.participationScreen,
                passProps: {
                  participation,
                },
              },
            },
          ],
        },
      })
    },
    [fetchData]
  )

  const inProgress = useMemo(
    () =>
      participations.filter(
        (participation) => participation.progress < participation.activity.days && !participation.completed_at
      ),
    [participations]
  )

  const completed = useMemo(
    () => participations.filter((participation) => participation.progress === participation.activity.days),
    [participations]
  )

  const failed = useMemo(
    () =>
      participations.filter(
        (participation) => participation.progress < participation.activity.days && Boolean(participation.completed_at)
      ),
    [participations]
  )

  // TODO: move to shared action
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

  if (participations.length === 0) {
    return (
      <NoInfo
        text={'Join any activity and share your progress with others'}
        buttonText={'Explore activities'}
        onPress={() => AppNavigation.changeTab(componentId, 0)}
      />
    )
  }

  if (!profile.id) {
    return <NoInfo buttonText={'Login'} text={'To view your progress please log in'} onPress={handleLogin} />
  }

  return <Presenter {...{ inProgress, completed, failed, handleRefresh, loading, handleAcivityPress }} />
}

ProgressScreen.options = (): Options => ({
  topBar: {
    visible: false,
  },
  statusBar: {
    backgroundColor: colors.backgroundColor,
  },
})

export default ProgressScreen
