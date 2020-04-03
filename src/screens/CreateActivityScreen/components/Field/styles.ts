import { StyleSheet } from 'react-native'

import { FontFamily } from '../../../../constants/fonts'
import colors from '../../../../colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  label: {
    fontFamily: FontFamily.medium,
    fontSize: 16,
    color: colors.black,
    marginBottom: 12,
  },

  textInput: {
    flex: 1,
    fontFamily: FontFamily.medium,
    fontSize: 24,
    color: colors.black,
  },
})
