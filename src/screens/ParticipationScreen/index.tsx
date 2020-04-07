import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { Options } from 'react-native-navigation'
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { noop } from 'lodash'
import { useSelector } from 'react-redux'

import { Participation, Checkin } from '../../AppPropTypes'
import { modalBackButton, AppNavigationProps, AppNavigation } from '../../navigation/index'
import { fetchParticipationCheckins } from '../../Api'
import { CreateCheckinStep } from '../CreateCheckinScreen/types'
import { Screens } from '..'
import { RootState } from '../../redux/reducers'

import Presenter from './presenter'

const ParticipationScreen = ({
  componentId,
  participation,
  fetchProgress,
}: AppNavigationProps & ParticipationScreenProps) => {
  const [checkins, setCheckins] = useState<Checkin[]>([])
  const [progress, setProgress] = useState(participation.progress)

  const userId = useSelector((state: RootState) => state.auth.user.id)

  const canCheckIn = useMemo(() => {
    if (participation.user.id !== userId) {
      return false
    }
    return participation.progress < participation.activity.days
  }, [userId, participation])

  const fetchData = useCallback(
    () =>
      fetchParticipationCheckins(participation.id)
        .then((response) => {
          setCheckins(response.data)
        })
        .catch(noop),
    []
  )

  const onPressCheckin = useCallback((checkin: Checkin) => alert(JSON.stringify(checkin)), [])

  const onPressAdd = useCallback(() => {
    AppNavigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: Screens.createCheckinScreen,
              passProps: {
                participation,
                step: CreateCheckinStep.media,
                fetchProgress: () => {
                  if (fetchProgress) {
                    fetchProgress()
                  }
                  setProgress(progress + 1)
                  fetchData()
                },
              },
            },
          },
        ],
      },
    })
  }, [fetchProgress, setProgress, fetchData])

  useEffect(() => {
    fetchData()
  }, [])

  useNavigationButtonPress(
    () => {
      AppNavigation.dismissModal(componentId)
    },
    componentId,
    'back'
  )

  return <Presenter {...{ participation, progress, canCheckIn, checkins, onPressCheckin, onPressAdd }} />
}

ParticipationScreen.options = (): Options => ({
  statusBar: {
    drawBehind: true,
    backgroundColor: 'transparent',
    style: 'light',
  },
  topBar: {
    background: {
      color: 'transparent',
    },
    drawBehind: true,
    leftButtons: [modalBackButton(true)],
  },
})

interface ParticipationScreenProps {
  participation: Participation
  fetchProgress?: () => void
}

export default ParticipationScreen
