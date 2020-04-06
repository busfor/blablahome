import React, { memo } from 'react'
import { View, Text, Image, ImageSourcePropType } from 'react-native'

import styles from './styles'

export default memo(({ title, points, image }: Props) => (
  <View style={styles.container}>
    <View style={styles.icon}>
      <Image source={image} />
    </View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.points}>{`+${points}`}</Text>
  </View>
))

interface Props {
  image: ImageSourcePropType
  title: string
  points: number
}
