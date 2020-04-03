import { Image as ImagePickerImage } from 'react-native-image-crop-picker'

export enum CreateActivityStep {
  title,
  description,
  media,
  frequency,
}

export interface CreateActivityScreenPassProps {
  step: CreateActivityStep
  title?: string
  description?: string
  selectedImage?: ImagePickerImage | null
  selectedFrequency?: number | null
}
