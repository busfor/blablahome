import React, { useEffect, useState, useCallback } from 'react'
import { Options } from 'react-native-navigation'
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { noop } from 'lodash'

import { Participation, Checkin } from '../../AppPropTypes'
import { modalBackButton, AppNavigationProps, AppNavigation } from '../../navigation/index'
import { fetchParticipationCheckins } from '../../Api'

import Presenter from './presenter'

const ParticipationScreen = ({ componentId, participation }: AppNavigationProps & ParticipationScreenProps) => {
  const [checkins, setCheckins] = useState<Checkin[]>([])
  const [progress, setProgress] = useState(participation.progress)

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

  return <Presenter {...{ participation, progress, checkins, onPressCheckin }} />
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
}

export default ParticipationScreen
