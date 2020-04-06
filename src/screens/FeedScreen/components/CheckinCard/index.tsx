import React, { memo } from 'react'
import { Image, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'

import { Checkin } from '../../../../AppPropTypes'
import { getProfilePictureUrl } from '../../../../utils'

import styles from './styles'

export default memo(({ checkin }: Props) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <FastImage style={styles.avatar} source={{ uri: getProfilePictureUrl(checkin.participation.user.user_id) }} />
      <Text style={styles.username}>{checkin.participation.user.name}</Text>
      <Text> has updated progress</Text>
    </View>
    <View style={styles.activity}>
      <Text style={styles.activityText}>
        {checkin.participation.activity.name} {checkin.progress}/{checkin.participation.activity.days}
      </Text>
    </View>
    {checkin.photo && (
      <View style={styles.photos}>
        <Image style={styles.photo} source={{ uri: checkin.photo }} />
      </View>
    )}
  </View>
))

interface Props {
  checkin: Checkin
}
