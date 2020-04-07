import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { Platform, RefreshControl, SafeAreaView, ScrollView, Text } from 'react-native'
import { AccessToken, LoginManager } from 'react-native-fbsdk'
import { useDispatch, useSelector } from 'react-redux'

import { fetchParticipationsForUser, requestAuth } from '../../../../Api'
import { Participation } from '../../../../AppPropTypes'
import NoInfo from '../../../../component/NoInfo'
import { AppNavigation } from '../../../../navigation'
import { login } from '../../../../redux/actions'
import { RootState } from '../../../../redux/reducers'
import ProgressSection from '../../../ProgressScreen/components/ProgressSection'
import styles from '../../../ProgressScreen/styles'
import { CreateCheckinStep } from '../../types'

export default memo(({ openNextStep, setParticipation, componentId }: Props) => {
  const dispatch = useDispatch()
  const [participations, setParticipations] = useState<Participation[]>([])
  const [loading, setLoading] = useState(false)
  const profile = useSelector((s: RootState) => s.auth.user)

  const inProgress = useMemo(
    () =>
      participations.filter(
        (participation) => participation.progress < participation.activity.days && !participation.completed_at
      ),
    [participations]
  )

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

  const handleAcivityPress = useCallback((participation: Participation) => {
    setParticipation(participation)
    openNextStep(CreateCheckinStep.media)
  }, [])

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

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Progress</Text>
      <ScrollView
        refreshControl={<RefreshControl refreshing={loading} onRefresh={handleRefresh} tintColor={'black'} />}
      >
        <ProgressSection participations={inProgress} title='STARTED' handleAcivityPress={handleAcivityPress} />
      </ScrollView>
    </SafeAreaView>
  )
})

interface Props {
  openNextStep(step: number): void
  setParticipation(participation: Participation): void
  componentId: string
}
