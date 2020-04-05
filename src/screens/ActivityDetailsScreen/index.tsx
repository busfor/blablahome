import React, { useEffect, useState, useCallback } from 'react'
import { Options } from 'react-native-navigation'
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { noop } from 'lodash'

import { Activity, Participation } from '../../AppPropTypes'
import { modalBackButton, AppNavigationProps, AppNavigation } from '../../navigation/index'
import { fetchParticipations } from '../../Api'
import colors from '../../colors'
import { Screens } from '..'

import Presenter from './presenter'

const ActivityDetailsScreen = ({ componentId, activity }: AppNavigationProps & ActivityDetailsScreenProps) => {
  const { id, name, days, description, user, cover } = activity

  const [participations, setParticipations] = useState<Participation[]>([])

  const onPressSeeAll = useCallback(() => {
    AppNavigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: Screens.activityParticipationsScreen,
              passProps: {
                participations,
              },
            },
          },
        ],
      },
    })
  }, [participations])

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
        description,
        user,
        participations,
        cover,
        onPressSeeAll,
      }}
    />
  )
}

ActivityDetailsScreen.options = (): Options => ({
  topBar: {
    background: {
      color: 'transparent',
    },
    drawBehind: true,
    leftButtons: [modalBackButton(true)],
  },
  statusBar: {
    backgroundColor: colors.backgroundColor,
  },
})

interface ActivityDetailsScreenProps {
  activity: Activity
}

export default ActivityDetailsScreen
