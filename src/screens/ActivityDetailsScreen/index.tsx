import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { Options } from 'react-native-navigation'
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { noop } from 'lodash'
import { useSelector } from 'react-redux'

import { Activity, Participation } from '../../AppPropTypes'
import { modalBackButton, AppNavigationProps, AppNavigation } from '../../navigation/index'
import { fetchParticipations, joinActivitity } from '../../Api'
import colors from '../../colors'
import { Screens } from '..'
import { RootState } from '../../redux/reducers'

import Presenter from './presenter'

const ActivityDetailsScreen = ({ componentId, activity }: AppNavigationProps & ActivityDetailsScreenProps) => {
  const { id, name, days, description, user, cover } = activity

  const [participations, setParticipations] = useState<Participation[]>([])

  const userId = useSelector((state: RootState) => state.auth.user.id)

  const canParticipateIn = useMemo(
    () =>
      participations.findIndex(
        (participation) => participation.user.id === userId && participation.progress === activity.days
      ) !== -1 || true,
    [activity, userId, participations]
  )

  const canCheckIn = useMemo(() => {
    const participation = participations.find((item) => item.user.id === userId)
    return participation && participation.progress < activity.days
  }, [activity, userId, participations])

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

  const onPressTakePart = useCallback(() => {
    joinActivitity(id)
      .then((response) => {
        setParticipations([response.data, ...participations])
      })
      .catch(noop)
  }, [id, participations])

  const onPressCheckIn = useCallback(() => {
    alert('check in')
  }, [])

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
        canParticipateIn,
        canCheckIn,
        onPressSeeAll,
        onPressTakePart,
        onPressCheckIn,
      }}
    />
  )
}

ActivityDetailsScreen.options = (): Options => ({
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

interface ActivityDetailsScreenProps {
  activity: Activity
}

export default ActivityDetailsScreen
