import React from 'react'
import { Options } from 'react-native-navigation'
import { useNavigationButtonPress } from 'react-native-navigation-hooks'

import { Checkin } from '../../AppPropTypes'
import { AppNavigationProps, AppNavigation, modalBackButton } from '../../navigation'

import Presenter from './presenter'

const CheckinDetailsScreen = ({ componentId, checkin }: AppNavigationProps & Props) => {
  useNavigationButtonPress(
    () => {
      AppNavigation.dismissModal(componentId)
    },
    componentId,
    'back'
  )

  return <Presenter {...checkin} />
}

CheckinDetailsScreen.options = (): Options => ({
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
    leftButtons: [modalBackButton()],
  },
})

interface Props {
  checkin: Checkin
  onPressCheckin(): Checkin
  fetchProgress?: () => void
}

export default CheckinDetailsScreen
