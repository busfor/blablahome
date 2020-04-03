import React, { memo } from 'react'
import { View, Text, Image } from 'react-native'

import { Touchable, ParticipantsCount } from '../../../../component'
import { getFrequency } from '../../../../constants/frequency'

import styles from './styles'

export default memo(
  ({ title, frequency, participantsCount, completedCount, author, cover, isLast, onPress }: Props) => (
    <Touchable onPress={onPress} style={[styles.container, !isLast && styles.spacing]}>
      <Image style={styles.cover} source={{ uri: cover }} />
      <View style={styles.tint} />
      <View style={styles.wrapper}>
        <View style={styles.authorContainer}>
          <Text style={styles.author}>{author}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.frequency}>{getFrequency(frequency)}</Text>
          <View style={styles.countersContainer}>
            <ParticipantsCount count={participantsCount} description='Participants' />
            <ParticipantsCount count={completedCount} description='Completions' />
          </View>
        </View>
      </View>
    </Touchable>
  )
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
