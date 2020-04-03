import React, { memo } from 'react'
import { Text, View, ScrollView } from 'react-native'

import { User as UserType, Participation } from '../../AppPropTypes'
import { ParticipantsCount, User } from '../../component'

import styles from './styles'

export default memo(({ name, days, participantsCount, completedCount, description, user, participants }: Props) => (
  <View style={styles.container}>
    <View style={styles.topContainer}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.frequency}>{days}</Text>
    </View>
    <ScrollView style={styles.content}>
      <View style={styles.countersContainer}>
        <ParticipantsCount count={participantsCount} description='Participants' />
        <ParticipantsCount count={completedCount} description='Completions' />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.description}>{description}</Text>
        <User user={user} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>LIST OF PARTICIPANTS</Text>
      </View>
      {participants.map((participant, index) => (
        <View
          style={[styles.participant, index === participants.length - 1 && styles.bottomSpace]}
          key={participant.id}
        >
          <User user={participant.user} />
        </View>
      ))}
    </ScrollView>
  </View>
))

interface Props {
  name: string
  days: number
  participantsCount: number
  completedCount: number
  description: string
  user: UserType
  participants: Participation[]
}
