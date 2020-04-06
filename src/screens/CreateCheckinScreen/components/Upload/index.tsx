import React, { memo, useCallback } from 'react'
import { View, Image, Text } from 'react-native'
import ImagePicker, { Image as ImagePickerImage } from 'react-native-image-crop-picker'

import { Touchable, Button } from '../../../../component'
import { uploadIcon } from '../../../../images'

import styles from './styles'

export default memo(({ selectedImage, setSelectedImage }: Props) => {
  const onPress = useCallback(async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 1024,
        height: 1024,
        cropping: true,
        compressImageQuality: 0.6,
        forceJpg: true,
        mediaType: 'photo',
      })
      setSelectedImage(image as ImagePickerImage)
    } catch {}
  }, [])
  return (
    <View style={styles.container}>
      {!selectedImage && (
        <Touchable onPress={onPress} style={styles.touchable}>
          <View style={styles.wrapper}>
            <Image source={uploadIcon} />
            <Text style={styles.label}>Upload photo</Text>
          </View>
        </Touchable>
      )}
      {selectedImage && (
        <>
          <Image style={styles.selectedImage} source={{ uri: selectedImage.path }} />
          <Button title='Choose another' onPress={onPress} />
        </>
      )}
    </View>
  )
})

interface Props {
  selectedImage: ImagePickerImage | null
  setSelectedImage(image: ImagePickerImage): void
}
