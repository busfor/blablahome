import React, { useCallback, useEffect, useState } from 'react'
import { Options } from 'react-native-navigation'
import { useNavigationButtonPress } from 'react-native-navigation-hooks/dist'

import { AppNavigation, AppNavigationProps } from '../../navigation'
import { Screens } from '..'
import { fetchActivities } from '../../Api'
import { Activity } from '../../AppPropTypes'
import { CreateActivityStep } from '../CreateActivityScreen/types'

import Presenter from './presenter'

const CREATE_BUTTON_ID = 'create_activity'

const ActivitiesScreen = ({ componentId }: AppNavigationProps) => {
  useNavigationButtonPress(
    () => {
      AppNavigation.showModal({
        stack: {
          children: [
            {
              component: {
                name: Screens.createActivityScreen,
                passProps: {
                  step: CreateActivityStep.title,
                },
              },
            },
          ],
        },
      })
    },
    componentId,
    CREATE_BUTTON_ID
  )

  const [loading, setLoading] = useState(false)
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    handleRefresh()
  }, [])

  const handleRefresh = useCallback(() => {
    setLoading(true)
    fetchActivities()
      .then((response) => {
        setActivities(response.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  const onPressActivity = useCallback((activity: Activity) => {
    AppNavigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: Screens.ActivityDetailsScreen,
              passProps: {
                activity,
              },
            },
          },
        ],
      },
    })
  }, [])

  return <Presenter {...{ activities, onPressActivity, handleRefresh, loading }} />
}

ActivitiesScreen.options = (): Options => ({
  topBar: {
    title: {
      text: 'Activities',
    },
    rightButtons: [{ id: CREATE_BUTTON_ID, text: 'Create' }],
  },
})

export default ActivitiesScreen
