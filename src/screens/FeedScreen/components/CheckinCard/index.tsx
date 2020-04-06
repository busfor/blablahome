import React, { memo } from 'react'
import { Image, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'

import { Activity, Checkin } from '../../../../AppPropTypes'
import { getProfilePictureUrl } from '../../../../utils'
import { Touchable } from '../../../../component'

import styles from './styles'

export default memo(({ checkin, onPressActivity }: Props) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <FastImage style={styles.avatar} source={{ uri: getProfilePictureUrl(checkin.participation.user.user_id) }} />
      <Text style={styles.username}>{checkin.participation.user.name}</Text>
      <Text> has updated progress</Text>
    </View>
    <Touchable style={styles.activity} onPress={() => onPressActivity(checkin.participation.activity)}>
      <Text style={styles.activityText}>
        {checkin.participation.activity.name} {checkin.progress}/{checkin.participation.activity.days}
      </Text>
    </Touchable>
    <Text style={styles.message}>
      <Text style={styles.quote}>“ </Text>
      {checkin.message}
      <Text style={styles.quote}> ”</Text>
    </Text>
    {checkin.photo && (
      <View style={styles.photos}>
        <Image style={styles.photo} source={{ uri: checkin.photo }} />
      </View>
    )}
  </View>
))

interface Props {
  checkin: Checkin
  onPressActivity(activity: Activity): void
}
