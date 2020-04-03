import React, { memo } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default memo(({ title, progress, goal }: Props) => (
  <View style={styles.container}>
    <View style={styles.participationInfo}>
      <View style={styles.progression} />
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
