import React, { memo, ReactNode } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

export default memo(({ children, title }: Props) => (
  <View style={styles.section}>
    <Text style={styles.sectionHeader}>{title}</Text>
    {children}
  </View>
))

interface Props {
  children: ReactNode
  title: string
}
