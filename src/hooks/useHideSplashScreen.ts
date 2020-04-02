import { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

import useTimeout from './useTimeout'

const useHideSplashScreen = (delay = 0) => {
  const [timeout] = useTimeout()
  useEffect(() => {
    if (delay > 0) {
      timeout(SplashScreen.hide, delay)
    } else {
      SplashScreen.hide()
    }
  }, [])
}

export default useHideSplashScreen
