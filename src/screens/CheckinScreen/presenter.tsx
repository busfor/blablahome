import React, { memo } from 'react'
import { Text, View, SafeAreaView, ScrollView } from 'react-native'
import FastImage from 'react-native-fast-image'

import { Checkin } from '../../AppPropTypes'
import { Participation } from '../../component'

import styles from './styles'

export default memo(({ photo, message, participation, progress }: Props & Checkin) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.topTitle} adjustsFontSizeToFit>
        {progress}/{participation.activity.days}
      </Text>
      <Text style={styles.bottomTitle} adjustsFontSizeToFit>
        {participation.activity.name}
      </Text>
    </View>
    <View style={styles.topContainer}>{photo && <FastImage style={styles.cover} source={{ uri: photo }} />}</View>
    <ScrollView contentContainerStyle={styles.content}>
      <SafeAreaView>
        <Participation participation={participation} />
        <Text style={styles.message}>{message}</Text>
      </SafeAreaView>
    </ScrollView>
  </View>
))

interface Props {}
