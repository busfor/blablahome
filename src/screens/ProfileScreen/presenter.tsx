import React, { memo } from 'react'
import { View, Text } from 'react-native'

import { Touchable, ParticipantsCount } from '../../component'

import styles from './styles'

const formatName = (name: string) => name.replace(' ', '\n')

export default memo(({ loggedIn, username, handleLogin, handleLogout }: Props) => {
  if (!loggedIn)
    return (
      <View style={styles.container}>
        <Touchable onPress={handleLogin} style={styles.fbButton}>
          <Text>Login</Text>
        </Touchable>
      </View>
    )

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Text style={styles.username}>{formatName(username || '')}</Text>
        <View style={styles.avatar} />
      </View>
      <View style={styles.countersContainer}>
        <ParticipantsCount count={15} description='Joins' />
        <ParticipantsCount count={8} description='Successes' />
        <ParticipantsCount count={7} description='Fails' />
        <ParticipantsCount count={32} description='Check-ins' />
      </View>
      <Touchable onPress={handleLogout} style={styles.fbButton}>
        <Text>Logout</Text>
      </Touchable>
    </View>
  )
})

interface Props {
  loggedIn: boolean
  username: string | null
  handleLogin(): void
  handleLogout(): void
}
