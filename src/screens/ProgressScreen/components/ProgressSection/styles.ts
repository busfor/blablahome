import { StyleSheet } from 'react-native'

import { FontFamily } from '../../../../constants/fonts'
import colors from '../../../../colors'

export default StyleSheet.create({
  sectionHeader: {
    fontSize: 14,
    fontFamily: FontFamily.regular,
    letterSpacing: 2,
    color: colors.grayText,
    marginBottom: 10,
  },

  section: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
})
