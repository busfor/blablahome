import React, { useCallback, useEffect, useState } from 'react'
import { Options } from 'react-native-navigation'

import { AppNavigation } from '../../navigation'
import { Screens } from '..'
import { fetchActivities } from '../../Api'
import { Activity } from '../../AppPropTypes'

import Presenter from './presenter'

const ActivitiesScreen = () => {
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
  })

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
  },
})

export default ActivitiesScreen
