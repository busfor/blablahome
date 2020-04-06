import React, { memo, useCallback } from 'react'
import { View, Text, Image, Linking } from 'react-native'

import { virusIcon } from '../../../../images'
import { Touchable } from '../../../../component'

import styles from './styles'

export default memo(() => {
  const onPress = useCallback(
    () => Linking.openURL('https://www.who.int/emergencies/diseases/novel-coronavirus-2019'),
    []
  )
  return (
    <View style={styles.container}>
      <Touchable onPress={onPress} style={styles.infoContainer}>
        <Text style={styles.infoTitle}>COVID-19</Text>
        <Text style={styles.infoText}>Please, stay home and we will stop the spread of the virus worldwide.</Text>
        <Text style={styles.infoText}>Join other people's activities and achieve goals on quarantine!</Text>
        <View style={styles.virusContainer}>
          <Image source={virusIcon} />
        </View>
      </Touchable>
    </View>
  )
})
