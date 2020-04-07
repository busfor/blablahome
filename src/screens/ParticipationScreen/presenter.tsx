import React, { memo, useCallback, useState } from 'react'
import { Text, View, Image, SafeAreaView, ScrollView, LayoutChangeEvent } from 'react-native'
import FastImage from 'react-native-fast-image'

import { Participation, Checkin } from '../../AppPropTypes'
import { TintBackground, Touchable } from '../../component'
import { getFrequency } from '../../constants/frequency'
import { plusIcon } from '../../images'

import styles from './styles'

export default memo(
  ({
    participation: {
      activity: { cover, name, days },
    },
    progress,
    canCheckIn,
    checkins,
    onPressCheckin,
    onPressAdd,
  }: Props) => {
    const [width, setWidth] = useState(0)

    const onLayoutCheckins = useCallback(
      (e: LayoutChangeEvent) => {
        const newWidth = e.nativeEvent.layout.width / 3
        if (width !== newWidth) {
          setWidth(newWidth)
        }
      },
      [width]
    )

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          {cover && <FastImage style={styles.cover} source={{ uri: cover }} />}
          <TintBackground />
          <TintBackground />
          <Text style={styles.title} adjustsFontSizeToFit numberOfLines={2}>
            {name}
          </Text>
          <Text style={styles.frequency}>{getFrequency(days)}</Text>
        </View>
        <ScrollView contentContainerStyle={styles.content}>
          <SafeAreaView>
            <View style={styles.goalContainer}>
              <Text style={styles.goalValue}>
                {progress}/{days}
              </Text>
              <Text style={styles.goalLabel}>Weekly goal</Text>
            </View>
            <View style={styles.progress}>
              <View style={[styles.progressValue, { width: `${(progress / days) * 100}%` }]} />
            </View>
            <View style={styles.headerContainer}>
              <Text style={styles.header}>MY PROGRESS</Text>
            </View>
            <View style={styles.checkins} onLayout={onLayoutCheckins}>
              {canCheckIn && (
                <Touchable onPress={onPressAdd} style={[styles.checkinContainer, { width, height: width }]}>
                  <View style={styles.add}>
                    <Image source={plusIcon} />
                  </View>
                </Touchable>
              )}
              {checkins.map((checkin) => (
                <Touchable
                  onPress={() => onPressCheckin(checkin)}
                  key={checkin.id}
                  style={[styles.checkinContainer, { width, height: width }]}
                >
                  <FastImage style={styles.checkinPhoto} source={{ uri: checkin.photo }} />
                </Touchable>
              ))}
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    )
  }
)

interface Props {
  participation: Participation
  progress: number
  canCheckIn: boolean
  checkins: Checkin[]
  onPressCheckin(checkin: Checkin): void
  onPressAdd(): void
}
