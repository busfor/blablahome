import React, { memo } from 'react'
import { View, Text } from 'react-native'

import CircularProgress from '../../../../component/CircularProgress'

import styles from './styles'

export default memo(({ title, progress, goal }: Props) => (
  <View style={styles.container}>
    <View style={styles.participationInfo}>
      <CircularProgress
        {...{
          progress: progress,
          radius: 12,
          bgRingWidth: 3,
          progressRingWidth: 3,
          ringColor: '#ACACAC',
          ringBgColor: '#F3F3F3',
          textFontSize: 14,
          textFontWeight: 'bold',
          clockwise: true,
          bgColor: 'gray',
          startDegrees: 0,
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.progressContainer}>
      <Text style={styles.progress}>{progress}</Text>
      <Text style={[styles.progress, styles.spacer]}>/</Text>
      <Text style={styles.progress}>{goal}</Text>
    </View>
  </View>
))

interface Props {
  title: string
  progress: number
  goal: number
}
