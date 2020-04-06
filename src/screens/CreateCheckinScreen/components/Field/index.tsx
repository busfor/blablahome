import React, { memo, useRef, useEffect } from 'react'
import { View, Text, TextInput, TextInputProps } from 'react-native'

import { useTimeout } from '../../../../hooks'

import styles from './styles'

export default memo(({ label, ...textInputProps }: Props & TextInputProps) => {
  const textInputRef = useRef<TextInput>(null)
  const [focusTimeout] = useTimeout()

  useEffect(() => {
    focusTimeout(() => textInputRef.current?.focus(), 400)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        multiline={true}
        textAlignVertical='top'
        {...textInputProps}
        style={styles.textInput}
        ref={textInputRef}
      />
    </View>
  )
})

interface Props {
  label: string
}
