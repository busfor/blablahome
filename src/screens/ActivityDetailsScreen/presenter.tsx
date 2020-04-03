import React, { memo } from 'react'
import { Text, View, ScrollView } from 'react-native'

import { User as UserType, Participation as ParticipationType } from '../../AppPropTypes'
import { ParticipantsCount, User } from '../../component'
import { getFrequency } from '../../constants/frequency'

import styles from './styles'
import Participation from './Components/Participation'

export default memo(({ name, days, participantsCount, completedCount, description, user, participations }: Props) => (
  <View style={styles.container}>
    <View style={styles.topContainer}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.frequency}>{getFrequency(days)}</Text>
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
        <Text style={styles.header}>PARTICIPANTS {participations.length > 0 && participations.length}</Text>
      </View>
      {participations.map((participation, index) => (
        <Participation
          key={participation.id}
          participation={participation}
          isLast={index === participations.length - 1}
        />
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
  participations: ParticipationType[]
}
