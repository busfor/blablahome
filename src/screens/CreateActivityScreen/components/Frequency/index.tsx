import React, { memo } from 'react'
import { Text, ScrollView } from 'react-native'

import { Touchable } from '../../../../component'
import { frequency } from '../../../../constants/frequency'

import styles from './styles'

export default memo(({ setSelectedFrequency, selectedFrequency }: Props) => (
  <ScrollView style={styles.container}>
    {frequency.map(({ label, id }) => (
      <Touchable
        style={[styles.item, selectedFrequency === id && styles.selectedItem]}
        onPress={() => setSelectedFrequency(id)}
        key={label}
      >
        <Text style={styles.label}>{label}</Text>
      </Touchable>
    ))}
  </ScrollView>
))

interface Props {
  selectedFrequency: number | null
  setSelectedFrequency(id: number): void
}
