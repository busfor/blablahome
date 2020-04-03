import React from 'react'
import { Options } from 'react-native-navigation'
import { useNavigationButtonPress } from 'react-native-navigation-hooks'

import { Activity } from '../../AppPropTypes'
import { modalBackButton, AppNavigationProps, AppNavigation } from '../../navigation/index'

import Presenter from './presenter'

const ActivityDetailsScreen = ({ componentId, activity }: AppNavigationProps & ActivityDetailsScreenProps) => {
  const { title, frequency, completed: completedCount, description, author, participants } = activity

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
        title,
        frequency,
        participantsCount: participants.length,
        completedCount,
        description,
        author,
        participants,
      }}
    />
  )
}

ActivityDetailsScreen.options = (): Options => ({
  topBar: {
    background: {
      color: '#F6F5F5',
    },
    leftButtons: [modalBackButton()],
  },
  statusBar: {
    backgroundColor: '#F6F5F5',
  },
})

interface ActivityDetailsScreenProps {
  activity: Activity
}

export default ActivityDetailsScreen
