import React, { memo } from 'react'
import { RefreshControl, ScrollView } from 'react-native'

import { Checkin } from '../../AppPropTypes'

import styles from './styles'
import CheckinCard from './components/CheckinCard'

export default memo(({ checkins, handleRefresh, loading }: Props) => (
  <ScrollView
    style={styles.container}
    contentContainerStyle={styles.scrollViewContent}
    refreshControl={<RefreshControl refreshing={loading} onRefresh={handleRefresh} tintColor={'black'} />}
  >
    {checkins.map((checkin) => (
      <CheckinCard checkin={checkin} key={checkin.id} />
    ))}
  </ScrollView>
))

interface Props {
  checkins: Checkin[]
  handleRefresh(): void
  loading: boolean
}
