import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Options } from 'react-native-navigation'

import { Activity } from '../../AppPropTypes'
import { ParticipantsCount, User } from '../../component'

import styles from './styles'

const ActivityDetailsScreen = ({ activity }: ActivityDetailsScreenProps) => (
  <>
    <View style={styles.topContainer}>
      <Text style={styles.title}>{activity.title}</Text>
      <Text style={styles.frequency}>{activity.frequency}</Text>
    </View>
    <View style={styles.container}>
      <View style={styles.countersContainer}>
        <ParticipantsCount count={activity.participants.length} description='Participants' />
        <ParticipantsCount count={activity.completed} description='Completions' />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.description}>{activity.description}</Text>
        <User user={activity.author} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>LIST OF PARTICIPANTS</Text>
      </View>
      <ScrollView style={styles.participants}>
        {activity.participants.map((participant) => (
          <View style={styles.participant} key={participant.id}>
            <User user={participant} />
          </View>
        ))}
      </ScrollView>
    </View>
  </>
)

ActivityDetailsScreen.options = (): Options => ({
  topBar: {
    background: {
      color: '#F6F5F5',
    },
    noBorder: true,
  },
})

interface ActivityDetailsScreenProps {
  activity: Activity
}

export default ActivityDetailsScreen
