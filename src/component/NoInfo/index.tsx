import React, { memo } from 'react'
import { View, Image, Text } from 'react-native'

import Touchable from '../Touchable'
import { noInfoIcon } from '../../images'

import styles from './styles'

const NoInfo = memo(({ onPress, text = '', buttonText = '' }: Props) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Image source={noInfoIcon} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
      <Touchable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Touchable>
    </View>
  </View>
))

export default NoInfo

interface Props {
  onPress(): void
  text: string
  buttonText: string
}
