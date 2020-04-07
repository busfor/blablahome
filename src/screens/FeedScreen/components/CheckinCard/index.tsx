import moment from 'moment'
import React, { memo, useState } from 'react'
import { Image, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import PhotoView from '@merryjs/photo-viewer'

import { Checkin } from '../../../../AppPropTypes'
import { getProfilePictureUrl } from '../../../../utils'
import { Touchable } from '../../../../component'

import styles from './styles'

export default memo(({ checkin, onPressCheckin }: Props) => {
  const [visible, setVisible] = useState(false)

  return (
    <Touchable style={styles.container} onPress={() => onPressCheckin(checkin)}>
      <View style={styles.header}>
        <FastImage style={styles.avatar} source={{ uri: getProfilePictureUrl(checkin.participation.user.user_id) }} />

        <Text style={styles.text}>
          <Text style={styles.username}>{checkin.participation.user.name}</Text> has updated progress
          <Text style={styles.fromNow}>
            {'\n'}
            {moment(checkin.inserted_at).fromNow(true)} ago
          </Text>
        </Text>
      </View>
      <View style={styles.activity}>
        <Text style={styles.activityText}>
          {checkin.participation.activity.name} {checkin.progress}/{checkin.participation.activity.days}
        </Text>
      </View>
      {checkin.message && <Text style={styles.message}>{checkin.message}</Text>}

      {checkin.photo && (
        <View style={styles.photos}>
          <View style={styles.photoContainer}>
            <Image style={styles.photo} source={{ uri: checkin.photo }} />
          </View>
          <PhotoView
            visible={visible}
            onDismiss={() => setVisible(false)}
            initial={0}
            data={[{ source: { uri: checkin.photo } }]}
          />
        </View>
      )}
    </Touchable>
  )
})

interface Props {
  checkin: Checkin
  onPressCheckin(checkin: Checkin): void
}
