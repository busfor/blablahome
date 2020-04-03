import React, { useCallback, useState } from 'react'
import { SafeAreaView, View, Text, Platform, Alert } from 'react-native'
import { Options, Layout } from 'react-native-navigation'
import { useNavigationButtonPress } from 'react-native-navigation-hooks/dist'

import { AppNavigationProps, AppNavigation } from '../../navigation'
import { KeyboardView, Button } from '../../component'
import { Screens } from '..'

import styles from './styles'
import { CreateActivityScreenPassProps, CreateActivityStep } from './types'
import Field from './components/Field'

const BACK_BUTTON_ID = 'back_button'
const CANCEL_BUTTON_ID = 'cancel_button'

const showError = (message: string) => Alert.alert('Error', message)

const CreateActivityScreen = ({
  componentId,
  step,
  title: propTitle,
  description: propDescription,
}: AppNavigationProps & CreateActivityScreenPassProps) => {
  useNavigationButtonPress(() => AppNavigation.dismissModal(componentId), componentId, BACK_BUTTON_ID)
  useNavigationButtonPress(() => AppNavigation.dismissAllModals(), componentId, CANCEL_BUTTON_ID)

  const [title, setTitle] = useState(propTitle || '')
  const [description, setDescription] = useState(propDescription || '')

  const openNextStep = useCallback(
    (nextStep: CreateActivityStep) => {
      const layout: Layout<CreateActivityScreenPassProps> = {
        component: {
          name: Screens.createActivityScreen,
          passProps: {
            step: nextStep,
            title,
            description,
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
    [componentId, title, description]
  )

  const onPressSubmit = useCallback(() => {
    switch (step) {
      case CreateActivityStep.description:
        if (description.length) {
          openNextStep(CreateActivityStep.description)
        } else {
          showError('Please enter a valid description')
        }
        break

      case CreateActivityStep.media:
        openNextStep(CreateActivityStep.frequency)
        break

      case CreateActivityStep.frequency:
        alert('done!')
        AppNavigation.dismissAllModals()
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
  }, [title, description, step, openNextStep])
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardView>
        <View style={styles.content}>
          {step === CreateActivityStep.title && <Field label='Title' value={title} onChangeText={setTitle} />}
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={onPressSubmit} title='Next' />
        </View>
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
