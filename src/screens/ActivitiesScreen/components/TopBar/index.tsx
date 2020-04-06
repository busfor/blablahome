import React, { memo } from 'react'
import { View, Text, Image } from 'react-native'

import { virusIcon } from '../../../../images'

import styles from './styles'

export default memo(() => (
  <View style={styles.container}>
    <View style={styles.infoContainer}>
      <Text style={styles.infoTitle}>COVID-19</Text>
      <Text style={styles.infoText}>Please, stay home and we will stop the spread of the virus worldwide.</Text>
      <Text style={styles.infoText}>Join other people's activities and achieve goals on quarantine!</Text>
      <View style={styles.virusContainer}>
        <Image source={virusIcon} />
      </View>
    </View>
  </View>
))
