import React, { memo } from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Participation } from '../../AppPropTypes'

import styles from './styles'
import ProgressSection from './components/ProgressSection'

export default memo(({ inProgress, completed, failed }: Props) => (
  <View style={styles.container}>
    <Text style={styles.title}>Progress</Text>
    <ScrollView style={styles.participations}>
      <ProgressSection participations={inProgress} title='STARTED' />
      <ProgressSection participations={completed} title='COMPLETED' />
      <ProgressSection participations={failed} title='FAILED' />
    </ScrollView>
  </View>
))

interface Props {
  inProgress: Participation[]
  completed: Participation[]
  failed: Participation[]
}
