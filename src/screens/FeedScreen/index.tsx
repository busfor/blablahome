import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Options } from 'react-native-navigation'
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks'

import { fetchCheckins } from '../../Api'
import { Checkin } from '../../AppPropTypes'
import useHideSplashScreen from '../../hooks/useHideSplashScreen'
import { AppNavigation, AppNavigationProps } from '../../navigation'
import { Screens } from '../index'

import Presenter from './presenter'

const FeedScreen = ({ componentId }: AppNavigationProps) => {
  useHideSplashScreen()

  const [loading, setLoading] = useState(false)
  const [checkins, setCheckins] = useState<Checkin[]>([])
  const firstAppear = useRef(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = useCallback(() => {
    fetchCheckins()
      .then((response) => {
        setCheckins(response.data)
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

  const onPressCheckin = useCallback((checkin: Checkin) => {
    AppNavigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: Screens.checkinDetailsScreen,
              passProps: {
                checkin,
              },
            },
          },
        ],
      },
    })
  }, [])

  useNavigationComponentDidAppear(() => {
    if (!firstAppear.current) {
      fetchData()
    }
    firstAppear.current = false
  }, componentId)

  return <Presenter {...{ checkins, handleRefresh, loading, onPressCheckin }} />
}

FeedScreen.options = (): Options => ({
  topBar: {
    visible: false,
  },
})

export default FeedScreen
