import React, { useEffect, useState } from 'react'
import { Options } from 'react-native-navigation'
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { noop } from 'lodash'

import { Activity, Participation } from '../../AppPropTypes'
import { modalBackButton, AppNavigationProps, AppNavigation } from '../../navigation/index'
import { fetchParticipations } from '../../Api'
import colors from '../../colors'

import Presenter from './presenter'

const ActivityDetailsScreen = ({ componentId, activity }: AppNavigationProps & ActivityDetailsScreenProps) => {
  const {
    id,
    name,
    days,
    completions_count: completedCount,
    description,
    user,
    participants_count: participantsCount,
  } = activity

  const [participations, setParticipations] = useState<Participation[]>([])

  useEffect(() => {
    fetchParticipations(id)
      .then((response) => {
        setParticipations(response.data)
      })
      .catch(noop)
  }, [])

  useNavigationButtonPress(
    () => {
      AppNavigation.dismissModal(componentId)
    },
    componentId,
    'back'
  )

  return (
    <Presenter
      {...{
        name,
        days,
        participantsCount,
        completedCount,
        description,
        user,
        participations,
      }}
    />
  )
}

ActivityDetailsScreen.options = (): Options => ({
  topBar: {
    background: {
      color: colors.backgroundColor,
    },
    leftButtons: [modalBackButton()],
  },
  statusBar: {
    backgroundColor: colors.backgroundColor,
  },
})

interface ActivityDetailsScreenProps {
  activity: Activity
}

export default ActivityDetailsScreen
