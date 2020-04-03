import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { Options } from 'react-native-navigation'
import { useSelector } from 'react-redux'

import { Participation } from '../../AppPropTypes'
import { RootState } from '../../redux/reducers'
import { fetchParticipationsForUser } from '../../Api'

import Presenter from './presenter'

const ProgressScreen = () => {
  const [participations, setParticipations] = useState<Participation[]>([])
  const profile = useSelector((s: RootState) => s.auth)

  const getParticiptions = useCallback(async () => {
    try {
      if (!profile.id) {
        return
      }
      const { data: fetchedParticipations } = await fetchParticipationsForUser(profile.id)
      setParticipations(fetchedParticipations)
    } catch (error) {
      console.log('error', error)
    }
  }, [profile])

  useEffect(() => {
    getParticiptions()
  }, [getParticiptions])

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

  return <Presenter {...{ inProgress, completed, failed }} />
}

ProgressScreen.options = (): Options => ({
  topBar: {
    visible: false,
  },
  statusBar: {
    backgroundColor: '#F6F5F5',
  },
})

export default ProgressScreen
