import React, { memo } from 'react'
import { Text, ScrollView } from 'react-native'

import { Touchable } from '../../../../component'

import styles from './styles'

export default memo(({ setSelectedFrequency, selectedFrequency }: Props) => (
  <ScrollView style={styles.container}>
    {variants.map(({ label, id }) => (
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

const variants = [
  {
    id: 1,
    label: '1 day per week',
  },
  {
    id: 2,
    label: '2 days per week',
  },
  {
    id: 3,
    label: '3 days per week',
  },
  {
    id: 4,
    label: '4 days per week',
  },
  {
    id: 5,
    label: '5 days per week',
  },
  {
    id: 6,
    label: '6 days per week',
  },
  {
    id: 7,
    label: 'Whole week',
  },
]
