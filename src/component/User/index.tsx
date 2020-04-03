import React, { memo } from 'react'
import { Text, View } from 'react-native'

import { User } from '../../AppPropTypes'

import styles from './styles'

export default memo(({ user }: UserProps) => (
  <View style={styles.container}>
    <View style={styles.avatar} />
    <Text style={styles.username}>{user.name}</Text>
  </View>
))

interface UserProps {
  user: User
}
