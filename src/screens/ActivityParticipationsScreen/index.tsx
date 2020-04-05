import React from 'react'
import { ScrollView } from 'react-native'
import { Options } from 'react-native-navigation'
import { useNavigationButtonPress } from 'react-native-navigation-hooks'

import { AppNavigationProps, modalBackButton, AppNavigation } from '../../navigation'
import { Participation } from '../../component'

import styles from './styles'
import { ActivityParticipationsPassProps } from './types'

const ActivityParticipationsScreen = ({
  componentId,
  participations,
}: AppNavigationProps & ActivityParticipationsPassProps) => {
  useNavigationButtonPress(
    () => {
      AppNavigation.dismissModal(componentId)
    },
    componentId,
    'back'
  )
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {participations.map((participation, index) => (
        <Participation
          key={participation.id}
          participation={participation}
          isLast={index === participations.length - 1}
        />
      ))}
    </ScrollView>
  )
}

ActivityParticipationsScreen.options = (): Options => ({
  topBar: {
    title: {
      text: 'Participations',
    },
    leftButtons: [modalBackButton()],
  },
})

export default ActivityParticipationsScreen
