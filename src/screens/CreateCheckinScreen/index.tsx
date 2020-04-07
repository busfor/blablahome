import React, { useCallback, useMemo, useState } from 'react'
import { Alert, Platform, SafeAreaView, Text, View } from 'react-native'
import BackgroundUpload, { CompletedData, MultipartUploadOptions, ProgressData } from 'react-native-background-upload'
import { AccessToken } from 'react-native-fbsdk'
import { Image as ImagePickerImage } from 'react-native-image-crop-picker'
import { Layout, Options } from 'react-native-navigation'
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { useSelector } from 'react-redux'

import { Screens } from '..'
import { endpoints } from '../../Api'
import { Button, KeyboardView } from '../../component'
import { AppNavigation, AppNavigationProps } from '../../navigation'
import { RootState } from '../../redux/reducers'

import Field from './components/Field'
import Participations from './components/Participations'
import Upload from './components/Upload'
import styles from './styles'
import { CreateCheckinScreenPassProps, CreateCheckinStep } from './types'

const BACK_BUTTON_ID = 'back_button'
const CANCEL_BUTTON_ID = 'cancel_button'

const showError = (message: string) => Alert.alert('Error', message)

const CreateCheckinScreen = ({
  componentId,
  step,
  participation: propParticipation,
  description: propDescription = '',
  selectedImage: propSelectedImage,
  fetchProgress,
  componentIdArray,
}: AppNavigationProps & CreateCheckinScreenPassProps) => {
  useNavigationButtonPress(() => AppNavigation.dismissModal(componentId), componentId, BACK_BUTTON_ID)
  useNavigationButtonPress(() => AppNavigation.dismissModal(componentId), componentId, CANCEL_BUTTON_ID)

  const [participation, setParticipation] = useState(propParticipation)
  const [description, setDescription] = useState(propDescription || '')
  const [selectedImage, setSelectedImage] = useState<ImagePickerImage | null>(propSelectedImage || null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  const authorized = useSelector((state: RootState) => Boolean(state.auth.user.id))

  const keyboardViewEnabled = useMemo(() => step === CreateCheckinStep.description, [step])

  const componentIds = useMemo(() => [...(componentIdArray || []), componentId], [componentIdArray, componentId])

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
            fetchProgress,
            componentIdArray: componentIds,
          },
        },
      }
      AppNavigation.push(componentId, layout)
    },
    [componentId, description, selectedImage, fetchProgress, participation]
  )

  const submit = useCallback(async () => {
    if (!authorized || selectedImage == null) {
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
        field: 'photo',
        type: 'multipart',
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
        parameters: {
          message: description,
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
          if (fetchProgress) {
            fetchProgress()
          }
          componentIds.reverse().forEach((id) => {
            AppNavigation.dismissModal(id)
          })
          return
        } else {
          showError('Something went wrong please try again later')
        }
      })
    } catch {
      setUploading(false)
    }
  }, [description, selectedImage, authorized, participation, fetchProgress])

  const onPressSubmit = useCallback(() => {
    switch (step) {
      case CreateCheckinStep.media:
        if (selectedImage !== null) {
          openNextStep(CreateCheckinStep.description)
        } else {
          showError('Please select a picture')
        }
        break

      case CreateCheckinStep.description:
        submit()
        break
    }
  }, [description, selectedImage, step, openNextStep, submit])

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardView modal enabled={keyboardViewEnabled}>
        {!uploading && (
          <>
            <View style={styles.content}>
              {step === CreateCheckinStep.participation && (
                <Participations
                  openNextStep={openNextStep}
                  setParticipation={setParticipation}
                  componentId={componentId}
                />
              )}
              {step === CreateCheckinStep.media && <Upload {...{ selectedImage, setSelectedImage }} />}
              {step === CreateCheckinStep.description && (
                <Field
                  label='Description'
                  placeholder='Enter description'
                  value={description}
                  onChangeText={setDescription}
                />
              )}
            </View>
            {step !== CreateCheckinStep.participation && (
              <View style={styles.buttonContainer}>
                <Button
                  onPress={onPressSubmit}
                  title={step === CreateCheckinStep.description && description.length === 0 ? 'Skip' : 'Next'}
                />
              </View>
            )}
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
