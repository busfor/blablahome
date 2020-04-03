import React, { memo } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default memo(({ title, points }: Props) => (
  <View style={styles.container}>
    <View style={styles.icon} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.points}>{`+${points}`}</Text>
  </View>
))

interface Props {
  title: string
  points: number
}
