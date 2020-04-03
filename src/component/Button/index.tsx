import React, { memo } from 'react'
import { Text, View } from 'react-native'

import { Touchable } from '..'

import styles from './styles'

export default memo(({ onPress, title }: Props) => (
  <Touchable onPress={onPress} style={styles.container}>
    <View style={styles.inner}>
      <Text>{title}</Text>
    </View>
  </Touchable>
))

interface Props {
  title: string
  onPress?(): void
}
