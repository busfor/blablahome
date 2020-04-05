import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Options } from 'react-native-navigation'
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks'

import { fetchCheckins } from '../../Api'
import { Checkin } from '../../AppPropTypes'
import useHideSplashScreen from '../../hooks/useHideSplashScreen'
import { AppNavigationProps } from '../../navigation'

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

  useNavigationComponentDidAppear(() => {
    if (!firstAppear.current) {
      fetchData()
    }
    firstAppear.current = false
  }, componentId)

  return <Presenter {...{ checkins, handleRefresh, loading }} />
}

FeedScreen.options = (): Options => ({
  topBar: {
    title: {
      text: 'Feed',
    },
  },
})

export default FeedScreen
