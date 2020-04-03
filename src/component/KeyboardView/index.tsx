import React, { ReactNode, memo } from 'react'
import { Platform, KeyboardAvoidingView, View, KeyboardAvoidingViewProps } from 'react-native'

import styles from './styles'

export default memo(({ children, modal = false, ...otherProps }: Props & KeyboardAvoidingViewProps) => {
  if (Platform.OS === 'ios') {
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={modal ? 110 : 0}
        behavior='padding'
        {...otherProps}
        style={styles.container}
      >
        {children}
      </KeyboardAvoidingView>
    )
  }
  return (
    <View style={styles.container} {...otherProps}>
      {children}
    </View>
  )
})

interface Props {
  children: ReactNode
  modal?: boolean
}
