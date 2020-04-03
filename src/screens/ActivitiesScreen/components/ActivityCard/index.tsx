import React, { memo } from 'react'
import { View, Text } from 'react-native'

import { Touchable, ParticipantsCount } from '../../../../component'

import styles from './styles'

export default memo(({ title, frequency, participantsCount, completedCount, author, isLast, onPress }: Props) => (
  <Touchable onPress={onPress} style={[styles.container, !isLast && styles.spacing]}>
    <Text style={styles.author}>{author}</Text>
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.frequency}>{frequency}</Text>
      <View style={styles.countersContainer}>
        <ParticipantsCount count={participantsCount} description='Participants' />
        <ParticipantsCount count={completedCount} description='Completions' />
      </View>
    </View>
  </Touchable>
))

interface Props {
  title: string
  frequency: number
  participantsCount: number
  completedCount: number
  author: string
  isLast: boolean
  onPress(): void
}
