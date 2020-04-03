import React, { useCallback, useState, useMemo } from 'react'
import { SafeAreaView, View, Platform, Alert } from 'react-native'
import { Options, Layout } from 'react-native-navigation'
import { useNavigationButtonPress } from 'react-native-navigation-hooks'
import { Image as ImagePickerImage } from 'react-native-image-crop-picker'
import { useSelector } from 'react-redux'
import BackgroundUpload, { MultipartUploadOptions } from 'react-native-background-upload'

import { AppNavigationProps, AppNavigation } from '../../navigation'
import { KeyboardView, Button } from '../../component'
import { Screens } from '..'
import { RootState } from '../../redux/reducers'

import styles from './styles'
import { CreateActivityScreenPassProps, CreateActivityStep } from './types'
import Field from './components/Field'
import Upload from './components/Upload'
import Frequency from './components/Frequency'

const BACK_BUTTON_ID = 'back_button'
const CANCEL_BUTTON_ID = 'cancel_button'

const showError = (message: string) => Alert.alert('Error', message)

const CreateActivityScreen = ({
  componentId,
  step,
  title: propTitle,
  description: propDescription,
  selectedImage: propSelectedImage,
  selectedFrequency: propSelectedFrequency,
}: AppNavigationProps & CreateActivityScreenPassProps) => {
  useNavigationButtonPress(() => AppNavigation.dismissModal(componentId), componentId, BACK_BUTTON_ID)
  useNavigationButtonPress(() => AppNavigation.dismissAllModals(), componentId, CANCEL_BUTTON_ID)

  const [title, setTitle] = useState(propTitle || '')
  const [description, setDescription] = useState(propDescription || '')
  const [selectedImage, setSelectedImage] = useState<ImagePickerImage | null>(propSelectedImage || null)
  const [selectedFrequency, setSelectedFrequency] = useState<number | null>(propSelectedFrequency || null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  const authToken = useSelector((state: RootState) => state.auth.token)

  const keyboardViewEnabled = useMemo(
    () => step === CreateActivityStep.title || step === CreateActivityStep.description,
    [step]
  )

  const openNextStep = useCallback(
    (nextStep: CreateActivityStep) => {
      const layout: Layout<CreateActivityScreenPassProps> = {
        component: {
          name: Screens.createActivityScreen,
          passProps: {
            step: nextStep,
            title,
            description,
            selectedImage,
            selectedFrequency,
          },
        },
      }
      if (Platform.OS === 'ios') {
        AppNavigation.showModal({
          stack: {
            children: [layout],
          },
        })
      } else {
        AppNavigation.push(componentId, layout)
      }
    },
    [componentId, title, description, selectedImage, selectedFrequency]
  )

  const submit = useCallback(async () => {
    if (
      authToken == null ||
      !title.length ||
      !description.length ||
      selectedImage == null ||
      selectedFrequency == null
    ) {
      return
    }
    const path = Platform.OS === 'ios' ? selectedImage.path : selectedImage.path.replace('file://', '')

    const options: MultipartUploadOptions = {
      url: 'https://blablahome.lazureykis.dev/api/activities',
      path,
      method: 'POST',
      field: 'cover',
      type: 'multipart',
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${authToken}`,
      },
      parameters: {
        name: title,
        description,
        days: selectedFrequency,
      },
      notification: {
        enabled: false,
      },
    }

    try {
      setUploading(true)
      const uploadId = await BackgroundUpload.startUpload(options)
      BackgroundUpload.addListener('progress', uploadId, (data) => setProgress(data.progress))
      BackgroundUpload.addListener('error', uploadId, () => setUploading(false))
      BackgroundUpload.addListener('cancelled', uploadId, () => setUploading(false))
      BackgroundUpload.addListener('completed', uploadId, (data) => {
        // console.log('Completed!', data)
        AppNavigation.dismissAllModals()
      })
    } catch {
      setUploading(false)
    }
  }, [title, description, selectedImage, selectedFrequency, authToken])

  const onPressSubmit = useCallback(() => {
    switch (step) {
      case CreateActivityStep.description:
        if (description.length) {
          openNextStep(CreateActivityStep.media)
        } else {
          showError('Please enter a valid description')
        }
        break

      case CreateActivityStep.media:
        if (selectedImage !== null) {
          openNextStep(CreateActivityStep.frequency)
        } else {
          showError('Please select a picture')
        }
        break

      case CreateActivityStep.frequency:
        if (selectedFrequency !== null) {
          submit()
        } else {
          showError('Please select a frequency')
        }
        break

      case CreateActivityStep.title:
      default:
        if (title.length) {
          openNextStep(CreateActivityStep.description)
        } else {
          showError('Please enter a valid title')
        }
        break
    }
  }, [title, description, selectedImage, selectedFrequency, step, openNextStep, submit])
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardView modal enabled={keyboardViewEnabled}>
        {!progress && (
          <>
            <View style={styles.content}>
              {step === CreateActivityStep.title && (
                <Field label='Title' placeholder='Enter title' value={title} onChangeText={setTitle} />
              )}
              {step === CreateActivityStep.description && (
                <Field
                  label='Description'
                  placeholder='Enter description'
                  value={description}
                  onChangeText={setDescription}
                />
              )}
              {step === CreateActivityStep.media && <Upload {...{ selectedImage, setSelectedImage }} />}
              {step === CreateActivityStep.frequency && <Frequency {...{ selectedFrequency, setSelectedFrequency }} />}
            </View>
            <View style={styles.buttonContainer}>
              <Button onPress={onPressSubmit} title='Next' />
            </View>
          </>
        )}
      </KeyboardView>
    </SafeAreaView>
  )
}

CreateActivityScreen.options = (passProps: CreateActivityScreenPassProps): Options => ({
  topBar: {
    title: {
      text: 'Create an activity',
    },
    rightButtons: [{ id: CANCEL_BUTTON_ID, text: 'Cancel' }],
    ...(passProps.step !== CreateActivityStep.title &&
      Platform.select({
        ios: {
          leftButtons: [{ id: BACK_BUTTON_ID, text: 'Back' }],
        },
      })),
  },
})

export default CreateActivityScreen
