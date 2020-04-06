import React, { memo } from 'react'
import { View } from 'react-native'

import { Participation as ParticipationType } from '../../AppPropTypes'
import CircularProgress from '../../component/CircularProgress'
import User from '../../component/User'
import colors from '../../colors'

import styles from './styles'

export default memo(({ participation, isLast }: Props) => (
  <View style={[styles.participant, isLast && styles.bottomSpace]}>
    <User user={participation.user} />
    <CircularProgress
      {...{
        total: participation.activity.days,
        progress: participation.progress,
        radius: 26,
        bgRingWidth: 4,
        progressRingWidth: 4,
        ringColor: colors.primary,
        ringBgColor: colors.backgroundColor,
        textFontSize: 14,
        textFontWeight: 'normal',
        clockwise: true,
        bgColor: 'gray',
        startDegrees: 0,
        withText: true,
        style: styles.progress,
      }}
    />
  </View>
))

interface Props {
  isLast: boolean
  participation: ParticipationType
}
