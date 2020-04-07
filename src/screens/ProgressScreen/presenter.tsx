import React, { memo } from 'react'
import { Text, ScrollView, SafeAreaView, RefreshControl } from 'react-native'

import { Participation } from '../../AppPropTypes'

import styles from './styles'
import ProgressSection from './components/ProgressSection'

export default memo(({ inProgress, completed, failed, loading, handleRefresh, handleAcivityPress }: Props) => (
  <SafeAreaView style={styles.safeArea}>
    <Text style={styles.title}>Progress</Text>
    <ScrollView refreshControl={<RefreshControl refreshing={loading} onRefresh={handleRefresh} tintColor={'black'} />}>
      <ProgressSection participations={inProgress} title='STARTED' handleAcivityPress={handleAcivityPress} />
      <ProgressSection participations={completed} title='COMPLETED' handleAcivityPress={handleAcivityPress} />
      <ProgressSection participations={failed} title='FAILED' handleAcivityPress={handleAcivityPress} />
    </ScrollView>
  </SafeAreaView>
))

interface Props {
  inProgress: Participation[]
  completed: Participation[]
  failed: Participation[]
  loading: boolean
  handleRefresh(): void
  handleAcivityPress(participation: Participation): void
}
