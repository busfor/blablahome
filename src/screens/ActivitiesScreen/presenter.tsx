import React, { memo, Fragment } from 'react'
import { ScrollView, RefreshControl } from 'react-native'

import { Activity } from '../../AppPropTypes'

import styles from './styles'
import ActivityCard from './components/ActivityCard'
import TopBar from './components/TopBar'

export default memo(({ activities, onPressActivity, handleRefresh, loading }: Props) => (
  <Fragment>
    <TopBar />
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContent}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={handleRefresh} tintColor={'black'} />}
    >
      {activities.map((activity, index) => (
        <ActivityCard
          key={activity.id}
          {...{
            title: activity.name,
            frequency: activity.days,
            completedCount: activity.completions_count,
            participantsCount: activity.participants_count,
            author: activity.user,
            cover: activity.cover,
            onPress: () => onPressActivity(activity),
            isLast: index === activities.length - 1,
          }}
        />
      ))}
    </ScrollView>
  </Fragment>
))

interface Props {
  activities: Activity[]
  onPressActivity(activity: Activity): void
  handleRefresh(): void
  loading: boolean
}
