import { StyleSheet } from 'react-native'

import { FontFamily } from '../../constants/fonts'
import colors from '../../colors'

export default StyleSheet.create({
  countContainer: {
    flex: 1,
  },

  count: {
    fontSize: 18,
    color: colors.black,
    fontFamily: FontFamily.medium,
  },

  countDescription: {
    fontSize: 14,
    color: colors.black,
    marginTop: 2,
    fontFamily: FontFamily.regular,
  },

  light: {
    color: colors.white,
  },
})
