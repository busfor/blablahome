import React from 'react'
import { Text, View, ViewStyle } from 'react-native'

import styles from './styles'

const rotateByStyle = (percent: number, base_degrees: number) => {
  let rotateBy = base_degrees
  rotateBy = base_degrees + percent * 3.6
  return {
    transform: [{ rotateZ: `${rotateBy}deg` }],
  }
}

const renderThirdLayer = (
  percent: number,
  commonStyles: ViewStyle,
  ringColorStyle: ViewStyle,
  ringBgColorStyle: ViewStyle,
  bgRingWidth: number,
  progressRingWidth: number,
  innerRingStyle: ViewStyle,
  startDegrees: number
) => {
  let rotation = 45 + startDegrees
  let offsetLayerRotation = -135 + startDegrees
  if (percent > 50) {
    return (
      <View
        style={[
          styles.secondProgressLayer,
          rotateByStyle(percent - 50, rotation),
          commonStyles,
          ringColorStyle,
          { borderWidth: progressRingWidth },
        ]}
      />
    )
  } else {
    return (
      <View
        style={[
          styles.offsetLayer,
          innerRingStyle,
          ringBgColorStyle,
          { transform: [{ rotateZ: `${offsetLayerRotation}deg` }], borderWidth: bgRingWidth },
        ]}
      />
    )
  }
}

const CircularProgress = ({
  progress,
  radius,
  bgRingWidth,
  progressRingWidth,
  ringColor,
  ringBgColor,
  bgColor,
  startDegrees,
  withText = false,
  style,
}: Props) => {
  const percent = (progress / 7) * 100
  const commonStyles = {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
  }

  const widthDiff = progressRingWidth - bgRingWidth
  const innerRadius = radius - progressRingWidth + bgRingWidth + widthDiff / 2

  const innerRingStyle = {
    width: innerRadius * 2,
    height: innerRadius * 2,
    borderRadius: innerRadius,
  }

  const ringColorStyle = {
    borderRightColor: ringColor,
    borderTopColor: ringColor,
  }

  const ringBgColorStyle = {
    borderRightColor: ringBgColor,
    borderTopColor: ringBgColor,
  }

  const thickOffsetRingStyle = {
    borderRightColor: bgColor,
    borderTopColor: bgColor,
  }

  let rotation = -135 + startDegrees
  let firstProgressLayerStyle
  let displayThickOffsetLayer = false
  if (percent > 50) {
    firstProgressLayerStyle = rotateByStyle(50, rotation)
  } else {
    firstProgressLayerStyle = rotateByStyle(percent, rotation)
    if (progressRingWidth > bgRingWidth) {
      displayThickOffsetLayer = true
    }
  }

  let offsetLayerRotation = -135 + startDegrees

  return (
    <View style={[styles.container, { width: radius * 2, height: radius * 2 }, style]}>
      <View style={[styles.baselayer, innerRingStyle, { borderColor: ringBgColor, borderWidth: bgRingWidth }]} />
      <View
        style={[
          styles.firstProgressLayer,
          firstProgressLayerStyle,
          commonStyles,
          ringColorStyle,
          { borderWidth: progressRingWidth },
        ]}
      />
      {displayThickOffsetLayer && (
        <View
          style={[
            styles.offsetLayer,
            commonStyles,
            thickOffsetRingStyle,
            { transform: [{ rotateZ: `${offsetLayerRotation}deg` }], borderWidth: progressRingWidth },
          ]}
        />
      )}
      {renderThirdLayer(
        percent,
        commonStyles,
        ringColorStyle,
        ringBgColorStyle,
        bgRingWidth,
        progressRingWidth,
        innerRingStyle,
        startDegrees
      )}
      {withText && <Text style={[styles.display]}>{progress}/7</Text>}
    </View>
  )
}

interface Props {
  progress: number
  radius: number
  bgRingWidth: number
  progressRingWidth: number
  ringColor: string
  ringBgColor: string
  bgColor: string
  startDegrees: number
  withText?: boolean
  style?: ViewStyle
}

export default CircularProgress
