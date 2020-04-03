import { StyleSheet } from 'react-native'

import { FontFamily } from '../../constants/fonts'
import colors from '../../colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 1,
  },

  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  uploadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  progress: {
    fontFamily: FontFamily.medium,
    fontSize: 48,
    color: colors.black,
  },

  uploading: {
    fontFamily: FontFamily.regular,
    fontSize: 24,
  },
})
