import React, { memo } from 'react'
import { View, Text, TextInput, TextInputProps } from 'react-native'

export default memo(({ label, ...textInputProps }: Props & TextInputProps) => (
  <View>
    <Text>{label}</Text>
    <TextInput autoFocus {...textInputProps} />
  </View>
))

interface Props {
  label: string
}
