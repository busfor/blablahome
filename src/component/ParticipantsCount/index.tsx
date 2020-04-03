import React, { memo } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default memo(({ count, description }: Props) => (
  <View style={styles.countContainer}>
    <Text style={styles.count}>{count}</Text>
    <Text style={styles.countDescription}>{description}</Text>
  </View>
))

interface Props {
  count: number
  description: string
}
