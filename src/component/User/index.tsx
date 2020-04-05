import React, { memo } from 'react'
import { Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'

import { User } from '../../AppPropTypes'
import { getProfilePictureUrl } from '../../utils'

import styles from './styles'

export default memo(({ user }: UserProps) => (
  <View style={styles.container}>
    <FastImage source={{ uri: getProfilePictureUrl(user.user_id) }} style={styles.avatar} />
    <Text style={styles.username}>{user.name}</Text>
  </View>
))

interface UserProps {
  user: User
}
