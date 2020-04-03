import React, { memo } from 'react'
import { View, Text } from 'react-native'

import { Participation } from '../../../../AppPropTypes'
import ProgressCard from '../ProgressCard'

import styles from './styles'

export default memo(({ participations, title }: Props) => {
  if (participations.length === 0) {
    return null
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeader}>{title}</Text>
      {participations.map((participation) => (
        <ProgressCard
          key={participation.id}
          {...{
            title: participation.activity.name,
            progress: participation.progress,
            goal: participation.activity.days,
          }}
        />
      ))}
    </View>
  )
})

interface Props {
  participations: Participation[]
  title: string
}
