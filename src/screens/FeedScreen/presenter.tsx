import React, { memo } from 'react'
import { RefreshControl, ScrollView, SafeAreaView, Text } from 'react-native'

import { Activity, Checkin } from '../../AppPropTypes'

import styles from './styles'
import CheckinCard from './components/CheckinCard'

export default memo(({ checkins, handleRefresh, onPressActivity, loading }: Props) => (
  <SafeAreaView style={styles.safeArea}>
    <Text style={styles.title}>Feed</Text>
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={handleRefresh} tintColor={'black'} />}
    >
      {checkins.map((checkin) => (
        <CheckinCard checkin={checkin} key={checkin.id} onPressActivity={onPressActivity} />
      ))}
    </ScrollView>
  </SafeAreaView>
))

interface Props {
  checkins: Checkin[]
  handleRefresh(): void
  loading: boolean
  onPressActivity(activity: Activity): void
}
