import React, { memo } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import FastImage from 'react-native-fast-image'

import { Touchable, ParticipantsCount, Section, Achievement } from '../../component'
import { User } from '../../AppPropTypes'
import { getProfilePictureUrl } from '../../utils'

import styles from './styles'
import { weekAchievement, checkinAchievement, joinAchievement } from './assets/index'

const formatName = (name: string) => name.replace(' ', '\n')

export default memo(({ user, handleLogin, handleLogout }: Props) => {
  if (!user.id) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Touchable onPress={handleLogin} style={styles.fbButton}>
            <Text>Login</Text>
          </Touchable>
        </View>
      </SafeAreaView>
    )
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.user}>
          <Text style={styles.username}>{formatName(user.name || '')}</Text>
          {user.user_id && <FastImage source={{ uri: getProfilePictureUrl(user.user_id) }} style={styles.avatar} />}
        </View>
        <Section title='ACTIVITIES'>
          <View style={styles.countersContainer}>
            <ParticipantsCount count={user.joins_count} description='Joins' />
            <ParticipantsCount count={user.completions_count} description='Successes' />
            <ParticipantsCount count={user.fails_count} description='Fails' />
          </View>
        </Section>
        <Section title='ACHIEVEMENTS'>
          <Achievement title='2 weeks in a row' points={25} image={weekAchievement} />
          <Achievement title='5 checkin in a row' points={10} image={checkinAchievement} />
          <Achievement title='Joining BlaBlaHome' points={5} image={joinAchievement} />
        </Section>
        <Touchable onPress={handleLogout} style={styles.fbButton}>
          <Text>Logout</Text>
        </Touchable>
      </View>
    </SafeAreaView>
  )
})

interface Props {
  user: User
  handleLogin(): void
  handleLogout(): void
}
