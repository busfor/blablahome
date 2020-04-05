import React, { memo } from 'react'
import { View, Text, Image } from 'react-native'

import CircularProgress from '../../../../component/CircularProgress'
import colors from '../../../../colors'
import { completedIcon } from '../../../../images'

import styles from './styles'

export default memo(({ title, progress, goal }: Props) => (
  <View style={styles.container}>
    <View style={styles.participationInfo}>
      {progress < goal && (
        <CircularProgress
          {...{
            progress: progress,
            radius: 12,
            bgRingWidth: 3,
            progressRingWidth: 3,
            ringColor: colors.primary,
            ringBgColor: colors.backgroundColor,
            bgColor: 'gray',
            startDegrees: 0,
          }}
        />
      )}
      {progress === goal && <Image source={completedIcon} />}
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
