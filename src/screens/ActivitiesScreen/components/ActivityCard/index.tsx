import React, { memo, useRef, useState, useCallback, useMemo, useEffect } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  findNodeHandle,
  LayoutChangeEvent,
  Platform,
  Animated,
  Easing,
} from 'react-native'
import { BlurView } from '@react-native-community/blur'

import { Touchable, ParticipantsCount } from '../../../../component'
import { getFrequency } from '../../../../constants/frequency'
import { useTimeout } from '../../../../hooks'

import styles from './styles'

export default memo(
  ({ title, frequency, participantsCount, completedCount, author, cover, isLast, onPress }: Props) => {
    const animatedValue = useMemo(() => new Animated.Value(cover ? 0 : 1), [])
    const [viewRefId, setViewRefId] = useState<number | null>(null)
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const [size, setSize] = useState({ width: 0, height: 0 })
    const viewRef = useRef<Image>(null)
    const [setViewRefIdTimeout] = useTimeout()

    const onLoadEnd = useCallback(() => {
      setViewRefIdTimeout(() => setViewRefId(findNodeHandle(viewRef.current)), 500)
    }, [])

    const onLayoutInfo = useCallback(
      ({
        nativeEvent: {
          layout: { x, y },
        },
      }: LayoutChangeEvent) => setCoords({ x, y }),
      []
    )

    const onLayoutWrapper = useCallback(
      ({
        nativeEvent: {
          layout: { width, height },
        },
      }: LayoutChangeEvent) => setSize({ width, height }),
      []
    )

    useEffect(() => {
      if (viewRefId) {
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 200,
          easing: Easing.ease,
          useNativeDriver: false,
        }).start()
      }
    }, [viewRefId])

    return (
      <Touchable withoutFeedback={true} onPress={onPress} style={[styles.container, !isLast && styles.spacing]}>
        {cover && <Image style={styles.cover} source={{ uri: cover }} />}
        <View style={styles.tint} />
        <View style={styles.wrapper} onLayout={onLayoutWrapper}>
          <View style={styles.authorContainer}>
            <Text style={styles.author}>{author}</Text>
          </View>
          <Animated.View style={[styles.infoContainer, { opacity: animatedValue }]} onLayout={onLayoutInfo}>
            {cover && (
              <Image
                style={[styles.infoCover, { left: -coords.x, top: -coords.y, width: size.width, height: size.height }]}
                source={{ uri: cover }}
                ref={viewRef}
                onLoadEnd={onLoadEnd}
              />
            )}
            <View style={styles.tint} />
            {viewRefId && (
              <BlurView
                viewRef={viewRefId}
                blurType='light'
                blurAmount={35}
                {...Platform.select({
                  android: {
                    blurRadius: 25,
                    downsampleFactor: 5,
                  },
                })}
                style={{ ...StyleSheet.absoluteFillObject }}
              />
            )}
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.frequency}>{getFrequency(frequency)}</Text>
            {/* <View style={styles.countersContainer}>
              <ParticipantsCount count={participantsCount} description='Participants' />
              <ParticipantsCount count={completedCount} description='Completions' />
            </View> */}
          </Animated.View>
        </View>
      </Touchable>
    )
  }
)

interface Props {
  title: string
  frequency: number
  participantsCount: number
  completedCount: number
  author: string
  isLast: boolean
  cover: string
  onPress(): void
}
