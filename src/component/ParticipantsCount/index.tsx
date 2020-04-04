import React, { memo } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default memo(({ count, description, light = false }: Props) => (
  <View style={styles.countContainer}>
    <Text style={[styles.count, light && styles.light]}>{count}</Text>
    <Text style={[styles.countDescription, light && styles.light]}>{description}</Text>
  </View>
))

interface Props {
  count: number
  description: string
  light?: boolean
}
