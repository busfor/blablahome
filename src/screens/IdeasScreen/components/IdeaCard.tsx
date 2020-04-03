import React, { memo } from 'react'
import { View, Text } from 'react-native'

import styles from '../styles'
import { Touchable } from '../../../component'

export default memo(({ title, participantsCount, completedCount, author, onPress }: Props) => (
  <Touchable onPress={onPress} style={styles.ideaContainer}>
    <Text style={styles.author}>{author}</Text>
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.countersContainer}>
        <View style={styles.countContainer}>
          <Text style={styles.count}>{participantsCount}</Text>
          <Text style={styles.countDescription}>Participants</Text>
        </View>
        <View style={styles.countContainer}>
          <Text style={styles.count}>{completedCount}</Text>
          <Text style={styles.countDescription}>Completions</Text>
        </View>
      </View>
    </View>
  </Touchable>
))

interface Props {
  title: string
  participantsCount: number
  completedCount: number
  author: string
  onPress(): void
}
