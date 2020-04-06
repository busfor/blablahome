import { Image as ImagePickerImage } from 'react-native-image-crop-picker'

import { Participation } from '../../AppPropTypes'

export enum CreateCheckinStep {
  description,
  media,
}

export interface CreateCheckinScreenPassProps {
  step: CreateCheckinStep
  title?: string
  description?: string
  selectedImage?: ImagePickerImage | null
  participation: Participation
}
