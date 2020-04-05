import React, { memo } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import FastImage from 'react-native-fast-image'

import { Touchable, ParticipantsCount, Section, Achievement } from '../../component'

import styles from './styles'

const formatName = (name: string) => name.replace(' ', '\n')

export default memo(({ loggedIn, username, pictureUrl, handleLogin, handleLogout }: Props) => {
  if (!loggedIn)
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Touchable onPress={handleLogin} style={styles.fbButton}>
            <Text>Login</Text>
          </Touchable>
        </View>
      </SafeAreaView>
    )

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.user}>
          <Text style={styles.username}>{formatName(username || '')}</Text>
          {pictureUrl && <FastImage source={{ uri: pictureUrl }} style={styles.avatar} />}
        </View>
        <Section title='ACTIVITIES'>
          <View style={styles.countersContainer}>
            <ParticipantsCount count={15} description='Joins' />
            <ParticipantsCount count={8} description='Successes' />
            <ParticipantsCount count={7} description='Fails' />
            <ParticipantsCount count={32} description='Check-ins' />
          </View>
        </Section>
        <Section title='ACHIEVEMENTS'>
          <>
            <Achievement title='Athlete: 5 streak weekly sports activities' points={25} />
            <Achievement title='Waterlover: 2 activities completed' points={10} />
            <Achievement title='Joining BlaBlaHome' points={5} />
          </>
        </Section>
        <Touchable onPress={handleLogout} style={styles.fbButton}>
          <Text>Logout</Text>
        </Touchable>
      </View>
    </SafeAreaView>
  )
})

interface Props {
  loggedIn: boolean
  username: string
  pictureUrl: string | null
  handleLogin(): void
  handleLogout(): void
}
