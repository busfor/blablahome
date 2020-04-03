import React, { memo } from 'react'
import { ScrollView } from 'react-native'

import { Activity } from '../../AppPropTypes'

import styles from './styles'
import ActivityCard from './components/ActivityCard'

export default memo(({ activities, onPressActivity }: Props) => (
  <ScrollView style={styles.container}>
    {activities.map((activity, index) => (
      <ActivityCard
        key={activity.id}
        {...{
          title: activity.title,
          frequency: activity.frequency,
          completedCount: activity.completed,
          participantsCount: activity.participants.length,
          author: activity.author.name,
          onPress: () => onPressActivity(activity),
          isLast: index === activities.length - 1,
        }}
      />
    ))}
  </ScrollView>
))

interface Props {
  activities: Activity[]
  onPressActivity(activity: Activity): void
}
