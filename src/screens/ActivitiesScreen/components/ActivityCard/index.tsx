import React, { memo, useRef, useState, useCallback } from 'react'
import { View, Text, Image, StyleSheet, findNodeHandle, LayoutChangeEvent, Platform } from 'react-native'
import { BlurView } from '@react-native-community/blur'

import { Touchable, ParticipantsCount } from '../../../../component'
import { getFrequency } from '../../../../constants/frequency'

import styles from './styles'

export default memo(
  ({ title, frequency, participantsCount, completedCount, author, cover, isLast, onPress }: Props) => {
    const [viewRefId, setViewRefId] = useState<number | null>(null)
    const [coords, setCoords] = useState({ x: 0, y: 0 })
    const [size, setSize] = useState({ width: 0, height: 0 })
    const viewRef = useRef<Image>(null)

    const onLayout = useCallback(() => {
      setViewRefId(findNodeHandle(viewRef.current))
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

    return (
      <Touchable withoutFeedback={true} onPress={onPress} style={[styles.container, !isLast && styles.spacing]}>
        {cover && <Image style={styles.cover} source={{ uri: cover }} />}
        <View style={styles.tint} />
        <View style={styles.wrapper} onLayout={onLayoutWrapper}>
          <View style={styles.authorContainer}>
            <Text style={styles.author}>{author}</Text>
          </View>
          <View style={styles.infoContainer} onLayout={onLayoutInfo}>
            {cover && (
              <Image
                style={[styles.infoCover, { left: -coords.x, top: -coords.y, width: size.width, height: size.height }]}
                source={{ uri: cover }}
                ref={viewRef}
                onLayout={onLayout}
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
          </View>
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
