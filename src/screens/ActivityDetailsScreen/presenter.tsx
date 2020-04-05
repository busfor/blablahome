import React, { memo } from 'react'
import { Text, View, SafeAreaView, ScrollView } from 'react-native'
import FastImage from 'react-native-fast-image'

import { User as UserType, Participation as ParticipationType } from '../../AppPropTypes'
import { User, TintBackground, Touchable, Button, Participation } from '../../component'
import { getFrequency } from '../../constants/frequency'

import styles from './styles'

export default memo(
  ({ name, days, description, user, participations, cover, onPressSeeAll, onPressTakePart }: Props) => (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {cover && <FastImage style={styles.cover} source={{ uri: cover }} />}
        <TintBackground />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.frequency}>{getFrequency(days)}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <SafeAreaView>
          <View style={styles.infoContainer}>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>AUTHOR</Text>
          </View>
          <User user={user} />
          <View style={styles.headerContainer}>
            <Text style={styles.header}>PARTICIPANTS {participations.length > 0 && `(${participations.length})`}</Text>
            {participations.length > 0 && (
              <Touchable onPress={onPressSeeAll} style={styles.seeAll}>
                <Text style={styles.seeAllText}>SEE ALL</Text>
              </Touchable>
            )}
          </View>
          {participations.slice(0, 3).map((participation, index) => (
            <Participation
              key={participation.id}
              participation={participation}
              isLast={index === participations.length - 1}
            />
          ))}
          {participations.length === 0 && <Text style={styles.emptyParticipations}>You might be the first!</Text>}
          <View style={styles.buttonContainer}>
            <Button onPress={onPressTakePart} title='Take part' />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  )
)

interface Props {
  name: string
  days: number
  description: string
  user: UserType
  participations: ParticipationType[]
  cover: string
  onPressSeeAll(): void
  onPressTakePart(): void
}
