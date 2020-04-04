import React, { useCallback, useEffect, useState, useRef } from 'react'
import { Options } from 'react-native-navigation'
import { useNavigationButtonPress, useNavigationComponentDidAppear } from 'react-native-navigation-hooks'

import { AppNavigation, AppNavigationProps } from '../../navigation'
import { Screens } from '..'
import { fetchActivities } from '../../Api'
import { Activity } from '../../AppPropTypes'
import { CreateActivityStep } from '../CreateActivityScreen/types'

import Presenter from './presenter'

const CREATE_BUTTON_ID = 'create_activity'

const ActivitiesScreen = ({ componentId }: AppNavigationProps) => {
  const [loading, setLoading] = useState(false)
  const [activities, setActivities] = useState<Activity[]>([])
  const firstAppear = useRef(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = useCallback(() => {
    fetchActivities()
      .then((response) => {
        setActivities(response.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  const handleRefresh = useCallback(() => {
    setLoading(true)
    fetchData()
  }, [fetchData])

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

  useNavigationComponentDidAppear(() => {
    if (!firstAppear.current) {
      fetchData()
    }
    firstAppear.current = false
  }, componentId)

  return <Presenter {...{ activities, onPressActivity, handleRefresh, loading }} />
}

ActivitiesScreen.options = (): Options => ({
  topBar: {
    title: {
      text: 'Activities',
    },
    background: {
      translucent: true,
    },
    rightButtons: [{ id: CREATE_BUTTON_ID, text: 'Create' }],
  },
})

export default ActivitiesScreen
