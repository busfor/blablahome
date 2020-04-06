import React, { useCallback, useState, useMemo } from 'react'
import { SafeAreaView, View, Platform, Alert, Text } from 'react-native'
import { Options, Layout } from 'react-native-navigation'
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { Image as ImagePickerImage } from 'react-native-image-crop-picker'
import { useSelector } from 'react-redux'
import BackgroundUpload, { CompletedData, MultipartUploadOptions, ProgressData } from 'react-native-background-upload'
import { AccessToken } from 'react-native-fbsdk'

import { endpoints } from '../../Api'
import { AppNavigationProps, AppNavigation } from '../../navigation'
import { KeyboardView, Button } from '../../component'
import { Screens } from '..'
import { RootState } from '../../redux/reducers'

import styles from './styles'
import { CreateCheckinScreenPassProps, CreateCheckinStep } from './types'
import Field from './components/Field'
import Upload from './components/Upload'

const BACK_BUTTON_ID = 'back_button'
const CANCEL_BUTTON_ID = 'cancel_button'

const showError = (message: string) => Alert.alert('Error', message)

const CreateCheckinScreen = ({
  componentId,
  step,
  participation,
  description: propDescription = '',
  selectedImage: propSelectedImage,
}: AppNavigationProps & CreateCheckinScreenPassProps) => {
  useNavigationButtonPress(() => AppNavigation.pop(componentId), componentId, BACK_BUTTON_ID)
  useNavigationButtonPress(() => AppNavigation.popToRoot(componentId), componentId, CANCEL_BUTTON_ID)

  const [description, setDescription] = useState(propDescription || '')
  const [selectedImage, setSelectedImage] = useState<ImagePickerImage | null>(propSelectedImage || null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  const authorized = useSelector((state: RootState) => Boolean(state.auth.user.id))

  const keyboardViewEnabled = useMemo(() => step === CreateCheckinStep.description, [step])

  const openNextStep = useCallback(
    (nextStep: CreateCheckinStep) => {
      const layout: Layout<CreateCheckinScreenPassProps> = {
        component: {
          name: Screens.createCheckinScreen,
          passProps: {
            step: nextStep,
            participation,
            description,
            selectedImage,
          },
        },
      }
      AppNavigation.push(componentId, layout)
    },
    [componentId, description, selectedImage]
  )

  const submit = useCallback(async () => {
    if (!authorized || !description.length || selectedImage == null) {
      return
    }

    try {
      setUploading(true)
      const accessTokenData = await AccessToken.getCurrentAccessToken()
      const token = accessTokenData?.accessToken || ''

      const path = Platform.OS === 'ios' ? selectedImage.path : selectedImage.path.replace('file://', '')
      const options: MultipartUploadOptions = {
        url: endpoints.checkin.replace('%ACTIVITY_ID%', participation.activity.id),
        path,
        method: 'POST',
        field: 'cover',
        type: 'multipart',
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
        parameters: {
          description,
        },
        notification: {
          enabled: false,
        },
      }
      const uploadId = await BackgroundUpload.startUpload(options)
      BackgroundUpload.addListener('progress', uploadId, (data: ProgressData) => setProgress(data.progress))
      BackgroundUpload.addListener('error', uploadId, () => setUploading(false))
      BackgroundUpload.addListener('cancelled', uploadId, () => setUploading(false))
      BackgroundUpload.addListener('completed', uploadId, (data: CompletedData) => {
        setUploading(false)
        if (data.responseCode === 201) {
          return AppNavigation.popToRoot(componentId)
        } else {
          showError('Something went wrong please try again later')
        }
      })
    } catch {
      setUploading(false)
    }
  }, [description, selectedImage, authorized, participation])

  const onPressSubmit = useCallback(() => {
    switch (step) {
      case CreateCheckinStep.description:
        if (description.length) {
          submit()
        } else {
          showError('Please enter a valid description')
        }
        break

      case CreateCheckinStep.media:
        if (selectedImage !== null) {
          openNextStep(CreateCheckinStep.description)
        } else {
          showError('Please select a picture')
        }
        break
    }
  }, [description, selectedImage, step, openNextStep, submit])

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardView modal enabled={keyboardViewEnabled}>
        {!uploading && (
          <>
            <View style={styles.content}>
              {step === CreateCheckinStep.description && (
                <Field
                  label='Description'
                  placeholder='Enter description'
                  value={description}
                  onChangeText={setDescription}
                />
              )}
              {step === CreateCheckinStep.media && <Upload {...{ selectedImage, setSelectedImage }} />}
            </View>
            <View style={styles.buttonContainer}>
              <Button onPress={onPressSubmit} title='Next' />
            </View>
          </>
        )}
        {uploading && (
          <View style={styles.uploadingContainer}>
            <Text style={styles.progress}>{progress}%</Text>
            <Text style={styles.uploading}>Uploading...</Text>
          </View>
        )}
      </KeyboardView>
    </SafeAreaView>
  )
}

CreateCheckinScreen.options = (passProps: CreateCheckinScreenPassProps): Options => ({
  topBar: {
    title: {
      text: 'Create checkin',
    },
    rightButtons: [{ id: CANCEL_BUTTON_ID, text: 'Cancel' }],
    ...(passProps.step !== CreateCheckinStep.media &&
      Platform.select({
        ios: {
          leftButtons: [{ id: BACK_BUTTON_ID, text: 'Back' }],
        },
      })),
  },
})

export default CreateCheckinScreen
