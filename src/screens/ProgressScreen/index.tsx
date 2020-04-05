import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react'
import { Options } from 'react-native-navigation'
import { useSelector } from 'react-redux'
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks/dist'

import { Participation } from '../../AppPropTypes'
import { RootState } from '../../redux/reducers'
import { fetchParticipationsForUser } from '../../Api'
import colors from '../../colors'
import { AppNavigationProps } from '../../navigation'

import Presenter from './presenter'

const ProgressScreen = ({ componentId }: AppNavigationProps) => {
  const [loading, setLoading] = useState(false)
  const [participations, setParticipations] = useState<Participation[]>([])
  const firstAppear = useRef(true)
  const profile = useSelector((s: RootState) => s.auth.user)

  useEffect(() => {
    fetchData()
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

  return <Presenter {...{ inProgress, completed, failed, handleRefresh, loading }} />
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
